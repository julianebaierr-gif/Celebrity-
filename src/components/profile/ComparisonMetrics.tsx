import React from "react";
import { MetricItem } from "@/data/celebrities";
import { CheckCircle2 } from "lucide-react";

interface ComparisonMetricsProps {
  metrics: MetricItem[];
  celebrityName: string;
}

export default function ComparisonMetrics({ metrics, celebrityName }: ComparisonMetricsProps) {
  return (
    <section id="financial-metrics" className="my-10">
      <div className="mb-2">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          {celebrityName}: Career Milestones &amp; Benchmarks
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Audited industry metrics, box office records, and career benchmarks for {celebrityName}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all duration-300"
          >
            <div>
              {/* Fixed-height label container for 100% horizontal alignment */}
              <div className="h-9 flex items-center mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-700 transition-colors line-clamp-2 leading-tight">
                  {metric.label}
                </span>
              </div>

              {/* Fixed-height value container to prevent any vertical jumping */}
              <div className="h-16 flex items-center my-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  {metric.value}
                </span>
              </div>

              {/* Fixed-height benchmark container with clean text */}
              <div className="h-10 flex items-center">
                <span className="text-[11px] text-slate-500 font-medium line-clamp-1">
                  {metric.benchmark}
                </span>
              </div>
            </div>

            {/* Pinned verified source footer with checkmark */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{metric.verifiedSource}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
