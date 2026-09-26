import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getCelebritiesBySilo } from "@/data/celebrity-service";
import { ArrowRight, ChevronRight, Layers } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export const CATEGORY_DEFINITIONS: Record<string, { title: string; siloQuery: string; description: string }> = {
  "relationships": {
    title: "Celebrity Relationships & Spouses",
    siloQuery: "Spouses & Relationships",
    description: "Verified marriage public records, wedding facts, partner biographies, and timeline truth."
  },
  "net-worth": {
    title: "Celebrity Net Worth & Asset Portfolios",
    siloQuery: "Net Worth & Wealth",
    description: "Certified financial evaluations, real estate holdings, backend royalties, and commercial investments."
  },
  "biographies": {
    title: "Biographies & Career Archives",
    siloQuery: "Celebrity Profiles & Bios",
    description: "In-depth career milestones, educational credentials, and historic performance records across stage and screen."
  },
  "health-lifestyle": {
    title: "Health & Physical Transformations",
    siloQuery: "Health & Transformations",
    description: "Certified health milestones, fitness regimens, diet routines, and medical public statements."
  },
  "top-earners": {
    title: "Top Commercial Industry Earners",
    siloQuery: "High-CPC Cash Cows",
    description: "High-earning commercial talent, brand partnerships, and industry leading contracts."
  }
};

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
    title: `${def.title} | Verified Public Records | CelebEdge`,
    description: def.description,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  };
}

export default async function CategoryArchivePage({ params, searchParams }: CategoryPageProps) {
  const { category: catSlug } = await params;
  const { page = "1" } = await searchParams;
  const currentPage = parseInt(page) || 1;
  const def = CATEGORY_DEFINITIONS[catSlug.toLowerCase()];

  if (!def) {
    notFound();
  }

  const { items, total, totalPages } = getCelebritiesBySilo(def.siloQuery, currentPage, 30);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-700 font-bold truncate">{def.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 border border-amber-200">
            <Layers className="h-3.5 w-3.5" />
            <span>Curated Topic Category</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {def.title}
          </h1>
          <p className="text-base text-slate-600 max-w-2xl font-normal">
            Displaying {total.toLocaleString()} certified dossiers and verified records cataloged under {def.title}.
          </p>

          {/* Clean Category Selector Tabs */}
          <div className="flex flex-wrap gap-2 pt-3 text-xs font-semibold">
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
                  {item.title.split(" ")[0]} {item.title.split(" ")[1]}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Profile Grid */}
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
                href={`/category/${catSlug}?page=${currentPage - 1}`}
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
                href={`/category/${catSlug}?page=${currentPage + 1}`}
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
