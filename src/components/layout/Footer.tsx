import React from "react";
import Link from "next/link";
import CelebLedgerLogo from "@/components/ui/CelebLedgerLogo";
import NewsletterBox from "@/components/layout/NewsletterBox";
import { ArrowLeftRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 text-xs mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block focus:outline-hidden">
              <CelebLedgerLogo size="sm" />
            </Link>
            <p className="text-slate-500 leading-relaxed text-xs">
              An authoritative journalistic archive for official celebrity biographies, industry economic evaluations, filmography records, and cultural timelines.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://x.com/search?q=CelebLedger"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-200/80 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center transition-colors font-bold text-xs"
                title="CelebLedger on X (Twitter)"
              >
                <span aria-hidden="true">𝕏</span>
                <span className="sr-only">CelebLedger on X (Twitter)</span>
              </a>
              <a
                href="https://www.youtube.com/results?search_query=CelebLedger"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-200/80 hover:bg-red-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors font-bold text-xs"
                title="CelebLedger on YouTube"
              >
                <span aria-hidden="true">▶</span>
                <span className="sr-only">CelebLedger on YouTube</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-200/80 hover:bg-pink-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors font-bold text-xs"
                title="CelebLedger on Instagram"
              >
                <span aria-hidden="true">📷</span>
                <span className="sr-only">CelebLedger on Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px]">
              Directory &amp; Articles
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link href="/" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/celebrities" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  All Celebrities
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-amber-600 transition-colors inline-flex items-center gap-1.5 font-semibold text-slate-800 py-1">
                  <ArrowLeftRight className="h-3 w-3 text-amber-600" />
                  <span>Compare Tool (Vs)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  Editorial Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Policies */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px]">
              Editorial &amp; Transparency
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link href="/editorial-standards" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  Editorial Guidelines
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#fact-checking" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  Fact-Checking Standards
                </Link>
              </li>
              <li>
                <Link href="/editorial-standards#corrections" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  Corrections Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  Editorial Team
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-amber-600 transition-colors py-1 inline-block">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Box */}
          <div className="md:col-span-1">
            <NewsletterBox />
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>© {new Date().getFullYear()} CelebLedger. All rights reserved.</p>
          <div className="flex gap-5 font-medium">
            <Link href="/editorial-standards" className="hover:text-slate-800 py-1 inline-block">Editorial Policy</Link>
            <Link href="/privacy" className="hover:text-slate-800 py-1 inline-block">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-800 py-1 inline-block">Terms of Use</Link>
            <Link href="/contact" className="hover:text-slate-800 py-1 inline-block">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
