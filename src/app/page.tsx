import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CELEBRITIES } from "@/data/celebrities";
import { Flame, Sparkles, TrendingUp, ShieldCheck, Heart, DollarSign, ArrowRight, Search, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "CelebEdge | Verified Celebrity Intel, Wealth & Filmography Archives",
  description: "Independent, fact-checked directory covering 9,500+ celebrity profiles, verified net worth, relationship timelines, and complete filmography records.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app",
  },
};

export default function HomePage() {
  const featured = CELEBRITIES[0]; // Finn Wolfhard
  const trendingList = CELEBRITIES;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero Showcase Section */}
      <section className="relative overflow-hidden border-b border-neutral-900 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-neutral-950 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs font-semibold text-neutral-300 border border-neutral-800 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>9,570+ Verified Celebrity Profiles Active in 2026 Archive</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none mb-6">
            VERIFIED CELEBRITY <br />
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-amber-200 bg-clip-text text-transparent">
              INTEL & ARCHIVES
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed mb-8">
            The definitive, fact-checked dossier network. Zero AI hallucination, verified primary sources, economic benchmarks, and anti-cannibalization topic authority.
          </p>

          {/* Quick Search Input */}
          <div className="mx-auto max-w-xl relative mb-8">
            <input
              type="text"
              placeholder="Search actors, net worth, spouses, or filmography..."
              className="w-full bg-neutral-900/90 text-white placeholder-neutral-500 text-sm rounded-2xl pl-12 pr-28 py-4 border border-neutral-800 shadow-2xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition backdrop-blur"
            />
            <Search className="absolute left-4 top-4 h-5 w-5 text-neutral-500 pointer-events-none" />
            <button className="absolute right-2.5 top-2.5 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-neutral-950 font-bold text-xs hover:opacity-90 transition">
              Explore
            </button>
          </div>

          {/* Trust Metrics Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>E-E-A-T Certified</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <Sparkles className="h-4 w-4" />
              <span>Zero Keyword Cannibalization</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-400">
              <ShieldCheck className="h-4 w-4" />
              <span>100% Legal Media Rights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spotlight Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider mb-1">
              <Flame className="h-4 w-4" />
              <span>Editor&apos;s Featured Spotlight</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Dossier of the Week
            </h2>
          </div>
          <Link
            href={`/celebrity/${featured.slug}`}
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-amber-400 hover:underline"
          >
            <span>Read Complete Investigation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Big Spotlight Card */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur shadow-2xl overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src={featured.heroImage}
                alt={featured.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-neutral-800">
                ⭐ Priority Target
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  {featured.silo}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  Monthly Searches: {(featured.searchVolume).toLocaleString()}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white">
                {featured.name}
              </h3>

              <p className="text-base text-neutral-300 leading-relaxed font-medium">
                {featured.headline}
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {featured.directAnswerBio}
              </p>

              {/* Quick stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px] uppercase">Net Worth</span>
                  <span className="text-emerald-400 font-bold text-sm">{featured.quickFacts.netWorth}</span>
                </div>
                <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px] uppercase">Age & Birthplace</span>
                  <span className="text-white font-bold text-sm">{featured.quickFacts.age} yrs • Canada</span>
                </div>
                <div className="rounded-xl bg-neutral-950 p-3 border border-neutral-800 col-span-2 sm:col-span-1">
                  <span className="text-neutral-500 block text-[10px] uppercase">Iconic Role</span>
                  <span className="text-amber-400 font-bold text-sm truncate block">Stranger Things</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/celebrity/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-neutral-950 font-bold text-sm hover:opacity-95 transition shadow-lg shadow-amber-500/10"
                >
                  <span>Open Full Verified Dossier</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Master Grid */}
      <section id="trending" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-neutral-900">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
            <TrendingUp className="h-4 w-4" />
            <span>High-Search Authority Targets</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Trending Celebrity Dossiers
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Zero-difficulty (KD 0) high-traffic profiles structured with Google Discover standards and rich schema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingList.map((celeb) => (
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

                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  {celeb.silo}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {celeb.name}
                </h3>

                <p className="text-xs text-neutral-400 line-clamp-3 mt-2 leading-relaxed">
                  {celeb.directAnswerBio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>View Fact-Checked Dossier</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Content Silos Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-neutral-900">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
            Topical Architecture
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Explore Dedicated Content Silos
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Structured clusters designed to build topical authority across celebrity categories without cannibalization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur space-y-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              ⚡
            </span>
            <h3 className="text-lg font-bold text-white">Celebrity Profiles</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              In-depth career milestones, education, awards, and early life verified archives.
            </p>
            <span className="text-xs font-bold text-amber-400 block pt-1">7,000+ Profiles</span>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur space-y-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400">
              <Heart className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-white">Spouses & Dating</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Public relationship records, wedding facts, partner biographies, and timeline truth.
            </p>
            <span className="text-xs font-bold text-pink-400 block pt-1">523 Relationship Hubs</span>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur space-y-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <DollarSign className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-white">Net Worth & Wealth</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Forbes & Bloomberg referenced asset evaluations, salaries, and real estate holdings.
            </p>
            <span className="text-xs font-bold text-emerald-400 block pt-1">509 Financial Analyses</span>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur space-y-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-white">E-E-A-T Standards</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Rigorous editorial policies, corrections process, and media compliance safeguards.
            </p>
            <span className="text-xs font-bold text-blue-400 block pt-1">100% Policy Clean</span>
          </div>
        </div>
      </section>
    </div>
  );
}
