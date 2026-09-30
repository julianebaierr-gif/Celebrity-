"use client";

import React, { useState } from "react";
import { FaqItem } from "@/data/celebrities";
import { ChevronDown } from "lucide-react";

interface FaqSectionProps {
  faqs: FaqItem[];
  celebrityName: string;
}

export default function FaqSection({ faqs, celebrityName }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="frequently-asked-questions" className="my-10">
      <div className="mb-3">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Frequently Asked Questions About {celebrityName}
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Direct answers to public inquiries regarding {celebrityName}&apos;s career, personal milestones, and public record.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-amber-700 transition"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-amber-600" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
