import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CelebEdge",
  description: "CelebEdge Privacy Policy covering data transparency, cookie standards, and user data rights.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Effective Date: January 1, 2026 • Last Reviewed: September 26, 2026
          </p>
        </header>

        <section className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
          <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            CelebEdge operates as an informational public archive. We do not require account registration or collect personally identifiable information from standard readers. Standard server log telemetry (IP address, browser user-agent, referrers) is processed strictly for performance monitoring, bot protection, and Core Web Vitals optimization.
          </p>
        </section>

        <section className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
          <h2 className="text-lg font-bold text-slate-900">2. Cookies & Advertising Standards</h2>
          <p>
            We may utilize standard privacy-compliant analytical cookies to assess page loading speed and popular search queries. Third-party advertising partners (such as Google AdSense) may utilize non-personalized identifiers in compliance with California Consumer Privacy Act (CCPA) and General Data Protection Regulation (GDPR) standards.
          </p>
        </section>

        <section className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
          <h2 className="text-lg font-bold text-slate-900">3. Contacting the Data Protection Officer</h2>
          <p>
            For privacy inquiries, please reach out directly through our <a href="/contact" className="text-amber-700 font-bold hover:underline">Contact Desk</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
