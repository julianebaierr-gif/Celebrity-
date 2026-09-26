import { MetadataRoute } from "next";
import { CELEBRITIES } from "@/data/celebrities";

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
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic Celebrity Profile routes
  const profileRoutes: MetadataRoute.Sitemap = CELEBRITIES.map((c) => ({
    url: `${baseUrl}/celebrity/${c.slug}`,
    lastModified: new Date(c.editorialMetadata.lastUpdated),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Unique Silo / Category routes
  const silos = Array.from(new Set(CELEBRITIES.map((c) => c.silo)));
  const siloRoutes: MetadataRoute.Sitemap = silos.map((silo) => ({
    url: `${baseUrl}/silo/${encodeURIComponent(silo.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-"))}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...profileRoutes, ...siloRoutes];
}
