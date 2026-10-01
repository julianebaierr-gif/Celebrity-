import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getCompareCelebrities } from "@/data/celebrity-service";
import CelebrityCompareClient from "@/components/compare/CelebrityCompareClient";
import JsonLd from "@/components/seo/JsonLd";
import { ArrowRight, ChevronRight, ArrowLeftRight, TrendingUp } from "lucide-react";
import { formatNetWorth } from "@/lib/celebrity-utils";

export const metadata: Metadata = {
  title: "Celebrity Net Worth & Career Comparison | CelebLedger",
  description:
    "Compare celebrity net worth, career milestones, box office gross, age, relationships, and financial dossiers side-by-side in 2026.",
  alternates: {
    canonical: "https://www.celebledger.com/compare",
  },
  openGraph: {
    title: "Celebrity Net Worth & Career Comparison | CelebLedger",
    description:
      "Interactive head-to-head celebrity comparison tool. Analyze net worth differentials, box office metrics, and career milestones.",
    url: "https://www.celebledger.com/compare",
    siteName: "CelebLedger",
  },
};

const FEATURED_MATCHUPS = [
  {
    slug1: "drake",
    slug2: "youngboy-never-broke-again",
    title: "Drake vs YoungBoy Never Broke Again",
    sub: "Billion-Stream Hip-Hop Royalty & Independent Streaming Ledgers",
    category: "Music & Hip-Hop",
  },
  {
    slug1: "zendaya",
    slug2: "jenna-ortega",
    title: "Zendaya vs Jenna Ortega",
    sub: "Next-Gen Hollywood Powerhouses & Prestige Television Icons",
    category: "Hollywood Actresses",
  },
  {
    slug1: "cillian-murphy",
    slug2: "keanu-reeves",
    title: "Cillian Murphy vs Keanu Reeves",
    sub: "Oscar Winners & Action Franchise Pillars",
    category: "A-List Leading Men",
  },
  {
    slug1: "leonardo-dicaprio",
    slug2: "robert-redford",
    title: "Leonardo DiCaprio vs Robert Redford",
    sub: "Cinema Legends, Academy Awards & Environmental Philanthropy",
    category: "Hollywood Legends",
  },
  {
    slug1: "margot-robbie",
    slug2: "winona-ryder",
    title: "Margot Robbie vs Winona Ryder",
    sub: "Blockbuster Producer Equity vs 90s Cult Cinema Stardom",
    category: "Hollywood Actresses",
  },
  {
    slug1: "travis-kelce",
    slug2: "taylor-swift-wedding",
    title: "Travis Kelce vs Taylor Swift",
    sub: "NFL Super Bowl Champion vs Billionaire Pop Icon Economics",
    category: "Culture & Entertainment",
  },
  {
    slug1: "david-harbour",
    slug2: "pedro-pascal",
    title: "David Harbour vs Pedro Pascal",
    sub: "Television Powerhouses & Franchise Leading Men Economics",
    category: "Hollywood Leading Men",
  },
  {
    slug1: "matt-damon",
    slug2: "will-smith",
    title: "Matt Damon vs Will Smith",
    sub: "Oscar Winners, Production Houses & Global Box Office Titans",
    category: "Cinema Titans",
  },
];

