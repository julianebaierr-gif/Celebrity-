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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-neutral-900 bg-neutral-950/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-neutral-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-neutral-600" />
            <span className="text-amber-400 font-semibold truncate">{siloName}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-neutral-900 bg-gradient-to-b from-neutral-900/40 to-neutral-950 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/20">
            <Layers className="h-3.5 w-3.5" />
            <span>Dedicated Content Silo</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {siloName}
          </h1>
          <p className="text-base text-neutral-400 max-w-2xl">
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
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 backdrop-blur hover:border-amber-500/50 hover:bg-neutral-900/80 transition group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full rounded-xl overflow-hidden mb-4 border border-neutral-800/80">
                  <Image
                    src={celeb.heroImage}
                    alt={celeb.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-neutral-950/80 px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-400 border border-neutral-800">
                    KD {celeb.kd} • {(celeb.searchVolume).toLocaleString()}/mo
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {celeb.name}
                </h2>

                <p className="text-xs text-neutral-400 line-clamp-3 mt-2 leading-relaxed">
                  {celeb.directAnswerBio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-xs font-semibold text-amber-400">
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
