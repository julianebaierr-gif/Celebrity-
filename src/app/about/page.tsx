import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Users, Award, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About CelebEdge | Independent Entertainment Research Directorate",
  description: "Learn about CelebEdge's editorial team, historical research methodology, and commitment to verified entertainment public records.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700 border border-slate-200">
            <Users className="h-3.5 w-3.5 text-amber-600" />
            <span>Research Directorate</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            About CelebEdge
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            An independent biographical intelligence portal and factual entertainment archive dedicated to verified records, economic evaluations, and cultural history.
          </p>
        </header>

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our Mission & Purpose
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            CelebEdge was established to counter the rampant proliferation of automated clickbait, unverified tabloid rumors, and deceptive biographical claims across the web. We believe that public interest in performing artists, cultural figures, and athletes should be served with the same factual rigor, certified primary sources, and transparent corrections expected of serious reference works.
          </p>
        </section>

        {/* The Research Team */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Editorial Leadership & Analysts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Senior Industry Analyst</span>
              <h3 className="text-lg font-bold text-slate-900">Marcus Vance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specializing in Hollywood studio box office performance, union minimums, and talent representation contracts. Over 15 years tracking film industry economics and festival acquisitions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Head of Fact Verification</span>
              <h3 className="text-lg font-bold text-slate-900">Elena Rostova</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Investigative researcher dedicated to auditing municipal marriage registries, real estate property deeds, and corporate trademark filings to ensure 100% verified biographical records.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Standards */}
        <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Three Pillars of Our Verification</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-600">
            <div>
              <strong className="text-slate-900 block mb-1">1. Primary Source Audits</strong>
              Every data point on net worth or marriage status references verified public records or audited publications.
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">2. Zero Gossip Policy</strong>
              Tabloid rumors and unverified anonymous claims are strictly excluded from our databases.
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">3. Rapid Corrections</strong>
              Our editorial desk responds to verified factual updates within 24 hours of notification.
            </div>
          </div>
          <div className="pt-2">
            <Link href="/editorial-standards" className="text-xs font-bold text-amber-700 hover:underline">
              Read Our Full Editorial Policy & E-E-A-T Framework →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
