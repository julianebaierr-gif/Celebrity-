import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.celebledger.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/*?s=*",
          "/*?q=*",
          "/*?*category=*",
          "/*?*filter=*",
          "/*?*sort=*",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
