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
                aria-label="CelebLedger on X (Twitter)"
              >
                𝕏
              </a>
              <a
                href="https://www.youtube.com/results?search_query=CelebLedger"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-200/80 hover:bg-red-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors font-bold text-xs"
                aria-label="CelebLedger on YouTube"
              >
                ▶
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-200/80 hover:bg-pink-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors font-bold text-xs"
                aria-label="CelebLedger on Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3.5 text-[11px]">
              Directory &amp; Articles
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
                <Link href="/compare" className="hover:text-amber-600 transition-colors flex items-center gap-1.5 font-semibold text-slate-800">
                  <ArrowLeftRight className="h-3 w-3 text-amber-600" />
                  <span>Compare Tool (Vs)</span>
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
              Editorial &amp; Transparency
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
              <li>
                <Link href="/sitemap.xml" className="hover:text-amber-600 transition-colors">
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

        {/* Global Deep-Link Hub for Search Engines & AI Crawlers */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px]">
          <div>
            <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Certified Comparative Intelligence (Head-to-Head)
            </h5>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-slate-600">
              <Link href="/compare/drake-vs-youngboy-never-broke-again" className="hover:text-amber-700 transition">
                Drake vs YoungBoy
              </Link>
              <Link href="/compare/zendaya-vs-jenna-ortega" className="hover:text-amber-700 transition">
                Zendaya vs Jenna Ortega
              </Link>
              <Link href="/compare/cillian-murphy-vs-keanu-reeves" className="hover:text-amber-700 transition">
                Cillian Murphy vs Keanu Reeves
              </Link>
              <Link href="/compare/leonardo-dicaprio-vs-robert-redford" className="hover:text-amber-700 transition">
                DiCaprio vs Robert Redford
              </Link>
              <Link href="/compare/margot-robbie-vs-winona-ryder" className="hover:text-amber-700 transition">
                Margot Robbie vs Winona Ryder
              </Link>
              <Link href="/compare/travis-kelce-vs-taylor-swift-wedding" className="hover:text-amber-700 transition">
                Travis Kelce vs Taylor Swift
              </Link>
              <Link href="/compare/david-harbour-vs-pedro-pascal" className="hover:text-amber-700 transition">
                David Harbour vs Pedro Pascal
              </Link>
              <Link href="/compare/matt-damon-vs-will-smith" className="hover:text-amber-700 transition">
                Matt Damon vs Will Smith
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Forensic Market Reports &amp; Economic Dossiers
            </h5>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-slate-600">
              <Link href="/blog/economics-of-streaming-royalties-rap-catalogs" className="hover:text-amber-700 transition">
                Streaming Royalties &amp; Catalogs
              </Link>
              <Link href="/blog/post-strike-hollywood-economics-residuals" className="hover:text-amber-700 transition">
                Hollywood Streaming Residuals
              </Link>
              <Link href="/blog/highest-grossing-actors-2020s-box-office-ledger" className="hover:text-amber-700 transition">
                Highest Grossing Actors Ledger
              </Link>
              <Link href="/blog/creator-economy-billion-dollar-brands" className="hover:text-amber-700 transition">
                Creator Economy Billion Brands
              </Link>
              <Link href="/blog/celebrity-real-estate-most-expensive-compounds" className="hover:text-amber-700 transition">
                Celebrity Real Estate Compounds
              </Link>
              <Link href="/blog/net-worth-verification-forensic-methodology" className="hover:text-amber-700 transition">
                Net Worth Audit Methodology
              </Link>
              <Link href="/blog/drake-2026-music-and-tour-analysis" className="hover:text-amber-700 transition">
                Drake Tour Economics
              </Link>
              <Link href="/blog/travis-kelce-2026-season-and-contract-analysis" className="hover:text-amber-700 transition">
                Travis Kelce Contract Analysis
              </Link>
              <Link href="/blog/kylie-jenner-2026-media-and-brand-analysis" className="hover:text-amber-700 transition">
                Kylie Jenner Brand Valuation
              </Link>
              <Link href="/blog/tim-curry-2026-slate-and-analysis" className="hover:text-amber-700 transition">
                Tim Curry Career Retrospective
              </Link>
            </div>
          </div>
        </div>

        {/* All Verified Celebrity Profiles Index */}
        <div className="mt-8 pt-6 border-t border-slate-200/60">
          <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-2.5 text-[11px]">
            Verified Celebrity Financial Profiles &amp; Career Dossiers
          </h5>
          <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-[11px] text-slate-600">
            <Link href="/celebrity/drake" className="hover:text-amber-700 transition">Drake</Link>
            <Link href="/celebrity/youngboy-never-broke-again" className="hover:text-amber-700 transition">YoungBoy Never Broke Again</Link>
            <Link href="/celebrity/zendaya" className="hover:text-amber-700 transition">Zendaya</Link>
            <Link href="/celebrity/jenna-ortega" className="hover:text-amber-700 transition">Jenna Ortega</Link>
            <Link href="/celebrity/cillian-murphy" className="hover:text-amber-700 transition">Cillian Murphy</Link>
            <Link href="/celebrity/keanu-reeves" className="hover:text-amber-700 transition">Keanu Reeves</Link>
            <Link href="/celebrity/leonardo-dicaprio" className="hover:text-amber-700 transition">Leonardo DiCaprio</Link>
            <Link href="/celebrity/robert-redford" className="hover:text-amber-700 transition">Robert Redford</Link>
            <Link href="/celebrity/margot-robbie" className="hover:text-amber-700 transition">Margot Robbie</Link>
            <Link href="/celebrity/winona-ryder" className="hover:text-amber-700 transition">Winona Ryder</Link>
            <Link href="/celebrity/travis-kelce" className="hover:text-amber-700 transition">Travis Kelce</Link>
            <Link href="/celebrity/taylor-swift-wedding" className="hover:text-amber-700 transition">Taylor Swift</Link>
            <Link href="/celebrity/david-harbour" className="hover:text-amber-700 transition">David Harbour</Link>
            <Link href="/celebrity/pedro-pascal" className="hover:text-amber-700 transition">Pedro Pascal</Link>
            <Link href="/celebrity/matt-damon" className="hover:text-amber-700 transition">Matt Damon</Link>
            <Link href="/celebrity/will-smith" className="hover:text-amber-700 transition">Will Smith</Link>
            <Link href="/celebrity/kylie-jenner" className="hover:text-amber-700 transition">Kylie Jenner</Link>
            <Link href="/celebrity/tim-curry" className="hover:text-amber-700 transition">Tim Curry</Link>
            <Link href="/celebrity/tom-holland" className="hover:text-amber-700 transition">Tom Holland</Link>
            <Link href="/celebrity/rosalia" className="hover:text-amber-700 transition">Rosalía</Link>
            <Link href="/celebrity/jeremy-allen-white" className="hover:text-amber-700 transition">Jeremy Allen White</Link>
            <Link href="/celebrity/finn-wolfhard" className="hover:text-amber-700 transition">Finn Wolfhard</Link>
            <Link href="/celebrity/billy-bob-thornton" className="hover:text-amber-700 transition">Billy Bob Thornton</Link>
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
