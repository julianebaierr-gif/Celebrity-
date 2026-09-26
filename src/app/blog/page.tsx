import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowRight, ChevronRight, Calendar, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "CelebEdge Journal | Entertainment Industry Insights & Analysis",
  description:
    "In-depth editorial articles, film analysis, Hollywood financial investigations, and cultural retrospectives written by our research bureau.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app/blog",
  },
};

export default function BlogIndexPage() {
  const posts = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-700 font-bold">Editorial Blog</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 border border-amber-200">
            <BookOpen className="h-3.5 w-3.5 text-amber-600" />
            <span>The Editorial Journal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Industry Insights & Analysis
          </h1>

          <p className="text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            In-depth reporting, cinema retrospectives, box office investigations, and forensic financial evaluations produced by CelebEdge senior staff writers.
          </p>
        </div>
      </header>

      {/* Blog Articles Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {post.tags.slice(0, 1).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold text-amber-800 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2.5 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-slate-400" />
                      {new Date(post.publishedDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-slate-400" />
                      {post.readingTimeMinutes} min read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition tracking-tight leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 mt-2.5 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-800">
                    {post.author.name.charAt(0)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 truncate max-w-[130px]">
                    {post.author.name}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800 transition"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
