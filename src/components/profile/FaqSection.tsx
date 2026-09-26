"use client";

import React, { useState } from "react";
import { FaqItem } from "@/data/celebrities";
import { HelpCircle, ChevronDown } from "lucide-react";

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
      <div className="flex items-center gap-2 mb-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
          <HelpCircle className="h-4 w-4" />
        </span>
        <h2 className="text-xl font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
        Common inquiries and verified answers surrounding {celebrityName}&apos;s background, career milestones, and personal life.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden transition"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-neutral-100 hover:text-amber-400 transition"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-neutral-400 shrink-0 ml-3 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-amber-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-3">
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
