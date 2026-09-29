import fs from "node:fs";
import path from "node:path";

export interface LockedKeywordEntry {
  keyword: string;
  slug: string;
  name: string;
  category: string;
  canonicalUrl: string;
  publishedAt: string;
  associatedTags: string[];
}

export interface AntiCannibalizationRegistry {
  description: string;
  totalLocked: number;
  lastUpdated: string;
  lockedKeywords: LockedKeywordEntry[];
  bannedKeywordSet: string[];
}

const REGISTRY_PATH = path.resolve(process.cwd(), "src/data/used-keywords-registry.json");
const SHEET1_CSV_PATH = path.resolve(process.cwd(), "src/data/sheet1-populated.csv");
const SHEET1_TSV_PATH = path.resolve(process.cwd(), "src/data/sheet1-pasteable.tsv");

/**
 * Loads the active anti-cannibalization registry.
 */
export function getUsedKeywordsRegistry(): AntiCannibalizationRegistry {
  try {
    if (fs.existsSync(REGISTRY_PATH)) {
      const raw = fs.readFileSync(REGISTRY_PATH, "utf-8");
      return JSON.parse(raw);
    }
  } catch (error) {
    console.error("[AntiCannibalization] Error reading registry file:", error);
  }

  return {
    description: "CelebEdge Master Anti-Cannibalization Registry",
    totalLocked: 0,
    lastUpdated: new Date().toISOString(),
    lockedKeywords: [],
    bannedKeywordSet: [],
  };
}

/**
 * Checks whether a keyword, celebrity name, or slug has already been published.
 */
export function isKeywordOrEntityPublished(query: string): {
  isPublished: boolean;
  reason?: string;
  existingEntry?: LockedKeywordEntry;
} {
  if (!query || typeof query !== "string") {
    return { isPublished: false };
  }

  const normalized = query.toLowerCase().trim();
  const slugified = normalized.replace(/[^a-z0-9]+/g, "-");
  const registry = getUsedKeywordsRegistry();

  // 1. Direct match on primary keyword, name, or slug
  const matchedEntry = registry.lockedKeywords.find((item) => {
    return (
      item.keyword === normalized ||
      item.name.toLowerCase() === normalized ||
      item.slug === slugified ||
      item.slug === normalized
    );
  });

  if (matchedEntry) {
    return {
      isPublished: true,
      reason: `Primary keyword or entity "${query}" is already published at ${matchedEntry.canonicalUrl} (Slug: ${matchedEntry.slug}).`,
      existingEntry: matchedEntry,
    };
  }

  // 2. High-confidence containment match (e.g. searching "tim curry net worth" when "tim curry" is locked)
  const containmentEntry = registry.lockedKeywords.find((item) => {
    const itemKw = item.keyword.toLowerCase();
    const itemName = item.name.toLowerCase();
    return (
      (normalized.length > 5 && (normalized.includes(itemKw) || normalized.includes(itemName))) ||
      (itemKw.length > 5 && (itemKw.includes(normalized) || itemName.includes(normalized)))
    );
  });

  if (containmentEntry) {
    return {
      isPublished: true,
      reason: `Query "${query}" conflicts with already-published entity "${containmentEntry.name}" (${containmentEntry.canonicalUrl}).`,
      existingEntry: containmentEntry,
    };
  }

  // 3. Check banned keyword set
  if (registry.bannedKeywordSet.includes(normalized)) {
    return {
      isPublished: true,
      reason: `Keyword "${query}" is present in the protected keyword/tag set.`,
    };
  }

  return { isPublished: false };
}

/**
 * Registers a newly published celebrity into both the JSON registry and the Sheet1 CSV/TSV files.
 */
export function registerPublishedProfile(entry: {
  keyword: string;
  slug: string;
  name: string;
  category: string;
  canonicalUrl: string;
  publishedDate: string;
  tags: string[];
}): void {
  try {
    const registry = getUsedKeywordsRegistry();
    const normalizedKw = entry.keyword.toLowerCase().trim();

    // Check if already registered
    const exists = registry.lockedKeywords.some(
      (k) => k.slug === entry.slug || k.keyword === normalizedKw
    );

    if (exists) {
      console.log(`[AntiCannibalization] Entry "${entry.name}" (${entry.slug}) is already registered.`);
      return;
    }

    const newLockedEntry: LockedKeywordEntry = {
      keyword: normalizedKw,
      slug: entry.slug,
      name: entry.name,
      category: entry.category,
      canonicalUrl: entry.canonicalUrl,
      publishedAt: entry.publishedDate,
      associatedTags: entry.tags,
    };

    registry.lockedKeywords.push(newLockedEntry);
    registry.totalLocked = registry.lockedKeywords.length;
    registry.lastUpdated = new Date().toISOString();

    const tagSet = new Set(registry.bannedKeywordSet);
    tagSet.add(normalizedKw);
    tagSet.add(entry.name.toLowerCase().trim());
    entry.tags.forEach((t) => tagSet.add(t.toLowerCase().trim()));
    registry.bannedKeywordSet = Array.from(tagSet);

    // Save updated JSON registry
    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2), "utf-8");

    // Append to sheet1-populated.csv
    const tagsFormatted = entry.tags.slice(0, 4).join(" | ");
    const csvLine = `\n"${entry.keyword.replace(/"/g, '""')}","${entry.category.replace(/"/g, '""')}","${tagsFormatted.replace(/"/g, '""')}","Published","${entry.canonicalUrl}","${entry.publishedDate}"`;
    fs.appendFileSync(SHEET1_CSV_PATH, csvLine, "utf-8");

    // Append to sheet1-pasteable.tsv
    const tsvLine = `\n${entry.keyword}\t${entry.category}\t${tagsFormatted}\tPublished\t${entry.canonicalUrl}\t${entry.publishedDate}`;
    fs.appendFileSync(SHEET1_TSV_PATH, tsvLine, "utf-8");

    console.log(`[AntiCannibalization] Successfully locked "${entry.name}" (${entry.slug}). Total locked: ${registry.totalLocked}`);
  } catch (error) {
    console.error("[AntiCannibalization] Error updating registry:", error);
  }
}
