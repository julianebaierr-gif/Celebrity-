import { CELEBRITIES, CelebrityProfile } from "./celebrities";

export function getAllCelebrities(): CelebrityProfile[] {
  return CELEBRITIES;
}

export function getFeaturedCelebrity(): CelebrityProfile {
  return CELEBRITIES[0];
}

export function getTrendingCelebrities(limit: number = 4): CelebrityProfile[] {
  return CELEBRITIES.slice(1, 1 + limit);
}

export function getCompleteOrDynamicProfile(slug: string): CelebrityProfile | undefined {
  return CELEBRITIES.find((c) => c.slug === slug);
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
