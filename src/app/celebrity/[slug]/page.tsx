import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getCelebrityBySlug, getAllCelebritySlugs, CELEBRITIES } from "@/data/celebrities";
import JsonLd from "@/components/seo/JsonLd";
import QuickFactBox from "@/components/profile/QuickFactBox";
import TableOfContents from "@/components/profile/TableOfContents";
import ComparisonMetrics from "@/components/profile/ComparisonMetrics";
import FilmographyTable from "@/components/profile/FilmographyTable";
import FaqSection from "@/components/profile/FaqSection";
import EditorialBadge from "@/components/profile/EditorialBadge";
import { ChevronRight, ExternalLink, ShieldCheck, Heart, Sparkles, Milestone } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCelebritySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const celebrity = getCelebrityBySlug(slug);

  if (!celebrity) {
    return { title: "Celebrity Dossier Not Found | CelebEdge" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://celeb-edge.vercel.app";
  const canonicalUrl = `${baseUrl}/celebrity/${celebrity.slug}`;

  return {
    title: `${celebrity.name}: Net Worth, Age, Filmography & 2026 Facts | CelebEdge`,
    description: celebrity.directAnswerBio.slice(0, 160),
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
      title: `${celebrity.name} - Executive Biography & 2026 Metrics`,
      description: celebrity.directAnswerBio.slice(0, 160),
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
      title: `${celebrity.name} | Verified Intel & Biography`,
      description: celebrity.directAnswerBio.slice(0, 150),
      images: [celebrity.heroImage],
    },
  };
}

export default async function CelebrityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const celebrity = getCelebrityBySlug(slug);

  if (!celebrity) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://celeb-edge.vercel.app";
  const breadcrumbs = [
    { name: "Home", url: `${baseUrl}` },
    { name: celebrity.silo, url: `${baseUrl}/silo/${encodeURIComponent(celebrity.silo.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-"))}` },
    { name: celebrity.name, url: `${baseUrl}/celebrity/${celebrity.slug}` },
  ];

  return (
    <>
      <JsonLd celebrity={celebrity} breadcrumbs={breadcrumbs} />

      <article className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-neutral-900 bg-neutral-950/60 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-neutral-600" />
              <span className="text-neutral-400 truncate">{celebrity.silo}</span>
              <ChevronRight className="h-3 w-3 text-neutral-600" />
              <span className="text-amber-400 font-semibold truncate">{celebrity.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Header Section */}
        <header className="relative border-b border-neutral-900 bg-gradient-to-b from-neutral-900/40 via-neutral-950 to-neutral-950 pt-8 pb-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              {/* High-Resolution Hero Portrait (min 1200px WebP compliant) */}
              <div className="relative h-64 w-52 sm:h-72 sm:w-56 shrink-0 rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl shadow-neutral-950">
                <Image
                  src={celebrity.heroImage}
                  alt={`${celebrity.name} official portrait`}
                  fill
                  priority
                  sizes="(max-width: 640px) 208px, 224px"
                  className="object-cover object-center"
                />
                <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-neutral-950/80 px-2 py-0.5 text-[10px] font-bold text-amber-400 border border-neutral-700/80 backdrop-blur">
                  <Sparkles className="h-3 w-3" /> VERIFIED
                </div>
              </div>

              {/* Title, Silo & Social Links */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                  <span>{celebrity.silo}</span>
                  <span>•</span>
                  <span>US Search Vol: {(celebrity.searchVolume).toLocaleString()}/mo</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {celebrity.name}
                </h1>

                <p className="text-base sm:text-lg text-neutral-300 font-medium leading-snug">
                  {celebrity.headline}
                </p>

                {/* Anti-Cannibalization Tagline */}
                <div className="rounded-lg bg-neutral-900/60 p-3 border border-neutral-800/80 text-xs text-neutral-400">
                  <span className="font-semibold text-neutral-300 block mb-1">
                    🔍 Queries Addressed in this Investigation:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {celebrity.secondaryKeywords.map((kw, i) => (
                      <span key={i} className="inline-block px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono text-[10px]">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Authority Links (Wikidata, IMDb, Wikipedia) */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs">
                  {celebrity.sameAs.imdb && (
                    <a
                      href={celebrity.sameAs.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400 transition"
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
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition"
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
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-pink-900/30 text-pink-300 border border-pink-700/50 hover:bg-pink-900/50 transition"
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-6">
          {/* 1. Quick Facts & Position Zero Answer Box */}
          <QuickFactBox celebrity={celebrity} />

          {/* 2. Interactive Table of Contents */}
          <TableOfContents />

          {/* 3. Economic Impact & Comparison Metrics */}
          <ComparisonMetrics
            metrics={celebrity.metrics}
            celebrityName={celebrity.name}
          />

          {/* 4. Career Milestones & Breakthrough Timeline */}
          <section id="career-milestones" className="my-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Milestone className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Career Breakthroughs & Timeline
              </h2>
            </div>

            <div className="relative pl-6 border-l-2 border-neutral-800 space-y-6">
              {celebrity.careerMilestones.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-amber-500 border-4 border-neutral-950 group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Complete Filmography Table */}
          <FilmographyTable
            filmography={celebrity.filmography}
            celebrityName={celebrity.name}
          />

          {/* 6. Relationship Profile & Personal Life */}
          <section id="relationship-profile" className="my-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400">
                <Heart className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Relationship Timeline & Personal Life
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl bg-neutral-950/80 p-4 border border-neutral-800">
                <span className="text-neutral-500 text-[11px] block font-semibold uppercase">Marital Status</span>
                <span className="text-base font-bold text-white block mt-1">{celebrity.relationshipProfile.status}</span>
                {celebrity.relationshipProfile.partner && (
                  <span className="text-xs text-amber-400 block mt-1">Partner: {celebrity.relationshipProfile.partner}</span>
                )}
              </div>

              <div className="md:col-span-2 text-sm text-neutral-300 leading-relaxed space-y-2">
                <p>{celebrity.relationshipProfile.datingHistorySummary}</p>
                <p className="text-xs text-neutral-500">
                  Privacy Note: CelebEdge verifies relationship milestones strictly through certified public records, authorized public statements, and on-record interviews to prevent unverified gossip.
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
