import { CELEBRITIES, CelebrityProfile } from "./celebrities";

export const CATEGORY_DEFINITIONS: Record<
  string,
  {
    title: string;
    description: string;
    badge: string;
  }
> = {
  "biographies": {
    title: "Biographies & Profiles",
    description: "In-depth investigative career biographies, early lives, and verified milestone timelines of cinema and stage icons.",
    badge: "Biographical Archive"
  },
  "relationships": {
    title: "Relationships & Marriages",
    description: "Certified public records, marriage licenses, relationship timelines, and verified personal histories.",
    badge: "Public Records"
  },
  "net-worth": {
    title: "Net Worth & Fortunes",
    description: "Certified financial evaluations, box office backend shares, production equity, and real estate asset portfolios.",
    badge: "Financial Audit"
  },
  "movies-tv": {
    title: "Movies & Television",
    description: "Critically acclaimed filmographies, television headliners, award-winning performances, and production portfolios.",
    badge: "Screen & Stage"
  },
  "legends": {
    title: "Hollywood Legends",
    description: "Tributes, historical retrospectives, and lifetime achievement records honoring Hollywood's most enduring titans.",
    badge: "Hall of Fame"
  }
};

export const SILO_TO_CATEGORY: Record<string, string> = {
  "Biographies & Profiles": "biographies",
  "Celebrity Profiles & Bios": "biographies",
  "Relationships & Marriages": "relationships",
  "Spouses & Relationships": "relationships",
  "Net Worth & Wealth": "net-worth",
  "Movies & Television": "movies-tv",
  "Hollywood Legends": "legends",
};

export function getCategorySlugForSilo(silo: string): string {
  return SILO_TO_CATEGORY[silo] || "biographies";
}

export function getAllCelebrities(): CelebrityProfile[] {
  return CELEBRITIES;
}

export function getFeaturedCelebrity(): CelebrityProfile {
  return CELEBRITIES[0]; // Tim Curry or Cillian Murphy
}

export function getTrendingCelebrities(limit: number = 4): CelebrityProfile[] {
  return CELEBRITIES.slice(1, 1 + limit);
}

export function getCompleteOrDynamicProfile(slug: string): CelebrityProfile | undefined {
  return CELEBRITIES.find((c) => c.slug === slug);
}

export function getCelebritiesByCategory(categorySlug: string): CelebrityProfile[] {
  const norm = categorySlug.toLowerCase();
  return CELEBRITIES.filter((c) => c.category === norm);
}

export function searchCelebrities(
  query: string = "",
  category: string = ""
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
        item.filmography.some((f) => f.title.toLowerCase().includes(q))
    );
  }

  if (category && category !== "all") {
    filtered = filtered.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  return { items: filtered, total: filtered.length };
}
