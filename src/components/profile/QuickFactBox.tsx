import React from "react";
import { CelebrityProfile } from "@/data/celebrities";
import { CheckCircle2, FileText, Calendar, MapPin, Ruler, DollarSign, Briefcase, Award } from "lucide-react";

interface QuickFactBoxProps {
  celebrity: CelebrityProfile;
}

export default function QuickFactBox({ celebrity }: QuickFactBoxProps) {
  const { quickFacts, executiveSummary } = celebrity;

  return (
    <section id="fast-facts" className="my-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
      {/* Decorative subtle accent */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
          <FileText className="h-4 w-4" />
        </span>
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
          Executive Summary & Verified Quick Facts
        </h2>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Fact-Checked Audit
        </span>
      </div>

      {/* Executive Brief Box (Position Zero / Rich Snippet Hook) */}
      <div className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5 text-slate-800 text-sm leading-relaxed">
        <p className="font-bold text-amber-800 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1">
          <span>Official Biographical Brief</span>
        </p>
        <p className="text-slate-700">{executiveSummary}</p>
      </div>

      {/* Grid of Key Facts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
        <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
          <Calendar className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-500 block text-[11px] font-medium">Birth Date & Age</span>
            <span className="text-slate-900 font-semibold">{quickFacts.birthDate} ({quickFacts.age} years old)</span>
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
            <span className="text-slate-900 font-semibold">{quickFacts.activeYears}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
