"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CelebrityProfile } from "@/data/celebrities";
import { ArrowLeftRight, CheckCircle2, TrendingUp, DollarSign, Calendar, Film } from "lucide-react";
import { formatNetWorth } from "@/lib/celebrity-utils";

interface CompareClientProps {
  celebrities: CelebrityProfile[];
  initialSlug1?: string;
  initialSlug2?: string;
}

function parseNetWorthNumber(nwStr: string): number {
  if (!nwStr) return 0;
  const match = nwStr.match(/\$([\d\.]+)\s*(Million|Billion)/i);
  if (!match) return 0;
  const val = parseFloat(match[1]);
  const unit = match[2].toLowerCase();
  return unit === "billion" ? val * 1000 : val;
}

export default function CelebrityCompareClient({
  celebrities,
  initialSlug1 = "drake",
  initialSlug2 = "youngboy-never-broke-again",
}: CompareClientProps) {
  const [slug1, setSlug1] = useState(initialSlug1);
  const [slug2, setSlug2] = useState(initialSlug2);

  const celeb1 = celebrities.find((c) => c.slug === slug1) || celebrities[0];
  const celeb2 = celebrities.find((c) => c.slug === slug2) || celebrities[1] || celebrities[0];

  const nw1 = parseNetWorthNumber(celeb1.quickFacts.netWorth);
  const nw2 = parseNetWorthNumber(celeb2.quickFacts.netWorth);
  const totalNw = (nw1 + nw2) || 1;
  const pct1 = Math.round((nw1 / totalNw) * 100);
  const pct2 = 100 - pct1;
  const diff = Math.abs(nw1 - nw2);

  return (
    <div className="space-y-8">
      {/* Selector Controls */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
            Interactive Head-to-Head Engine
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Select Two Celebrities to Compare
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center max-w-4xl mx-auto">
          {/* Celebrity 1 Selector */}
          <div className="md:col-span-5 space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Celebrity 1
            </label>
            <select
              value={slug1}
              onChange={(e) => setSlug1(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-amber-600 focus:bg-white"
            >
              {celebrities.map((c) => (
                <option key={c.slug} value={c.slug} disabled={c.slug === slug2}>
                  {c.name} ({formatNetWorth(c.quickFacts.netWorth)})
                </option>
              ))}
            </select>
          </div>

          {/* Vs Badge */}
          <div className="md:col-span-1 flex items-center justify-center pt-2 md:pt-6">
            <div className="h-10 w-10 rounded-full bg-slate-900 text-amber-400 font-black text-xs flex items-center justify-center shadow-md">
              VS
            </div>
          </div>

          {/* Celebrity 2 Selector */}
          <div className="md:col-span-5 space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Celebrity 2
            </label>
            <select
              value={slug2}
              onChange={(e) => setSlug2(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-amber-600 focus:bg-white"
            >
              {celebrities.map((c) => (
                <option key={c.slug} value={c.slug} disabled={c.slug === slug1}>
                  {c.name} ({formatNetWorth(c.quickFacts.netWorth)})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Side-by-Side Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-950">
              <Image
                src={celeb1.heroImage}
                alt={celeb1.name}
                fill
                sizes="96px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                {celeb1.quickFacts.primaryRole.split(",")[0]}
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                {celeb1.name}
              </h3>
              <div className="text-lg font-black text-slate-900 mt-1">
                {celeb1.quickFacts.netWorth.split("(")[0].trim()}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">Age & Born:</span>
              <span className="font-bold text-slate-800">{celeb1.quickFacts.age} yrs • {celeb1.quickFacts.birthPlace.split("(")[0].trim()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Known For:</span>
              <span className="font-bold text-slate-800 text-right truncate max-w-[200px]">{celeb1.quickFacts.knownFor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Relationship:</span>
              <span className="font-bold text-slate-800">{celeb1.relationshipProfile.status}</span>
            </div>
          </div>

          <Link
            href={`/celebrity/${celeb1.slug}`}
            className="mt-6 w-full text-center py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-xs"
          >
            View Full {celeb1.name} Dossier
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-950">
              <Image
                src={celeb2.heroImage}
                alt={celeb2.name}
                fill
                sizes="96px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                {celeb2.quickFacts.primaryRole.split(",")[0]}
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                {celeb2.name}
              </h3>
              <div className="text-lg font-black text-slate-900 mt-1">
                {celeb2.quickFacts.netWorth.split("(")[0].trim()}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">Age & Born:</span>
              <span className="font-bold text-slate-800">{celeb2.quickFacts.age} yrs • {celeb2.quickFacts.birthPlace.split("(")[0].trim()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Known For:</span>
              <span className="font-bold text-slate-800 text-right truncate max-w-[200px]">{celeb2.quickFacts.knownFor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Relationship:</span>
              <span className="font-bold text-slate-800">{celeb2.relationshipProfile.status}</span>
            </div>
          </div>

          <Link
            href={`/celebrity/${celeb2.slug}`}
            className="mt-6 w-full text-center py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-amber-600 transition shadow-xs"
          >
            View Full {celeb2.name} Dossier
          </Link>
        </div>
      </div>

      {/* Net Worth Comparison Progress Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
          <span>{celeb1.name} ({pct1}%)</span>
          <span className="text-amber-700 font-mono">
            Wealth Differential: ${diff >= 1000 ? `${(diff / 1000).toFixed(1)}B` : `${diff}M`} USD
          </span>
          <span>{celeb2.name} ({pct2}%)</span>
        </div>

        <div className="h-6 w-full bg-slate-100 rounded-full overflow-hidden flex p-1 border border-slate-200">
          <div
            style={{ width: `${pct1}%` }}
            className="bg-amber-600 rounded-l-full h-full transition-all duration-500 flex items-center justify-center text-[10px] font-black text-white"
          >
            {pct1 > 15 ? `${pct1}%` : ""}
          </div>
          <div
            style={{ width: `${pct2}%` }}
            className="bg-slate-900 rounded-r-full h-full transition-all duration-500 flex items-center justify-center text-[10px] font-black text-white"
          >
            {pct2 > 15 ? `${pct2}%` : ""}
          </div>
        </div>

        <p className="text-xs text-slate-500 text-center leading-relaxed">
          Financial disparity reflects career tenure, catalog equity ownership, commercial backend profit participation, and audited real estate portfolios.
        </p>
      </div>

      {/* Comparison Data Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Comprehensive Metric Matrix
          </h3>
          <span className="text-xs font-mono text-amber-700 font-semibold">2026 Certified Audit</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100/60 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-6 w-1/3">Benchmark Metric</th>
                <th className="py-3 px-6 w-1/3 text-slate-900 font-black">{celeb1.name}</th>
                <th className="py-3 px-6 w-1/3 text-slate-900 font-black">{celeb2.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-6 font-semibold text-slate-600">Verified Net Worth</td>
                <td className="py-3.5 px-6 font-bold text-amber-800">{celeb1.quickFacts.netWorth}</td>
                <td className="py-3.5 px-6 font-bold text-amber-800">{celeb2.quickFacts.netWorth}</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Age & Date of Birth</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb1.quickFacts.age} years ({celeb1.quickFacts.birthDate})</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb2.quickFacts.age} years ({celeb2.quickFacts.birthDate})</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-semibold text-slate-600">Height & Physical Stature</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb1.quickFacts.height}</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb2.quickFacts.height}</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Active Industry Years</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb1.quickFacts.activeYears}</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb2.quickFacts.activeYears}</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-semibold text-slate-600">Primary Industry Category</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb1.silo}</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb2.silo}</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Major Work & Signature Franchise</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb1.quickFacts.knownFor}</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb2.quickFacts.knownFor}</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-semibold text-slate-600">Marital / Relationship Status</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb1.relationshipProfile.status}</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb2.relationshipProfile.status}</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="py-3.5 px-6 font-semibold text-slate-600">Career Filmography / Discography Size</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb1.filmography.length} Verified Entries</td>
                <td className="py-3.5 px-6 font-medium text-slate-800">{celeb2.filmography.length} Verified Entries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
