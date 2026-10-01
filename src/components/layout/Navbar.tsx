"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowLeftRight } from "lucide-react";
import CelebLedgerLogo from "@/components/ui/CelebLedgerLogo";
import InstantSearch from "@/components/layout/InstantSearch";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Brand Logo */}
        <Link href="/" className="shrink-0 focus:outline-hidden">
          <CelebLedgerLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-slate-700 shrink-0">
          <Link
            href="/"
            className="hover:text-amber-600 transition-colors whitespace-nowrap focus:outline-hidden"
          >
            Home
          </Link>
          <Link
            href="/celebrities"
            className="hover:text-amber-600 transition-colors whitespace-nowrap focus:outline-hidden"
          >
            All Celebrities
          </Link>
          <Link
            href="/compare"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors whitespace-nowrap focus:outline-hidden"
          >
            <ArrowLeftRight className="h-3.5 w-3.5 text-amber-600" />
            <span>Compare</span>
          </Link>
          <Link
            href="/blog"
            className="hover:text-amber-600 transition-colors whitespace-nowrap focus:outline-hidden"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-amber-600 transition-colors whitespace-nowrap focus:outline-hidden"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-amber-600 transition-colors whitespace-nowrap focus:outline-hidden"
          >
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block w-48 md:w-56 lg:w-64 xl:w-72 shrink-0">
            <InstantSearch placeholder="Quick search..." />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900 p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 py-5 space-y-2 shadow-lg">
          {/* Mobile live search */}
          <div className="sm:hidden pb-2">
            <InstantSearch onSelect={() => setMobileMenuOpen(false)} />
          </div>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center text-sm font-semibold text-slate-700 hover:text-amber-600 min-h-[44px] px-2"
          >
            Home
          </Link>
          <Link
            href="/celebrities"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center text-sm font-semibold text-slate-700 hover:text-amber-600 min-h-[44px] px-2"
          >
            All Celebrities
          </Link>
          <Link
            href="/compare"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600 min-h-[44px] px-2"
          >
            <ArrowLeftRight className="h-4 w-4 text-amber-600" />
            <span>Compare Tool (Vs)</span>
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center text-sm font-semibold text-slate-700 hover:text-amber-600 min-h-[44px] px-2"
          >
            Blog
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center text-sm font-semibold text-slate-700 hover:text-amber-600 min-h-[44px] px-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center text-sm font-semibold text-slate-700 hover:text-amber-600 min-h-[44px] px-2"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
