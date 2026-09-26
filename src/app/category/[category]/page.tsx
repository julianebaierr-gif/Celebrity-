import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getCelebritiesByCategory, CATEGORY_DEFINITIONS } from "@/data/celebrity-service";
import { ArrowRight, ChevronRight, Clock, Calendar, CheckCircle2 } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_DEFINITIONS).map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: catSlug } = await params;
  const def = CATEGORY_DEFINITIONS[catSlug.toLowerCase()];

  if (!def) {
    return { title: "Category Archive | CelebEdge" };
  }

  return {
    title: `${def.title} | Verified Celebrity Dossiers & Archives | CelebEdge`,
    description: def.description,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  };
}

export default async function CategoryArchivePage({ params }: CategoryPageProps) {
  const { category: catSlug } = await params;
  const def = CATEGORY_DEFINITIONS[catSlug.toLowerCase()];

  if (!def) {
    notFound();
  }

  const items = getCelebritiesByCategory(catSlug.toLowerCase());

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-slate-400">Categories</span>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-700 font-bold truncate">{def.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 border border-amber-200">
            <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
            <span>{def.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {def.title}
          </h1>

          <p className="text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            {def.description}
          </p>

          {/* Clean Magazine Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold">
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 transition whitespace-nowrap"
            >
              All Articles
            </Link>
            {Object.entries(CATEGORY_DEFINITIONS).map(([slug, item]) => {
              const isSelected = slug === catSlug.toLowerCase();
              return (
                <Link
                  key={slug}
                  href={`/category/${slug}`}
                  className={`px-3.5 py-1.5 rounded-full border transition whitespace-nowrap ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Magazine Editorial Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <span className="text-sm font-bold text-slate-700">
            {items.length} Published {items.length === 1 ? "Dossier" : "Dossiers"} in {def.title}
          </span>
          <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            100% Fact-Checked & Editorial Verified
          </span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-md mx-auto my-12 shadow-xs">
            <h3 className="text-lg font-bold text-slate-800">New Dossiers In Progress</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Our investigative news bureau is currently reviewing public records for upcoming profiles in this category.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline"
            >
              <span>Explore All Verified Stars</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <article
                key={item.slug}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.heroImage}
                      alt={`${item.name} profile portrait`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold text-amber-800 border border-slate-200 shadow-xs">
                        {item.silo}
                      </span>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2.5 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-slate-400" />
                        {new Date(item.editorialMetadata.publishedDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-slate-400" />
                        {item.editorialMetadata.readingTimeMinutes} min read
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition tracking-tight leading-snug">
                      <Link href={`/celebrity/${item.slug}`}>
                        {item.name}
                      </Link>
                    </h2>

                    <p className="text-xs text-slate-600 line-clamp-3 mt-2.5 leading-relaxed font-normal">
                      {item.executiveSummary}
                    </p>
                  </div>
                </div>

                {/* Footer with Author and CTA */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-800">
                      {item.editorialMetadata.authorName.charAt(0)}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 truncate max-w-[120px]">
                      {item.editorialMetadata.authorName}
                    </span>
                  </div>

                  <Link
                    href={`/celebrity/${item.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800 transition"
                  >
                    <span>Read Dossier</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
