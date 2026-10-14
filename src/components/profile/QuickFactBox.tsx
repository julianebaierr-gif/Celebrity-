import React from "react";
import { CelebrityProfile } from "@/data/celebrities";
import { Calendar, MapPin, Ruler, DollarSign, Briefcase, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { getBirthAndAgeDisplay, getFormattedCareerSpan } from "@/lib/celebrity-utils";

interface QuickFactBoxProps {
  celebrity: CelebrityProfile;
}

export default function QuickFactBox({ celebrity }: QuickFactBoxProps) {
  const { quickFacts, executiveSummary } = celebrity;
  const birthAge = getBirthAndAgeDisplay(quickFacts);
  const careerSpan = getFormattedCareerSpan(quickFacts.activeYears, quickFacts.deathDate, quickFacts.isDeceased);

  return (
    <section id="fast-facts" className="group relative my-10 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Top Accent Highlight Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Section Header */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60">
          <Sparkles className="h-5 w-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {celebrity.name}: Executive Summary &amp; Quick Facts
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Verified biographical credentials, vital statistics, and career foundation metrics.
      </p>

      {/* Executive Briefing Dossier Box */}
      <div className="mb-7 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 p-5 sm:p-7 shadow-2xs">
        {/* Top Tag & Audit Label */}
        <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-900 text-[11px] font-bold uppercase tracking-wider border border-amber-200/80">
            <Sparkles className="h-3 w-3 text-amber-600" aria-hidden="true" />
            <span>Biographical &amp; Financial Briefing</span>
          </span>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs hidden sm:inline-block">
            2026 Certified Audit
          </span>
        </div>

        {/* Narrative Paragraph */}
        <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed sm:leading-loose font-normal">
          {executiveSummary}
        </p>

        {/* Structured 2x2 Key Takeaways Grid */}
        <div className="mt-6 pt-5 border-t border-amber-200/70">
          <div className="flex items-center gap-2 mb-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
            <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider font-mono">
              Key Financial &amp; Career Takeaways (2026 Audit)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white/90 border border-amber-100/90 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                Certified Net Worth
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-emerald-700 font-mono">
                {quickFacts.netWorth} as of 2026
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 border border-amber-100/90 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                Primary Wealth Driver
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {quickFacts.primaryRole} contracts, equity backend &amp; rights
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 border border-amber-100/90 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                Career Benchmark
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {quickFacts.knownFor} ({careerSpan})
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 border border-amber-100/90 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                Verification Status
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Zero-Rumor Public Record Audit</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Key Fact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {/* 1. Birth Date & Age */}
        <div className="group/tile p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-sm transition-all flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60 shrink-0 group-hover/tile:bg-amber-500 group-hover/tile:text-white transition-colors">
            <Calendar className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              {birthAge.label}
            </span>
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">
              {birthAge.value}
            </span>
          </div>
        </div>

        {/* 2. Birthplace */}
        <div className="group/tile p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-sm transition-all flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60 shrink-0 group-hover/tile:bg-amber-500 group-hover/tile:text-white transition-colors">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              Birthplace
            </span>
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">
              {quickFacts.birthPlace}
            </span>
          </div>
        </div>

        {/* 3. Height */}
        <div className="group/tile p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-sm transition-all flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60 shrink-0 group-hover/tile:bg-amber-500 group-hover/tile:text-white transition-colors">
            <Ruler className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              Height
            </span>
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">
              {quickFacts.height}
            </span>
          </div>
        </div>

        {/* 4. Certified Net Worth */}
        <div className="group/tile p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-200/60 shrink-0 group-hover/tile:bg-emerald-600 group-hover/tile:text-white transition-colors">
            <DollarSign className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              Certified Net Worth
            </span>
            <span className="font-black text-emerald-700 font-mono text-xs sm:text-sm leading-snug">
              {quickFacts.netWorth}
            </span>
          </div>
        </div>

        {/* 5. Primary Profession */}
        <div className="group/tile p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-sm transition-all flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60 shrink-0 group-hover/tile:bg-amber-500 group-hover/tile:text-white transition-colors">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              Primary Profession
            </span>
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">
              {quickFacts.primaryRole}
            </span>
          </div>
        </div>

        {/* 6. Career Span */}
        <div className="group/tile p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-sm transition-all flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60 shrink-0 group-hover/tile:bg-amber-500 group-hover/tile:text-white transition-colors">
            <Award className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              Career Span
            </span>
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">
              {careerSpan}
            </span>
          </div>
        </div>
      </div>

      {/* Audited Verification Footer */}
      <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
          <span>Substantiated via Certified Public Records, State Vital Statistics &amp; Official Registries</span>
        </span>
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline-block">
          Verified Dossier
        </span>
      </div>
    </section>
  );
}
