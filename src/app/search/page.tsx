import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { searchCelebrities } from "@/data/celebrity-service";
import { Search, ArrowRight, DollarSign } from "lucide-react";
import { getAgeBadgeText, formatNetWorth } from "@/lib/celebrity-utils";

export const metadata: Metadata = {
  title: "Search Celebrity Profiles | CelebEdge",
  description: "Search our directory of celebrity profiles, filmographies, and career overviews.",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const { items, total } = searchCelebrities(q);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Search Celebrities
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-normal max-w-2xl">
            Search our biographical profiles, filmography records, career milestones, and financial overviews.
          </p>

          {/* Form */}
          <form action="/search" method="GET" className="mt-6 max-w-2xl flex gap-2">
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

      {/* Results Section */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <span className="text-sm font-bold text-slate-700">
            {total} {total === 1 ? "Profile" : "Profiles"} Found {q ? `for "${q}"` : ""}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-lg mx-auto my-12 shadow-xs">
            <Search className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No Profiles Found</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              We couldn&apos;t find any profiles matching your search. Try searching for &quot;Cillian Murphy&quot;, &quot;Zendaya&quot;, or &quot;Tim Curry&quot;.
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
            {items.map((item) => (
              <article
                key={item.slug}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.heroImage}
                      alt={`${item.name} portrait - ${item.quickFacts.primaryRole}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

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
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {item.quickFacts.primaryRole.split(",")[0]}
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
