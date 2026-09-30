import React from "react";
import { ControversyItem } from "@/data/celebrities";
import { Scale } from "lucide-react";

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
      <div className="mb-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
          <Scale className="h-6 w-6 text-slate-700" />
          <span>Legal History, Industry Disputes & Resilience</span>
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        An objective, neutral journalistic overview of significant industry disputes, legal proceedings, public controversies, and subsequent career developments involving {celebrityName}.
      </p>

      <div className="space-y-6">
        {controversies.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                {item.incident}
              </h3>
              <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md shrink-0 w-fit">
                {item.year}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-0.5">
                  Resolution / Legal Outcome:
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {item.resolutionOrOutcome}
                </p>
              </div>

              <div className="pt-2">
                <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider mb-0.5">
                  Career Impact & Resilience:
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {item.impactAnalysis}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
