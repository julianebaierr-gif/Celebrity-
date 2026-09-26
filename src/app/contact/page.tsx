"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="border-b border-slate-200 pb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700 border border-slate-200">
            <Mail className="h-3.5 w-3.5 text-amber-600" />
            <span>Editorial Desk & Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact CelebEdge & Correction Submissions
          </h1>
          <p className="text-sm text-slate-600">
            Submit verified factual corrections, media rights inquiries, or editorial correspondence to our research team.
          </p>
        </header>

        {submitted ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center space-y-3 shadow-xs">
            <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900">Submission Received</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you for contacting our editorial bureau. If your message pertains to a factual correction or verifiable record update, our research desk will review the documentation within 24–48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Inquiry Category
              </label>
              <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 focus:bg-white transition">
                <option value="correction">Factual Correction / Record Update</option>
                <option value="media">Media Rights & Attribution Inquiry</option>
                <option value="press">Press & Industry Communication</option>
                <option value="other">General Inquiries</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Celebrity Dossier URL / Name (If Applicable)
              </label>
              <input
                type="text"
                placeholder="e.g. /celebrity/finn-wolfhard"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Detailed Message & Verifiable Source Citation
              </label>
              <textarea
                required
                rows={5}
                placeholder="Please describe the inquiry and provide links to certified public records, official press releases, or primary documentation..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-600 focus:bg-white transition"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-amber-600 transition shadow-sm"
            >
              Transmit to Editorial Bureau
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
