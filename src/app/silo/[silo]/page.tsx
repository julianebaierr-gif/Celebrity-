import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CELEBRITIES, CelebrityProfile } from "@/data/celebrities";
import { ArrowRight, ChevronRight, Layers } from "lucide-react";

interface SiloPageProps {
  params: Promise<{ silo: string }>;
}

function formatSiloSlug(silo: string): string {
  return silo.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
}

function getSiloFromSlug(slug: string): string | undefined {
  const match = CELEBRITIES.find(
    (c) => formatSiloSlug(c.silo) === slug.toLowerCase()
  );
  return match ? match.silo : undefined;
}

export async function generateStaticParams() {
  const uniqueSilos = Array.from(new Set(CELEBRITIES.map((c) => formatSiloSlug(c.silo))));
  return uniqueSilos.map((silo) => ({ silo }));
}

export async function generateMetadata({ params }: SiloPageProps): Promise<Metadata> {
  const { silo: siloSlug } = await params;
  const siloName = getSiloFromSlug(siloSlug) || "Category Archive";

  return {
    title: `${siloName} | Verified Intel & Dossiers | CelebEdge`,
    description: `Explore all verified dossiers, economic analyses, and complete records in the ${siloName} category.`,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  };
}

export default async function SiloArchivePage({ params }: SiloPageProps) {
  const { silo: siloSlug } = await params;
  const siloName = getSiloFromSlug(siloSlug);

  if (!siloName) {
    notFound();
  }

  const profiles = CELEBRITIES.filter((c) => c.silo === siloName);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-amber-700 font-bold truncate">{siloName}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200">
            <Layers className="h-3.5 w-3.5" />
            <span>Dedicated Content Silo</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {siloName}
          </h1>
          <p className="text-base text-slate-600 max-w-2xl font-normal">
            Fact-checked dossiers, verified data points, and complete investigations curated under the {siloName} topic cluster.
          </p>
        </div>
      </header>

      {/* Profile Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((celeb) => (
            <Link
              key={celeb.slug}
              href={`/celebrity/${celeb.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full rounded-xl overflow-hidden mb-4 border border-slate-200">
                  <Image
                    src={celeb.heroImage}
                    alt={celeb.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-900 border border-slate-200 shadow-xs">
                    {(celeb.searchVolume).toLocaleString()} Monthly Searches
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {celeb.name}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 mt-2 leading-relaxed font-normal">
                  {celeb.executiveSummary}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-700">
                <span>Explore Full Dossier</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
