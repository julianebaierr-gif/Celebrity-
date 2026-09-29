"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  celebrityName?: string;
  celebritySlug?: string;
}

function parseFaqAnswer(text: string): React.ReactNode[] {
  // Regex matches markdown links [label](url) and **bold text**
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, label, href] = match;
        return (
          <Link
            key={index}
            href={href}
            className="text-amber-700 font-bold underline underline-offset-4 hover:text-amber-800 transition-colors inline-flex items-center gap-1"
          >
            {label}
          </Link>
        );
      }
    } else if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function FaqAccordion({ faqs, celebrityName, celebritySlug }: FaqAccordionProps) {
  // Keep first 2 open by default for immediate engagement and SEO clarity
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
            <span>Essential Event Briefing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-semibold self-start sm:self-auto">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Cross-Referenced Primary Sources</span>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-amber-300 bg-white shadow-xs"
                  : "border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100/80 text-amber-900 font-black text-xs">
                    Q
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-amber-100 text-amber-800" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1 space-y-2">
                  <div className="pl-10">
                    <p>{parseFaqAnswer(faq.answer)}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {celebritySlug && (
        <div className="mt-6 p-4 rounded-xl bg-slate-100/70 border border-slate-200/80 flex items-center justify-between gap-3 text-xs text-slate-600">
          <span>Need full historical archives, net worth valuation, and filmography records?</span>
          <Link
            href={`/celebrity/${celebritySlug}`}
            className="text-amber-800 font-bold hover:text-amber-900 underline whitespace-nowrap"
          >
            View Official {celebrityName || "Celebrity"} Profile &rarr;
          </Link>
        </div>
      )}
    </section>
  );
}
