import React from "react";
import { CelebrityProfile } from "@/data/celebrities";
import { ShieldCheck, UserCheck, Calendar, Clock, Camera } from "lucide-react";

interface EditorialBadgeProps {
  celebrity: CelebrityProfile;
}

export default function EditorialBadge({ celebrity }: EditorialBadgeProps) {
  const { editorialMetadata, heroImageCaption, heroImageLicense } = celebrity;

  const formattedDate = new Date(editorialMetadata.lastUpdated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div id="editorial-attribution" className="my-8 rounded-xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5 text-xs text-neutral-400 space-y-3">
      {/* E-E-A-T Author & Fact Checker */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-3 border-b border-neutral-800/80">
        <div className="flex items-center gap-1.5 text-neutral-300">
          <UserCheck className="h-3.5 w-3.5 text-amber-400" />
          <span>Written by: <strong className="text-white">{editorialMetadata.authorName}</strong> ({editorialMetadata.authorRole})</span>
        </div>

        <div className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Fact-Checked by: <strong>{editorialMetadata.factCheckedBy}</strong></span>
        </div>

        <div className="flex items-center gap-1.5 text-neutral-400 ml-auto">
          <Calendar className="h-3.5 w-3.5" />
          <span>Last Updated: <strong className="text-neutral-300">{formattedDate}</strong></span>
        </div>

        <div className="flex items-center gap-1.5 text-neutral-400">
          <Clock className="h-3.5 w-3.5" />
          <span>{editorialMetadata.readingTimeMinutes} min read</span>
        </div>
      </div>

      {/* Media Attribution (0% Copyright Claim Guarantee) */}
      <div className="flex items-center gap-2 text-[11px] text-neutral-400">
        <Camera className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
        <span className="truncate">
          Media Rights: {heroImageCaption} ({heroImageLicense})
        </span>
      </div>
    </div>
  );
}
