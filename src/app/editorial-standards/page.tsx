import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, FileText, AlertCircle, Scale, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Standards & E-E-A-T Policy | CelebEdge",
  description: "CelebEdge's editorial guidelines, fact-checking methodology, primary sources verification standard, and media copyright compliance policy.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app/editorial-standards",
  },
};

export default function EditorialStandardsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-neutral-800 pb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Google Search Quality Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Editorial Guidelines & E-E-A-T Framework
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            Our unwavering commitment to factual integrity, verifiable citations, zero AI fabrication, and ethical entertainment journalism.
          </p>
        </header>

        {/* Section 1: E-E-A-T Core Principles */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Experience, Expertise, Authoritativeness & Trust (E-E-A-T)
            </h2>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            CelebEdge operates under rigorous journalistic ethics modeled after global wire services and academic archives. Unlike clickbait entertainment blogs that circulate unsubstantiated gossip, every dossier published on CelebEdge requires multi-point independent verification before live deployment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-1.5">
              <span className="font-bold text-amber-400 block text-sm">Experience & Expertise</span>
              <p className="text-neutral-400 leading-relaxed">
                Authored by veteran entertainment journalists, film historians, and economic analysts with deep institutional knowledge of Hollywood and global media.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-1.5">
              <span className="font-bold text-emerald-400 block text-sm">Authoritativeness & Trust</span>
              <p className="text-neutral-400 leading-relaxed">
                Direct integration with structured open data databases (Wikidata, TMDb, Box Office Mojo, SEC filings, official court records).
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Fact-Checking Protocol */}
        <section id="fact-checking" className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-amber-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Fact-Checking Protocol & Source Hierarchy
            </h2>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            We adhere to a strict tiered hierarchy for verifying facts, numbers, and personal details:
          </p>
          <ul className="space-y-3 text-xs text-neutral-300 pl-4 list-disc marker:text-amber-400">
            <li>
              <strong>Tier 1 (Certified Primary Sources):</strong> Official government filings, patent registries, on-record legal depositions, signed agency press releases, and direct video statements from the celebrity.
            </li>
            <li>
              <strong>Tier 2 (Trade Publications of Record):</strong> Variety, The Hollywood Reporter, Deadline, Forbes Financial Lists, and Billboard.
            </li>
            <li>
              <strong>Disallowed (Zero-Tolerance):</strong> Anonymous tabloid speculation, unverified Reddit threads, automated scraping blogs, and AI-generated rumor mills.
            </li>
          </ul>
        </section>

        {/* Section 3: Corrections Policy */}
        <section id="corrections" className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-rose-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Transparent Corrections & Updates Policy
            </h2>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            In the event of a factual error, change in marital status, net worth revision, or newly published casting information, our editorial team immediately amends the record with an explicit timestamp and explanation note in accordance with the Society of Professional Journalists (SPJ) code of ethics.
          </p>
        </section>

        {/* Section 4: Media Rights & Copyright Safety */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Media Rights & DMCA Safe Harbor Compliance
            </h2>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            CelebEdge strictly protects intellectual property and respects photographers&apos; copyright. We do NOT scrape or rehost unauthorized paparazzi photography. All media rendered across our platform is sourced legally via:
          </p>
          <div className="space-y-2 text-xs text-neutral-400 bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
            <p>• <strong>TMDb Developer API:</strong> Official film headshots, promotional studio stills, and verified production posters.</p>
            <p>• <strong>Wikimedia Commons:</strong> Verified Creative Commons (CC BY-SA 4.0 / 3.0) and public domain press conference archives with explicit license attribution.</p>
            <p>• <strong>Official Social Platform Embeds:</strong> Native iframe embeds hosted directly by Instagram, TikTok, YouTube, and X (Twitter) in full compliance with platform API Terms of Service.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
