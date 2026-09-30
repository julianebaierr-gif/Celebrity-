import React from "react";
import Link from "next/link";
import CelebLedgerLogo from "@/components/ui/CelebLedgerLogo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 text-xs mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-3.5 md:col-span-1">
            <Link href="/" className="inline-block focus:outline-hidden">
              <CelebLedgerLogo size="sm" />
            </Link>
            <p className="text-slate-500 leading-relaxed text-xs">
              An authoritative journalistic archive for official celebrity biographies, industry economic evaluations, filmography records, and cultural timelines.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px]">
              Directory & Articles
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li>
                <Link href="/" className="hover:text-amber-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/celebrities" className="hover:text-amber-600 transition-colors">
                  All Celebrities
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-600 transition-colors">
                  Editorial Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Policies */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px]">
              Editorial & Transparency
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li>
                <Link href="/editorial-standards" className="hover:text-amber-600 transition-colors">
                  Editorial Guidelines
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#fact-checking" className="hover:text-amber-600 transition-colors">
                  Fact-Checking Standards
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#corrections" className="hover:text-amber-600 transition-colors">
                  Corrections Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors">
                  Editorial Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & About */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px]">
              About CelebLedger
            </h4>
            <p className="text-slate-500 leading-relaxed mb-3 text-xs">
              Providing accurate biographical profiles and career documentation. All media and data referenced from public records, official agencies, and authorized archives.
            </p>
            <div className="flex items-center gap-3 text-slate-500 text-[11px]">
              <Link href="/sitemap.xml" className="hover:underline text-amber-700">
                XML Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>© {new Date().getFullYear()} CelebLedger. All rights reserved.</p>
          <div className="flex gap-5 font-medium">
            <Link href="/editorial-standards" className="hover:text-slate-800">Editorial Policy</Link>
            <Link href="/privacy" className="hover:text-slate-800">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-800">Terms of Use</Link>
            <Link href="/contact" className="hover:text-slate-800">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
