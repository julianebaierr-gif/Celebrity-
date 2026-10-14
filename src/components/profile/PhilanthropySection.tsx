import React from "react";
import { PhilanthropyItem } from "@/data/celebrities";
import { HeartHandshake, CheckCircle2 } from "lucide-react";

interface PhilanthropySectionProps {
  philanthropy?: PhilanthropyItem[];
  celebrityName: string;
}

export default function PhilanthropySection({
  philanthropy,
  celebrityName,
}: PhilanthropySectionProps) {
  if (!philanthropy || philanthropy.length === 0) return null;

  return (
    <section id="philanthropy-impact" className="my-12 scroll-mt-20">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 border border-rose-200/60">
          <HeartHandshake className="h-5 w-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {celebrityName}: Philanthropy &amp; Social Causes
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        A record of {celebrityName}’s non-profit foundations, philanthropic contributions, and humanitarian initiatives substantiated by public disclosures and IRS Form 990 filings.
      </p>

      <div
        className={`grid grid-cols-1 ${
          philanthropy.length === 3
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2"
        } gap-5 items-stretch`}
      >
        {philanthropy.map((item, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-rose-400/90 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Top Row: Focus Area Tag & Public Disclosures Badge */}
              <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-50 text-rose-800 text-[11px] font-bold uppercase tracking-wider border border-rose-200/60">
                  <HeartHandshake className="h-3 w-3 text-rose-600 shrink-0" aria-hidden="true" />
                  <span>{item.focusArea}</span>
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60 hidden sm:inline-block">
                  IRS 990 Tracked
                </span>
              </div>

              {/* Organization or Cause Headline - Full Width, No Squeezing */}
              <h3 className="font-black text-slate-900 text-base sm:text-lg tracking-tight leading-snug group-hover:text-rose-950 transition-colors">
                {item.organizationOrCause}
              </h3>

              {/* Dedicated Recognized Role & Verified Contribution Strip */}
              {item.verifiedContribution && (
                <div className="my-3.5 p-3 rounded-xl bg-gradient-to-br from-rose-50/60 via-slate-50/50 to-slate-50 border border-rose-100/90 flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white border border-rose-200/70 text-rose-600 shadow-2xs shrink-0 mt-0.5">
                    <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-rose-800">
                      Recognized Role &amp; Financial Commitment
                    </span>
                    <span className="block font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5 leading-snug">
                      {item.verifiedContribution}
                    </span>
                  </div>
                </div>
              )}

              {/* Impact Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                {item.description}
              </p>
            </div>

            {/* Audited Verification Footer */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>IRS Form 990 &amp; Public Disclosures Verified</span>
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
