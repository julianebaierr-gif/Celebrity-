export interface BlogPost {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readingTimeMinutes: number;
  tags: string[];
  lsiKeywords?: string[];
  contentGapsCovered?: string[];
}

export const BLOG_POSTS: BlogPost[] = [];


import fs from "node:fs";
import path from "node:path";

function getDynamicBlogPosts(): BlogPost[] {
  try {
    const storePath = path.resolve(process.cwd(), "src/data/updates-store.json");
    if (fs.existsSync(storePath)) {
      const data = JSON.parse(fs.readFileSync(storePath, "utf-8"));
      if (Array.isArray(data.dynamicBlogPosts)) {
        return data.dynamicBlogPosts;
      }
    }
  } catch {}
  return [];
}

export function getAllBlogPosts(): BlogPost[] {
  const dynamicPosts = getDynamicBlogPosts();
  const combined = [...dynamicPosts, ...BLOG_POSTS];
  const seen = new Set<string>();
  return combined.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}
