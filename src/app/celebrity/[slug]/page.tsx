import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getCompleteOrDynamicProfile } from "@/data/celebrity-service";
import { getAllCelebritySlugs } from "@/data/celebrities";
import JsonLd from "@/components/seo/JsonLd";
import QuickFactBox from "@/components/profile/QuickFactBox";
import TableOfContents from "@/components/profile/TableOfContents";
import ComparisonMetrics from "@/components/profile/ComparisonMetrics";
import FilmographyTable from "@/components/profile/FilmographyTable";
import FaqSection from "@/components/profile/FaqSection";
import EditorialBadge from "@/components/profile/EditorialBadge";
import EditorialBiography from "@/components/profile/EditorialBiography";
import { ChevronRight, ExternalLink } from "lucide-react";
import { getAgeBadgeText, formatNetWorth } from "@/lib/celebrity-utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCelebritySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const celebrity = getCompleteOrDynamicProfile(slug);

  if (!celebrity) {
    return { title: "Celebrity Dossier Not Found | CelebEdge" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://celeb-edge.vercel.app";
  const canonicalUrl = `${baseUrl}/celebrity/${celebrity.slug}`;

  return {
    title: `${celebrity.name}: Net Worth, Age, Filmography & Verified Facts | CelebEdge`,
    description: celebrity.executiveSummary.slice(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      title: `${celebrity.name} - Executive Biography & Verified Metrics`,
      description: celebrity.executiveSummary.slice(0, 160),
      url: canonicalUrl,
      siteName: "CelebEdge",
      images: [
        {
          url: celebrity.heroImage,
          width: 1200,
          height: 630,
          alt: `${celebrity.name} high-resolution editorial portrait`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${celebrity.name} | Verified Biography & Archives`,
      description: celebrity.executiveSummary.slice(0, 150),
      images: [celebrity.heroImage],
    },
  };
}

export default async function CelebrityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const celebrity = getCompleteOrDynamicProfile(slug);

  if (!celebrity) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://celeb-edge.vercel.app";
  const breadcrumbs = [
    { name: "Home", url: `${baseUrl}` },
    { name: "All Celebrities", url: `${baseUrl}/celebrities` },
    { name: celebrity.name, url: `${baseUrl}/celebrity/${celebrity.slug}` },
  ];

  return (
    <>
      <JsonLd celebrity={celebrity} breadcrumbs={breadcrumbs} />

      <article className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <Link href="/celebrities" className="hover:text-amber-700 transition-colors">
                All Celebrities
              </Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <span className="text-amber-700 font-bold truncate">{celebrity.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Header Section */}
        <header className="relative border-b border-slate-200 bg-white pt-10 pb-12 shadow-xs">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              {/* High-Resolution Hero Portrait (min 1200px WebP compliant) */}
              <div className="relative h-64 w-52 sm:h-72 sm:w-56 shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md">
                <Image
                  src={celebrity.heroImage}
                  alt={`${celebrity.name} official portrait - ${celebrity.quickFacts.primaryRole}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 208px, 224px"
                  className="object-cover object-center"
                />
              </div>

              {/* Title, Role & Social Links */}
              <div className="flex-1 text-center sm:text-left space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xs">
                  <span>{celebrity.quickFacts.primaryRole.split(",")[0]}</span>
                  <span>•</span>
                  <span>{getAgeBadgeText(celebrity.quickFacts)}</span>
                  <span>•</span>
                  <span>{formatNetWorth(celebrity.quickFacts.netWorth)} Net Worth</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  {celebrity.name}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-semibold leading-snug">
                  {celebrity.headline}
                </p>

                {/* Anti-Cannibalization Tagline */}
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block mb-1">
                    Related Search Intent & Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {celebrity.secondaryKeywords.map((kw, i) => (
                      <span key={i} className="inline-block px-2.5 py-0.5 rounded-full bg-white text-slate-700 font-medium text-[11px] border border-slate-200">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Authority Links (Wikidata, IMDb, Wikipedia) */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs">
                  {celebrity.sameAs.imdb && (
                    <a
                      href={celebrity.sameAs.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 shadow-xs transition"
                    >
                      <span>IMDb Profile</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {celebrity.sameAs.wikipedia && (
                    <a
                      href={celebrity.sameAs.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 border border-slate-200 transition"
                    >
                      <span>Wikipedia</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {celebrity.sameAs.instagram && (
                    <a
                      href={celebrity.sameAs.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 font-bold border border-rose-200 hover:bg-rose-100 transition"
                    >
                      <span>Official Instagram</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Body */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8">
          {/* 1. Quick Facts & Executive Brief */}
          <QuickFactBox celebrity={celebrity} />

          {/* 2. Interactive Table of Contents */}
          <TableOfContents />

          {/* 3. Economic Impact & Comparison Metrics */}
          <ComparisonMetrics
            metrics={celebrity.metrics}
            celebrityName={celebrity.name}
          />

          {/* In-Content Editorial Photography (Non-Repeating Event / Red-Carpet Feature) */}
          {celebrity.contentImage && (
            <figure className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              {/* Clean, 100% Unobstructed Photo Container */}
              <div className="relative h-80 sm:h-[460px] md:h-[520px] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                {/* Ambient Blurred Backdrop matching photo palette */}
                <div
                  className="absolute inset-0 bg-cover bg-center blur-2xl opacity-35 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${celebrity.contentImage})` }}
                />
                <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

                {/* Primary Uncropped Photo */}
                <div className="relative h-full w-full">
                  <Image
                    src={celebrity.contentImage}
                    alt={`${celebrity.name} - ${celebrity.contentImageCaption}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-contain object-center z-10 drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Minimal 1-line corner credit */}
              <figcaption className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-end text-[11px] text-slate-400 font-normal">
                <span>Photo: Wikimedia</span>
              </figcaption>
            </figure>
          )}

          {/* 4. Career Milestones & Breakthrough Timeline */}
          <section id="career-milestones" className="my-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Career Breakthroughs & Timeline
              </h2>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200 space-y-7">
              {celebrity.careerMilestones.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-amber-500 border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider block">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Comprehensive Biographical Analysis & Critical Retrospective */}
          <EditorialBiography
            celebrityName={celebrity.name}
            sections={celebrity.biographySections}
          />

          {/* 5. Complete Filmography Table */}
          <FilmographyTable
            filmography={celebrity.filmography}
            celebrityName={celebrity.name}
          />

          {/* 6. Relationship Profile & Personal Life */}
          <section id="relationship-profile" className="my-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Relationship Timeline & Personal Life
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                <span className="text-slate-500 text-[11px] block font-bold uppercase tracking-wider">Marital Status</span>
                <span className="text-base font-black text-slate-900 block mt-1">{celebrity.relationshipProfile.status}</span>
                {celebrity.relationshipProfile.partner && (
                  <span className="text-xs text-amber-800 font-semibold block mt-1">Partner: {celebrity.relationshipProfile.partner}</span>
                )}
              </div>

              <div className="md:col-span-2 text-sm text-slate-600 leading-relaxed space-y-2.5">
                <p>{celebrity.relationshipProfile.datingHistorySummary}</p>
                <p className="text-xs text-slate-400">
                  Privacy Note: CelebEdge verifies relationship milestones strictly through authorized public statements, certified marriage licenses, and direct on-record interviews to prevent unverified gossip.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Frequently Asked Questions (PAA Accordion) */}
          <FaqSection
            faqs={celebrity.faqs}
            celebrityName={celebrity.name}
          />

          {/* 8. Editorial Attributions & E-E-A-T Signature */}
          <EditorialBadge celebrity={celebrity} />
        </div>
      </article>
    </>
  );
}
