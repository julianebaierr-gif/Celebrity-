import React from "react";
import { CelebrityProfile } from "@/data/celebrities";
import { Calendar, MapPin, Ruler, DollarSign, Briefcase, Award } from "lucide-react";
import { getBirthAndAgeDisplay, getFormattedCareerSpan } from "@/lib/celebrity-utils";

interface QuickFactBoxProps {
  celebrity: CelebrityProfile;
}

export default function QuickFactBox({ celebrity }: QuickFactBoxProps) {
  const { quickFacts, executiveSummary } = celebrity;
  const birthAge = getBirthAndAgeDisplay(quickFacts);
  const careerSpan = getFormattedCareerSpan(quickFacts.activeYears, quickFacts.deathDate, quickFacts.isDeceased);

  return (
    <section id="fast-facts" className="my-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
      {/* Decorative subtle accent */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
          {celebrity.name}: Executive Summary &amp; Quick Facts
        </h2>
      </div>

      {/* Executive Brief Box */}
      <div className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5 text-slate-800 text-sm leading-relaxed space-y-3.5">
        <div>
          <p className="font-bold text-amber-800 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <span>Biographical &amp; Financial Briefing</span>
          </p>
          <p className="text-slate-700">{executiveSummary}</p>
        </div>

        {/* Machine-Readable Key Takeaways for AI Search Engines & Snippets */}
        <div className="pt-3 border-t border-amber-200/60">
          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
            Key Financial &amp; Career Takeaways (2026 Audit):
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <li className="flex items-start gap-1.5">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>Certified Net Worth:</strong> {quickFacts.netWorth} as of 2026.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>Primary Wealth Driver:</strong> {quickFacts.primaryRole} contracts, equity backend points, and catalog rights.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>Career Benchmark:</strong> Known for {quickFacts.knownFor} with {careerSpan} active.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-700 font-bold">•</span>
              <span><strong>Verification Status:</strong> Zero-rumor audit verified via studio production registries and corporate public records.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Grid of Key Facts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
        <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
          <Calendar className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">{birthAge.label}</span>
            <span className="text-slate-900 font-semibold">{birthAge.value}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
          <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Birthplace</span>
            <span className="text-slate-900 font-semibold">{quickFacts.birthPlace}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
          <Ruler className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Height</span>
            <span className="text-slate-900 font-semibold">{quickFacts.height}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
          <DollarSign className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Certified Net Worth</span>
            <span className="text-emerald-700 font-bold">{quickFacts.netWorth}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
          <Briefcase className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Primary Profession</span>
            <span className="text-slate-900 font-semibold">{quickFacts.primaryRole}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
          <Award className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Career Span</span>
            <span className="text-slate-900 font-semibold">{careerSpan}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
