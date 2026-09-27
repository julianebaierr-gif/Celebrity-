import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";
import { RelationshipProfile } from "@/data/celebrities";

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
      className="my-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6"
    >
      {/* Heading & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h2
            id="relationship-heading"
            className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
          >
            Relationship Timeline & Personal Life
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Verified marital records, documented partnerships, and personal milestones for {celebrityName}.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
          <HeartHandshake className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />
          <div className="text-xs">
            <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">
              Marital Record
            </span>
            <span className="font-bold text-slate-900">{status}</span>
          </div>
        </div>
      </div>

      {/* Featured Partner Cards (with portrait images and internal links) */}
      {partners && partners.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Documented Partnerships & Spousal History
          </h3>

          <div
            className={`grid grid-cols-1 ${
              partners.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"
            } gap-5`}
          >
            {partners.map((partner, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 flex flex-col sm:flex-row gap-5 transition-all hover:bg-slate-50 hover:shadow-xs"
              >
                {/* Partner Portrait Image */}
                {partner.image && (
                  <div className="relative h-44 w-full sm:h-36 sm:w-36 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-200 shadow-2xs">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} - ${partner.relationType} of ${celebrityName}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 144px"
                      className="object-cover object-top"
                    />
                  </div>
                )}

                {/* Partner Details */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                      {partner.relationType} &bull; {partner.years}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                      {partner.name}
                    </h4>

                    {partner.profession && (
                      <p className="text-xs font-medium text-slate-500">
                        {partner.profession}
                      </p>
                    )}

                    {partner.summary && (
                      <p className="text-xs text-slate-600 leading-relaxed mt-2">
                        {partner.summary}
                      </p>
                    )}
                  </div>

                  {/* Internal Link to Partner's Verified Profile */}
                  {partner.profileSlug && (
                    <div className="pt-2">
                      <Link
                        href={`/celebrity/${partner.profileSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-0.5 transition-colors group"
                        aria-label={`Explore ${partner.name}'s verified biographical dossier on CelebEdge`}
                      >
                        <span>Explore {partner.name}&apos;s Verified Profile</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Editorial Narrative Summary */}
      <div className="rounded-xl bg-slate-50 p-5 border border-slate-200 space-y-2">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Biographical Dating & Personal Life Narrative
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {datingHistorySummary}
        </p>
      </div>

      {/* Sourcing & Verification Standard Footnote */}
      <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
        <span>
          Privacy Note: CelebEdge verifies relationship milestones strictly through authorized public statements, certified marriage licenses, and direct on-record interviews to prevent unverified gossip.
        </span>
      </div>
    </section>
  );
}
