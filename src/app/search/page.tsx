import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { searchCelebrities, CATEGORY_DEFINITIONS } from "@/data/celebrity-service";
import { Search, ArrowRight, CheckCircle2, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Search Verified Celebrity Dossiers & Archives | CelebEdge",
  description: "Search our independent public record and journalistic directory of verified celebrity profiles, filmographies, and net worth audits.",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string; category?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "", category = "" } = await searchParams;
  const { items, total } = searchCelebrities(q, category);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 border border-amber-200 mb-3">
            <Search className="h-3.5 w-3.5 text-amber-600" />
            <span>Archive Search Engine</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Search Celebrity Dossiers
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-normal max-w-2xl">
            Search our fact-checked biographical files, career milestones, filmography records, and certified financial audits.
          </p>

          {/* Form */}
          <form action="/search" method="GET" className="mt-6 max-w-2xl flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search by celebrity name, movie, role, or topic..."
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl pl-11 pr-4 py-3 border border-slate-300 focus:outline-none focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition"
              />
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
            {category && <input type="hidden" name="category" value={category} />}
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-sm shrink-0"
            >
              Search
            </button>
          </form>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-6 text-xs font-semibold">
            <Link
              href={q ? `/search?q=${encodeURIComponent(q)}` : "/search"}
              className={`px-3.5 py-1.5 rounded-full border transition whitespace-nowrap ${
                !category
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              All Categories
            </Link>
            {Object.entries(CATEGORY_DEFINITIONS).map(([slug, def]) => {
              const isSelected = category.toLowerCase() === slug.toLowerCase();
              const targetUrl = q
                ? `/search?q=${encodeURIComponent(q)}&category=${encodeURIComponent(slug)}`
                : `/search?category=${encodeURIComponent(slug)}`;
              return (
                <Link
                  key={slug}
                  href={targetUrl}
                  className={`px-3.5 py-1.5 rounded-full border transition whitespace-nowrap ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {def.title}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Results Section */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <span className="text-sm font-bold text-slate-700">
            {total} {total === 1 ? "Dossier" : "Dossiers"} Found {q ? `for "${q}"` : ""}
          </span>
          <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            100% Primary Source Grounded
          </span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-lg mx-auto my-12 shadow-xs">
            <Search className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No Dossiers Found</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              We couldn&apos;t find any verified profiles matching your inquiry. Try searching for &quot;Cillian Murphy&quot;, &quot;Zendaya&quot;, or &quot;Tim Curry&quot;.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline"
            >
              <span>Return to Journal Homepage</span>
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
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.heroImage}
                      alt={`${item.name} portrait`}
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

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2.5 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-slate-400" />
                        {new Date(item.editorialMetadata.publishedDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
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

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
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
