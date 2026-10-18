import { MetadataRoute } from "next";
import { CELEBRITIES } from "@/data/celebrities";
import { getAllBlogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.celebledger.com";

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/celebrities`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
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

  // Dynamic Celebrity Profile routes
  const profileRoutes: MetadataRoute.Sitemap = CELEBRITIES.map((c) => ({
    url: `${baseUrl}/celebrity/${c.slug}`,
    lastModified: new Date(c.editorialMetadata.lastUpdated),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Compare Matchup routes
  const compareMatchups = [
    "drake-vs-youngboy-never-broke-again",
    "zendaya-vs-jenna-ortega",
    "cillian-murphy-vs-keanu-reeves",
    "leonardo-dicaprio-vs-robert-redford",
    "margot-robbie-vs-winona-ryder",
    "travis-kelce-vs-taylor-swift-wedding",
    "david-harbour-vs-pedro-pascal",
    "matt-damon-vs-will-smith",
    "chris-hemsworth-vs-chris-evans",
    "chris-hemsworth-vs-robert-downey-jr",
    "mark-ruffalo-vs-robert-downey-jr",
    "mark-ruffalo-vs-chris-hemsworth",
    "jeremy-renner-vs-mark-ruffalo",
    "jeremy-renner-vs-chris-hemsworth",
    "chadwick-boseman-vs-chris-evans",
    "chadwick-boseman-vs-cillian-murphy",
    "sadie-sink-vs-finn-wolfhard",
    "sadie-sink-vs-jenna-ortega",
    "elizabeth-olsen-vs-scarlett-johansson",
    "elizabeth-olsen-vs-brie-larson",
    "tom-hiddleston-vs-chris-hemsworth",
    "tom-hiddleston-vs-robert-downey-jr",
    "benedict-cumberbatch-vs-tom-hiddleston",
    "benedict-cumberbatch-vs-robert-downey-jr",
    "paul-rudd-vs-robert-downey-jr",
    "paul-rudd-vs-benedict-cumberbatch",
    "anthony-mackie-vs-chris-evans",
    "anthony-mackie-vs-robert-downey-jr",
    "sebastian-stan-vs-anthony-mackie",
    "sebastian-stan-vs-chris-evans",
    "tom-holland-vs-zendaya",
    "tom-holland-vs-robert-downey-jr",
  ];
  const compareRoutes: MetadataRoute.Sitemap = compareMatchups.map((m) => ({
    url: `${baseUrl}/compare/${m}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Blog Post routes
  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.modifiedDate || p.publishedDate),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...profileRoutes, ...compareRoutes, ...blogRoutes];
}
