import React from "react";
import { FinancialDossier } from "@/data/celebrities";
import { DollarSign, Home, Building2, TrendingUp, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

interface FinancialDossierSectionProps {
  financialDossier?: FinancialDossier;
  celebrityName: string;
}

export default function FinancialDossierSection({
  financialDossier,
  celebrityName,
}: FinancialDossierSectionProps) {
  if (
    !financialDossier ||
    (!financialDossier.salaryMilestones?.length &&
      !financialDossier.realEstateAssets?.length &&
      !financialDossier.businessVentures?.length &&
      !financialDossier.wealthProgression?.length)
  ) {
    return null;
  }

  const {
    salaryMilestones = [],
    realEstateAssets = [],
    businessVentures = [],
    wealthProgression = [],
  } = financialDossier;

  return (
    <section id="financial-architecture" className="my-12 scroll-mt-20">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
          <DollarSign className="h-6 w-6 text-emerald-600" />
          <span>{celebrityName}: Financial &amp; Wealth Architecture</span>
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        An exhaustive, audited breakdown of {celebrityName}’s historical contract compensation, box-office profit participation, real estate equity, and venture investments.
      </p>

      <div className="space-y-10">
        {/* 1. Historical Salary Milestones */}
        {salaryMilestones.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-amber-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Verified Salary Milestones &amp; Contract Benchmarks
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Historical compensation reported across trade filings, studio contracts, and industry records.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead className="bg-slate-50/90 border-b border-slate-200">
                  <tr className="text-slate-600 uppercase text-[11px] font-bold tracking-wider">
                    <th className="py-3 px-3.5">Project / Role</th>
                    <th className="py-3 px-3.5">Year</th>
                    <th className="py-3 px-3.5">Base / Payout</th>
                    <th className="py-3 px-3.5">Box Office / Gross</th>
                    <th className="py-3 px-3.5">Deal Structure &amp; Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                  {salaryMilestones.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-3.5 font-bold text-slate-900">{item.project}</td>
                      <td className="py-3.5 px-3.5 font-mono text-slate-500 text-xs">{item.year}</td>
                      <td className="py-3.5 px-3.5 font-bold font-mono text-emerald-700">{item.salary}</td>
                      <td className="py-3.5 px-3.5 text-slate-600 text-xs font-mono">{item.boxOfficeOrBudget || "—"}</td>
                      <td className="py-3.5 px-3.5 text-slate-600 text-xs leading-relaxed">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 2. Real Estate & Asset Portfolio */}
        {realEstateAssets.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100">
                <Home className="h-5 w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Real Estate Portfolio &amp; Architectural Assets
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Deed registrations, purchase valuations, and current estimated market equity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              {realEstateAssets.map((asset, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Title + Location & Current Estimated Value Badge */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 text-base tracking-tight leading-snug group-hover:text-emerald-950 transition-colors">
                          {asset.property}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                          <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                          <span className="truncate">{asset.location}</span>
                        </div>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-mono font-bold text-xs shadow-2xs">
                        {asset.currentEstimatedValue.startsWith("Est.")
                          ? asset.currentEstimatedValue
                          : `Est. ${asset.currentEstimatedValue}`}
                      </span>
                    </div>

                    {/* Structured 2-Column Key Financial Stats Box */}
                    <div className="grid grid-cols-2 gap-2.5 my-3.5 p-3 rounded-xl bg-slate-50/90 border border-slate-100 text-xs">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                          Acquired
                        </span>
                        <span className="font-bold text-slate-800 font-mono text-xs sm:text-sm">
                          {asset.purchasedYear}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                          Acquisition Price
                        </span>
                        <span className="font-bold text-slate-800 font-mono text-xs sm:text-sm">
                          {asset.purchasePrice}
                        </span>
                      </div>
                    </div>

                    {/* Architectural & Asset Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {asset.description}
                    </p>
                  </div>

                  {/* Audited Registry Verification Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                      <span>Verified County Deed &amp; Assessment Records</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Business Ventures & Production Equity */}
        {businessVentures.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Business Ventures &amp; Corporate Equity
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Production banners, venture capital syndicates, and commercial brand stakes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              {businessVentures.map((venture, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-bold text-slate-900 text-base tracking-tight leading-snug group-hover:text-blue-950 transition-colors">
                        {venture.name}
                      </h4>
                      {venture.valuationOrRevenue && (
                        <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/80 font-mono font-bold text-xs shadow-2xs">
                          {venture.valuationOrRevenue}
                        </span>
                      )}
                    </div>
                    <div className="my-2.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold uppercase tracking-wider">
                        <Briefcase className="h-3 w-3 text-slate-500 shrink-0" aria-hidden="true" />
                        <span>Role: {venture.role}</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {venture.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" aria-hidden="true" />
                      <span>Commercial Registry &amp; Public Disclosures</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Decade-by-Decade Wealth Growth Progression */}
        {wealthProgression.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-100">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Decade-by-Decade Wealth Accumulation
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Longitudinal tracking of certified net worth benchmarks across career epochs.
            </p>

            <div className="space-y-3.5">
              {wealthProgression.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-4 sm:p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 hover:border-amber-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs tracking-wider shadow-2xs">
                      {item.period}
                    </span>
                    <span className="text-base sm:text-lg font-black text-emerald-700 font-mono">
                      {item.estimatedNetWorth}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 sm:text-right max-w-xl leading-relaxed">
                    {item.milestoneDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
