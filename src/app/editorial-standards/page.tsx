import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Standards & Policy | CelebEdge",
  description: "CelebEdge's editorial guidelines, fact-checking methodology, sources verification standard, and media copyright compliance policy.",
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
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Editorial Guidelines & Standards
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Our commitment to factual accuracy, authentic sources, and responsible entertainment journalism.
          </p>
        </header>

        {/* Section 1: Editorial Principles */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            1. Core Principles
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            CelebEdge operates under rigorous journalistic standards. Every biographical profile published on CelebEdge is researched and verified using reputable documentation and public archives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
              <span className="font-bold text-amber-800 block text-sm">Experience & Expertise</span>
              <p className="text-slate-600 leading-relaxed">
                Authored by dedicated entertainment writers and researchers with a background in cinema history and cultural reporting.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
              <span className="font-bold text-emerald-800 block text-sm">Reliable Sources</span>
              <p className="text-slate-600 leading-relaxed">
                Information is verified against structured public databases, authorized agency announcements, and established trade publications.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Fact-Checking Protocol */}
        <section id="fact-checking" className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            2. Fact-Checking & Sourcing
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            We adhere to a clear hierarchy for verifying biographical milestones, career milestones, and personal details:
          </p>
          <ul className="space-y-3 text-xs text-slate-700 pl-4 list-disc marker:text-amber-600">
            <li>
              <strong>Primary Records:</strong> Official agency announcements, verified court and public filings, and on-record interviews with the subjects or their verified representatives.
            </li>
            <li>
              <strong>Trade Publications of Record:</strong> Respected industry publications such as Variety, The Hollywood Reporter, Deadline Hollywood, and Billboard.
            </li>
            <li>
              <strong>Excluded:</strong> Tabloid rumors, unverified internet hearsay, and speculative clickbait.
            </li>
          </ul>
        </section>

        {/* Section 3: Corrections Policy */}
        <section id="corrections" className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            3. Corrections Policy
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            In the event of an updated record, biographical revision, or new film casting announcement, our editorial team reviews and updates the profile promptly to maintain accuracy.
          </p>
        </section>

        {/* Section 4: Media Rights & Copyright Safety */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            4. Media Licensing & Copyright
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            CelebEdge respects photographers&apos; and creators&apos; copyright. All imagery across our publication is sourced legally through authorized developer APIs, Creative Commons-licensed archives, and public domain repositories with full attribution.
          </p>
        </section>
      </div>
    </div>
  );
}
