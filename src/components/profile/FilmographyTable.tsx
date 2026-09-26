import React from "react";
import { FilmRole } from "@/data/celebrities";
import { Clapperboard, Star } from "lucide-react";

interface FilmographyTableProps {
  filmography: FilmRole[];
  celebrityName: string;
}

export default function FilmographyTable({ filmography, celebrityName }: FilmographyTableProps) {
  return (
    <section id="filmography-credits" className="my-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-700 border border-rose-200">
          <Clapperboard className="h-4 w-4" />
        </span>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Filmography & Landmark Roles
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Chronological archive of motion pictures, television performances, and box office records for {celebrityName}.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs text-slate-700">
          <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-600 border-b border-slate-200 font-bold">
            <tr>
              <th className="py-3.5 px-5">Year</th>
              <th className="py-3.5 px-5">Title</th>
              <th className="py-3.5 px-5">Character / Role</th>
              <th className="py-3.5 px-5">Format</th>
              <th className="py-3.5 px-5">Rating</th>
              <th className="py-3.5 px-5">Box Office / Network</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filmography.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 font-mono text-slate-500 font-semibold">{item.year}</td>
                <td className="py-4 px-5 font-bold text-slate-900">{item.title}</td>
                <td className="py-4 px-5 text-slate-700">{item.role}</td>
                <td className="py-4 px-5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {item.type}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-1 font-bold text-amber-700">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <span>{item.rating.toFixed(1)}/10</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-slate-600 font-mono text-[11px]">
                  {item.boxOfficeOrNetwork}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
