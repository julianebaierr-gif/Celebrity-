import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllCelebrities, getCompleteOrDynamicProfile } from "@/data/celebrity-service";
import CelebrityCompareClient from "@/components/compare/CelebrityCompareClient";
import JsonLd from "@/components/seo/JsonLd";
import { ChevronRight, ArrowRight, ArrowLeftRight, CheckCircle2, DollarSign } from "lucide-react";
import { formatNetWorth } from "@/lib/celebrity-utils";

interface PageProps {
  params: Promise<{ matchup: string }>;
}

export const dynamicParams = true;

const POPULAR_MATCHUPS = [
  "drake-vs-youngboy-never-broke-again",
  "zendaya-vs-jenna-ortega",
  "cillian-murphy-vs-keanu-reeves",
  "leonardo-dicaprio-vs-robert-redford",
  "margot-robbie-vs-winona-ryder",
  "travis-kelce-vs-taylor-swift-wedding",
  "david-harbour-vs-pedro-pascal",
  "matt-damon-vs-will-smith",
];

export async function generateStaticParams() {
  return POPULAR_MATCHUPS.map((m) => ({ matchup: m }));
}

function parseMatchup(matchup: string) {
  const parts = matchup.split("-vs-");
  if (parts.length !== 2) return null;
  return { slug1: parts[0], slug2: parts[1] };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { matchup } = await params;
  const parsed = parseMatchup(matchup);
  if (!parsed) return {};

  const c1 = getCompleteOrDynamicProfile(parsed.slug1);
  const c2 = getCompleteOrDynamicProfile(parsed.slug2);
  if (!c1 || !c2) return {};

  const metaTitle = `${c1.name} vs ${c2.name} Net Worth & Bio | CelebLedger`;
  const metaDescription = `Compare ${c1.name} (${formatNetWorth(c1.quickFacts.netWorth)}) vs ${c2.name} (${formatNetWorth(c2.quickFacts.netWorth)}) net worth, career milestones, box office, and 2026 earnings.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://www.celebledger.com/compare/${matchup}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.celebledger.com/compare/${matchup}`,
      siteName: "CelebLedger",
      images: [
        {
          url: c1.heroImage,
          width: 600,
          height: 630,
          alt: `${c1.name} vs ${c2.name} comparison`,
        },
      ],
    },
  };
}

export default async function MatchupComparePage({ params }: PageProps) {
  const { matchup } = await params;
  const parsed = parseMatchup(matchup);
  if (!parsed) notFound();

  const c1 = getCompleteOrDynamicProfile(parsed.slug1);
  const c2 = getCompleteOrDynamicProfile(parsed.slug2);
  if (!c1 || !c2) notFound();

  const allCelebrities = getAllCelebrities();

  const breadcrumbs = [
    { name: "Home", url: "https://www.celebledger.com" },
    { name: "Compare Tool", url: "https://www.celebledger.com/compare" },
    { name: `${c1.name} vs ${c2.name}`, url: `https://www.celebledger.com/compare/${matchup}` },
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} />
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <Link href="/compare" className="hover:text-amber-700 transition-colors">Compare</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <span className="text-amber-700 font-bold">{c1.name} vs {c2.name}</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <header className="border-b border-slate-200 bg-white py-12 shadow-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold">
              <span>{c1.name} ({formatNetWorth(c1.quickFacts.netWorth)})</span>
              <span className="text-amber-400">VS</span>
              <span>{c2.name} ({formatNetWorth(c2.quickFacts.netWorth)})</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {c1.name} vs {c2.name}: Net Worth, Career &amp; Earnings Comparison (2026)
            </h1>

            <p className="text-base text-slate-600 max-w-3xl font-normal leading-relaxed">
              An exhaustive economic comparison examining authenticated net worth valuations, streaming royalties, box office residuals, signature milestones, and verified lifestyle assets between {c1.name} and {c2.name}.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Interactive Comparison Component */}
          <CelebrityCompareClient
            celebrities={allCelebrities}
            initialSlug1={c1.slug}
            initialSlug2={c2.slug}
          />

          {/* Editorial Analysis Section */}
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-4">
              Financial Architecture &amp; Key Economic Differentiators
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                  <span>{c1.name}: Core Wealth Engines</span>
                </h3>
                <p>
                  {c1.name} commands an audited net worth of <strong>{c1.quickFacts.netWorth}</strong>. Primary wealth drivers include high-margin equity participations, multi-million-dollar upfront fees, and extensive catalog or production ownership across {c1.silo.toLowerCase()}.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <div className="font-bold text-slate-900">Career Headline:</div>
                  <div className="text-slate-600">{c1.headline}</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-900" />
                  <span>{c2.name}: Core Wealth Engines</span>
                </h3>
                <p>
                  {c2.name} maintains an authenticated net worth of <strong>{c2.quickFacts.netWorth}</strong>. Financial strength stems from established industry contracts, ongoing royalty distributions, and strategic commercial ventures across {c2.silo.toLowerCase()}.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <div className="font-bold text-slate-900">Career Headline:</div>
                  <div className="text-slate-600">{c2.headline}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Comparison Matchups */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Explore More Celebrity Comparisons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {POPULAR_MATCHUPS.filter((m) => m !== matchup).slice(0, 4).map((otherMatchup) => {
                const parts = parseMatchup(otherMatchup);
                if (!parts) return null;
                const oc1 = allCelebrities.find((c) => c.slug === parts.slug1);
                const oc2 = allCelebrities.find((c) => c.slug === parts.slug2);
                if (!oc1 || !oc2) return null;

                return (
                  <Link
                    key={otherMatchup}
                    href={`/compare/${otherMatchup}`}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xs transition block text-xs"
                  >
                    <div className="font-bold text-slate-900 truncate">
                      {oc1.name} vs {oc2.name}
                    </div>
                    <div className="text-slate-500 mt-1 flex items-center justify-between">
                      <span>{formatNetWorth(oc1.quickFacts.netWorth)} vs {formatNetWorth(oc2.quickFacts.netWorth)}</span>
                      <ArrowRight className="h-3 w-3 text-amber-600" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
