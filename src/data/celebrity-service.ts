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
  const list = CELEBRITIES.map((c) => mergeProfileWithOverrides(c, overrides[c.slug]));
  return list.sort((a, b) => {
    const timeA = new Date(a.editorialMetadata?.publishedDate || 0).getTime();
    const timeB = new Date(b.editorialMetadata?.publishedDate || 0).getTime();
    return timeB - timeA;
  });
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

export interface CompareCelebrityItem {
  slug: string;
  name: string;
  heroImage: string;
  silo: string;
  quickFacts: {
    netWorth: string;
    primaryRole: string;
    age: number | string;
    birthPlace: string;
    knownFor: string;
    birthDate: string;
    height: string;
    activeYears: string;
  };
  relationshipProfile: {
    status: string;
  };
  filmographyLength: number;
}

export function getCompareCelebrities(): CompareCelebrityItem[] {
  return getAllCelebrities().map((c) => ({
    slug: c.slug,
    name: c.name,
    heroImage: c.heroImage,
    silo: c.silo,
    quickFacts: {
      netWorth: c.quickFacts.netWorth,
      primaryRole: c.quickFacts.primaryRole,
      age: c.quickFacts.age,
      birthPlace: c.quickFacts.birthPlace,
      knownFor: c.quickFacts.knownFor,
      birthDate: c.quickFacts.birthDate,
      height: c.quickFacts.height,
      activeYears: c.quickFacts.activeYears,
    },
    relationshipProfile: {
      status: c.relationshipProfile?.status || "Private",
    },
    filmographyLength: c.filmography?.length || 0,
  }));
}

export function searchCelebrities(
  query: string = ""
): { items: CelebrityProfile[]; total: number } {
  let filtered = getAllCelebrities();

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
