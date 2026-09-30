"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <div className="space-y-3">
      <div>
        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
          <Mail className="h-3.5 w-3.5 text-amber-600" />
          <span>The Weekly Ledger</span>
        </h4>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed">
          Verified net worth disclosures, contract breakdowns, and box office dossiers delivered every Monday.
        </p>
      </div>

      {status === "success" ? (
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold animate-in fade-in">
          <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>Subscribed! Check your inbox Monday.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-1.5">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="w-full bg-white text-slate-900 placeholder-slate-400 text-xs rounded-xl px-3 py-2 border border-slate-300 focus:outline-hidden focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs transition-colors shrink-0 flex items-center justify-center"
            aria-label="Subscribe to newsletter"
          >
            {status === "loading" ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <ArrowRight className="h-3.5 w-3.5" />
            )}
          </button>
        </form>
      )}
      <span className="text-[10px] text-slate-600 block">
        Zero spam. Strictly verified entertainment financial intelligence.
      </span>
    </div>
  );
}
