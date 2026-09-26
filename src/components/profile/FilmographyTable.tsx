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
      <div className="flex items-center gap-2 mb-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400">
          <Clapperboard className="h-4 w-4" />
        </span>
        <h2 className="text-xl font-bold text-white tracking-tight">
          Filmography & Landmark Roles
        </h2>
      </div>
      <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
        Chronological archive of major motion pictures, television series, and verified box office performance for {celebrityName}.
      </p>

      <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur">
        <table className="w-full text-left text-xs text-neutral-300">
          <thead className="bg-neutral-950/80 text-[11px] uppercase tracking-wider text-neutral-400 border-b border-neutral-800">
            <tr>
              <th className="py-3 px-4">Year</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Character / Credit</th>
              <th className="py-3 px-4">Format</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Box Office / Network</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/60">
            {filmography.map((item, idx) => (
              <tr key={idx} className="hover:bg-neutral-800/30 transition-colors">
                <td className="py-3.5 px-4 font-mono text-neutral-400">{item.year}</td>
                <td className="py-3.5 px-4 font-bold text-white">{item.title}</td>
                <td className="py-3.5 px-4 text-neutral-300">{item.role}</td>
                <td className="py-3.5 px-4">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-800 text-neutral-300">
                    {item.type}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1 font-semibold text-amber-400">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating.toFixed(1)}/10</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-neutral-400 font-mono text-[11px]">
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
