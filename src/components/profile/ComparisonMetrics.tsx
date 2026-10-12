import React from "react";
import { MetricItem } from "@/data/celebrities";

interface ComparisonMetricsProps {
  metrics: MetricItem[];
  celebrityName: string;
}

export default function ComparisonMetrics({ metrics, celebrityName }: ComparisonMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section id="financial-metrics" className="my-10">
      <div className="mb-2">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          {celebrityName}: Career Milestones &amp; Benchmarks
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Audited industry metrics, box office records, and verified career benchmarks for {celebrityName}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col flex-1">
              {/* Category Label badge with natural flow */}
              <div className="mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/70 px-2.5 py-1 rounded-md inline-block leading-tight">
                  {metric.label}
                </span>
              </div>

              {/* Main KPI Value with natural line height and zero overlap */}
              <div className="my-2">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug block">
                  {metric.value}
                </span>
              </div>

              {/* Benchmark description with full readability - no truncation */}
              <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                {metric.benchmark}
              </p>
            </div>

            {/* Verified source footer - clean, fully readable citation */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-slate-500 font-medium">
              <span className="text-emerald-600 font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
              <span className="leading-snug">{metric.verifiedSource}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
