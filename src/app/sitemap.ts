import { MetadataRoute } from "next";
import { CELEBRITIES } from "@/data/celebrities";
import { CATEGORY_DEFINITIONS } from "@/data/celebrity-service";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://celeb-edge.vercel.app";

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/editorial-standards`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic Celebrity Profile routes (All real, verified profiles)
  const profileRoutes: MetadataRoute.Sitemap = CELEBRITIES.map((c) => ({
    url: `${baseUrl}/celebrity/${c.slug}`,
    lastModified: new Date(c.editorialMetadata.lastUpdated),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Clean Category routes
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(CATEGORY_DEFINITIONS).map((cat) => ({
    url: `${baseUrl}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...profileRoutes];
}
