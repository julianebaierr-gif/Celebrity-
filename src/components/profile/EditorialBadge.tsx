import React from "react";
import { CelebrityProfile } from "@/data/celebrities";
import { UserCheck, Calendar, Clock, Camera } from "lucide-react";

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
    <div id="editorial-attribution" className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-xs text-slate-600 space-y-4 shadow-xs">
      {/* Author & Fact Checker */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-1.5 text-slate-700">
          <UserCheck className="h-4 w-4 text-amber-600" />
          <span>Reported by: <strong className="text-slate-900 font-bold">{editorialMetadata.authorName}</strong> ({editorialMetadata.authorRole})</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-700 font-medium">
          <span>Fact-Checked by: <strong className="text-slate-900">{editorialMetadata.factCheckedBy}</strong></span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-500 ml-auto">
          <Calendar className="h-3.5 w-3.5" />
          <span>Last Updated: <strong className="text-slate-700 font-semibold">{formattedDate}</strong></span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-500">
          <Clock className="h-3.5 w-3.5" />
          <span>{editorialMetadata.readingTimeMinutes} min read</span>
        </div>
      </div>

      {/* Media Attribution (0% Copyright Claim Guarantee) */}
      <div className="flex items-center gap-2 text-[11px] text-slate-500">
        <Camera className="h-3.5 w-3.5 text-slate-400 shrink-0" />
        <span className="truncate">
          Media Rights & Licensing: {heroImageCaption} ({heroImageLicense})
        </span>
      </div>
    </div>
  );
}
