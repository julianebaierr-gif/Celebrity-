import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Lock, FileText, Info } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400 text-xs mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 text-neutral-950 font-black text-sm">
                ⚡
              </div>
              <span className="text-base font-extrabold text-white">
                CELEB<span className="text-amber-400">EDGE</span>
              </span>
            </Link>
            <p className="text-neutral-500 leading-relaxed">
              The premier intelligence portal for verified celebrity biographies, economic metrics, filmography archives, and cultural timelines.
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-medium pt-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Independent & Fact-Checked Editorial</span>
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-3 text-[11px]">
              Content Silos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#trending" className="hover:text-amber-400 transition-colors">
                  Trending Stars & Profiles
                </Link>
              </li>
              <li>
                <Link href="/silo/spouses-relationships" className="hover:text-amber-400 transition-colors">
                  Spouses & Relationships
                </Link>
              </li>
              <li>
                <Link href="/silo/net-worth-wealth" className="hover:text-amber-400 transition-colors">
                  Net Worth & Asset Portfolios
                </Link>
              </li>
              <li>
                <Link href="/silo/health-lifestyle" className="hover:text-amber-400 transition-colors">
                  Health & Transformations
                </Link>
              </li>
            </ul>
          </div>

          {/* E-E-A-T & Trust Standards */}
          <div>
            <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-3 text-[11px] flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
              Trust & Transparency
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/editorial-standards" className="hover:text-amber-400 transition-colors">
                  Editorial Guidelines
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#fact-checking" className="hover:text-amber-400 transition-colors">
                  Fact-Checking Protocol
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#corrections" className="hover:text-amber-400 transition-colors">
                  Corrections Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  Our Research Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Copyright Compliance */}
          <div>
            <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-3 text-[11px] flex items-center gap-1">
              <Lock className="h-3.5 w-3.5 text-amber-400" />
              Media Rights & DMCA
            </h4>
            <p className="text-neutral-500 leading-relaxed mb-3">
              Imagery utilized across CelebEdge is legally integrated through TMDb Developer APIs, Wikimedia Commons (Creative Commons Attribution licenses), and verified official social platform embeds.
            </p>
            <div className="flex items-center gap-3 text-neutral-500 text-[11px]">
              <span>© {new Date().getFullYear()} CelebEdge</span>
              <span>•</span>
              <Link href="/sitemap.xml" className="hover:underline">
                XML Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-neutral-600 text-[11px] gap-3">
          <p>Strictly compliant with Google Search Quality Rater Guidelines and Helpful Content standards.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-neutral-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-400">Terms of Use</Link>
            <Link href="/contact" className="hover:text-neutral-400">Contact Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
