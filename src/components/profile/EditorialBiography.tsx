import React from "react";
import Link from "next/link";
import { BiographySection } from "@/data/celebrities";
import { Quote, BookOpen } from "lucide-react";
import { injectNaturalInternalLinks } from "@/lib/system4-internal-link-engine";

interface EditorialBiographyProps {
  celebrityName: string;
  celebritySlug?: string;
  sections?: BiographySection[];
}

function parseBioMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, label, href] = match;
        return (
          <Link
            key={index}
            href={href}
            className="text-amber-800 font-bold underline underline-offset-2 hover:text-amber-900 transition-colors"
          >
            {label}
          </Link>
        );
      }
    } else if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      const inner = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-slate-900">
          {parseBioMarkdown(inner)}
        </strong>
      );
    }
    return part;
  });
}

export default function EditorialBiography({
  celebrityName,
  celebritySlug,
  sections,
}: EditorialBiographyProps) {
  if (!sections || sections.length === 0) return null;

  // Process biography paragraphs through System 4 Natural Linking Engine
  const processedSections = React.useMemo(() => {
    if (!celebritySlug) return sections;
    return sections.map((section) => {
      const combinedText = section.paragraphs.join("\n\n");
      const interlinked = injectNaturalInternalLinks(combinedText, {
        currentSlug: celebritySlug,
        scope: "profile",
        maxLinksPerEntity: 1,
      });
      return {
        ...section,
        paragraphs: interlinked.split("\n\n"),
      };
    });
  }, [sections, celebritySlug]);

  return (
    <section id="biographical-retrospective" className="my-12 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60">
          <BookOpen className="h-5 w-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {celebrityName}: Full Biography &amp; Career Analysis
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        An authoritative biographical chronicle of {celebrityName}’s artistic development, industry impact, financial architecture, and cultural legacy.
      </p>

      {/* Chapters Container */}
      <div className="space-y-8 sm:space-y-10">
        {processedSections.map((section, idx) => (
          <article
            key={idx}
            className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-xs hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Top Accent Highlight Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Structured Chapter Header with Category Pill and Divider */}
            <div className="pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-bold uppercase tracking-wider border border-amber-200/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  Biographical Epoch
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60 hidden sm:inline-block">
                  Verified Analysis
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-amber-950 transition-colors">
                {section.heading}
              </h3>
            </div>

            {/* Paragraphs with Breathing Space and Editorial Typography */}
            <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed sm:leading-[1.8] font-normal">
              {section.paragraphs.map((p, pIdx) => {
                const isFirst = idx === 0 && pIdx === 0;
                return (
                  <p
                    key={pIdx}
                    className={
                      isFirst
                        ? "first-letter:float-left first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-black first-letter:text-slate-900 first-letter:mr-3 first-letter:leading-none"
                        : ""
                    }
                  >
                    {parseBioMarkdown(p)}
                  </p>
                );
              })}
            </div>

            {/* Editorial Pull Quote */}
            {section.quote && (
              <figure className="my-7 rounded-2xl bg-gradient-to-br from-amber-50/40 via-slate-50/60 to-white border border-amber-200/70 p-5 sm:p-6 shadow-xs relative overflow-hidden">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-200/60 shrink-0">
                    <Quote className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <blockquote className="italic text-slate-800 text-sm sm:text-base font-serif leading-relaxed">
                      &ldquo;{section.quote.text}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs font-bold text-amber-900 mt-2.5 flex items-center gap-1.5">
                      <span className="h-1 w-3 rounded-full bg-amber-500" />
                      <span>{section.quote.source}</span>
                    </figcaption>
                  </div>
                </div>
              </figure>
            )}

            {/* Key Takeaway Callout */}
            {section.keyTakeaway && (
              <div className="mt-7 pt-4 border-t border-slate-100">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-start gap-3">
                  <span className="shrink-0 px-2 py-0.5 rounded bg-slate-900 text-white font-mono font-bold text-[10px] uppercase tracking-wider mt-0.5 shadow-2xs">
                    Takeaway
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {section.keyTakeaway}
                  </p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
