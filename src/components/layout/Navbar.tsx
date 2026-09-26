"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Flame, Heart, DollarSign, ShieldCheck, Menu, X, BookOpen, Film, Crown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-amber-400 text-white font-black text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center">
              CELEB<span className="text-amber-600">EDGE</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 -mt-1 font-bold whitespace-nowrap">
              The Celebrity Journal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-semibold text-slate-600 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Home</span>
          </Link>
          <Link
            href="/category/biographies"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            <BookOpen className="h-4 w-4 text-amber-600 shrink-0" />
            <span>Biographies</span>
          </Link>
          <Link
            href="/category/net-worth"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            <DollarSign className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Net Worth</span>
          </Link>
          <Link
            href="/category/relationships"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            <Heart className="h-4 w-4 text-pink-500 shrink-0" />
            <span>Relationships</span>
          </Link>
          <Link
            href="/category/movies-tv"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            <Film className="h-4 w-4 text-indigo-500 shrink-0" />
            <span>Movies & TV</span>
          </Link>
          <Link
            href="/category/legends"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            <Crown className="h-4 w-4 text-purple-600 shrink-0" />
            <span>Legends</span>
          </Link>
          <Link
            href="/editorial-standards"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 hover:border-amber-400 hover:text-amber-700 transition whitespace-nowrap shrink-0"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600 shrink-0" />
            <span>Fact-Checked</span>
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center gap-3">
          <form action="/search" method="GET" className="hidden sm:flex items-center relative w-48 md:w-56 lg:w-60 xl:w-72 shrink-0">
            <input
              type="text"
              name="q"
              placeholder="Search verified celebrity dossiers..."
              className="w-full bg-slate-100 text-slate-900 placeholder-slate-400 text-xs rounded-full pl-9 pr-4 py-2 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition"
            />
            <Search className="absolute left-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </form>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg border border-slate-200 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-5 py-5 space-y-3.5 shadow-lg">
          {/* Mobile search bar */}
          <form action="/search" method="GET" className="sm:hidden flex items-center relative w-full pb-2">
            <input
              type="text"
              name="q"
              placeholder="Search verified celebrity dossiers..."
              className="w-full bg-slate-100 text-slate-900 placeholder-slate-400 text-xs rounded-full pl-9 pr-4 py-2.5 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white"
            />
            <Search className="absolute left-3 top-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </form>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <span>Home</span>
          </Link>
          <Link
            href="/category/biographies"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <BookOpen className="h-4 w-4 text-amber-600" />
            <span>Biographies & Profiles</span>
          </Link>
          <Link
            href="/category/net-worth"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <DollarSign className="h-4 w-4 text-emerald-600" />
            <span>Net Worth & Wealth Portfolios</span>
          </Link>
          <Link
            href="/category/relationships"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <Heart className="h-4 w-4 text-pink-500" />
            <span>Relationships & Marriages</span>
          </Link>
          <Link
            href="/category/movies-tv"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <Film className="h-4 w-4 text-indigo-500" />
            <span>Movies & Television</span>
          </Link>
          <Link
            href="/category/legends"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <Crown className="h-4 w-4 text-purple-600" />
            <span>Hollywood Legends</span>
          </Link>
          <Link
            href="/editorial-standards"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600 pt-2 border-t border-slate-100"
          >
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span>Editorial Standards & Verification</span>
          </Link>
        </div>
      )}
    </header>
  );
}
