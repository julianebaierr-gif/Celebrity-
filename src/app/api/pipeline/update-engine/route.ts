import { NextRequest, NextResponse } from "next/server";
import {
  processCelebrityUpdate,
  runWeeklyCelebrityMonitor,
  getUpdatesStore,
  UpdateEventRequest,
} from "@/lib/system3-update-engine";
import { verifyPipelineAuth } from "@/lib/pipeline-auth";

/**
 * System 3: Smart Freshness, Update & Anti-Cannibalization Engine API
 * POST /api/pipeline/update-engine
 */
export async function POST(req: NextRequest) {
  const auth = verifyPipelineAuth(req);
  if (!auth.authorized) {
    return auth.response!;
  }

  try {
    const body = (await req.json()) as UpdateEventRequest & { action?: "monitor" };

    // Support triggering the weekly scanner
    if (body.action === "monitor") {
      const monitorResult = await runWeeklyCelebrityMonitor();
      return NextResponse.json({
        success: true,
        action: "weekly_monitor",
        data: monitorResult,
      });
    }

    if (!body.celebritySlug || !body.headline || !body.details) {
      return NextResponse.json(
        {
          error: "Missing required parameters: 'celebritySlug', 'headline', 'details'.",
        },
        { status: 400 }
      );
    }

    const result = await processCelebrityUpdate(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Internal Server Error";
    console.error("[System3 API Error]:", error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/**
 * GET /api/pipeline/update-engine
 * Query updates-store or test specific slug
 */
export async function GET(req: NextRequest) {
  const auth = verifyPipelineAuth(req);
  if (!auth.authorized) {
    return auth.response!;
  }

  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  if (action === "store") {
    const store = getUpdatesStore();
    return NextResponse.json({
      success: true,
      store,
    });
  }

  const celebritySlug = searchParams.get("celebritySlug");
  const headline = searchParams.get("headline");
  const details = searchParams.get("details");

  if (celebritySlug && headline && details) {
    try {
      const result = await processCelebrityUpdate({
        celebritySlug,
        headline,
        details,
      });
      return NextResponse.json({ success: true, data: result });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error";
      return NextResponse.json({ error: msg }, { status: 500 });
    }
  }

  return NextResponse.json({
    message: "System 3 Smart Freshness & Update Engine active.",
    endpoints: {
      postUpdate: "POST /api/pipeline/update-engine (body: { celebritySlug, headline, details })",
      runMonitor: "POST /api/pipeline/update-engine (body: { action: 'monitor' })",
      viewStore: "GET /api/pipeline/update-engine?action=store",
    },
  });
}
