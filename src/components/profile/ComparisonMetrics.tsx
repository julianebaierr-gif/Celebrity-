import React from "react";
import { MetricItem } from "@/data/celebrities";
import { TrendingUp, ShieldCheck } from "lucide-react";

interface ComparisonMetricsProps {
  metrics: MetricItem[];
  celebrityName: string;
}

export default function ComparisonMetrics({ metrics, celebrityName }: ComparisonMetricsProps) {
  return (
    <section id="financial-metrics" className="my-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
          <TrendingUp className="h-4 w-4" />
        </span>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Economic Impact & Performance Benchmarks
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Comparative earnings indicators and verified industry performance metrics for {celebrityName}, documented across studio balance sheets and public box office filings.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                {metric.label}
              </span>
              <span className="text-2xl font-black text-slate-900 block tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs text-amber-700 font-semibold mt-1.5 block">
                {metric.benchmark}
              </span>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600 shrink-0" />
              <span className="truncate">Audit Source: {metric.verifiedSource}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
