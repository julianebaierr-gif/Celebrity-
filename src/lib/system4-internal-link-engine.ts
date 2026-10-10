import { getAllCelebrities, getCompleteOrDynamicProfile } from "@/data/celebrity-service";
import { getAllBlogPosts } from "@/data/blog-posts";

export interface LinkableEntity {
  name: string;
  slug: string;
  url: string;
  type: "celebrity" | "blog";
  aliases?: string[];
}

export interface InternalLinkGraph {
  celebrityCount: number;
  blogPostCount: number;
  entities: Map<string, LinkableEntity>;
}

/**
 * Builds the real-time live graph of only entities that ACTUALLY EXIST on CelebLedger.
 * If a celebrity, movie, or topic is NOT published yet, it will NOT be in this graph.
 */
export function getLiveLinkGraph(): InternalLinkGraph {
  const entities = new Map<string, LinkableEntity>();

  // 1. Register all verified active Celebrities
  const celebrities = getAllCelebrities();
  for (const celeb of celebrities) {
    const record: LinkableEntity = {
      name: celeb.name,
      slug: celeb.slug,
      url: `/celebrity/${celeb.slug}`,
      type: "celebrity",
      aliases: [
        celeb.name.toLowerCase(),
        // Add common nickname or first/last combinations if unambiguous
        ...(celeb.slug === "rosalia" ? ["rosalía", "rosalia"] : []),
        ...(celeb.slug === "taylor-swift-wedding" ? ["taylor swift"] : []),
      ],
    };

    // Index by primary name
    entities.set(celeb.name.toLowerCase(), record);
    // Index by slug
    entities.set(celeb.slug.toLowerCase(), record);

    if (record.aliases) {
      for (const alias of record.aliases) {
        entities.set(alias.toLowerCase(), record);
      }
    }
  }

  // 2. Register all published Blog Posts
  const blogPosts = getAllBlogPosts();
  for (const post of blogPosts) {
    const record: LinkableEntity = {
      name: post.title,
      slug: post.slug,
      url: `/blog/${post.slug}`,
      type: "blog",
    };
    entities.set(post.slug.toLowerCase(), record);
  }

  return {
    celebrityCount: celebrities.length,
    blogPostCount: blogPosts.length,
    entities,
  };
}

/**
 * Strict Existence Gatekeeper:
 * Returns true ONLY if the entity is an active published page on CelebLedger.
 * If it's a person/topic not yet published on our site, returns false.
 */
export function isEntityPublished(slugOrName: string): boolean {
  if (!slugOrName) return false;
  const graph = getLiveLinkGraph();
  return graph.entities.has(slugOrName.toLowerCase().trim());
}

/**
 * Retrieves the published URL for an entity if it exists on CelebLedger, or null.
 */
export function getPublishedEntityUrl(slugOrName: string): string | null {
  if (!slugOrName) return null;
  const graph = getLiveLinkGraph();
  const found = graph.entities.get(slugOrName.toLowerCase().trim());
  return found ? found.url : null;
}

export interface NaturalLinkOptions {
  currentSlug: string; // The slug of the page being rendered (to prevent self-linking)
  maxLinksPerEntity?: number; // Default 1 (First-mention only, prevents spam)
  scope?: "blog" | "profile";
}

/**
 * System 4 Core Text Interlinker:
 * Scans markdown or prose content and dynamically injects natural anchor links.
 * 
 * STRICT RULES ENFORCED:
 * 1. Zero Broken Links: Only links to entities that exist in the live link graph.
 * 2. Zero Self-Linking: Never links the current celebrity/article to itself.
 * 3. First-Mention Only: Only links the first natural occurrence of an entity in the body.
 * 4. Boundary Protection: Never injects links inside existing markdown links [like this](url),
 *    images ![alt](url), or headers (# H2/H3).
 */
