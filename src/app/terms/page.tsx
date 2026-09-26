import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | CelebEdge",
  description: "Terms of Use and conditions for accessing CelebEdge public biographical archives.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms of Use & Service
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Effective Date: January 1, 2026
          </p>
        </header>

        <section className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing CelebEdge, you agree to comply with and be bound by these Terms of Use. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>
        </section>

        <section className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
          <h2 className="text-lg font-bold text-slate-900">2. Informational Purpose & Disclaimer</h2>
          <p>
            Biographical summaries, filmographies, and economic estimations published on CelebEdge are compiled for educational, cultural, and archival purposes. While our editorial desk enforces strict verification protocols, valuations represent independent industry evaluations and should not be construed as financial or legal counsel.
          </p>
        </section>

        <section className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
          <h2 className="text-lg font-bold text-slate-900">3. Media Rights & DMCA</h2>
          <p>
            CelebEdge complies with the Digital Millennium Copyright Act (DMCA). If you are a copyright owner and believe that content hosted on our service infringes your rights, please submit a formal notice via our <a href="/contact" className="text-amber-700 font-bold hover:underline">Contact Desk</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
