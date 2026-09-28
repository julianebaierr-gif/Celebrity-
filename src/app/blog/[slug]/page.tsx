import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blog-posts";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | CelebEdge" };
  }

  return {
    title: `${post.title} | CelebEdge Blog`,
    description: post.excerpt,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.coverImage],
    },
  };
}

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, label, href] = match;
        return (
          <Link
            key={index}
            href={href}
            className="text-amber-700 font-semibold underline underline-offset-4 hover:text-amber-800 transition-colors"
          >
            {label}
          </Link>
        );
      }
    } else if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link href="/blog" className="hover:text-amber-700 transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-700 font-bold truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white pt-12 pb-10 shadow-xs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
            {post.tags.join(" • ")}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            {post.headline}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-sm">{post.author.name}</span>
                <span className="text-slate-500 text-xs">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                {post.readingTimeMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8">
        {/* Cover Image */}
        <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md mb-10">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Prose Content */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-12 shadow-xs space-y-6 text-slate-700 text-base leading-relaxed">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            // In-content Markdown Images: ![Caption](url)
            const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (imgMatch) {
              const [, caption, src] = imgMatch;
              return (
                <figure key={idx} className="my-8 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-xs">
                  <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt={caption || post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                  {caption && (
                    <figcaption className="text-center text-xs text-slate-500 font-medium pt-3 pb-1 px-4 italic">
                      {caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            // Horizontal Rule / Divider
            if (trimmed === "---") {
              return <hr key={idx} className="my-8 border-slate-200" />;
            }

            // H2 Heading: ## ...
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-6 pb-2 border-b border-slate-100 tracking-tight">
                  {trimmed.replace(/^##\s+/, "")}
                </h2>
              );
            }

            // H3 Heading: ### ...
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-900 pt-4 pb-1 tracking-tight">
                  {trimmed.replace(/^###\s+/, "")}
                </h3>
              );
            }

            // Unordered List: - item or * item
            const lines = trimmed.split("\n");
            if (lines.length > 1 && lines.every((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "))) {
              return (
                <ul key={idx} className="space-y-2 my-4 pl-5 list-disc text-slate-700">
                  {lines.map((line, lIdx) => (
                    <li key={lIdx} className="leading-relaxed">
                      {parseInlineMarkdown(line.trim().replace(/^[-*]\s+/, ""))}
                    </li>
                  ))}
                </ul>
              );
            }

            // Ordered List: 1. item, 2. item...
            if (lines.length > 1 && lines.every((l) => /^\d+\.\s+/.test(l.trim()))) {
              return (
                <ol key={idx} className="space-y-2 my-4 pl-5 list-decimal text-slate-700">
                  {lines.map((line, lIdx) => (
                    <li key={lIdx} className="leading-relaxed">
                      {parseInlineMarkdown(line.trim().replace(/^\d+\.\s+/, ""))}
                    </li>
                  ))}
                </ol>
              );
            }

            // Standard Paragraph
            return (
              <p key={idx} className="leading-relaxed">
                {parseInlineMarkdown(trimmed)}
              </p>
            );
          })}
        </div>

        {/* Navigation Prompt */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-slate-900 block">
              Explore More Celebrities
            </span>
            <span className="text-xs text-slate-500">
              Read comprehensive biographies and career milestones in our directory.
            </span>
          </div>

          <Link
            href="/celebrities"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-xs"
          >
            <span>All Celebrities</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>
    </article>
  );
}
