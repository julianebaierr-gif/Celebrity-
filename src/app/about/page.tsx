import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CelebEdge | Independent Entertainment Editorial Team",
  description: "Learn about CelebEdge's editorial team, research methodology, and commitment to accurate entertainment profiles.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            About CelebEdge
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            An independent biographical reference portal and entertainment publication dedicated to accurate celebrity profiles, filmography archives, and cultural timelines.
          </p>
        </header>

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our Mission & Purpose
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            CelebEdge was established to provide clear, reliable, and well-researched information about performing artists, film figures, and cultural icons. We believe that public interest in popular figures should be met with factual rigor, authenticated historical contexts, and transparent editorial corrections.
          </p>
        </section>

        {/* The Research Team */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Editorial Leadership & Writers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Senior Industry Writer</span>
              <h3 className="text-lg font-bold text-slate-900">Marcus Vance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specializing in studio film history, box office tracking, and creative profiles. Over 15 years analyzing cinema and entertainment culture.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Senior Biographer</span>
              <h3 className="text-lg font-bold text-slate-900">Elena Rostova</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Biographical researcher focusing on public records, interviews, and archival film history to ensure accurate, dignified biographical reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Standards */}
        <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900">Editorial Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-600">
            <div>
              <strong className="text-slate-900 block mb-1">1. Factual Rigor</strong>
              Data points and career milestones reference reliable interviews, official credits, and primary public sources.
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">2. No Unverified Rumors</strong>
              Unverified gossip and speculative claims are strictly kept out of our database.
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">3. Transparent Corrections</strong>
              Our editorial desk reviews and promptly updates entries whenever new verifiable facts come to light.
            </div>
          </div>
          <div className="pt-2">
            <Link href="/editorial-standards" className="text-xs font-bold text-amber-700 hover:underline">
              Read Our Full Editorial Policy →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
