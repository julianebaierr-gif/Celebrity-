"use client";

import React, { useState } from "react";
import { ListFilter, ChevronDown, ChevronUp } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
}

const DEFAULT_SECTIONS: TocItem[] = [
  { id: "fast-facts", title: "1. Verified Quick Facts & Executive Summary" },
  { id: "financial-metrics", title: "2. Economic Impact & Verified Metrics" },
  { id: "career-milestones", title: "3. Career Breakthroughs & Timeline" },
  { id: "filmography-credits", title: "4. Complete Filmography & Box Office" },
  { id: "relationship-profile", title: "5. Relationship Timeline & Personal Life" },
  { id: "frequently-asked-questions", title: "6. Frequently Asked Questions (PAA)" },
  { id: "editorial-attribution", title: "7. Media Rights & Verified Primary Sources" },
];

export default function TableOfContents({ sections = DEFAULT_SECTIONS }: { sections?: TocItem[] }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      aria-label="Table of contents"
      className="my-6 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-5 backdrop-blur text-xs"
    >
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3">
        <div className="flex items-center gap-2 font-bold text-neutral-200 uppercase tracking-wider text-[11px]">
          <ListFilter className="h-4 w-4 text-amber-400" />
          <span>Interactive Table of Contents</span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-neutral-400 hover:text-white flex items-center gap-1"
        >
          {collapsed ? (
            <>
              <span>Expand</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              <span>Collapse</span>
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>

      {!collapsed && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-400">
          {sections.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-amber-400 hover:underline transition-colors block py-0.5"
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
