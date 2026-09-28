import { NextRequest, NextResponse } from "next/server";
import { processBatchUpdates, UpdateEventRequest, BatchUpdateOptions } from "@/lib/system3-update-engine";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { events, options } = body as {
      events: UpdateEventRequest[];
      options?: BatchUpdateOptions;
    };

    if (!Array.isArray(events) || events.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required 'events' array in request body.",
        },
        { status: 400 }
      );
    }

    console.log(`[API /api/pipeline/batch-update] Received batch of ${events.length} events.`);

    const summary = await processBatchUpdates(events, options);

    return NextResponse.json({
      success: true,
      summary,
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("[API /api/pipeline/batch-update] Error:", errorMsg);
    return NextResponse.json(
      {
        success: false,
        error: errorMsg,
      },
      { status: 500 }
    );
  }
}
