import fs from "fs";
import path from "path";

// 1. Check Blog Posts
const blogPostsFile = fs.readFileSync(path.resolve(process.cwd(), "src/data/blog-posts.ts"), "utf-8");
const match = blogPostsFile.match(/export const BLOG_POSTS: BlogPost\[\] = (\[[\s\S]*?\]);/);
const posts = match ? JSON.parse(match[1]) : [];

console.log("=== BLOG POST AUDIT ===");
const blogSlugs = [
  "drake-2026-music-and-tour-analysis",
  "kylie-jenner-2026-media-and-brand-analysis",
  "travis-kelce-2026-season-and-contract-analysis",
  "tim-curry-2026-slate-and-analysis"
];

for (const slug of blogSlugs) {
  const post = posts.find(u => u.slug === slug);
  if (!post) {
    console.error(`Post not found: ${slug}`);
    continue;
  }
  const totalWords = (post.title + " " + post.excerpt + " " + post.content).split(/\s+/).filter(Boolean).length;
  const titleLen = post.seoTitle ? post.seoTitle.length : 0;
  const descLen = post.seoDescription ? post.seoDescription.length : 0;
  const hasPipelineInTitle = post.title.toLowerCase().includes("pipeline");
  const hasPipelineInSlug = post.slug.toLowerCase().includes("pipeline");
  const hasPipelineInContent = post.content.toLowerCase().includes("pipeline");

  console.log(`\nBlog: ${slug}`);
  console.log(`- Title: "${post.title}"`);
  console.log(`- Words: ${totalWords} (Target: >= 1200) -> ${totalWords >= 1200 ? 'PASS' : 'FAIL'}`);
  console.log(`- SEO Title: "${post.seoTitle}" (${titleLen} chars, Target: 50-58) -> ${titleLen >= 50 && titleLen <= 58 ? 'PASS' : 'FAIL'}`);
  console.log(`- SEO Desc: "${post.seoDescription}" (${descLen} chars, Target: 145-155, ends with '.') -> ${descLen >= 145 && descLen <= 155 && post.seoDescription.endsWith('.') ? 'PASS' : 'FAIL'}`);
  console.log(`- Pipeline banned word: Title=${hasPipelineInTitle}, Slug=${hasPipelineInSlug}, Content=${hasPipelineInContent} -> ${!hasPipelineInTitle && !hasPipelineInSlug && !hasPipelineInContent ? 'PASS' : 'FAIL'}`);
  console.log(`- Cover image: ${post.coverImage}`);
}

// 2. Check Biographies & Celebrity Data
console.log("\n=== CELEBRITY PROFILE AUDIT ===");
import("./biography-data.mjs").then(bios => {
  const mapping = [
    { slug: "billy-bob-thornton", chapters: bios.thorntonChapters },
    { slug: "winona-ryder", chapters: bios.winonaChapters },
    { slug: "drake", chapters: bios.drakeChapters },
    { slug: "kylie-jenner", chapters: bios.kylieChapters }
  ];

  for (const item of mapping) {
    const slug = item.slug;
    const words = item.chapters.map(c => c.heading + " " + c.paragraphs.join(" ") + " " + c.keyTakeaway).join(" ").split(/\s+/).filter(Boolean).length;
    const heroImg = path.resolve(process.cwd(), `public/images/celebrities/${slug}-hero.webp`);
    const contentImg = path.resolve(process.cwd(), `public/images/celebrities/${slug}-content.webp`);
    const heroExists = fs.existsSync(heroImg);
    const contentExists = fs.existsSync(contentImg);
    const heroSize = heroExists ? fs.statSync(heroImg).size : 0;
    const contentSize = contentExists ? fs.statSync(contentImg).size : 0;
    const isDistinct = heroSize !== contentSize;

    console.log(`\nCelebrity: ${slug}`);
    console.log(`- Biography Words: ${words} (Target: >= 1200) -> ${words >= 1200 ? 'PASS' : 'FAIL'}`);
    console.log(`- Hero Image: ${heroSize} bytes, exists=${heroExists}`);
    console.log(`- Content Image: ${contentSize} bytes, exists=${contentExists}`);
    console.log(`- Images Distinct: ${isDistinct ? 'PASS (Different images)' : 'FAIL (Same image)'}`);
  }
});
