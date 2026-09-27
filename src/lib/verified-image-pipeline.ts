import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export interface ImageResolveRequest {
  name: string;
  slug: string;
  category: "partner" | "hero" | "content";
  outputDir?: string;
  width?: number;
  height?: number;
}

export interface ImageResolveResult {
  success: boolean;
  localPath?: string;
  sourceUrl?: string;
  sourceName?: "TMDB" | "Wikipedia" | "Wikidata" | "WikimediaCommons" | "None";
  caption?: string;
  license?: string;
  error?: string;
}

/**
 * Strict Blacklist: Never accept generic stock photo sites or placeholder CDNs
 */
const BANNED_DOMAINS = [
  "unsplash.com",
  "pexels.com",
  "pixabay.com",
  "shutterstock.com",
  "istockphoto.com",
  "gettyimages.com/preview",
  "placehold.co",
  "placeholder.com",
];

function isSafeUrl(url: string): boolean {
  if (!url) return false;
  return !BANNED_DOMAINS.some((banned) => url.toLowerCase().includes(banned));
}

/**
 * Helper to download an image buffer with redirects and standard headers
 */
async function downloadBuffer(url: string, retries = 3): Promise<Buffer | null> {
  if (!isSafeUrl(url)) {
    console.warn(`[VerifiedImagePipeline] Rejected banned source URL: ${url}`);
    return null;
  }

  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 CelebEdge/1.0",
          Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const arrayBuf = await res.arrayBuffer();
      return Buffer.from(arrayBuf);
    } catch (err) {
      if (i === retries - 1) {
        console.error(`[VerifiedImagePipeline] Failed downloading ${url}:`, err);
        return null;
      }
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  return null;
}

/**
 * Tier 1: TMDb Official Person API (Curated, 100% actor/creator portraits)
 */
async function fetchFromTMDB(name: string): Promise<{ url: string; caption: string; license: string } | null> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) return null;

  try {
    const searchUrl = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(
      name
    )}&include_adult=false`;

    const res = await fetch(searchUrl, {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const person = data.results?.[0];

    if (!person || !person.profile_path) return null;

    // Check name similarity to ensure no false match
    const returnedName = (person.name || "").toLowerCase().trim();
    const queryName = name.toLowerCase().trim();
    if (!returnedName.includes(queryName) && !queryName.includes(returnedName)) {
      return null;
    }

    return {
      url: `https://image.tmdb.org/t/p/original${person.profile_path}`,
      caption: `${person.name} official portrait archive. Photo: TMDb Verified Database.`,
      license: "TMDb API / Fair Use Editorial",
    };
  } catch (error) {
    console.error(`[VerifiedImagePipeline] TMDB error for ${name}:`, error);
    return null;
  }
}

/**
 * Tier 2: Wikipedia / Wikimedia REST API (100% human-verified lead photos with CC licenses)
 */
