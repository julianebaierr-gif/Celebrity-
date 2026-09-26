import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getCelebritiesByLetter } from "@/data/celebrity-service";
import { BookOpen, ArrowRight, ChevronRight } from "lucide-react";

interface LetterPageProps {
  params: Promise<{ letter: string }>;
  searchParams: Promise<{ page?: string }>;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export async function generateStaticParams() {
  return ALPHABET.map((letter) => ({ letter: letter.toLowerCase() }));
}

export async function generateMetadata({ params }: LetterPageProps): Promise<Metadata> {
  const { letter } = await params;
  const upper = letter.toUpperCase();

  return {
    title: `Celebrities Starting With Letter "${upper}" | CelebEdge Directory`,
    description: `Browse all verified celebrity biographies, economic records, and filmography profiles starting with letter ${upper}.`,
  };
}

export default async function DirectoryLetterPage({ params, searchParams }: LetterPageProps) {
  const { letter } = await params;
  const { page = "1" } = await searchParams;
  const currentPage = parseInt(page) || 1;
  const upper = letter.toUpperCase();

  const { items, total, totalPages } = getCelebritiesByLetter(upper, currentPage, 30);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link href="/#directory-index" className="hover:text-amber-700 transition-colors">A–Z Directory</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-700 font-bold truncate">Letter &quot;{upper}&quot;</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 border border-indigo-200">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Alphabetical Directory Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Celebrities Starting With &quot;{upper}&quot;
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl font-normal">
            Displaying {total.toLocaleString()} certified dossiers and public records cataloged under the letter {upper}.
          </p>

          {/* Quick Alphabet Filter Bar */}
          <div className="flex flex-wrap gap-1.5 pt-3">
            {ALPHABET.map((char) => {
              const isSelected = char === upper;
              return (
                <Link
                  key={char}
                  href={`/directory/${char.toLowerCase()}`}
                  className={`h-9 w-9 flex items-center justify-center rounded-xl text-xs font-extrabold transition shadow-xs ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  {char}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* List */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {currentPage > 1 && (
              <Link
                href={`/directory/${letter}?page=${currentPage - 1}`}
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
                href={`/directory/${letter}?page=${currentPage + 1}`}
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
