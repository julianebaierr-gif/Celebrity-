import { NextResponse } from "next/server";
import { getAllCelebrities } from "@/data/celebrity-service";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  if (!q) {
    return NextResponse.json({ results: [] });
  }

  const all = getAllCelebrities();
  const matched = all
    .filter((c) => {
      return (
        c.name.toLowerCase().includes(q) ||
        c.quickFacts.primaryRole.toLowerCase().includes(q) ||
        c.quickFacts.knownFor.toLowerCase().includes(q) ||
        c.primaryKeyword.toLowerCase().includes(q) ||
        c.secondaryKeywords.some((k) => k.toLowerCase().includes(q))
      );
    })
    .slice(0, 6)
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      primaryRole: c.quickFacts.primaryRole,
      netWorth: c.quickFacts.netWorth,
      heroImage: c.heroImage,
      category: c.category,
      knownFor: c.quickFacts.knownFor,
    }));

  return NextResponse.json({ results: matched });
}
