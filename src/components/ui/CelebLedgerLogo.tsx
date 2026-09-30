import React from "react";

interface CelebLedgerLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function CelebLedgerIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-sm`}
      aria-label="CelebLedger Brand Emblem"
    >
      <defs>
        <linearGradient id="clNavBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0e1526" />
          <stop offset="50%" stopColor="#070b16" />
          <stop offset="100%" stopColor="#020308" />
        </linearGradient>
        <linearGradient id="clNavGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="25%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="clNavChampagneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FEF3C7" />
          <stop offset="75%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="clNavBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#D97706" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#92400E" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Base Squircle */}
      <rect x="10" y="10" width="492" height="492" rx="114" fill="url(#clNavBgGrad)" />
      {/* Inset Border */}
      <rect x="22" y="22" width="468" height="468" rx="102" fill="none" stroke="url(#clNavBorderGrad)" strokeWidth="4" />
      <rect x="32" y="32" width="448" height="448" rx="92" fill="none" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.15" />
      
      {/* Monogram C */}
      <path
        d="M 346 150 A 152 152 0 1 0 346 362 L 312 328 A 104 104 0 1 1 312 184 Z"
        fill="url(#clNavGoldGrad)"
      />
      {/* Monogram L */}
      <path
        d="M 216 182 L 254 182 L 254 288 L 348 288 L 348 326 L 216 326 Z"
        fill="url(#clNavChampagneGrad)"
      />
      {/* Ledger Lines */}
      <rect x="270" y="200" width="68" height="8" rx="4" fill="url(#clNavGoldGrad)" opacity="0.95" />
      <rect x="270" y="228" width="54" height="8" rx="4" fill="url(#clNavGoldGrad)" opacity="0.8" />
      <rect x="270" y="256" width="62" height="8" rx="4" fill="url(#clNavGoldGrad)" opacity="0.65" />
      {/* North Star */}
      <path
        d="M 358 108 Q 358 140 378 148 Q 358 156 358 188 Q 358 156 338 148 Q 358 140 358 108 Z"
        fill="url(#clNavChampagneGrad)"
      />
      <circle cx="358" cy="148" r="4.5" fill="#FFFFFF" />
    </svg>
  );
}

export default function CelebLedgerLogo({
  className = "",
  iconOnly = false,
  size = "md",
}: CelebLedgerLogoProps) {
  const iconSize = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10";
  const titleSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl";
  const subSize = size === "sm" ? "text-[9px]" : "text-[10px]";

  return (
    <div className={`flex items-center gap-3 group shrink-0 ${className}`}>
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <CelebLedgerIcon className={iconSize} />
      </div>
      {!iconOnly && (
        <div className="flex flex-col">
          <span className={`${titleSize} font-black tracking-tight text-slate-900 flex items-center`}>
            CELEB<span className="text-amber-600">LEDGER</span>
          </span>
          <span className={`${subSize} uppercase tracking-widest text-slate-500 -mt-1 font-bold whitespace-nowrap`}>
            The Celebrity Ledger
          </span>
        </div>
      )}
    </div>
  );
}
