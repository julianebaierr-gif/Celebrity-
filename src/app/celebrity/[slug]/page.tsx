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
import RelationshipSection from "@/components/profile/RelationshipSection";
import FinancialDossierSection from "@/components/profile/FinancialDossierSection";
import PhilanthropySection from "@/components/profile/PhilanthropySection";
import ControversiesSection from "@/components/profile/ControversiesSection";
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

  // Google SERP Strict Title Optimization (Target: 50-58 characters maximum)
  let domainKeyword = "Career";
  let specificKeywords: string[] = [];
  const cat = (celebrity.category || "").toLowerCase();
  const nameLower = celebrity.name.toLowerCase();

  if (
    cat.includes("music") ||
    cat.includes("sound") ||
    ["drake", "rosalia", "taylor swift", "britney spears", "mariah carey", "chris brown", "nba youngboy", "youngboy"].some((m) => nameLower.includes(m))
  ) {
    domainKeyword = "Music";
    specificKeywords = ["Music Career", "Songs & Bio", "Albums & Bio", "Music & Net Worth"];
  } else if (
    cat.includes("sport") ||
    cat.includes("athlete") ||
    ["travis kelce"].some((s) => nameLower.includes(s))
  ) {
    domainKeyword = "Stats";
    specificKeywords = ["Career Stats", "NFL Career", "Stats & Bio", "Contracts & Bio"];
  } else if (
    cat.includes("creator") ||
    cat.includes("digital") ||
    cat.includes("influencer") ||
    ["kylie jenner", "mrbeast", "ishowspeed", "kai cenat"].some((c) => nameLower.includes(c))
  ) {
    domainKeyword = "Brands";
    specificKeywords = ["Brand Ventures", "Brands & Bio", "Enterprises", "Business & Bio"];
  } else {
    specificKeywords = ["Acting Career", "Movies & Bio", "Film Roles", "Career & Bio"];
  }

  const titleCandidates = [
    `${celebrity.name} Net Worth, Age, ${domainKeyword} & Full Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Bio & ${domainKeyword} | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Career, Movies & Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Music Career & Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Career & Biography | CelebEdge`,
    `${celebrity.name} Net Worth, Age, ${specificKeywords[0]} | CelebEdge`,
    `${celebrity.name} Net Worth, Age, ${specificKeywords[1]} | CelebEdge`,
    `${celebrity.name} Net Worth, Age & ${domainKeyword} | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Bio & Career | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Career & Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Full Bio & Career | CelebEdge`,
    `${celebrity.name} Net Worth, Career & Biography | CelebEdge`,
    `${celebrity.name} Net Worth, Age & Career Guide | CelebEdge`,
    `${celebrity.name} Net Worth, Career & Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Age & 2026 Bio | CelebEdge`,
    `${celebrity.name} Net Worth & Verified Bio | CelebEdge`,
    `${celebrity.name} Net Worth & Complete Bio | CelebEdge`,
    `${celebrity.name} Net Worth & 2026 Dossier | CelebEdge`,
    `${celebrity.name} Net Worth & Biography | CelebEdge`,
    `${celebrity.name} Net Worth, Age & Bio | CelebEdge`,
    `${celebrity.name} Net Worth & Career | CelebEdge`,
    `${celebrity.name} Net Worth & Bio | CelebEdge`
  ];

  let metaTitle = "";
  for (const c of titleCandidates) {
    if (c.length >= 50 && c.length <= 58) {
      metaTitle = c;
      break;
    }
  }

  if (!metaTitle) {
    const valid = titleCandidates.filter((c) => c.length <= 58);
    if (valid.length > 0) {
      let best = valid[0];
      if (best.length < 50) {
        let padded = best.replace(" & Bio | CelebEdge", " & Full Bio | CelebEdge");
        if (padded.length >= 50 && padded.length <= 58) best = padded;
        else {
          padded = best.replace("Net Worth, Age", "Net Worth, Age, Career");
          if (padded.length >= 50 && padded.length <= 58) best = padded;
          else {
            padded = best.replace("| CelebEdge", "& Full Bio | CelebEdge");
            if (padded.length >= 50 && padded.length <= 58) best = padded;
          }
        }
      }
      metaTitle = best;
    } else {
      metaTitle = `${celebrity.name.slice(0, 35)} Net Worth & Bio | CelebEdge`;
    }
  }

  // Google SERP Strict Meta Description (Target: 145-155 characters ending with a full stop)
  const roleName = celebrity.quickFacts.primaryRole.split(",")[0].trim();
  const descTemplates = [
    `Explore ${celebrity.name}'s verified net worth, age, career milestones, biography, and confirmed public records as an acclaimed ${roleName}. Read the full 2026 dossier.`,
    `Explore ${celebrity.name}'s verified net worth, age, career milestones, and confirmed public records as an acclaimed ${roleName}. Read our comprehensive 2026 dossier.`,
    `Explore ${celebrity.name}'s verified net worth, age, career milestones, and confirmed public records as an acclaimed ${roleName}. Read the complete 2026 dossier.`,
    `Explore ${celebrity.name}'s verified net worth, age, career milestones, and confirmed public records as an acclaimed ${roleName}. Read the full 2026 dossier.`,
    `Explore ${celebrity.name}'s verified net worth, age, career history, and public records as an acclaimed ${roleName}. Read our comprehensive 2026 dossier.`,
    `Explore ${celebrity.name}'s verified net worth, age, career history, and public records as an acclaimed ${roleName}. Read the complete 2026 dossier.`,
    `Explore ${celebrity.name}'s verified net worth, age, career history, and public records as an acclaimed ${roleName}. Read the full 2026 dossier.`,
    `Explore ${celebrity.name}'s verified net worth, age, career history, and public records as an acclaimed ${roleName}. Full 2026 dossier.`
  ];

  let metaDescription = "";
  for (const t of descTemplates) {
    if (t.length >= 145 && t.length <= 155 && t.endsWith(".")) {
      metaDescription = t;
      break;
    }
  }

  if (!metaDescription) {
    let desc = descTemplates[0];
    if (desc.length > 155) {
      desc = desc.slice(0, 154);
      const lastSpace = desc.lastIndexOf(" ");
      desc = (lastSpace !== -1 ? desc.slice(0, lastSpace) : desc) + ".";
    }
    metaDescription = desc;
  }

  return {
    title: metaTitle,
    description: metaDescription,
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
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "CelebEdge",
      images: [
        {
          url: celebrity.heroImage,
          width: 1200,
          height: 630,
          alt: `${celebrity.name} high-resolution portrait`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
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

  const tocSections = [
    { id: "fast-facts", title: "Official Facts & Executive Summary" },
    { id: "financial-metrics", title: "Economic Impact & Financial Benchmarks" },
    ...(celebrity.financialDossier ? [{ id: "financial-architecture", title: "Financial & Wealth Architecture" }] : []),
    { id: "career-milestones", title: "Career Breakthroughs & Timeline" },
    { id: "biographical-retrospective", title: "Full Biography & Career Analysis" },
    { id: "filmography-credits", title: "Filmography & Box Office History" },
    ...(celebrity.philanthropy && celebrity.philanthropy.length > 0 ? [{ id: "philanthropy-impact", title: "Philanthropy, Endowments & Causes" }] : []),
    ...(celebrity.controversies && celebrity.controversies.length > 0 ? [{ id: "industry-resilience", title: "Legal History & Career Resilience" }] : []),
    { id: "relationship-profile", title: "Relationship Timeline & Personal Life" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    { id: "editorial-attribution", title: "Photo Credits & Primary Sources" },
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
              <div className="relative h-64 w-52 sm:h-72 sm:w-56 shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-950 flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${celebrity.heroImage})` }}
                />
                <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
                <Image
                  src={celebrity.heroImage}
                  alt={`${celebrity.name} official portrait - ${celebrity.quickFacts.primaryRole}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 208px, 224px"
                  className="object-contain object-center z-10 drop-shadow-md"
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
          <TableOfContents sections={tocSections} />

          {/* 3. Economic Impact & Comparison Metrics */}
          <ComparisonMetrics
            metrics={celebrity.metrics}
            celebrityName={celebrity.name}
          />

          {/* 4. Financial & Wealth Architecture (Pillar 2) */}
          <FinancialDossierSection
            financialDossier={celebrity.financialDossier}
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

          {/* 5. Career Milestones & Breakthrough Timeline */}
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

          {/* 6. Full Biographical Analysis & Critical Retrospective */}
          <EditorialBiography
            celebrityName={celebrity.name}
            celebritySlug={celebrity.slug}
            sections={celebrity.biographySections}
          />

          {/* 7. Complete Filmography Table */}
          <FilmographyTable
            filmography={celebrity.filmography}
            celebrityName={celebrity.name}
          />

          {/* 8. Philanthropy, Endowments & Causes (Pillar 5) */}
          <PhilanthropySection
            philanthropy={celebrity.philanthropy}
            celebrityName={celebrity.name}
          />

          {/* 9. Legal History, Industry Disputes & Resilience (Pillar 6) */}
          <ControversiesSection
            controversies={celebrity.controversies}
            celebrityName={celebrity.name}
          />

          {/* 10. Relationship Profile & Personal Life */}
          <RelationshipSection
            relationshipProfile={celebrity.relationshipProfile}
            celebrityName={celebrity.name}
          />

          {/* 11. Frequently Asked Questions (PAA Accordion - Pillar 7) */}
          <FaqSection
            faqs={celebrity.faqs}
            celebrityName={celebrity.name}
          />

          {/* 12. Editorial Attributions & E-E-A-T Signature */}
          <EditorialBadge celebrity={celebrity} />
        </div>
      </article>
    </>
  );
}
