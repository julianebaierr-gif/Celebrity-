import React from "react";
import { FilmRole } from "@/data/celebrities";
import { Film, Star, CheckCircle2 } from "lucide-react";

interface FilmographyTableProps {
  filmography: FilmRole[];
  celebrityName: string;
}

export default function FilmographyTable({ filmography, celebrityName }: FilmographyTableProps) {
  if (!filmography || filmography.length === 0) return null;

  return (
    <section id="filmography-credits" className="my-12 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60">
          <Film className="h-5 w-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {celebrityName}: Filmography &amp; Major Credits
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        Chronological archive of motion pictures, television performances, and box office records for {celebrityName}.
      </p>

      {/* Main Table Card */}
      <div className="group relative rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Top Accent Highlight Line on Hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Table Card Toolbar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 via-white to-slate-50/50 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-bold uppercase tracking-wider border border-amber-200/60">
              <Film className="h-3 w-3 text-amber-600" aria-hidden="true" />
              <span>Production Archive</span>
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
              • {filmography.length} Documented Credits
            </span>
          </div>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200/80 shadow-2xs">
            Chronological Order
          </span>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50/90 text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-200/80 font-extrabold">
              <tr>
                <th className="py-3.5 px-4 sm:px-5">Year</th>
                <th className="py-3.5 px-4 sm:px-5">Title</th>
                <th className="py-3.5 px-4 sm:px-5">Character / Role</th>
                <th className="py-3.5 px-4 sm:px-5">Format</th>
                <th className="py-3.5 px-4 sm:px-5">Rating</th>
                <th className="py-3.5 px-4 sm:px-5">Box Office / Network</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filmography.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-amber-50/30 transition-colors group/row"
                >
                  {/* Year */}
                  <td className="py-3.5 px-4 sm:px-5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-mono font-bold text-xs border border-slate-200/60">
                      {item.year}
                    </span>
                  </td>

                  {/* Title */}
                  <td className="py-3.5 px-4 sm:px-5 font-black text-slate-900 text-sm tracking-tight group-hover/row:text-amber-950 transition-colors">
                    {item.title}
                  </td>

                  {/* Character / Role */}
                  <td className="py-3.5 px-4 sm:px-5 text-slate-700 font-medium text-xs sm:text-sm">
                    {item.role}
                  </td>

                  {/* Format (Movie / TV) */}
                  <td className="py-3.5 px-4 sm:px-5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-slate-100 text-slate-700 border border-slate-200/60">
                      {item.type}
                    </span>
                  </td>

                  {/* Rating Badge */}
                  <td className="py-3.5 px-4 sm:px-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/80 font-mono font-bold text-xs shadow-2xs">
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500" aria-hidden="true" />
                      <span>{item.rating.toFixed(1)}</span>
                      <span className="text-[10px] text-amber-600/70 font-normal">/10</span>
                    </span>
                  </td>

                  {/* Box Office / Network */}
                  <td className="py-3.5 px-4 sm:px-5 text-slate-600 font-medium text-xs leading-relaxed max-w-xs">
                    {item.boxOfficeOrNetwork}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Audited Registry Footer */}
        <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
            <span>Substantiated via Industry Trade Records, The Numbers, and Box Office Mojo</span>
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline-block">
            Verified Archive
          </span>
        </div>
      </div>
    </section>
  );
}
