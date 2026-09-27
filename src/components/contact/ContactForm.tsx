"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "correction",
    targetProfile: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 sm:p-10 text-center space-y-4 shadow-xs">
        <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Inquiry Successfully Dispatched to Editorial Queue
        </h3>
        <p className="text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
          Thank you for communicating with the CelebEdge newsroom. Your docket has been assigned ticket ID{" "}
          <span className="font-mono font-semibold text-slate-900">
            CE-{Math.floor(100000 + Math.random() * 900000)}
          </span>
          . Our editorial review team will evaluate your submission against verified public archives within 24 to 48 business hours.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
          >
            Submit Another Inquiry or Additional Primary Evidence
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          Direct Dispatch to CelebEdge Newsroom
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Submissions are routed directly to duty editors and assigned an automated tracking ticket.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Full Legal / Professional Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Eleanor Vance, Literary Agent"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Direct Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. evance@agency.com"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Inquiry Category <span className="text-rose-500">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition"
          >
            <option value="correction">Factual Correction / Record Audit</option>
            <option value="talent">Talent Agency / Publicist Official Submission</option>
            <option value="licensing">Media Rights & Syndication</option>
            <option value="press">Press & Academic Inquiry</option>
            <option value="legal">Legal, DMCA & Copyright Operations</option>
            <option value="privacy">GDPR / CCPA Data Protection Request</option>
            <option value="other">General Inquiries</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Target Celebrity Profile / URL (Optional)
          </label>
          <input
            type="text"
            value={formData.targetProfile}
            onChange={(e) => setFormData({ ...formData, targetProfile: e.target.value })}
            placeholder="e.g. /celebrity/tim-curry or Tim Curry"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
          Subject Line <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Brief summary of your inquiry or documentation"
          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
          Detailed Message & Primary Source Documentation Citations <span className="text-rose-500">*</span>
        </label>
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your inquiry with specificity. For biographical corrections, cite primary sources (SEC filings, court judgments, trade releases, university registries, or official agency statements)..."
          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition"
        />
        <p className="text-[11px] text-slate-500 mt-2">
          Primary documentation accelerates verification. Submissions with links to verifiable public records are prioritized.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <div className="text-xs text-slate-500">
          Average verification SLA: Under 24 business hours
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-amber-600 transition shadow-sm"
        >
          Dispatch Inquiry
        </button>
      </div>
    </form>
  );
}
