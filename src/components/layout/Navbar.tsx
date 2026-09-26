"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Flame, Award, Heart, DollarSign, ShieldCheck, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-neutral-950 font-black text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              CELEB<span className="text-amber-400">EDGE</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 -mt-1 font-semibold">
              Verified Intel & Archives
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <Link
            href="/#trending"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Flame className="h-4 w-4 text-rose-500" />
            Trending Stars
          </Link>
          <Link
            href="/silo/spouses-relationships"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Heart className="h-4 w-4 text-pink-500" />
            Relationships
          </Link>
          <Link
            href="/silo/net-worth-wealth"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <DollarSign className="h-4 w-4 text-emerald-400" />
            Net Worth
          </Link>
          <Link
            href="/editorial-standards"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-xs text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
            E-E-A-T Verified
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search 9,500+ celebrities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900 text-white placeholder-neutral-500 text-xs rounded-full pl-9 pr-4 py-2 border border-neutral-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
          />
          <Search className="absolute left-3 h-3.5 w-3.5 text-neutral-400 pointer-events-none" />
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-400 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 py-4 space-y-3">
          <Link
            href="/#trending"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white py-1.5"
          >
            <Flame className="h-4 w-4 text-rose-500" />
            Trending Stars
          </Link>
          <Link
            href="/silo/spouses-relationships"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white py-1.5"
          >
            <Heart className="h-4 w-4 text-pink-500" />
            Relationships & Weddings
          </Link>
          <Link
            href="/silo/net-worth-wealth"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white py-1.5"
          >
            <DollarSign className="h-4 w-4 text-emerald-400" />
            Net Worth & Assets
          </Link>
          <Link
            href="/editorial-standards"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white py-1.5"
          >
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            Editorial Guidelines & E-E-A-T
          </Link>
        </div>
      )}
    </header>
  );
}
