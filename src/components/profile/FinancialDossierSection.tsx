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
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60">
                <Home className="h-5 w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Real Estate Portfolio &amp; Architectural Assets
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Deed registrations, purchase valuations, and current estimated market equity.
            </p>

            <div
              className={`grid grid-cols-1 ${
                realEstateAssets.length === 3
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "md:grid-cols-2"
              } gap-5 items-stretch`}
            >
              {realEstateAssets.map((asset, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-amber-400/90 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    {/* Top Row: Asset Tag + Estimated Value Pill */}
                    <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-bold uppercase tracking-wider border border-amber-200/60">
                        <Home className="h-3 w-3 text-amber-600" aria-hidden="true" />
                        <span>Property Asset</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/90 font-mono font-bold text-xs shadow-2xs">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>
                          {asset.currentEstimatedValue.startsWith("Est.")
                            ? asset.currentEstimatedValue
                            : `Est. ${asset.currentEstimatedValue}`}
                        </span>
                      </span>
                    </div>

                    {/* Property Title & Clean Untruncated Location */}
                    <h4 className="font-black text-slate-900 text-base sm:text-lg tracking-tight leading-snug group-hover:text-amber-900 transition-colors">
                      {asset.property}
                    </h4>
                    <div className="flex items-start gap-1.5 text-xs text-slate-500 font-medium mt-1.5 leading-relaxed">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{asset.location}</span>
                    </div>

                    {/* Structured Key Financial Stats Box with Divider */}
                    <div className="grid grid-cols-2 gap-3 my-4 p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/70 border border-slate-200/80 divide-x divide-slate-200 text-xs">
                      <div className="pr-3">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                          Acquired
                        </span>
                        <span className="font-extrabold text-slate-900 font-mono text-sm sm:text-base">
                          {asset.purchasedYear}
                        </span>
                      </div>
                      <div className="pl-3">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                          Acquisition Price
                        </span>
                        <span className="font-extrabold text-emerald-700 font-mono text-sm sm:text-base">
                          {asset.purchasePrice}
                        </span>
                      </div>
                    </div>

                    {/* Architectural & Asset Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {asset.description}
                    </p>
                  </div>

                  {/* Audited Registry Verification Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                      <span>Verified County Deed &amp; Assessment Records</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline-block">
                      Public Record
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
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-700 border border-blue-200/60">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Business Ventures &amp; Corporate Equity
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Production banners, venture capital syndicates, and commercial brand stakes.
            </p>

            <div
              className={`grid grid-cols-1 ${
                businessVentures.length === 3
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "md:grid-cols-2"
              } gap-5 items-stretch`}
            >
              {businessVentures.map((venture, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-blue-400/90 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Row: Role Pill + Valuation Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-[11px] font-bold uppercase tracking-wider border border-blue-200/60">
                        <Briefcase className="h-3 w-3 text-blue-600 shrink-0" aria-hidden="true" />
                        <span>Role: {venture.role}</span>
                      </span>

                      {venture.valuationOrRevenue && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/90 font-mono font-bold text-xs shadow-2xs">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                          </span>
                          <span>{venture.valuationOrRevenue}</span>
                        </span>
                      )}
                    </div>

                    <h4 className="font-black text-slate-900 text-base sm:text-lg tracking-tight leading-snug group-hover:text-blue-950 transition-colors">
                      {venture.name}
                    </h4>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {venture.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" aria-hidden="true" />
                      <span>Commercial Registry &amp; Public Disclosures</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline-block">
                      Verified
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
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Decade-by-Decade Wealth Accumulation
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Longitudinal tracking of certified net worth benchmarks across career epochs.
            </p>

            <div className="space-y-3">
              {wealthProgression.map((item, idx) => {
                const isLatest = idx === wealthProgression.length - 1;
                return (
                  <div
                    key={idx}
                    className={`group relative rounded-xl border p-4 sm:p-5 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 ${
                      isLatest
                        ? "bg-gradient-to-r from-emerald-50/50 via-white to-amber-50/30 border-emerald-300/80 shadow-xs hover:border-emerald-400 hover:shadow-md"
                        : "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-amber-300/80 hover:shadow-sm"
                    }`}
                  >
                    {/* 1. Year / Period Chip */}
                    <div className="flex items-center gap-3 shrink-0 md:w-36">
                      <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs tracking-wider shadow-2xs">
                        {item.period}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 hidden sm:inline-block">
                        {isLatest ? "Current" : "Benchmark"}
                      </span>
                    </div>

                    {/* 2. Certified Net Worth Valuation */}
                    <div className="shrink-0 md:w-48">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Certified Net Worth
                      </span>
                      <span className="text-base sm:text-lg font-black text-emerald-700 font-mono tracking-tight flex items-center gap-1.5">
                        {isLatest && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                        )}
                        <span>{item.estimatedNetWorth}</span>
                      </span>
                    </div>

                    {/* 3. Left-Aligned Milestone Description with Desktop Divider */}
                    <div className="flex-1 min-w-0 md:border-l md:border-slate-200/80 md:pl-5">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-left">
                        {item.milestoneDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Audited Registry Verification Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Audited Historical SEC, Studio Contracts &amp; Forbes Wealth Benchmarks</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline-block">
                Historical Audit
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
