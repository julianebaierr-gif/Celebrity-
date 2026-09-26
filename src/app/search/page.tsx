import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { searchCelebrities } from "@/data/celebrity-service";
import { Search, ArrowRight, ShieldCheck, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Search 9,500+ Verified Celebrity Dossiers | CelebEdge",
  description: "Search our independent public record and journalistic directory covering 9,500+ celebrity profiles, verified net worth, and filmographies.",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string; silo?: string; page?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "", silo = "", page = "1" } = await searchParams;
  const currentPage = parseInt(page) || 1;
  const { items, total, totalPages } = searchCelebrities(q, silo, currentPage, 24);

  const silos = [
    "All Categories",
    "Celebrity Profiles & Bios",
    "Spouses & Relationships",
    "Net Worth & Wealth",
    "Health & Transformations",
    "High-CPC Cash Cows"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-10 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Celebrity Archive Search
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-normal">
            Query 9,570+ verified public records, biographical timelines, and financial audits.
          </p>

          {/* Form */}
          <form action="/search" method="GET" className="mt-6 max-w-2xl flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search by celebrity name, film credit, or topic..."
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl pl-11 pr-4 py-3 border border-slate-300 focus:outline-none focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition"
              />
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
            {silo && <input type="hidden" name="silo" value={silo} />}
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-sm shrink-0"
            >
              Search
            </button>
          </form>

          {/* Silo Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-5 text-xs font-semibold">
            {silos.map((s) => {
              const isActive = s === "All Categories" ? !silo : silo.toLowerCase() === s.toLowerCase();
              const targetUrl = s === "All Categories" ? `/search?q=${encodeURIComponent(q)}` : `/search?q=${encodeURIComponent(q)}&silo=${encodeURIComponent(s)}`;
              return (
                <Link
                  key={s}
                  href={targetUrl}
                  className={`px-3 py-1.5 rounded-full border transition ${
                    isActive
                      ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {s}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Results Section */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
          <span className="text-sm font-bold text-slate-700">
            {total.toLocaleString()} Verified Records Found {q ? `for "${q}"` : ""}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            Page {currentPage} of {totalPages || 1}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center max-w-lg mx-auto my-12 shadow-xs">
            <Search className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No Verified Records Found</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              We couldn&apos;t find any verified dossiers matching your search terms. Try searching by surname or exploring our A–Z directory.
            </p>
            <Link
              href="/#directory-index"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline"
            >
              <span>Browse A–Z Directory</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/celebrity/${item.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
                      {item.silo}
                    </span>
                    <span className="font-mono text-slate-500 font-medium">
                      {(item.volume).toLocaleString()} Searches/mo
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition">
                    {item.name}
                  </h3>

                  {item.secondaries && (
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-2 leading-relaxed font-normal">
                      Topics: {item.secondaries}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-700">
                  <span>View Verified Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {currentPage > 1 && (
              <Link
                href={`/search?q=${encodeURIComponent(q)}&silo=${encodeURIComponent(silo)}&page=${currentPage - 1}`}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs"
              >
                Previous
              </Link>
            )}
            <span className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-xs">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link
                href={`/search?q=${encodeURIComponent(q)}&silo=${encodeURIComponent(silo)}&page=${currentPage + 1}`}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
