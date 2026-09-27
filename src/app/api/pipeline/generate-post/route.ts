import { NextRequest, NextResponse } from "next/server";
import { runDailyAutoPostPipeline } from "@/lib/auto-content-engine";

/**
 * System 1: Daily Auto-Research, Competitor Gap & High-Authority Content Generator
 * POST /api/pipeline/generate-post
 *
 * Payload:
 * {
 *   "keyword": "Sydney Sweeney"
 * }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const keyword = body.keyword;

    if (!keyword || typeof keyword !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'keyword' in request body." },
        { status: 400 }
      );
    }

    const { profile, dossier } = await runDailyAutoPostPipeline(keyword.trim());

    return NextResponse.json({
      success: true,
      message: `Successfully generated authoritative Hissa 1 profile for ${keyword}`,
      data: {
        slug: profile.slug,
        name: profile.name,
        headline: profile.headline,
        lsiKeywordsCount: dossier.lsiKeywords.length,
        contentGapsFound: dossier.contentGaps,
        competitorsAnalyzed: dossier.topCompetitors.map((c) => ({
          domain: c.domain,
          url: c.url,
        })),
        peopleComIncluded: !!dossier.peopleComArticle,
        profile,
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[generate-post API Error]:", error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");

  if (!keyword) {
    return NextResponse.json(
      { error: "Provide a 'keyword' query parameter. Example: ?keyword=Zendaya" },
      { status: 400 }
    );
  }

  try {
    const { profile, dossier } = await runDailyAutoPostPipeline(keyword.trim());
    return NextResponse.json({
      success: true,
      data: {
        profile,
        lsiKeywordsCount: dossier.lsiKeywords.length,
        contentGaps: dossier.contentGaps,
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
