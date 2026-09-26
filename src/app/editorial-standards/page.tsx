import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, AlertCircle, Scale, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Standards & E-E-A-T Policy | CelebEdge",
  description: "CelebEdge's editorial guidelines, fact-checking methodology, primary sources verification standard, and media copyright compliance policy.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app/editorial-standards",
  },
};

export default function EditorialStandardsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Google Search Quality Rater Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Editorial Guidelines & Verification Framework
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Our commitment to factual accuracy, primary source verification, zero speculation, and ethical entertainment documentation.
          </p>
        </header>

        {/* Section 1: E-E-A-T Core Principles */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              1. Experience, Expertise, Authoritativeness & Trust (E-E-A-T)
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            CelebEdge operates under rigorous journalistic standards modeled after wire services and historic academic archives. Unlike clickbait blogs that circulate unverified rumors, every biographical dossier published on CelebEdge requires multi-point independent verification before publication.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
              <span className="font-bold text-amber-800 block text-sm">Experience & Expertise</span>
              <p className="text-slate-600 leading-relaxed">
                Authored by professional entertainment researchers, cinema historians, and economic analysts with extensive background across studio databases and trade archives.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
              <span className="font-bold text-emerald-800 block text-sm">Authoritativeness & Trust</span>
              <p className="text-slate-600 leading-relaxed">
                Direct integration with structured public databases (Wikidata, TMDb, Box Office Mojo, SEC public filings, official municipal public records).
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Fact-Checking Protocol */}
        <section id="fact-checking" className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-amber-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              2. Fact-Checking Protocol & Source Hierarchy
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            We adhere to a strict tiered hierarchy for verifying biographical milestones, economic evaluations, and personal details:
          </p>
          <ul className="space-y-3 text-xs text-slate-700 pl-4 list-disc marker:text-amber-600">
            <li>
              <strong>Tier 1 (Certified Primary Records):</strong> Official government registries, trademark patents, on-record court filings, authorized agency representations, and direct public statements.
            </li>
            <li>
              <strong>Tier 2 (Trade Publications of Record):</strong> Variety, The Hollywood Reporter, Deadline Hollywood, Forbes Certified Net Worth Lists, and Billboard.
            </li>
            <li>
              <strong>Disallowed (Zero-Tolerance):</strong> Anonymous tabloid speculation, unverified forum rumors, automated content scrapers, and speculative clickbait.
            </li>
          </ul>
        </section>

        {/* Section 3: Corrections Policy */}
        <section id="corrections" className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-rose-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              3. Transparent Corrections Protocol
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            In the event of an updated record, marital status change, net worth revision, or new film casting announcement, our editorial team immediately updates the dossier with an explicit timestamp and verification note.
          </p>
        </section>

        {/* Section 4: Media Rights & Copyright Safety */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              4. Media Licensing & Copyright Compliance
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            CelebEdge strictly protects intellectual property and respects photographers&apos; copyright. We do NOT host unauthorized paparazzi media. All photography rendered across our portal is sourced legally via:
          </p>
          <div className="space-y-2 text-xs text-slate-600 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <p>• <strong>TMDb Developer API:</strong> Official film production headshots, promotional studio stills, and verified production posters.</p>
            <p>• <strong>Wikimedia Commons:</strong> Verified Creative Commons (CC BY-SA 4.0 / 3.0) and public domain press conference archives with explicit license attribution.</p>
            <p>• <strong>Official Social Platform Embeds:</strong> Native iframe embeds hosted directly by Instagram, TikTok, YouTube, and X (Twitter) in full compliance with platform API Terms of Service.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
