"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

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
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700 shrink-0">
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
          <form action="/celebrities" method="GET" className="hidden sm:flex items-center relative w-48 md:w-56 lg:w-64 xl:w-72 shrink-0">
            <input
              type="text"
              name="q"
              placeholder="Search celebrities..."
              className="w-full bg-slate-100 text-slate-900 placeholder-slate-400 text-xs rounded-full pl-9 pr-4 py-2 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition"
            />
            <Search className="absolute left-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </form>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg border border-slate-200 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 py-5 space-y-3.5 shadow-lg">
          {/* Mobile search bar */}
          <form action="/celebrities" method="GET" className="sm:hidden flex items-center relative w-full pb-2">
            <input
              type="text"
              name="q"
              placeholder="Search celebrities..."
              className="w-full bg-slate-100 text-slate-900 placeholder-slate-400 text-xs rounded-full pl-9 pr-4 py-2.5 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white"
            />
            <Search className="absolute left-3 top-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </form>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-amber-600 py-1"
          >
            Home
          </Link>
          <Link
            href="/celebrities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-amber-600 py-1"
          >
            All Celebrities
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-amber-600 py-1"
          >
            Blog
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-amber-600 py-1"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 hover:text-amber-600 py-1"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
