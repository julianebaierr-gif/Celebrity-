import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllCelebrities } from "@/data/celebrity-service";
import {
  Clock,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { getAgeBadgeText, formatNetWorth } from "@/lib/celebrity-utils";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "CelebLedger | Celebrity Net Worth & Career Dossiers",
  description:
    "Browse official celebrity profiles, career timelines, filmography records, net worth analysis, and personal biographies.",
  alternates: {
    canonical: "https://www.celebledger.com/",
  },
};

function getNetWorthBadge(raw: string): string {
  const s = raw.toLowerCase();
  if (s.includes("forbes")) return "Forbes";
  if (s.includes("bloomberg")) return "Bloomberg";
  if (s.includes("billboard") || s.includes("riaa")) return "Billboard";
  if (s.includes("box office")) return "Box Office";
  if (s.includes("sec") || s.includes("disclosures")) return "SEC Record";
  if (s.includes("royalties")) return "Royalties";
  if (s.includes("catalog")) return "Catalog";
  if (s.includes("enterprise")) return "Enterprise";
  if (s.includes("contracts")) return "Contracts";
  if (s.includes("portfolio")) return "Portfolio";
  if (s.includes("audited")) return "Audited";
  return "Verified";
}

export default function HomePage() {
  const allCelebrities = getAllCelebrities();
  const leadStory = allCelebrities[0];
  const secondaryStories = allCelebrities.slice(1, 6);
  const latestStories = allCelebrities.slice(0, 9);
  const netWorthStories = allCelebrities
    .filter((c) => c.quickFacts?.netWorth?.includes("Million") || c.quickFacts?.netWorth?.includes("Billion"))
    .slice(0, 4);

  const itemList = allCelebrities.slice(0, 20).map((c) => ({
    name: c.name,
    url: `https://www.celebledger.com/celebrity/${c.slug}`,
    description: c.executiveSummary,
  }));

  return (
    <>
      <JsonLd isHomePage={true} itemList={itemList} />
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Banner with clean semantic H1 under 50 characters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/80 pb-3">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Celebrity Net Worth &amp; Financial Dossiers
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Forensically audited biographies, assets, and career ledgers
          </p>
        </div>
      </section>

      {/* Hero Magazine Feature Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Lead Feature (7 Columns) */}
          <article className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
            <div>
              <div className="relative h-80 sm:h-96 lg:h-[440px] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${leadStory.heroImage})` }}
                />
                <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
                <Image
                  src={leadStory.heroImage}
                  alt={`${leadStory.name} official portrait - ${leadStory.quickFacts.primaryRole}`.slice(0, 75)}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-center z-10 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5 font-medium">
                  <span className="font-bold text-amber-700 uppercase tracking-wider text-[11px]">
                    Featured Profile
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {new Date(leadStory.editorialMetadata.publishedDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {leadStory.editorialMetadata.readingTimeMinutes} min read
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 group-hover:text-amber-700 transition tracking-tight leading-tight">
                  <Link href={`/celebrity/${leadStory.slug}`}>
                    {leadStory.name}: Career &amp; Net Worth Dossier
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
                  {leadStory.executiveSummary}
                </p>

                {/* Quick Facts Preview - 3 Clean Columns without truncation */}
                <div className="grid grid-cols-3 gap-3 mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Age</span>
                    <span className="font-bold text-slate-900">{getAgeBadgeText(leadStory.quickFacts)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Net Worth</span>
                    <span className="font-bold text-emerald-700">
                      {formatNetWorth(leadStory.quickFacts.netWorth)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Profession</span>
                    <span className="font-bold text-slate-900 truncate block">
                      {leadStory.quickFacts.primaryRole.split(",")[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-8 pt-4 flex items-center justify-between border-t border-slate-100 mt-auto">
              <span className="text-xs text-slate-500 font-medium">
                By {leadStory.editorialMetadata.authorName}
              </span>
              <Link
                href={`/celebrity/${leadStory.slug}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-sm"
              >
                <span>Read Full Profile</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Secondary Editorial Stories (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-3.5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Trending Profiles
              </h2>
              <Link href="/celebrities" className="text-xs text-amber-700 font-semibold hover:underline">
                View All
              </Link>
            </div>

            {secondaryStories.map((story) => {
              const sentences = story.executiveSummary.split(/(?<=[a-z0-9\)'"]\.)\s+(?=[A-Z])/);
              let summaryText = sentences[0]?.trim() || story.executiveSummary;
              if (summaryText.length < 80 && sentences.length > 1) {
                summaryText += " " + sentences[1].trim();
              }

              return (
                <article
                  key={story.slug}
                  className="group rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-xs hover:border-amber-400 hover:shadow-md transition flex gap-4 items-center"
                >
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden bg-slate-950 shrink-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-lg opacity-35 scale-110 pointer-events-none"
                      style={{ backgroundImage: `url(${story.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
                    <Image
                      src={story.heroImage}
                      alt={`${story.name} portrait - ${story.quickFacts.primaryRole}`}
                      fill
                      sizes="112px"
                      className="object-contain object-center z-10 drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold text-slate-500">
                        {story.quickFacts.primaryRole.split(",")[0]}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {story.editorialMetadata.readingTimeMinutes} min read
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition leading-snug truncate">
                      <Link href={`/celebrity/${story.slug}`}>
                        {story.name}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {summaryText}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between text-xs">
                      <span className="font-semibold text-emerald-700 text-[11px]">
                        {formatNetWorth(story.quickFacts.netWorth)} Net Worth
                      </span>
                      <Link
                        href={`/celebrity/${story.slug}`}
                        className="font-bold text-slate-900 group-hover:text-amber-700 inline-flex items-center gap-1 text-[11px]"
                        aria-label={`Read full biography and net worth dossier for ${story.name}`}
                      >
                        <span>View Dossier</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Celebrity Stories Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
              Celebrity Biographies
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Latest Profiles
            </h2>
          </div>

          {/* View Directory Link */}
          <Link
            href="/celebrities"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition"
          >
            <span>View All Celebrities</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestStories.map((item) => (
            <article
              key={item.slug}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${item.heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
                  <Image
                    src={item.heroImage}
                    alt={`${item.name} portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-center z-10 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2.5 font-medium">
                    <span className="font-semibold text-amber-700">
                      {item.quickFacts.primaryRole.split(",")[0]}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-slate-400" />
                      {new Date(item.editorialMetadata.publishedDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-slate-400" />
                      {item.editorialMetadata.readingTimeMinutes} min read
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition tracking-tight leading-snug">
                    <Link href={`/celebrity/${item.slug}`}>
                      {item.name}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 mt-2.5 leading-relaxed font-normal">
                    {item.executiveSummary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-slate-500">
                  {formatNetWorth(item.quickFacts.netWorth)} Net Worth
                </span>

                <Link
                  href={`/celebrity/${item.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800 transition"
                  aria-label={`View full dossier and net worth analysis for ${item.name}`}
                >
                  <span>View Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Spotlight Section: Wealth & Careers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Celebrity Finances
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Net Worth & Earnings
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                See how top actors and filmmakers build their wealth, from early breakout roles to major box office paydays and backend profit deals.
              </p>
            </div>
            <Link
              href="/celebrities"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:underline shrink-0"
            >
              <span>View All Celebrities</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {netWorthStories.map((c) => {
              const parts = c.quickFacts.netWorth.split("(");
              const amount = parts[0].trim();
              const rawSource = parts[1] ? parts[1].replace(")", "").trim() : "Audited Record";
              const cleanSource = rawSource
                .replace(/\baudited valuation\b/gi, "")
                .replace(/\baudited estimates\b/gi, "")
                .replace(/\bvaluation\b/gi, "")
                .replace(/\bestimates\b/gi, "")
                .trim() || rawSource;

              const ms = c.careerMilestones[0];
              const msTitle = ms?.title || "";
              const msYear = ms?.year || "";
              const displayMilestone = msTitle.includes(msYear) ? msTitle : `${msTitle} (${msYear})`;

              return (
                <Link
                  key={c.slug}
                  href={`/celebrity/${c.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between shadow-xs h-full"
                >
                  <div>
                    {/* Celebrity Profile Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden bg-slate-100 shrink-0 border-2 border-slate-200 group-hover:border-emerald-500 transition-colors shadow-2xs">
                        <Image
                          src={c.heroImage}
                          alt={`${c.name} avatar`}
                          fill
                          sizes="56px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition leading-snug break-words">
                          {c.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                          <span className="truncate">{c.quickFacts.primaryRole.split(",")[0].replace(/^American\s+/i, "")}</span>
                          <span>•</span>
                          <span className="shrink-0">{getAgeBadgeText(c.quickFacts, true)}</span>
                        </div>
                      </div>
                    </div>


                    {/* Net Worth Box */}
                    <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200/90 mb-3.5">
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-400 gap-1.5 mb-1">
                        <span className="tracking-wider">Estimated Wealth</span>
                        <span className="text-emerald-700 font-bold text-[9px] uppercase tracking-wider bg-emerald-100/70 border border-emerald-200/70 px-2 py-0.5 rounded-full shrink-0 leading-tight">
                          {getNetWorthBadge(cleanSource)}
                        </span>
                      </div>
                      <span className="text-xl font-black text-emerald-700 block tracking-tight">
                        {amount}
                      </span>
                    </div>

                    {/* Career Milestone & Industry Benchmark */}
                    <div className="space-y-2.5 text-xs border-t border-slate-100 pt-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Career Milestone
                        </span>
                        <span className="font-bold text-slate-900 text-[11px] block mt-0.5 leading-snug break-words min-h-[34px]">
                          {displayMilestone}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Industry Benchmark
                        </span>
                        <p className="font-bold text-slate-900 text-[11px] mt-0.5 leading-snug break-words min-h-[34px]">
                          {c.metrics[0]?.benchmark}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition">
                    <span>View Financial Details</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Section Context Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <p className="leading-relaxed">
              Estimates are based on reported film salaries, box office earnings, and published financial records.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
