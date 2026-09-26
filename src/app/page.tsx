import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CELEBRITIES } from "@/data/celebrities";
import { Flame, Sparkles, TrendingUp, ShieldCheck, Heart, DollarSign, ArrowRight, Search, CheckCircle2, BookOpen, Star, Award, Film, Users, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "CelebEdge | Verified Celebrity Intel, Wealth & Filmography Archives",
  description: "The authoritative public record and journalistic directory covering 9,500+ celebrity profiles, verified net worth, relationship timelines, and filmography archives.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app",
  },
};

export default function HomePage() {
  const featured = CELEBRITIES[0]; // Finn Wolfhard
  const trendingList = CELEBRITIES;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 1. Live Editorial Ticker / Marquee */}
      <div className="border-b border-slate-200 bg-amber-500/10 text-amber-950 px-4 py-2 text-xs font-semibold">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1 rounded bg-amber-500 text-slate-950 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider shrink-0">
              ARCHIVE UPDATE
            </span>
            <span className="truncate text-slate-700">
              9,570+ verified profiles active • Tim Curry 80th Milestone recorded • Stranger Things S5 production updates certified
            </span>
          </div>
          <Link href="/editorial-standards" className="hidden sm:inline-flex text-[11px] font-bold text-amber-800 hover:underline shrink-0">
            Fact-Checking Methodology →
          </Link>
        </div>
      </div>

      {/* 2. Grand Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-24 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-700 border border-slate-200 mb-6 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Independent Public Record & Biographical Intelligence Network</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-none mb-6">
            VERIFIED CELEBRITY <br />
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 bg-clip-text text-transparent">
              BIOGRAPHICAL ARCHIVES
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mb-10 font-normal">
            The definitive, fact-checked entertainment registry. Grounded in primary sources, verified studio filings, economic indicators, and complete filmography records.
          </p>

          {/* Quick Search Input */}
          <form action="/search" method="GET" className="mx-auto max-w-2xl relative mb-8">
            <input
              type="text"
              name="q"
              placeholder="Search by actor name, verified net worth, spouse, or film credit..."
              className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm rounded-2xl pl-13 pr-32 py-4.5 border border-slate-300 shadow-lg focus:outline-none focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition"
            />
            <Search className="absolute left-4.5 top-4.5 h-5 w-5 text-slate-400 pointer-events-none" />
            <button
              type="submit"
              className="absolute right-2.5 top-2.5 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-sm"
            >
              Search Archive
            </button>
          </form>

          {/* Key Stat Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-left">
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 shadow-xs">
              <span className="text-2xl font-black text-slate-900 block">9,570+</span>
              <span className="text-xs text-slate-500 font-medium">Verified Dossiers</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 shadow-xs">
              <span className="text-2xl font-black text-amber-700 block">285M+</span>
              <span className="text-xs text-slate-500 font-medium">Monthly Public Interest</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 shadow-xs">
              <span className="text-2xl font-black text-emerald-700 block">100%</span>
              <span className="text-xs text-slate-500 font-medium">Primary Source Backed</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 shadow-xs">
              <span className="text-2xl font-black text-indigo-700 block">0%</span>
              <span className="text-xs text-slate-500 font-medium">Unverified Rumors</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Editorial Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Flame className="h-4 w-4" />
              <span>Editor&apos;s Featured Dossier</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Spotlight Profile of the Week
            </h2>
          </div>
          <Link
            href={`/celebrity/${featured.slug}`}
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800"
          >
            <span>Read Full Examination</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Big Spotlight Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-104 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src={featured.heroImage}
                alt={featured.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-extrabold text-amber-800 border border-slate-200 shadow-xs">
                ⭐ Priority Feature
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {featured.silo}
                </span>
                <span className="text-xs text-slate-500 font-mono font-medium">
                  Monthly Searches: {(featured.searchVolume).toLocaleString()}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {featured.name}
              </h3>

              <p className="text-base text-slate-700 font-semibold leading-relaxed">
                {featured.headline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {featured.executiveSummary}
              </p>

              {/* Quick stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Audited Net Worth</span>
                  <span className="text-emerald-700 font-bold text-sm">{featured.quickFacts.netWorth}</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Age & Birthplace</span>
                  <span className="text-slate-900 font-bold text-sm">{featured.quickFacts.age} yrs • Canada</span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Breakthrough Work</span>
                  <span className="text-amber-800 font-bold text-sm truncate block">Stranger Things</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/celebrity/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-amber-600 transition shadow-sm"
                >
                  <span>Open Complete Verified Dossier</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trending Dossiers Grid */}
      <section id="trending" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-1">
            <TrendingUp className="h-4 w-4" />
            <span>High-Demand Public Dossiers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Trending Biographies & Archives
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Certified profiles featuring multi-decade filmography, box office audits, and verified relationship records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingList.map((celeb) => (
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
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-900 border border-slate-200 shadow-xs">
                    {(celeb.searchVolume).toLocaleString()} Monthly Searches
                  </div>
                </div>

                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  {celeb.silo}
                </span>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {celeb.name}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mt-2 leading-relaxed font-normal">
                  {celeb.executiveSummary}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-700">
                <span>Examine Fact-Checked Dossier</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Master A–Z Directory Index */}
      <section id="directory-index" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mb-2">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Complete Archive Registry</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Browse All 9,500+ Profiles by Letter
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Access certified public records, filmographies, and economic audits sorted alphabetically.
          </p>
        </div>

        {/* Alphabet Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {alphabet.map((letter) => (
            <Link
              key={letter}
              href={`/directory/${letter.toLowerCase()}`}
              className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-800 font-extrabold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition shadow-xs"
            >
              {letter}
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Content Categories Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
            Curated Subject Archives
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Specialized Celebrity Archives
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Structured thematic archives engineered to deliver authoritative, verified coverage without duplication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/category/biographies"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xs hover:border-slate-300 hover:bg-white transition group space-y-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-black text-lg">
              ⚡
            </span>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition">
              Biographies & Bios
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              In-depth career milestones, educational credentials, and historic performance records.
            </p>
            <span className="text-xs font-bold text-amber-800 block pt-1">7,000+ Profiles Active →</span>
          </Link>

          <Link
            href="/category/relationships"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xs hover:border-slate-300 hover:bg-white transition group space-y-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-pink-700">
              <Heart className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-pink-700 transition">
              Spouses & Partnerships
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Certified marriage public records, wedding facts, partner biographies, and timeline truth.
            </p>
            <span className="text-xs font-bold text-pink-700 block pt-1">523 Relationship Hubs →</span>
          </Link>

          <Link
            href="/category/net-worth"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xs hover:border-slate-300 hover:bg-white transition group space-y-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
              <DollarSign className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">
              Net Worth & Assets
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Forbes & financial registry asset evaluations, backend royalties, and commercial equity.
            </p>
            <span className="text-xs font-bold text-emerald-800 block pt-1">509 Financial Audits →</span>
          </Link>

          <Link
            href="/editorial-standards"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xs hover:border-slate-300 hover:bg-white transition group space-y-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
              E-E-A-T Standards
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Rigorous editorial policies, corrections process, and media compliance safeguards.
            </p>
            <span className="text-xs font-bold text-blue-800 block pt-1">Certified Policy Bureau →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
