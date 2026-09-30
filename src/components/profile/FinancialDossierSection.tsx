import React from "react";
import { FinancialDossier } from "@/data/celebrities";
import { DollarSign, Home, Building2, TrendingUp } from "lucide-react";

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
          <span>Financial & Wealth Architecture</span>
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
                Verified Salary Milestones & Contract Benchmarks
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Historical compensation reported across trade filings, studio contracts, and industry records.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase text-[11px] font-bold tracking-wider">
                    <th className="py-3 px-3">Project / Role</th>
                    <th className="py-3 px-3">Year</th>
                    <th className="py-3 px-3">Base / Payout</th>
                    <th className="py-3 px-3">Box Office / Gross</th>
                    <th className="py-3 px-3">Deal Structure & Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {salaryMilestones.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/75 transition-colors">
                      <td className="py-3 px-3 font-bold text-slate-900">{item.project}</td>
                      <td className="py-3 px-3 font-mono text-slate-500 text-xs">{item.year}</td>
                      <td className="py-3 px-3 font-bold text-emerald-700">{item.salary}</td>
                      <td className="py-3 px-3 text-slate-600 text-xs">{item.boxOfficeOrBudget || "—"}</td>
                      <td className="py-3 px-3 text-slate-600 text-xs leading-relaxed">{item.notes}</td>
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
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-5 w-5 text-indigo-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Real Estate Portfolio & Architectural Assets
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Deed registrations, purchase valuations, and current estimated market equity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {realEstateAssets.map((asset, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-5 hover:border-slate-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{asset.property}</h4>
                      <p className="text-xs text-slate-500">{asset.location}</p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold text-[11px]">
                      Est. {asset.currentEstimatedValue}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1 mb-3 pt-2 border-t border-slate-200/60">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Acquired:</span>
                      <span className="font-medium text-slate-800">{asset.purchasedYear}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Acquisition Price:</span>
                      <span className="font-medium text-slate-800">{asset.purchasePrice}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{asset.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Business Ventures & Production Equity */}
        {businessVentures.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-blue-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Business Ventures & Corporate Equity
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Production banners, venture capital syndicates, and commercial brand stakes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessVentures.map((venture, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-slate-300 transition"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-bold text-slate-900 text-sm">{venture.name}</h4>
                    {venture.valuationOrRevenue && (
                      <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {venture.valuationOrRevenue}
                      </span>
                    )}
                  </div>
                  <span className="inline-block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Role: {venture.role}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">{venture.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Decade-by-Decade Wealth Growth Progression */}
        {wealthProgression.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-amber-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Decade-by-Decade Wealth Accumulation
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Longitudinal tracking of certified net worth benchmarks across career epochs.
            </p>

            <div className="space-y-4">
              {wealthProgression.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs">
                      {item.period}
                    </span>
                    <span className="text-base font-black text-emerald-700">
                      {item.estimatedNetWorth}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 sm:text-right max-w-xl leading-relaxed">
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
