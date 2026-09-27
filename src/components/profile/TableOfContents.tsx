"use client";

import React, { useState } from "react";
import { ListFilter, ChevronDown, ChevronUp } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
}

const DEFAULT_SECTIONS: TocItem[] = [
  { id: "fast-facts", title: "Verified Quick Facts & Executive Summary" },
  { id: "financial-metrics", title: "Economic Impact & Verified Metrics" },
  { id: "career-milestones", title: "Career Breakthroughs & Timeline" },
  { id: "biographical-retrospective", title: "Comprehensive Biography & Critical Analysis" },
  { id: "filmography-credits", title: "Complete Filmography & Box Office" },
  { id: "relationship-profile", title: "Relationship Timeline & Personal Life" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "editorial-attribution", title: "Media Rights & Verified Primary Sources" },
];

export default function TableOfContents({ sections = DEFAULT_SECTIONS }: { sections?: TocItem[] }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      aria-label="Table of contents"
      className="my-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-xs"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
        <div className="flex items-center gap-2 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
          <ListFilter className="h-4 w-4 text-amber-600" />
          <span>Interactive Table of Contents</span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
        >
          {collapsed ? (
            <>
              <span>Expand Index</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              <span>Collapse Index</span>
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>

      {!collapsed && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-600">
          {sections.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-amber-700 hover:underline transition-colors block py-0.5 font-medium"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
