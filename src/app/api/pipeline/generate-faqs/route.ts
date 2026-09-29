import { NextRequest, NextResponse } from "next/server";
import { generateGoogleSearchFaqs, harvestGoogleQuestions } from "@/lib/google-faq-engine";
import { getCompleteOrDynamicProfile } from "@/data/celebrity-service";

/**
 * System 5: Google High-Intent PAA & Autocomplete FAQ Engine
 * GET /api/pipeline/generate-faqs?keyword=Zendaya or ?slug=zendaya
 * POST /api/pipeline/generate-faqs
 *
 * Payload:
 * {
 *   "keyword": "Zendaya",
 *   "slug": "zendaya"
 * }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const keyword = body.keyword || body.name;
    const slug = body.slug;

    if (!keyword && !slug) {
      return NextResponse.json(
        { error: "Provide a 'keyword', 'name', or 'slug' in the request body." },
        { status: 400 }
      );
    }

    const existingProfile = slug ? getCompleteOrDynamicProfile(slug) : undefined;
    const profileContext = existingProfile || {
      name: keyword,
      primaryKeyword: keyword,
      slug: slug || keyword?.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    };

    const faqs = await generateGoogleSearchFaqs(profileContext);

    return NextResponse.json({
      success: true,
      celebrity: profileContext.name,
      totalFaqs: faqs.length,
      faqs,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[generate-faqs API Error]:", error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get("keyword") || searchParams.get("name");
    const slug = searchParams.get("slug");

    if (!keyword && !slug) {
      return NextResponse.json(
        { error: "Provide 'keyword' or 'slug' query parameter. Example: ?keyword=Zendaya" },
        { status: 400 }
      );
    }

    const resolvedName = keyword || slug || "Celebrity";
    const existingProfile = slug ? getCompleteOrDynamicProfile(slug) : undefined;
    const profileContext = existingProfile || {
      name: resolvedName,
      primaryKeyword: resolvedName,
      slug: slug || keyword?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "celebrity",
    };

    const harvestedQueries = await harvestGoogleQuestions(profileContext.name || "", profileContext.primaryKeyword || undefined);
    const faqs = await generateGoogleSearchFaqs(profileContext);

    return NextResponse.json({
      success: true,
      celebrity: profileContext.name,
      rawGoogleQueriesHarvested: harvestedQueries.length,
      totalFaqs: faqs.length,
      faqs,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[generate-faqs API Error]:", error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
