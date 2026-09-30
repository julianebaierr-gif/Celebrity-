"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Loader2, ArrowRight, TrendingUp } from "lucide-react";

interface SearchResult {
  slug: string;
  name: string;
  primaryRole: string;
  netWorth: string;
  heroImage: string;
  category: string;
  knownFor: string;
}

interface InstantSearchProps {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  onSelect?: () => void;
}

export default function InstantSearch({
  className = "",
  inputClassName = "",
  placeholder = "Search celebrities, roles, net worth...",
  onSelect,
}: InstantSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch debounced search results
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.results || []);
          setIsOpen(true);
          setSelectedIndex(-1);
        }
      } catch (err) {
        console.error("Instant search error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 180);

    return () => clearTimeout(timer);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        e.preventDefault();
        const selected = results[selectedIndex];
        setIsOpen(false);
        if (onSelect) onSelect();
        router.push(`/celebrity/${selected.slug}`);
      } else if (query.trim()) {
        e.preventDefault();
        setIsOpen(false);
        if (onSelect) onSelect();
        router.push(`/celebrities?q=${encodeURIComponent(query.trim())}`);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      if (onSelect) onSelect();
      router.push(`/celebrities?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative w-full">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Search celebrity profiles"
          aria-expanded={isOpen}
          role="combobox"
          className={
            inputClassName ||
            "w-full bg-slate-100 text-slate-900 placeholder-slate-400 text-xs rounded-full pl-9 pr-8 py-2 border border-slate-200 focus:outline-hidden focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition"
          }
        />
        <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
        {isLoading && (
          <Loader2 className="absolute right-3 top-2.5 h-3.5 w-3.5 text-amber-600 animate-spin pointer-events-none" />
        )}
      </form>

      {/* Dropdown Live Results */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          {results.length > 0 ? (
            <div className="py-2">
              <div className="px-3.5 py-1.5 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-600 border-b border-slate-100">
                <span>Verified Dossiers</span>
                <span className="text-[10px] text-amber-700 font-mono">Live Search</span>
              </div>
              <ul className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                {results.map((item, idx) => (
                  <li key={item.slug}>
                    <Link
                      href={`/celebrity/${item.slug}`}
                      onClick={() => {
                        setIsOpen(false);
                        if (onSelect) onSelect();
                      }}
                      className={`flex items-center gap-3 px-3.5 py-2.5 hover:bg-amber-50/60 transition-colors ${
                        selectedIndex === idx ? "bg-amber-50" : ""
                      }`}
                    >
                      <div className="relative h-10 w-10 shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                        <Image
                          src={item.heroImage}
                          alt={item.name}
                          fill
                          sizes="40px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900 truncate">
                            {item.name}
                          </h4>
                          <span className="shrink-0 text-[10px] font-semibold text-amber-800 bg-amber-100/70 px-1.5 py-0.5 rounded">
                            {item.netWorth.split("USD")[0].trim()}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {item.primaryRole}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-2 border-t border-slate-100 bg-slate-50">
                <Link
                  href={`/celebrities?q=${encodeURIComponent(query.trim())}`}
                  onClick={() => {
                    setIsOpen(false);
                    if (onSelect) onSelect();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <span>See all results for &ldquo;{query}&rdquo;</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ) : (
            query.trim() && !isLoading && (
              <div className="p-5 text-center text-xs text-slate-500">
                <p>No verified profiles matching &ldquo;{query}&rdquo;</p>
                <Link
                  href="/celebrities"
                  onClick={() => {
                    setIsOpen(false);
                    if (onSelect) onSelect();
                  }}
                  className="mt-2 inline-flex items-center gap-1 font-bold text-amber-700 hover:underline"
                >
                  <span>Browse Directory</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
