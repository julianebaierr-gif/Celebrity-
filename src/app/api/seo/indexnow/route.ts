import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const INDEXNOW_KEY = "4f8a1e9b2c3d5e7f8a0b1c2d3e4f5a6b";
const HOST = "www.celebledger.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const urlList: string[] = body.urls || [`https://${HOST}/sitemap.xml`];

    // Submit to Bing IndexNow endpoint
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urlList,
      }),
    });

    const isSuccess = response.status === 200 || response.status === 202;
    return NextResponse.json({
      success: isSuccess,
      status: response.status,
      submittedUrls: urlList.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    protocol: "IndexNow v1.0",
    host: HOST,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    endpoints: ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"],
    status: "Active & Configured",
  });
}
