import React from "react";
import { ControversyItem } from "@/data/celebrities";
import { Scale, CheckCircle2 } from "lucide-react";

interface ControversiesSectionProps {
  controversies?: ControversyItem[];
  celebrityName: string;
}

export default function ControversiesSection({
  controversies,
  celebrityName,
}: ControversiesSectionProps) {
  if (!controversies || controversies.length === 0) return null;

  return (
    <section id="industry-resilience" className="my-12 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/80">
          <Scale className="h-5 w-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {celebrityName}: Legal History &amp; Industry Disputes
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        An objective, neutral journalistic overview of significant industry disputes, legal proceedings, public controversies, and subsequent career developments involving {celebrityName}.
      </p>

      <div className="space-y-6">
        {controversies.map((item, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-slate-400/80 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Top Accent Highlight Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 via-amber-500 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top Row: Category Tag & Year Badge */}
            <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider border border-slate-200/60">
                <Scale className="h-3 w-3 text-slate-600" aria-hidden="true" />
                <span>Legal &amp; Industry Record</span>
              </span>

              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white font-mono font-bold text-xs tracking-wider shadow-2xs">
                {item.year}
              </span>
            </div>

            {/* Incident Title */}
            <h3 className="font-black text-slate-900 text-base sm:text-lg tracking-tight leading-snug group-hover:text-slate-950 transition-colors mb-4">
              {item.incident}
            </h3>

            {/* Structured Sub-Boxes for Resolution and Impact */}
            <div className="space-y-3.5">
              {/* Resolution / Legal Outcome Box */}
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
                  <span className="font-bold text-[11px] uppercase tracking-wider text-slate-800 font-mono">
                    Resolution &amp; Legal Outcome
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.resolutionOrOutcome}
                </p>
              </div>

              {/* Career Impact & Resilience Box */}
              <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/60">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span className="font-bold text-[11px] uppercase tracking-wider text-amber-900 font-mono">
                    Career Impact &amp; Industry Precedent
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {item.impactAnalysis}
                </p>
              </div>
            </div>

            {/* Audited Verification Footer */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Substantiated via Court Records, Trade Publications &amp; Public Disclosures</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline-block">
                Public Record
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
