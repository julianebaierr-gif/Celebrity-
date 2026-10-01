import { NextResponse } from "next/server";
import { CELEBRITIES } from "@/data/celebrities";
import { getAllBlogPosts } from "@/data/blog-posts";

export const dynamic = "force-dynamic";

const INDEXNOW_KEY = "4f8a1e9b2c3d5e7f8a0b1c2d3e4f5a6b";
const HOST = "www.celebledger.com";
const BASE_URL = `https://${HOST}`;

const CORE_PAGES = [
  "/",
  "/celebrities",
  "/compare",
  "/blog",
  "/editorial-standards",
  "/about",
  "/privacy",
  "/terms",
  "/contact",
];

const COMPARE_MATCHUPS = [
  "drake-vs-youngboy-never-broke-again",
  "zendaya-vs-jenna-ortega",
  "cillian-murphy-vs-keanu-reeves",
  "leonardo-dicaprio-vs-robert-redford",
  "margot-robbie-vs-winona-ryder",
  "travis-kelce-vs-taylor-swift-wedding",
  "david-harbour-vs-pedro-pascal",
  "matt-damon-vs-will-smith",
];

function getAllSiteUrls(): string[] {
  const core = CORE_PAGES.map((p) => `${BASE_URL}${p}`);
  const celebs = CELEBRITIES.map((c) => `${BASE_URL}/celebrity/${c.slug}`);
  const matchups = COMPARE_MATCHUPS.map((m) => `${BASE_URL}/compare/${m}`);
  const blogs = getAllBlogPosts().map((b) => `${BASE_URL}/blog/${b.slug}`);
  return [...core, ...celebs, ...matchups, ...blogs];
}

async function submitToAllIndexNowEngines(urlList: string[]) {
  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const results = await Promise.allSettled(
    endpoints.map(async (ep) => {
      const res = await fetch(ep, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      return {
        endpoint: ep,
        status: res.status,
        ok: res.status === 200 || res.status === 202,
      };
    })
  );

  return results.map((r, i) =>
    r.status === "fulfilled"
      ? r.value
      : { endpoint: endpoints[i], status: 500, ok: false, error: (r.reason as Error)?.message }
  );
}

export async function POST(request: Request) {
  try {
    let customUrls: string[] | undefined;
    try {
      const body = await request.json();
      if (Array.isArray(body.urls) && body.urls.length > 0) {
        customUrls = body.urls;
      }
    } catch {}

    const urlList = customUrls || getAllSiteUrls();
    const engineResults = await submitToAllIndexNowEngines(urlList);

    return NextResponse.json({
      success: true,
      message: "Forcefully submitted website URLs to Bing, IndexNow & Yandex",
      submittedUrlsCount: urlList.length,
      timestamp: new Date().toISOString(),
      engineResults,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Trigger automatic full website submission on GET (used by Vercel Cron every 24 hours)
  const urlList = getAllSiteUrls();
  const engineResults = await submitToAllIndexNowEngines(urlList);

  return NextResponse.json({
    success: true,
    cronJob: "24-Hour Automated Multi-Engine Indexing",
    protocol: "IndexNow v1.0",
    host: HOST,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    submittedUrlsCount: urlList.length,
    timestamp: new Date().toISOString(),
    engineResults,
  });
}
