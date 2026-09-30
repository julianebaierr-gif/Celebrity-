import React from "react";
import { PhilanthropyItem } from "@/data/celebrities";
import { HeartHandshake } from "lucide-react";

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
      <div className="mb-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
          <HeartHandshake className="h-6 w-6 text-rose-600" />
          <span>{celebrityName}: Philanthropy &amp; Social Causes</span>
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        A record of {celebrityName}’s non-profit foundations, philanthropic contributions, and humanitarian initiatives substantiated by public disclosures and IRS Form 990 filings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {philanthropy.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {item.organizationOrCause}
                </h3>
                {item.verifiedContribution && (
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-mono font-bold text-[11px] border border-rose-200">
                    {item.verifiedContribution}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-semibold uppercase tracking-wider">
                  {item.focusArea}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