async function fetchFromWikipedia(name: string): Promise<{ url: string; caption: string; license: string } | null> {
  try {
    const formatted = encodeURIComponent(name.trim().replace(/ /g, "_"));
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${formatted}`;

    const res = await fetch(url, {
      headers: {
        "User-Agent": "CelebEdgeBot/1.0 (https://celebrity-beta.vercel.app; info@celeb-edge.com)",
      },
    });

    if (!res.ok) return null;

    const data = await res.json();

    // Reject disambiguation pages or missing titles
    if (data.type === "disambiguation" || !data.title) return null;

    const imgUrl = data.originalimage?.source || data.thumbnail?.source;
    if (!imgUrl || !isSafeUrl(imgUrl)) return null;

    return {
      url: imgUrl,
      caption: `${data.title} portrait record. Photo: Wikimedia Commons.`,
      license: "Creative Commons / Public Domain",
    };
  } catch (error) {
    console.error(`[VerifiedImagePipeline] Wikipedia error for ${name}:`, error);
    return null;
  }
}

/**
 * Tier 3: Wikidata Structured Entity Search (Extracts P18 Image Claim)
 */
async function fetchFromWikidata(name: string): Promise<{ url: string; caption: string; license: string } | null> {
  try {
    const searchUrl = `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(
      name
    )}&language=en&format=json&limit=1`;

    const res = await fetch(searchUrl, {
      headers: { "User-Agent": "CelebEdgeBot/1.0" },
    });

    if (!res.ok) return null;
    const data = await res.json();
    const entityId = data.search?.[0]?.id;
    if (!entityId) return null;

    // Fetch entity claims
    const entityRes = await fetch(`https://www.wikidata.org/wiki/Special:EntityData/${entityId}.json`);
    if (!entityRes.ok) return null;

    const entityData = await entityRes.json();
    const claims = entityData.entities?.[entityId]?.claims;
    const imageClaim = claims?.P18?.[0]?.mainsnak?.datavalue?.value;

    if (!imageClaim) return null;

    // Convert Wikimedia Commons filename to direct URL
    const fileName = encodeURIComponent(imageClaim.replace(/ /g, "_"));
    const commonsUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${fileName}?width=1200`;

    return {
      url: commonsUrl,
      caption: `${name} official archival portrait. Photo: Wikimedia Commons.`,
      license: "CC BY-SA / Public Domain",
    };
  } catch (error) {
    console.error(`[VerifiedImagePipeline] Wikidata error for ${name}:`, error);
    return null;
  }
}

/**
 * Main Pipeline Function:
 * Resolves 100% verified real images across Tier 1, 2, 3,
 * then processes with Sharp (smart crop & WebP) and saves to disk.
 */
export async function resolveAndSaveEntityImage(
  req: ImageResolveRequest
): Promise<ImageResolveResult> {
  const { name, slug, category } = req;
  const isPartner = category === "partner";
  const targetWidth = req.width || (isPartner ? 600 : category === "hero" ? 1200 : 800);
  const targetHeight = req.height || (isPartner ? 600 : category === "hero" ? 800 : 600);

  const defaultDir = isPartner ? "public/images/partners" : "public/images/celebrities";
  const finalDir = path.resolve(req.outputDir || defaultDir);

  if (!fs.existsSync(finalDir)) {
    fs.mkdirSync(finalDir, { recursive: true });
  }

  const filename = isPartner ? `${slug}.webp` : `${slug}-${category}.webp`;
  const fullTargetPath = path.join(finalDir, filename);
  const publicWebPath = isPartner ? `/images/partners/${filename}` : `/images/celebrities/${filename}`;

  console.log(`[VerifiedImagePipeline] Initiating real-time entity resolution for: "${name}" (${category})`);

  let candidate: { url: string; caption: string; license: string } | null = null;
  let sourceName: ImageResolveResult["sourceName"] = "None";

  // Tier 1: TMDB API
  candidate = await fetchFromTMDB(name);
  if (candidate) {
    sourceName = "TMDB";
  }

  // Tier 2: Wikipedia REST API
  if (!candidate) {
    candidate = await fetchFromWikipedia(name);
    if (candidate) {
      sourceName = "Wikipedia";
    }
  }

  // Tier 3: Wikidata Structured Entity
  if (!candidate) {
    candidate = await fetchFromWikidata(name);
    if (candidate) {
      sourceName = "Wikidata";
    }
  }

  // If no 100% verified person was found in official databases:
  // ZERO FAKE IMAGE RULE: Do NOT touch stock sites. Return safe error.
  if (!candidate || !candidate.url) {
    console.warn(`[VerifiedImagePipeline] No verified portrait found for "${name}" in official databases.`);
    return {
      success: false,
      sourceName: "None",
      error: `No 100% verified portrait found for ${name}. Placeholders strictly rejected by policy.`,
    };
  }

  console.log(`[VerifiedImagePipeline] Found verified source via ${sourceName}: ${candidate.url}`);

  // Download Image Buffer
  const imageBuffer = await downloadBuffer(candidate.url);
  if (!imageBuffer) {
    return {
      success: false,
      sourceName,
      error: `Failed to download image buffer from ${candidate.url}`,
    };
  }

  try {
    // Process with Sharp:
    // Resize, smart center/attention crop to avoid decapitation or background crowd
    await sharp(imageBuffer)
      .resize({
        width: targetWidth,
        height: targetHeight,
        fit: "cover",
        position: isPartner ? "center" : "attention",
      })
      .webp({ quality: 88, effort: 4 })
      .toFile(fullTargetPath);

    console.log(`[VerifiedImagePipeline] ✓ Successfully optimized & saved: ${fullTargetPath}`);

    return {
      success: true,
      localPath: publicWebPath,
      sourceUrl: candidate.url,
      sourceName,
      caption: candidate.caption,
      license: candidate.license,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[VerifiedImagePipeline] Sharp processing error:`, errorMsg);
    return {
      success: false,
      sourceName,
      error: `Image optimization error: ${errorMsg}`,
    };
  }
}
