import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact CelebLedger | Editorial & Newsroom Directory",
  description:
    "Contact the CelebLedger newsroom. Submit factual corrections, agency updates, media inquiries, or reach our global bureaus.",
  alternates: {
    canonical: "https://www.celebledger.com/contact",
  },
  openGraph: {
    title: "Contact CelebLedger Newsroom & Fact-Checking Bureau",
    description:
      "Submit factual corrections, publicist inquiries, or reach our investigative editors. 24-48 hour turnaround on verifiable public record audits.",
    url: "https://www.celebledger.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Contact CelebLedger
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            CelebLedger maintains an open, transparent line of communication with readers, academic researchers, talent representatives, and industry archivists. We welcome verified factual corrections, agency submissions, syndication inquiries, and secure investigative tips.
          </p>
        </header>

        {/* Section 1: Editorial Charter & Response SLA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Editorial Communication Charter & Response SLA
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              As an independent biographical reference and entertainment economics publication, CelebLedger operates under strict standards of accountability. Every inquiry sent to our editorial desk is routed through a monitored ticketing system to ensure that claims regarding public figures, financial estimations, and historical filmographies are evaluated fairly, promptly, and impartially.
            </p>
            <p>
              Our standard Service Level Agreement (SLA) prioritizes factual accuracy above all else. For verifiable biographical record audits or urgent right-of-reply submissions, our duty editors acknowledge receipts within <strong>24 business hours</strong> and complete secondary forensic verification within <strong>48 to 72 business hours</strong>. General correspondence, syndication inquiries, and academic citation requests are handled within three to five business days.
            </p>
          </div>
        </section>

        {/* Section 2: Interactive Dispatch Form */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Direct Editorial Dispatch Console
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Use this secure dispatch console to submit questions, provide documented corrections, or connect directly with our newsroom staff.
          </p>

          <ContactForm />
        </section>

        {/* Section 3: Specialized Departmental Bureaus */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Specialized Departmental Bureaus & Direct Inboxes
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            For direct email correspondence, bypass the automated form and contact the specific desk handling your domain:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Fact-Checking & Corrections Desk (Priority 24h)
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated exclusively to investigating discrepancies in birth dates, ancestry, career filmographies, awards, and economic estimates.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">corrections@celebledger.com</span>
                <a
                  href="mailto:corrections@celebledger.com"
                  className="font-bold text-amber-700 hover:text-amber-900 hover:underline"
                >
                  Email Desk &rarr;
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Newsroom & Investigative Inquiries
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For pitching biographical essays, reporting cultural milestones, press releases regarding industry retrospectives, or author queries.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">editorial@celebledger.com</span>
                <a
                  href="mailto:editorial@celebledger.com"
                  className="font-bold text-slate-900 hover:text-amber-700 hover:underline"
                >
                  Email Newsroom &rarr;
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Talent Publicists & Estate Managers
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reserved for accredited talent representatives (CAA, WME, UTA, 42 West, Rogers & Cowan PMK) and legal estate executors submitting on-record documentation.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">talent-relations@celebledger.com</span>
                <a
                  href="mailto:talent-relations@celebledger.com"
                  className="font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                >
                  Contact Liaison &rarr;
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Licensing, Syndication & Rights
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For publishers, documentary filmmakers, research institutes, and academic institutions seeking permission to syndicate biographical narratives or database excerpts.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">licensing@celebledger.com</span>
                <a
                  href="mailto:licensing@celebledger.com"
                  className="font-bold text-purple-700 hover:text-purple-900 hover:underline"
                >
                  Request License &rarr;
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Legal Compliance & DMCA Desk
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To submit formal DMCA notifications of claimed copyright infringement under 17 U.S.C. 512(c) or legal service of process.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">legal@celebledger.com</span>
                <a
                  href="mailto:legal@celebledger.com"
                  className="font-bold text-rose-700 hover:text-rose-900 hover:underline"
                >
                  Contact Legal &rarr;
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Privacy & Data Subject Rights (DPO Desk)
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For exercising consumer privacy rights under GDPR, CCPA/CPRA, and state privacy statues (Access, Deletion, or Correction of personal telemetry).
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">privacy@celebledger.com</span>
                <a
                  href="mailto:privacy@celebledger.com"
                  className="font-bold text-indigo-700 hover:text-indigo-900 hover:underline"
                >
                  Privacy Officer &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Three-Stage Factual Correction Protocol */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Three-Stage Factual Correction Protocol & Review Hierarchy
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebLedger maintains an uncompromising commitment to accuracy. Unlike crowd-sourced wikis that allow unvetted live edits, our publication enforces a rigorous three-stage verification lifecycle before modifying any certified biographical entry:
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">
                  Stage 1: Intake & Primary Source Triage (Within 24 Hours)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon receiving a correction notice, a designated fact-checker reviews the supporting documentation submitted. We evaluate whether the citation meets our Tier-1 standards (e.g., government civil records, court filings, certified studio contracts, corporate SEC statements) or Tier-2 standards (established trade publications). Submissions citing unsubstantiated social media rumors or tabloid blogs are immediately rejected.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">
                  Stage 2: Dual-Editor Forensic Audit & Cross-Referencing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If the claim is supported by credible evidence, two independent senior editors cross-reference the data point against our historical repository, Box Office Mojo records, SAG-AFTRA databases, and municipal deed archives. In cases involving estate distributions or net worth recalculations, our financial forensics desk reassesses the underlying cash flow and real estate valuation model.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">
                  Stage 3: Publication of Rectification & Audit Log Entry
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Once verified, the correction is published immediately to the live profile. If the update concerns a substantive factual adjustment (such as a career milestone date, award win, or valuation reassessment), an editorial notice is appended to the biography detailing the modification, the reason for the update, and the timestamp of review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Protocol for Talent Publicists, Agents & Estates */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Guidelines for Talent Publicists, Agents, and Estate Executors
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebLedger maintains productive professional relationships with artist representation agencies, management firms, and legacy estate trustees worldwide. We welcome official biographical updates, verified charitable endeavors, major theatrical casting notices, and philanthropic foundations.
            </p>
            <p>
              To ensure authenticity, submissions sent on behalf of public figures must adhere to the following protocol:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pl-5 list-disc marker:text-slate-400">
              <li>
                <strong>Authorized Origin:</strong> Correspondence must originate from an accredited agency or management domain (e.g., @caa.com, @wmeagency.com, @unitedtalent.com, or official personal representation domains). Submissions from free webmail accounts (e.g., Gmail, Yahoo) require secondary telephone or letterhead verification.
              </li>
              <li>
                <strong>Verifiable Supporting Material:</strong> Include official press releases, studio credit sheets, call-sheets, or authenticated contract milestones.
              </li>
              <li>
                <strong>Financial Valuations & Confidentiality:</strong> While we appreciate on-record commentary regarding contractual compensation, CelebLedger maintains independent valuation models. Publicists may provide guidance on divested assets, private foundation contributions, or corporate ownership stakes to refine our public interest estimates.
              </li>
              <li>
                <strong>Embargoes & Exclusive Briefings:</strong> Our editorial desk respects standard journalistic embargoes when agreed to in writing prior to confidential disclosure.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: Physical Bureau Locations & Global Desks */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Physical Bureau Locations & Operational Desks
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            While CelebLedger operates a modern digital newsroom with remote investigative contributors across four continents, our administrative headquarters and regional research desks are stationed in major entertainment and financial capitals:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                Los Angeles Newsroom
              </h3>
              <p className="text-xs text-slate-500 font-mono">Century City Entertainment District</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Primary bureau overseeing film industry reporting, Academy and guild tracking, agency relations, and Hollywood studio trade coverage.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                New York Financial Desk
              </h3>
              <p className="text-xs text-slate-500 font-mono">Midtown Manhattan Research Center</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Oversees entertainment economics, Broadway theater archives, corporate media mergers, SEC corporate filings, and commercial valuations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                London European Bureau
              </h3>
              <p className="text-xs text-slate-500 font-mono">Soho West End Media Quarter</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Focuses on British and European cinema, Royal Shakespeare Company records, BAFTA historical archives, and UK Companies House audits.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Confidential Whistleblower & Investigative Tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Confidential Source Protection & Investigative Whistleblower Line
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebLedger maintains an encrypted channel for industry whistleblowers, former production personnel, guild representatives, and archival researchers who possess primary documentary evidence concerning public records, intellectual property litigation, or contract forensics.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-100 p-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Secure Disclosure Protocol
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We vigorously protect journalistic source confidentiality under applicable state and federal Reporter&apos;s Shield Laws. For highly sensitive documentary submissions, do not contact us using corporate email networks or employer-owned devices.
              </p>
              <div className="text-xs text-slate-400 font-mono space-y-1 pt-1">
                <div>Encrypted Secure Dispatch: tips@celebledger.com</div>
                <div>PGP Fingerprint: 4E9A B102 89FC 341D 77EA 9980 BC41 62D9 1F08 A5E2</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Frequently Asked Inquiries (FAQ) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Inquiries (FAQ)
          </h2>

          <div className="space-y-4 text-sm">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                Does CelebLedger remove biographical profiles upon request?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                CelebLedger chronicles public figures whose careers, achievements, and creative output are matters of established public and cultural record. While we do not delete legitimate historical profiles of notable public figures, we immediately update, clarify, or rectify any specific factual claim or personal detail that is demonstrably inaccurate or violates our privacy guidelines.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                Can educational institutions, students, or journalists cite CelebLedger?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yes. CelebLedger profiles may be cited in academic research, film criticism, and media reports. We recommend utilizing standard Chicago Manual of Style or APA bibliographic formats, citing the specific URL and the &ldquo;Last Updated&rdquo; timestamp displayed at the top of each biographical dossier.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">
                How does CelebLedger respond to copyright claims regarding portrait imagery?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                CelebLedger sources visual media through licensed archives, authorized promotional releases, and Creative Commons public repositories with mandatory photographer attribution. If you believe your copyrighted image has been utilized without appropriate authorization or attribution, please submit a notice to <span className="font-mono text-slate-800">legal@celebledger.com</span> with proof of ownership for immediate rectification.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
