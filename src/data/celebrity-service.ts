import { CELEBRITIES, CelebrityProfile } from "./celebrities";
import fs from "node:fs";
import path from "node:path";

function getCelebrityOverrides(): Record<string, Partial<CelebrityProfile>> {
  try {
    const storePath = path.resolve(process.cwd(), "src/data/updates-store.json");
    if (fs.existsSync(storePath)) {
      const data = JSON.parse(fs.readFileSync(storePath, "utf-8"));
      if (data.celebrityProfileOverrides && typeof data.celebrityProfileOverrides === "object") {
        return data.celebrityProfileOverrides;
      }
    }
  } catch {}
  return {};
}

function mergeProfileWithOverrides(
  profile: CelebrityProfile,
  overrides?: Partial<CelebrityProfile>
): CelebrityProfile {
  if (!overrides) return profile;
  return {
    ...profile,
    ...overrides,
    quickFacts: {
      ...profile.quickFacts,
      ...(overrides.quickFacts || {}),
    },
    relationshipProfile: {
      ...profile.relationshipProfile,
      ...(overrides.relationshipProfile || {}),
      partners: overrides.relationshipProfile?.partners || profile.relationshipProfile?.partners,
    },
    careerMilestones: overrides.careerMilestones || profile.careerMilestones,
    filmography: overrides.filmography || profile.filmography,
    metrics: overrides.metrics || profile.metrics,
    editorialMetadata: {
      ...profile.editorialMetadata,
      ...(overrides.editorialMetadata || {}),
    },
  };
}

export function getAllCelebrities(): CelebrityProfile[] {
  const overrides = getCelebrityOverrides();
  return CELEBRITIES.map((c) => mergeProfileWithOverrides(c, overrides[c.slug]));
}

export function getFeaturedCelebrity(): CelebrityProfile {
  return getAllCelebrities()[0];
}

export function getTrendingCelebrities(limit: number = 4): CelebrityProfile[] {
  return getAllCelebrities().slice(1, 1 + limit);
}

export function getCompleteOrDynamicProfile(slug: string): CelebrityProfile | undefined {
  return getAllCelebrities().find((c) => c.slug === slug);
}

export function searchCelebrities(
  query: string = ""
): { items: CelebrityProfile[]; total: number } {
  let filtered = CELEBRITIES;

  const q = query.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.headline.toLowerCase().includes(q) ||
        item.primaryKeyword.toLowerCase().includes(q) ||
        item.secondaryKeywords.some((k) => k.toLowerCase().includes(q)) ||
        item.quickFacts.knownFor.toLowerCase().includes(q) ||
        item.quickFacts.primaryRole.toLowerCase().includes(q) ||
        item.filmography.some((f) => f.title.toLowerCase().includes(q))
    );
  }

  return { items: filtered, total: filtered.length };
}
