import { NextRequest, NextResponse } from "next/server";
import { resolveAndSaveEntityImage, ImageResolveRequest } from "@/lib/verified-image-pipeline";

/**
 * Auto-Posting Image Ingestion API Route
 * POST /api/pipeline/fetch-image
 *
 * Payload:
 * {
 *   "name": "Tom Holland",
 *   "slug": "tom-holland",
 *   "category": "partner" | "hero" | "content"
 * }
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ImageResolveRequest;

    if (!body.name || !body.slug || !body.category) {
      return NextResponse.json(
        { error: "Missing required parameters: name, slug, category." },
        { status: 400 }
      );
    }

    const result = await resolveAndSaveEntityImage(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
          policy: "Zero Stock Photos / Verified Entities Only",
        },
        { status: 422 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const slug = searchParams.get("slug");
  const category = (searchParams.get("category") || "partner") as ImageResolveRequest["category"];

  if (!name || !slug) {
    return NextResponse.json(
      { error: "Missing query parameters: name, slug. Optional: category." },
      { status: 400 }
    );
  }

  const result = await resolveAndSaveEntityImage({ name, slug, category });
  return NextResponse.json(result);
}
