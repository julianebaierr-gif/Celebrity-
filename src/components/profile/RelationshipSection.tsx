import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";
import { RelationshipProfile } from "@/data/celebrities";
import { isEntityPublished } from "@/lib/system4-internal-link-engine";

interface RelationshipSectionProps {
  relationshipProfile: RelationshipProfile;
  celebrityName: string;
}

export default function RelationshipSection({
  relationshipProfile,
  celebrityName,
}: RelationshipSectionProps) {
  const { status, partners, datingHistorySummary } = relationshipProfile;

  return (
    <section
      id="relationship-profile"
      aria-labelledby="relationship-heading"
      className="my-12 scroll-mt-20"
    >
      {/* Heading & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-200/60">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h2
              id="relationship-heading"
              className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
            >
              {celebrityName}: Relationship Timeline &amp; Personal Life
            </h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Documented marital records, confirmed partnerships, and personal milestones for {celebrityName}.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-center px-4 py-2 rounded-xl bg-amber-50/80 border border-amber-200/80 shadow-2xs shrink-0">
          <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <div className="text-xs">
            <span className="text-slate-500 block text-[10px] font-bold uppercase tracking-wider">
              Marital Record
            </span>
            <span className="font-bold text-slate-900">{status}</span>
          </div>
        </div>
      </div>

      {/* Featured Partner Cards (with portrait images and internal links) */}
      {partners && partners.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Documented Partnerships &amp; Spousal History
          </h3>

          <div
            className={`grid grid-cols-1 ${
              partners.length === 3
                ? "md:grid-cols-2 lg:grid-cols-3"
                : partners.length > 1
                ? "md:grid-cols-2"
                : "md:grid-cols-1"
            } gap-5 items-stretch`}
          >
            {partners.map((partner, idx) => (
              <article
                key={idx}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Highlight Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Partner Portrait Image */}
                  {partner.image && (
                    <div className="relative h-48 w-full sm:h-44 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-2xs flex items-center justify-center mb-4">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)] pointer-events-none" />
                      <Image
                        src={partner.image}
                        alt={`${partner.name} - ${partner.relationType} of ${celebrityName}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 300px"
                        className="object-contain object-center z-10"
                      />
                    </div>
                  )}

                  {/* Top: Category Chip */}
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-bold uppercase tracking-wider border border-amber-200/60">
                      <HeartHandshake className="h-3 w-3 text-amber-600 shrink-0" aria-hidden="true" />
                      <span>{partner.relationType} &bull; {partner.years}</span>
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight group-hover:text-amber-950 transition-colors mt-2">
                    {partner.name}
                  </h4>

                  {partner.profession && (
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {partner.profession}
                    </p>
                  )}

                  {partner.summary && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                      {partner.summary}
                    </p>
                  )}
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  {partner.profileSlug && isEntityPublished(partner.profileSlug) ? (
                    <Link
                      href={`/celebrity/${partner.profileSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-0.5 transition-colors group/link"
                      aria-label={`Read ${partner.name}'s biographical profile on CelebLedger`}
                    >
                      <span>View {partner.name}&apos;s Official Profile</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80 shadow-2xs">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Official Profile Record</span>
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline-block">
                    Verified Record
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Editorial Narrative Summary */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-6 border border-slate-200/90 shadow-xs space-y-2 mt-6">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
            Biographical Dating &amp; Personal Life Narrative
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
          {datingHistorySummary}
        </p>
      </div>

      {/* Sourcing & Verification Standard Footnote */}
      <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
        <span>
          Privacy Note: CelebLedger verifies relationship milestones strictly through authorized public statements, certified marriage licenses, and direct on-record interviews to prevent unverified gossip.
        </span>
      </div>
    </section>
  );
}
