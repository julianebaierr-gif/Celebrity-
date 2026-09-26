import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 text-xs mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-3.5 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 text-white font-black text-sm shadow-sm">
                ⚡
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tight">
                CELEB<span className="text-amber-600">EDGE</span>
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed text-xs">
              The premier public record and journalistic archive for verified celebrity biographies, industry economic evaluations, filmography records, and cultural timelines.
            </p>
            <div className="flex items-center gap-1.5 text-emerald-700 text-[11px] font-semibold pt-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Independent & Fact-Checked Editorial Standards</span>
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px]">
              Content Archives
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li>
                <Link href="/#trending" className="hover:text-amber-600 transition-colors">
                  Trending Stars & Biographies
                </Link>
              </li>
              <li>
                <Link href="/silo/spouses-relationships" className="hover:text-amber-600 transition-colors">
                  Spouses & Marriage Records
                </Link>
              </li>
              <li>
                <Link href="/silo/net-worth-wealth" className="hover:text-amber-600 transition-colors">
                  Net Worth & Asset Portfolios
                </Link>
              </li>
              <li>
                <Link href="/#directory-index" className="hover:text-amber-600 transition-colors">
                  Alphabetical A–Z Index
                </Link>
              </li>
            </ul>
          </div>

          {/* E-E-A-T & Trust Standards */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px] flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              Trust & Transparency
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li>
                <Link href="/editorial-standards" className="hover:text-amber-600 transition-colors">
                  Editorial Guidelines
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#fact-checking" className="hover:text-amber-600 transition-colors">
                  Fact-Checking Methodology
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#corrections" className="hover:text-amber-600 transition-colors">
                  Corrections Protocol
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors">
                  Research Directorate & Byline
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Copyright Compliance */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px] flex items-center gap-1">
              <Lock className="h-3.5 w-3.5 text-amber-600" />
              Media Licensing & Rights
            </h4>
            <p className="text-slate-500 leading-relaxed mb-3 text-xs">
              Photography across CelebEdge is legally integrated through authorized TMDb Developer APIs, Wikimedia Commons (Creative Commons Attribution licenses), and verified official platform embeds.
            </p>
            <div className="flex items-center gap-3 text-slate-500 text-[11px]">
              <span>© {new Date().getFullYear()} CelebEdge Publishing</span>
              <span>•</span>
              <Link href="/sitemap.xml" className="hover:underline text-amber-700">
                XML Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>Strictly compliant with Google Search Quality Rater Guidelines and Helpful Editorial standards.</p>
          <div className="flex gap-5 font-medium">
            <Link href="/editorial-standards" className="hover:text-slate-800">Editorial Policy</Link>
            <Link href="/privacy" className="hover:text-slate-800">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-800">Terms of Use</Link>
            <Link href="/contact" className="hover:text-slate-800">Contact Bureau</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
