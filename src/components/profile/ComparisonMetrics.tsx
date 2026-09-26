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
      <div className="flex items-center gap-2 mb-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
          <TrendingUp className="h-4 w-4" />
        </span>
        <h2 className="text-xl font-bold text-white tracking-tight">
          Economic Impact & Performance Benchmarks
        </h2>
      </div>
      <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
        Comparative valuation and industry performance indicators for {celebrityName}, grounded in verified earnings reports and primary box office databases.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur flex flex-col justify-between hover:border-neutral-700 transition"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                {metric.label}
              </span>
              <span className="text-2xl font-black text-white block tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs text-amber-400 font-medium mt-1 block">
                {metric.benchmark}
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-[10px] text-neutral-500">
              <ShieldCheck className="h-3 w-3 text-blue-400 shrink-0" />
              <span className="truncate">Source: {metric.verifiedSource}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
