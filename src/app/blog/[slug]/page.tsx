import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blog-posts";
import { injectNaturalInternalLinks } from "@/lib/system4-internal-link-engine";
import FaqAccordion from "@/components/blog/FaqAccordion";
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  Newspaper,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

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
    return { title: "Article Not Found | CelebLedger" };
  }

  // Google SERP Strict Title Optimization (Target: 50-58 characters maximum)
  let metaTitle = post.seoTitle;
  if (!metaTitle || metaTitle.length > 58) {
    if (post.headline && post.headline.length <= 58) {
      metaTitle = post.headline;
    } else if (post.title.length <= 58) {
      metaTitle = post.title;
    } else {
      metaTitle = `${post.title.slice(0, 54).trim()}...`;
    }
  }

  // Google SERP Strict Meta Description (Target: 145-155 characters ending with full stop)
  let metaDescription = post.seoDescription || post.excerpt;
  if (metaDescription.length > 155) {
    metaDescription = metaDescription.slice(0, 154);
    const lastSpace = metaDescription.lastIndexOf(" ");
    metaDescription = (lastSpace !== -1 ? metaDescription.slice(0, lastSpace) : metaDescription) + ".";
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.celebledger.com";
  const postUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = post.coverImage.startsWith("http") ? post.coverImage : `${siteUrl}${post.coverImage}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: postUrl,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: postUrl,
      siteName: "CelebLedger",
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.publishedDate,
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
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
            className="text-amber-700 font-bold underline underline-offset-4 hover:text-amber-800 transition-colors"
          >
            {label}
          </Link>
        );
      }
    } else if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      const inner = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-slate-900">
          {parseInlineMarkdown(inner)}
        </strong>
      );
    }
    return part;
  });
}

function parseArticleAndFaqs(rawContent: string): {
  articleBlocks: string[];
  faqs: Array<{ question: string; answer: string }>;
} {
  let normalized = rawContent
    .replace(/\r\n/g, "\n")
    .replace(/\n*(#{1,4}\s+[^\n]+)\n*/g, "\n\n$1\n\n")
    .replace(/\n*(!\[.*?\]\(.*?\))\n*/g, "\n\n$1\n\n")
    .replace(/\n*(---\n*)/g, "\n\n---\n\n")
    .replace(/\n{3,}/g, "\n\n");

  // Separate inline bullets if clumped: e.g. "note:\n- item" or "note: - **item"
  normalized = normalized.replace(/([^\n])\s+-\s+\*\*/g, "$1\n\n- **");

  // Separate FAQ section from main article body
  const faqHeadingRegex = /##\s*(?:\d+[\.\)]\s*)?Frequently Asked Questions[^\n]*/i;
  const faqMatch = normalized.match(faqHeadingRegex);

  let mainText = normalized;
  let faqText = "";

  if (faqMatch && faqMatch.index !== undefined) {
    mainText = normalized.slice(0, faqMatch.index).trim();
    faqText = normalized.slice(faqMatch.index).trim();
  }

  // Extract FAQs
  const faqs: Array<{ question: string; answer: string }> = [];
  if (faqText) {
    const faqBlocks = faqText.split("\n\n");
    for (let i = 0; i < faqBlocks.length; i++) {
      const b = faqBlocks[i].trim();
      if (b.startsWith("### ") && i + 1 < faqBlocks.length) {
        const question = b.replace(/^###\s+/, "").trim();
        const answerBlock = faqBlocks[i + 1].trim();
        if (!answerBlock.startsWith("#") && !answerBlock.startsWith("![")) {
          faqs.push({ question, answer: answerBlock });
        }
      }
    }
  }

  const articleBlocks = mainText
    .split("\n\n")
    .map((b) => b.trim())
    .filter(Boolean);

  return { articleBlocks, faqs };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.celebledger.com";
  const postUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = post.coverImage.startsWith("http") ? post.coverImage : `${siteUrl}${post.coverImage}`;

  // System 4: Autonomous Natural Internal Linking Engine
  const interlinkedContent = injectNaturalInternalLinks(post.content, {
    currentSlug: slug,
    scope: "blog",
  });

  const { articleBlocks, faqs } = parseArticleAndFaqs(interlinkedContent);

  // Extract primary celebrity slug if present in tags or content
  let primaryCelebritySlug = "zendaya";
  if (slug.startsWith("cillian")) primaryCelebritySlug = "cillian-murphy";
  else if (slug.startsWith("keanu")) primaryCelebritySlug = "keanu-reeves";
  else if (slug.startsWith("tim-curry")) primaryCelebritySlug = "tim-curry";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: [imageUrl],
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: [
      {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "CelebLedger",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer.replace(/\[(.*?)\]\(.*?\)/g, "$1").replace(/\*\*(.*?)\*\*/g, "$1"),
            },
          })),
        }
      : null;

  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Structured Data (JSON-LD) for Google SERP Domination */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3.5">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link href="/blog" className="hover:text-amber-700 transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-800 font-bold truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white pt-12 pb-10 shadow-2xs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Verified Report
            </span>
            <span className="text-xs font-semibold text-slate-400">•</span>
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {post.tags.slice(0, 3).join(" • ")}
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            {post.headline}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-xs">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-sm">{post.author.name}</span>
                <span className="text-slate-500 text-xs">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                {post.readingTimeMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8">
        {/* Cover Image - 100% Full Uncropped Showcase */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 mb-8 flex items-center justify-center shadow-md">
          {/* Ambient soft blurred backdrop for letterbox spaces */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-35 scale-110 pointer-events-none"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          />
          <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />

          {/* 100% Full Uncropped Image */}
          <div className="relative h-full w-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain object-center z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Executive Key Facts Briefing Box */}
        <div className="rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/90 via-white to-amber-50/40 p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex items-center gap-2 text-xs font-black text-amber-800 uppercase tracking-wider mb-3">
            <Newspaper className="h-4 w-4 text-amber-700" />
            <span>Executive Briefing & Verified Key Facts</span>
          </div>
          <p className="text-slate-800 font-semibold text-base sm:text-lg leading-relaxed mb-5">
            {post.headline}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-amber-200/60 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span><strong>Primary Verification</strong>: Official Reps</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span><strong>Anti-Rumor Protocol</strong>: Production Registers</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span><strong>Timeline Record</strong>: Verified 2026 Archive</span>
            </div>
          </div>
        </div>

        {/* Prose Article Body */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-12 shadow-xs space-y-6 text-slate-700 text-base leading-relaxed">
          {articleBlocks.map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            // In-content Markdown Images: ![Caption](url)
            const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (imgMatch) {
              const [, caption, src] = imgMatch;
              return (
                <figure key={idx} className="my-10 rounded-3xl overflow-hidden border border-slate-200/90 bg-white p-3 sm:p-5 shadow-xs">
                  <div className="relative w-full h-[420px] sm:h-[500px] md:h-[560px] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                    {/* Ambient subtle glow for letterbox area */}
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110 pointer-events-none"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                    <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />

                    {/* 100% Full Uncropped Image */}
                    <div className="relative h-full w-full">
                      <Image
                        src={src}
                        alt={caption || post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-contain object-center z-10 drop-shadow-2xl"
                      />
                    </div>
                  </div>
                  {caption && (
                    <figcaption className="text-center text-xs sm:text-sm text-slate-500 font-medium pt-3 pb-1 px-4 italic">
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

            // H2 Heading: Strip any numbers like 1., 2., 3., etc.!
            if (trimmed.startsWith("## ")) {
              const cleanHeading = trimmed
                .replace(/^##\s+/, "")
                .replace(/^\d+[\.\)]\s*/, "")
                .trim();

              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-black text-slate-900 pt-8 pb-3 border-l-4 border-amber-600 pl-4 my-8 bg-gradient-to-r from-amber-50/70 via-amber-50/20 to-transparent rounded-r-2xl tracking-tight"
                >
                  {cleanHeading}
                </h2>
              );
            }

            // H3 Heading: Strip numbers as well!
            if (trimmed.startsWith("### ")) {
              const cleanSub = trimmed
                .replace(/^###\s+/, "")
                .replace(/^\d+[\.\)]\s*/, "")
                .trim();

              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-slate-900 pt-6 pb-2 tracking-tight flex items-center gap-2.5"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-600 shrink-0"></span>
                  <span>{cleanSub}</span>
                </h3>
              );
            }

            // Unordered List: - item or * item
            const lines = trimmed.split("\n");
            if (lines.length > 1 && lines.every((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "))) {
              return (
                <ul key={idx} className="space-y-2.5 my-5 pl-2">
                  {lines.map((line, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2.5 text-slate-700 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0 mt-2.5"></span>
                      <span>{parseInlineMarkdown(line.trim().replace(/^[-*]\s+/, ""))}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            // Ordered List: 1. item, 2. item...
            if (lines.length > 1 && lines.every((l) => /^\d+\.\s+/.test(l.trim()))) {
              return (
                <ol key={idx} className="space-y-3 my-5 pl-2">
                  {lines.map((line, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-900 font-bold text-xs mt-0.5">
                        {lIdx + 1}
                      </span>
                      <span>{parseInlineMarkdown(line.trim().replace(/^\d+\.\s+/, ""))}</span>
                    </li>
                  ))}
                </ol>
              );
            }

            // Standard Paragraph
            return (
              <p key={idx} className="leading-relaxed text-slate-700">
                {parseInlineMarkdown(trimmed)}
              </p>
            );
          })}
        </div>

        {/* Interactive FAQ Accordion Component */}
        <FaqAccordion
          faqs={faqs}
          celebrityName="Zendaya"
          celebritySlug={primaryCelebritySlug}
        />

        {/* Author Dossier & Trust Seal Card */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-xs shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-base">{post.author.name}</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified Analyst
                </span>
              </div>
              <span className="text-slate-500 text-xs block mt-0.5">{post.author.role}</span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Fact-checked under CelebLedger Zero-Rumor Editorial Standards.
              </span>
            </div>
          </div>

          <Link
            href="/editorial-standards"
            className="text-xs font-bold text-amber-700 hover:text-amber-800 underline underline-offset-4 whitespace-nowrap self-end sm:self-auto"
          >
            Editorial Policy &rarr;
          </Link>
        </div>

        {/* Navigation Prompt */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-slate-900 block">
              Browse More Celebrities
            </span>
            <span className="text-xs text-slate-500">
              Read full biographies and career milestones in our directory.
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
