import React from "react";
import { CelebrityProfile } from "@/data/celebrities";
import { CheckCircle2, Sparkles, Calendar, MapPin, Ruler, DollarSign, Briefcase, Award } from "lucide-react";

interface QuickFactBoxProps {
  celebrity: CelebrityProfile;
}

export default function QuickFactBox({ celebrity }: QuickFactBoxProps) {
  const { quickFacts, directAnswerBio } = celebrity;

  return (
    <section id="fast-facts" className="my-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur shadow-xl relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
          <Sparkles className="h-4 w-4" />
        </span>
        <h2 className="text-lg font-bold text-white tracking-tight">
          Executive Summary & Verified Quick Facts
        </h2>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="h-3 w-3" /> 2026 Fact-Checked
        </span>
      </div>

      {/* Direct Answer Box (Google AI Overview & Featured Snippet Hook) */}
      <div className="mb-6 rounded-xl border border-amber-500/20 bg-amber-950/20 p-4 text-neutral-200 text-sm leading-relaxed">
        <p className="font-semibold text-amber-300 text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
          <span>⚡ Direct Answer / TL;DR</span>
        </p>
        <p>{directAnswerBio}</p>
      </div>

      {/* Grid of Key Facts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
        <div className="flex items-start gap-3 rounded-lg bg-neutral-950/60 p-3.5 border border-neutral-800/80">
          <Calendar className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-neutral-400 block text-[11px]">Birth Date & Age</span>
            <span className="text-white font-medium">{quickFacts.birthDate} ({quickFacts.age} years old)</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-neutral-950/60 p-3.5 border border-neutral-800/80">
          <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-neutral-400 block text-[11px]">Birthplace</span>
            <span className="text-white font-medium">{quickFacts.birthPlace}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-neutral-950/60 p-3.5 border border-neutral-800/80">
          <Ruler className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-neutral-400 block text-[11px]">Height</span>
            <span className="text-white font-medium">{quickFacts.height}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-neutral-950/60 p-3.5 border border-neutral-800/80">
          <DollarSign className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-neutral-400 block text-[11px]">Estimated Net Worth</span>
            <span className="text-emerald-400 font-bold">{quickFacts.netWorth}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-neutral-950/60 p-3.5 border border-neutral-800/80">
          <Briefcase className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-neutral-400 block text-[11px]">Primary Profession</span>
            <span className="text-white font-medium">{quickFacts.primaryRole}</span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-neutral-950/60 p-3.5 border border-neutral-800/80">
          <Award className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-neutral-400 block text-[11px]">Active Era</span>
            <span className="text-white font-medium">{quickFacts.activeYears}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
