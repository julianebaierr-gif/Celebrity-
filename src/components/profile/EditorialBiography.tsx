import React from "react";
import Link from "next/link";
import { BiographySection } from "@/data/celebrities";
import { Quote } from "lucide-react";
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
    <section id="biographical-retrospective" className="my-12">
      {/* Section Header */}
      <div className="mb-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {celebrityName}: Full Biography &amp; Career Analysis
        </h2>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        An authoritative biographical chronicle of {celebrityName}’s artistic development, industry impact, financial architecture, and cultural legacy.
      </p>

      {/* Chapters Container */}
      <div className="space-y-10">
        {processedSections.map((section, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9 shadow-xs hover:border-slate-300 transition-colors"
          >
            {/* Title without badges or chapter numbers */}
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h3>
            </div>

            {/* Paragraphs with Drop Cap on First Chapter */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
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

            {/* Optional Pull Quote */}
            {section.quote && (
              <figure className="my-6 rounded-xl bg-slate-50/80 border-l-4 border-amber-500 p-5 shadow-2xs">
                <div className="flex items-start gap-3">
                  <Quote className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <blockquote className="italic text-slate-800 text-sm sm:text-[15px] font-serif leading-relaxed">
                      &ldquo;{section.quote.text}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs font-semibold text-slate-500 mt-2">
                      — {section.quote.source}
                    </figcaption>
                  </div>
                </div>
              </figure>
            )}

            {/* Optional Key Takeaway Callout */}
            {section.keyTakeaway && (
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900">Key Takeaway: </span>
                <span>{section.keyTakeaway}</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
