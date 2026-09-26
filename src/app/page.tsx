import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CELEBRITIES } from "@/data/celebrities";
import { CATEGORY_DEFINITIONS } from "@/data/celebrity-service";
import {
  Flame,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Search,
  Sparkles,
  BookOpen,
  DollarSign,
  Heart,
  Film,
  Crown,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CelebEdge | The Verified Celebrity Journal & Biographical Archives",
  description:
    "Independent celebrity journalism, verified biographical dossiers, career timelines, net worth evaluations, and official public records.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app",
  },
};

export default function HomePage() {
  const leadStory = CELEBRITIES.find((c) => c.slug === "tim-curry") || CELEBRITIES[0];
  const secondaryStories = CELEBRITIES.filter((c) => c.slug !== leadStory.slug).slice(0, 3);
  const latestStories = CELEBRITIES.slice(0, 9);
  const netWorthStories = CELEBRITIES.filter((c) => c.category === "net-worth" || c.quickFacts.netWorth.includes("Million") || c.quickFacts.netWorth.includes("Billion")).slice(0, 4);
  const relationshipStories = CELEBRITIES.filter((c) => c.category === "relationships" || c.relationshipProfile.status.includes("Married") || c.relationshipProfile.partner).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* 1. Publication Top Editorial Bar */}
      <div className="border-b border-slate-200 bg-white text-slate-600 text-xs py-2 px-4">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-800">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-500">
              Verified Public Archives & Entertainment Journal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              Primary Source Grounded
            </span>
            <span className="text-slate-300">•</span>
            <Link
              href="/editorial-standards"
              className="text-[11px] font-bold text-amber-800 hover:text-amber-900"
            >
              Editorial Standards & Verification
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Trending Bar */}
      <div className="border-b border-slate-200 bg-amber-500/5 py-2 px-4">
        <div className="mx-auto max-w-7xl flex items-center gap-3 overflow-hidden text-xs">
          <div className="flex items-center gap-1 text-amber-800 font-bold shrink-0">
            <Flame className="h-3.5 w-3.5 text-amber-600" />
            <span className="uppercase tracking-wider text-[11px]">Trending Dossiers:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
            {CELEBRITIES.map((celeb) => (
              <Link
                key={celeb.slug}
                href={`/celebrity/${celeb.slug}`}
                className="text-slate-600 hover:text-amber-700 font-medium px-2 py-0.5 rounded hover:bg-white transition"
              >
                {celeb.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Hero Magazine Feature Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Lead Feature (7 Columns) */}
          <article className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-100">
                <Image
                  src={leadStory.heroImage}
                  alt={`${leadStory.name} lead editorial portrait`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white font-bold text-xs shadow-md backdrop-blur-sm">
                    ⭐ Featured Cover Story
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs shadow-md">
                    {leadStory.silo}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
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
                  <span>•</span>
                  <span className="text-amber-700 font-semibold">
                    By {leadStory.editorialMetadata.authorName}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 group-hover:text-amber-700 transition tracking-tight leading-tight">
                  <Link href={`/celebrity/${leadStory.slug}`}>
                    {leadStory.name}: {leadStory.headline}
                  </Link>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
                  {leadStory.executiveSummary}
                </p>

                {/* Quick Facts Preview */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Age</span>
                    <span className="font-bold text-slate-900">{leadStory.quickFacts.age} Years</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Net Worth</span>
                    <span className="font-bold text-emerald-700">{leadStory.quickFacts.netWorth.split(" ")[0]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Status</span>
                    <span className="font-bold text-slate-900 truncate block">{leadStory.relationshipProfile.status.split(" ")[0]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Known For</span>
                    <span className="font-bold text-slate-900 truncate block">{leadStory.quickFacts.knownFor.split(",")[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-8 pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">
                Verified by {leadStory.editorialMetadata.factCheckedBy}
              </span>
              <Link
                href={`/celebrity/${leadStory.slug}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-sm"
              >
                <span>Read Verified Dossier</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Secondary Editorial Stories (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-amber-600" />
                Editor&apos;s Essential Dossiers
              </h2>
              <span className="text-xs text-slate-500 font-medium">Curated Daily</span>
            </div>

            {secondaryStories.map((story) => (
              <article
                key={story.slug}
                className="group rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition flex gap-4 items-center"
              >
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={story.heroImage}
                    alt={`${story.name} portrait`}
                    fill
                    sizes="112px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {story.silo}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {story.editorialMetadata.readingTimeMinutes} min read
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition leading-snug truncate">
                    <Link href={`/celebrity/${story.slug}`}>
                      {story.name}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {story.executiveSummary}
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-700 text-[11px]">
                      {story.quickFacts.netWorth.split(" ")[0]} Net Worth
                    </span>
                    <Link
                      href={`/celebrity/${story.slug}`}
                      className="font-bold text-slate-900 group-hover:text-amber-700 inline-flex items-center gap-1 text-[11px]"
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Journal Category Selector Navigation */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                Explore Editorial Archives by Subject
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Browse our focused journalistic archives organized by verified biographical categories.
              </p>
            </div>
            <Link
              href="/editorial-standards"
              className="text-xs font-bold text-amber-800 hover:underline shrink-0"
            >
              How CelebEdge Verifies Facts →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(CATEGORY_DEFINITIONS).map(([slug, def]) => {
              const iconMap: Record<string, React.ReactNode> = {
                "biographies": <BookOpen className="h-4 w-4 text-amber-700" />,
                "relationships": <Heart className="h-4 w-4 text-pink-600" />,
                "net-worth": <DollarSign className="h-4 w-4 text-emerald-700" />,
                "movies-tv": <Film className="h-4 w-4 text-indigo-700" />,
                "legends": <Crown className="h-4 w-4 text-purple-700" />
              };

              return (
                <Link
                  key={slug}
                  href={`/category/${slug}`}
                  className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 hover:bg-white hover:border-amber-400 hover:shadow-xs transition group"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {iconMap[slug] || <Sparkles className="h-4 w-4 text-amber-600" />}
                    <span className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition">
                      {def.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {def.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Latest Verified Celebrity Stories Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
              Journal Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Latest Published Celebrity Dossiers
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-semibold">
            {CELEBRITIES.length} In-Depth Profiles Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestStories.map((item) => (
            <article
              key={item.slug}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.heroImage}
                    alt={`${item.name} portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold text-amber-800 border border-slate-200 shadow-xs">
                      {item.silo}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2.5 font-medium">
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
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-800">
                    {item.editorialMetadata.authorName.charAt(0)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 truncate max-w-[120px]">
                    {item.editorialMetadata.authorName}
                  </span>
                </div>

                <Link
                  href={`/celebrity/${item.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800 transition"
                >
                  <span>Read Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Spotlight Section: Wealth & Financial Audits */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Industry Economic Intelligence
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Celebrity Net Worth & Asset Evaluations
              </h2>
            </div>
            <Link
              href="/category/net-worth"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:underline"
            >
              <span>View All Financial Portfolios</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {netWorthStories.map((c) => (
              <Link
                key={c.slug}
                href={`/celebrity/${c.slug}`}
                className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 hover:bg-white hover:border-emerald-500 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
                      <Image
                        src={c.heroImage}
                        alt={`${c.name} avatar`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition leading-snug">
                        {c.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 block">
                        {c.quickFacts.primaryRole.split(",")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3.5 border border-slate-200 mb-3">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Certified Valuation
                    </span>
                    <span className="text-lg font-black text-emerald-700 block mt-0.5">
                      {c.quickFacts.netWorth}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                    {c.metrics[0]?.label}: {c.metrics[0]?.value} ({c.metrics[0]?.verifiedSource})
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                  <span>Audit Breakdown</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Editorial Standards & Fact-Checking Assurance */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-500/10 via-white to-slate-50 p-8 sm:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-900 border border-amber-200 mb-4">
              <ShieldCheck className="h-4 w-4 text-amber-700" />
              <span>Google Quality & Helpful Content Standards Compliant</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              The CelebEdge Editorial Charter: Primary Sources, Zero Rumors
            </h2>

            <p className="text-sm text-slate-600 mt-4 leading-relaxed font-normal">
              Every celebrity dossier published across CelebEdge undergoes rigorous multi-layer verification. We cross-reference municipal marriage licenses, SEC financial disclosures, verified trade press archives (Variety, The Hollywood Reporter, Deadline), and certified agency filings to ensure authentic biographical precision.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/editorial-standards"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-sm"
              >
                Read Complete Editorial Policy
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition shadow-xs"
              >
                Meet the Research Directorate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
