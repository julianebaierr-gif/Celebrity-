import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CELEBRITIES } from "@/data/celebrities";
import { Search, ArrowRight, ChevronRight, DollarSign } from "lucide-react";
import { getAgeBadgeText, formatNetWorth } from "@/lib/celebrity-utils";

export const metadata: Metadata = {
  title: "All Celebrities Directory & Net Worth Bios | CelebEdge",
  description:
    "Browse our official directory of celebrity profiles. Detailed biographies, net worth analysis, career highlights, and filmographies.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app/celebrities",
  },
};

interface CelebritiesPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function AllCelebritiesPage({ searchParams }: CelebritiesPageProps) {
  const { q = "" } = await searchParams;

  const query = q.trim().toLowerCase();
  const celebrities = query
    ? CELEBRITIES.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.headline.toLowerCase().includes(query) ||
          c.primaryKeyword.toLowerCase().includes(query) ||
          c.quickFacts.knownFor.toLowerCase().includes(query) ||
          c.quickFacts.primaryRole.toLowerCase().includes(query)
      )
    : CELEBRITIES;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-700 font-bold">All Celebrities</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            All Celebrities
          </h1>

          <p className="text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            Browse our official archive of celebrity profiles. Each profile covers biographical facts, career milestones, filmography records, and financial overviews.
          </p>

          {/* Search Box */}
          <form action="/celebrities" method="GET" className="mt-4 max-w-xl flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search by celebrity name, film role, or profession..."
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl pl-11 pr-4 py-3 border border-slate-300 focus:outline-none focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition"
              />
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-sm shrink-0"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Main Directory Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <span className="text-sm font-bold text-slate-700">
            {celebrities.length} {celebrities.length === 1 ? "Celebrity Profile" : "Celebrity Profiles"} Available {q ? `matching "${q}"` : ""}
          </span>
        </div>

        {celebrities.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-md mx-auto my-12 shadow-xs">
            <h3 className="text-lg font-bold text-slate-800">No Celebrities Found</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              We couldn&apos;t find any profiles matching your search query.
            </p>
            <Link
              href="/celebrities"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline"
            >
              <span>View All Celebrities</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {celebrities.map((item) => (
              <article
                key={item.slug}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Thumbnail */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110 pointer-events-none"
                      style={{ backgroundImage: `url(${item.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
                    <Image
                      src={item.heroImage}
                      alt={`${item.name} official portrait - ${item.quickFacts.primaryRole}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center z-10 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {formatNetWorth(item.quickFacts.netWorth)} Net Worth
                      </span>
                      <span className="text-slate-400 font-mono">
                        {getAgeBadgeText(item.quickFacts)}
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

                    {/* Quick Known For tag */}
                    <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">Known for: </span>
                      <span className="truncate">{item.quickFacts.knownFor}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                  <span className="text-[11px] text-slate-400">
                    {item.filmography.length} Major Titles
                  </span>

                  <Link
                    href={`/celebrity/${item.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800 transition"
                  >
                    <span>View Profile</span>
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
