import { NextRequest, NextResponse } from "next/server";

/**
 * Pipeline Authentication & Quota Guard
 * Protects pipeline endpoints from unauthorized invocation, bots, and quota exhaustion.
 *
 * Supported Authorization Methods:
 * 1. Header: "Authorization: Bearer <CRON_SECRET>" (Standard Vercel Cron & API Bearer)
 * 2. Header: "x-cron-secret: <CRON_SECRET>"
 * 3. Header: "x-pipeline-secret: <CRON_SECRET>"
 * 4. Query Parameter: "?secret=<CRON_SECRET>"
 */
export function verifyPipelineAuth(req: NextRequest): {
  authorized: boolean;
  response?: NextResponse;
} {
  const configuredSecret =
    process.env.CRON_SECRET ||
    process.env.PIPELINE_SECRET ||
    process.env.API_SECRET_TOKEN;

  const authHeader = req.headers.get("authorization");
  const bearerToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : null;
  const cronSecretHeader = req.headers.get("x-cron-secret")?.trim();
  const pipelineSecretHeader = req.headers.get("x-pipeline-secret")?.trim();

  let querySecret: string | null = null;
  try {
    const url = new URL(req.url);
    querySecret = url.searchParams.get("secret")?.trim() || null;
  } catch {}

  const candidateToken =
    bearerToken || cronSecretHeader || pipelineSecretHeader || querySecret;

  // If secret is set in environment, require exact match
  if (configuredSecret) {
    if (!candidateToken || candidateToken !== configuredSecret) {
      return {
        authorized: false,
        response: NextResponse.json(
          {
            success: false,
            error:
              "Unauthorized: Missing or invalid pipeline secret. Please provide Authorization Bearer token or CRON_SECRET header.",
          },
          { status: 401 }
        ),
      };
    }
    return { authorized: true };
  }

  // If running in production and no secret is configured, lock endpoint to protect API quota
  if (process.env.NODE_ENV === "production") {
    return {
      authorized: false,
      response: NextResponse.json(
        {
          success: false,
          error:
            "Unauthorized: CRON_SECRET is not configured on the server. Pipeline endpoints are locked to prevent quota abuse.",
        },
        { status: 401 }
      ),
    };
  }

  // In local development, if no secret is set, allow access
  return { authorized: true };
}