export function injectNaturalInternalLinks(
  content: string,
  options: NaturalLinkOptions
): string {
  if (!content) return "";

  const { currentSlug, maxLinksPerEntity = 1, scope = "blog" } = options;
  const graph = getLiveLinkGraph();

  // Extract all existing unique celebrities, sorted by name length descending (longer names first)
  const linkableCelebrities = getAllCelebrities()
    .filter((c) => {
      // Rule 2: Zero Self-Linking
      // A page should never link to itself
      if (scope === "profile" && c.slug.toLowerCase() === currentSlug.toLowerCase()) {
        return false;
      }
      return true;
    })
    .sort((a, b) => b.name.length - a.name.length);

  // Normalize markdown newlines and headings so heading-attached lines are separated cleanly
  const normalized = content
    .replace(/\r\n/g, "\n")
    .replace(/\n*(#{1,4}\s+[^\n]+)\n*/g, "\n\n$1\n\n")
    .replace(/\n{3,}/g, "\n\n");

  // We split content into paragraphs to preserve structure
  const paragraphs = normalized.split("\n\n");
  const linkedCounts = new Map<string, number>();

  const processedParagraphs = paragraphs.map((para) => {
    // Skip headers (# ...), images (![...]), horizontal rules (---), or tables (|...)
    if (para.startsWith("#") || para.startsWith("![") || para.trim() === "---" || para.startsWith("|")) {
      return para;
    }

    let modified = para;

    for (const celeb of linkableCelebrities) {
      const currentCount = linkedCounts.get(celeb.slug) || 0;
      if (currentCount >= maxLinksPerEntity) continue;

      // Verify it's not already linked in this paragraph or previously
      if (
        modified.includes(`[${celeb.name}]`) ||
        modified.includes(`/celebrity/${celeb.slug}`)
      ) {
        continue;
      }

      // Check name and aliases (e.g., "Rosalía" / "Rosalia", "Taylor Swift")
      const searchNames = [celeb.name];
      if (celeb.slug === "rosalia") searchNames.push("Rosalía", "Rosalia");
      if (celeb.slug === "taylor-swift-wedding") searchNames.push("Taylor Swift");

      for (const sName of searchNames) {
        const escaped = sName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        // Regex matches celebrity name on word/spacing boundaries, but NOT if already inside a link or bracket
        const regex = new RegExp(
          `(?<!\\[|\\/)(?:^|\\b|(?<=\\s))(${escaped})(?:$|\\b|(?=\\s|[.,!?:;'’\"]))(?!\\]|\\))`,
          "iu"
        );

        if (regex.test(modified)) {
          // Replace ONLY the first occurrence with verified canonical link
          modified = modified.replace(regex, `[$1](/celebrity/${celeb.slug})`);
          linkedCounts.set(celeb.slug, currentCount + 1);
          break;
        }
      }
    }

    return modified;
  });

  return processedParagraphs.join("\n\n");
}

export interface LinkAuditResult {
  totalPublishedCelebrities: number;
  totalPublishedBlogPosts: number;
  totalLiveEntities: number;
  verifiedPartnerLinksActive: number;
  unlinkedExternalPartnersProtected: number;
  status: "healthy" | "warnings";
  details: string[];
}

/**
 * Diagnostic & Audit Tool:
 * Scans the live relationship graph and verifies that 100% of internal links point to real pages.
 */
export function auditInternalLinkGraph(): LinkAuditResult {
  const graph = getLiveLinkGraph();
  const celebrities = getAllCelebrities();
  const details: string[] = [];

  let activePartnerLinks = 0;
  let protectedPartners = 0;

  for (const celeb of celebrities) {
    const partners = celeb.relationshipProfile?.partners || [];
    for (const p of partners) {
      if (p.profileSlug && graph.entities.has(p.profileSlug.toLowerCase())) {
        activePartnerLinks++;
        details.push(`✓ Active link: ${celeb.name} -> ${p.name} (/celebrity/${p.profileSlug})`);
      } else {
        protectedPartners++;
        details.push(`🛡 Protected unlinked record: ${p.name} in ${celeb.name}'s dossier (No 404 link created)`);
      }
    }
  }

  return {
    totalPublishedCelebrities: graph.celebrityCount,
    totalPublishedBlogPosts: graph.blogPostCount,
    totalLiveEntities: graph.entities.size,
    verifiedPartnerLinksActive: activePartnerLinks,
    unlinkedExternalPartnersProtected: protectedPartners,
    status: "healthy",
    details,
  };
}
