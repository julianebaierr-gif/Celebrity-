"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Flame, Heart, DollarSign, ShieldCheck, Menu, X, BookOpen } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-amber-400 text-white font-black text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">
              CELEB<span className="text-amber-600">EDGE</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 -mt-1 font-bold">
              Verified Biographical Archives
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <Link
            href="/#trending"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
          >
            <Flame className="h-4 w-4 text-rose-500" />
            Trending Stars
          </Link>
          <Link
            href="/silo/spouses-relationships"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
          >
            <Heart className="h-4 w-4 text-pink-500" />
            Relationships
          </Link>
          <Link
            href="/silo/net-worth-wealth"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
          >
            <DollarSign className="h-4 w-4 text-emerald-600" />
            Net Worth
          </Link>
          <Link
            href="/#directory-index"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
          >
            <BookOpen className="h-4 w-4 text-indigo-500" />
            A–Z Directory
          </Link>
          <Link
            href="/editorial-standards"
            className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 hover:border-amber-400 hover:text-amber-700 transition"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            E-E-A-T Verified
          </Link>
        </nav>

        {/* Search Bar */}
        <form action="/search" method="GET" className="hidden sm:flex items-center relative max-w-xs w-full">
          <input
            type="text"
            name="q"
            placeholder="Search 9,500+ verified dossiers..."
            className="w-full bg-slate-100 text-slate-900 placeholder-slate-400 text-xs rounded-full pl-9 pr-4 py-2.5 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition"
          />
          <Search className="absolute left-3 h-4 w-4 text-slate-400 pointer-events-none" />
        </form>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-600 hover:text-slate-900"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 py-5 space-y-4 shadow-lg">
          <Link
            href="/#trending"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <Flame className="h-4 w-4 text-rose-500" />
            Trending Stars
          </Link>
          <Link
            href="/silo/spouses-relationships"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <Heart className="h-4 w-4 text-pink-500" />
            Relationships & Weddings
          </Link>
          <Link
            href="/silo/net-worth-wealth"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <DollarSign className="h-4 w-4 text-emerald-600" />
            Net Worth & Assets
          </Link>
          <Link
            href="/editorial-standards"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600"
          >
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            Editorial Guidelines & Verification
          </Link>
        </div>
      )}
    </header>
  );
}