export default function CompareHubPage() {
  const compareCelebrities = getCompareCelebrities();

  const breadcrumbs = [
    { name: "Home", url: "https://www.celebledger.com" },
    { name: "Compare Tool", url: "https://www.celebledger.com/compare" },
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} />
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Breadcrumbs */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <span className="text-amber-700 font-bold">Celebrity Compare Tool</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold">
              <ArrowLeftRight className="h-3.5 w-3.5" />
              <span>CelebLedger Comparative Intelligence</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Celebrity Net Worth &amp; Career Comparison Tool
            </h1>
            <p className="text-base text-slate-600 max-w-3xl font-normal leading-relaxed">
              Compare any two entertainment icons side-by-side. Analyze certified net worth gaps, career box office milestones, streaming numbers, marital records, and verified financial assets.
            </p>
          </div>
        </header>

        {/* Interactive Comparison Application */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-14">
          <CelebrityCompareClient
            celebrities={compareCelebrities}
            initialSlug1="drake"
            initialSlug2="youngboy-never-broke-again"
          />

          {/* Popular Matchups Section */}
          <section className="space-y-6">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
                  Trending Matchups
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  High-Interest Head-to-Head Dossiers
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_MATCHUPS.map((matchup) => {
                const c1 = compareCelebrities.find((c) => c.slug === matchup.slug1);
                const c2 = compareCelebrities.find((c) => c.slug === matchup.slug2);
                if (!c1 || !c2) return null;

                return (
                  <div
                    key={`${matchup.slug1}-vs-${matchup.slug2}`}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center -space-x-3">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-xs bg-slate-950">
                            <Image
                              src={c1.heroImage}
                              alt={c1.name}
                              fill
                              sizes="48px"
                              className="object-cover object-top"
                            />
                          </div>
                          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-xs bg-slate-950">
                            <Image
                              src={c2.heroImage}
                              alt={c2.name}
                              fill
                              sizes="48px"
                              className="object-cover object-top"
                            />
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {matchup.category}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {matchup.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {matchup.sub}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-700">
                          {formatNetWorth(c1.quickFacts.netWorth)}
                        </span>
                        <span className="font-bold text-amber-700 text-[11px]">vs</span>
                        <span className="font-semibold text-slate-700">
                          {formatNetWorth(c2.quickFacts.netWorth)}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/compare/${matchup.slug1}-vs-${matchup.slug2}`}
                      className="mt-4 w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold transition-colors"
                    >
                      <span>Read Comparison Dossier</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Forensic Methodology & Comparative Wealth Architecture Guide */}
          <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8">
            <div className="max-w-3xl space-y-2 border-b border-slate-100 pb-5">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                Newsroom Intelligence
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Comparative Celebrity Economics: How Net Worth Gaps Are Audited
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Evaluating the financial gap between two high-profile cultural icons requires disentangling reported headline earnings from underlying balance-sheet realities. CelebLedger utilizes a four-pillar comparative forensic framework to analyze wealth accumulation, liquidity, and asset durability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
              <div className="space-y-3 rounded-2xl bg-slate-50/60 p-6 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                  1. Theatrical Backend Points vs. Streaming Buyouts
                </h3>
                <p>
                  In Hollywood comparisons (e.g., Cillian Murphy vs. Keanu Reeves or Matt Damon vs. Will Smith), upfront talent compensation represents only a baseline. Premier talent often negotiates first-dollar gross participation—commanding 10% to 20% of theatrical film rentals once production costs break even. In contrast, direct-to-consumer streaming productions utilize flat buyout fees that front-load compensation but eliminate generational backend residual streams.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl bg-slate-50/60 p-6 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                  2. Master Rights Ownership vs. Distribution Advances
                </h3>
                <p>
                  In music industry comparisons (e.g., Drake vs. YoungBoy Never Broke Again), net worth velocity is driven by publishing equity and master recording ownership. Independent creators retaining 100% master rights capture up to $3,500 to $4,200 per million Spotify streams, whereas traditional major-label signees often yield only 15% to 22% after royalty recoupment of upfront marketing advances.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl bg-slate-50/60 p-6 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                  3. Commercial Brand Endorsements &amp; Consumer Equity
                </h3>
                <p>
                  Modern icon dossiers demonstrate that long-term enterprise value outpaces performance salaries. A-list luxury ambassadors (such as Zendaya for Bulgari and Louis Vuitton or Jeremy Allen White for Calvin Klein) combine multi-year guaranteed retainers with performance bonuses. Meanwhile, creator-entrepreneurs (such as Kylie Jenner with Kylie Cosmetics) construct balance sheets anchored in institutional private equity recapitalizations.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl bg-slate-50/60 p-6 border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                  4. Architectural Compounds &amp; Tangible Asset Reserves
                </h3>
                <p>
                  Wealth preservation is heavily dependent on tangible real estate holdings in tier-one metropolitan enclaves including Beverly Hills, Malibu, Tribeca, and London. CelebLedger cross-checks county deed registries and LLC title filings to authenticate asset cost basis, outstanding mortgages, and estimated market appreciation across all evaluated portfolios.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
