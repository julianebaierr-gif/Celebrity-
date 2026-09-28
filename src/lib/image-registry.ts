import fs from "node:fs";
import path from "node:path";

export interface UsedImageRecord {
  filePath: string;
  entity: string;
  placement:
    | "profile_hero"
    | "profile_content"
    | "partner_card"
    | "blog_cover"
    | "blog_content_1"
    | "blog_content_2"
    | "editorial_feature";
  pageSlug: string;
  assignedAt: string;
  sourceUrl?: string;
}

interface ImageRegistryData {
  version: string;
  lastUpdated: string;
  totalUniqueImages: number;
  registry: Record<string, UsedImageRecord>;
}

const REGISTRY_PATH = path.resolve(process.cwd(), "src/data/used-images-registry.json");

/**
 * Loads the global used images registry from disk
 */
export function getImagesRegistry(): ImageRegistryData {
  try {
    if (fs.existsSync(REGISTRY_PATH)) {
      const raw = fs.readFileSync(REGISTRY_PATH, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("[ImageRegistry] Error reading registry file:", err);
  }
  return {
    version: "1.0.0",
    lastUpdated: new Date().toISOString(),
    totalUniqueImages: 0,
    registry: {},
  };
}

/**
 * Saves the registry atomically to disk
 */
export function saveImagesRegistry(data: ImageRegistryData): void {
  try {
    data.lastUpdated = new Date().toISOString();
    data.totalUniqueImages = Object.keys(data.registry).length;
    const dir = path.dirname(REGISTRY_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("[ImageRegistry] Error saving registry file:", err);
  }
}

/**
 * Normalizes an image path or URL for comparison
 */
export function normalizeImagePath(p: string): string {
  if (!p) return "";
  return p.trim().replace(/\\/g, "/").toLowerCase();
}

/**
 * Checks if an image file path or source URL is already used anywhere on the site
 */
export function isImageRegistered(pathOrUrl: string): boolean {
  if (!pathOrUrl) return false;
  const normalized = normalizeImagePath(pathOrUrl);
  const data = getImagesRegistry();

  for (const [key, record] of Object.entries(data.registry)) {
    if (normalizeImagePath(key) === normalized || normalizeImagePath(record.filePath) === normalized) {
      return true;
    }
    if (record.sourceUrl && normalizeImagePath(record.sourceUrl) === normalized) {
      return true;
    }
  }
  return false;
}

/**
 * Registers an image allocation permanently to prevent any future reuse
 */
export function registerImage(record: UsedImageRecord): void {
  const data = getImagesRegistry();
  const normalizedKey = normalizeImagePath(record.filePath);

  data.registry[normalizedKey] = {
    ...record,
    filePath: record.filePath,
    assignedAt: record.assignedAt || new Date().toISOString(),
  };

  saveImagesRegistry(data);
  console.log(`[ImageRegistry] ✓ Registered unique image: ${record.filePath} for ${record.entity} (${record.placement})`);
}

/**
 * Unregisters an image (e.g., when a post or profile is removed)
 */
export function unregisterImage(filePath: string): void {
  const data = getImagesRegistry();
  const normalizedKey = normalizeImagePath(filePath);

  if (data.registry[normalizedKey]) {
    delete data.registry[normalizedKey];
    saveImagesRegistry(data);
    console.log(`[ImageRegistry] Unregistered image: ${filePath}`);
  }
}

/**
 * Returns the first candidate from a list that is NOT already registered
 */
export function pickFirstUnused(candidates: string[]): string | null {
  for (const c of candidates) {
    if (!isImageRegistered(c)) {
      return c;
    }
  }
  return null;
}
