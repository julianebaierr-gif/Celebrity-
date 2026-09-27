import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Standards, Fact-Checking & Verification Policy | CelebEdge",
  description:
    "Explore CelebEdge's journalistic charter: our 4-tier sourcing hierarchy, financial forensics methodology, net worth calculation formula, right-of-reply protocol, and image licensing ethics.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app/editorial-standards",
  },
  openGraph: {
    title: "Editorial Standards & Verification Policy | CelebEdge",
    description:
      "Our uncompromising commitment to forensic verification, independent cultural research, and accurate financial estimations.",
    url: "https://celeb-edge.vercel.app/editorial-standards",
    type: "website",
  },
};

export default function EditorialStandardsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Editorial Guidelines & Standards
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            CelebEdge is dedicated to establishing the highest standard of verification, historical precision, and analytical integrity in contemporary entertainment journalism. This living document details our investigative protocols, sourcing hierarchies, economic valuation models, and corrections policies.
          </p>
        </header>

        {/* Section 1: Editorial Creed & Anti-Sensationalism Pledge */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our Journalistic Mission & Anti-Sensationalism Creed
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Contemporary digital entertainment media is saturated with hyper-accelerated gossip, unverified social media conjecture, and invasive paparazzi stalking. CelebEdge was founded as an antidote to this ecosystem. We treat the careers, intellectual output, and cultural resonance of performing artists with the same forensic rigor and dignity historically accorded to figures in science, literature, and governance.
            </p>
            <p>
              We adhere strictly to the Society of Professional Journalists (SPJ) Code of Ethics: seek truth and report it, minimize harm, act independently, and be accountable and transparent. We do not participate in &ldquo;blind items,&rdquo; unauthorized medical disclosures, surreptitious personal surveillance, or domestic litigation speculation. Our journalism focuses squarely on verifiable professional trajectories, artistic contributions, business architectures, and public interest philanthropy.
            </p>
          </div>
        </section>

        {/* Section 2: Four-Tier Sourcing Hierarchy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            The Four-Tier Sourcing Hierarchy
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            To satisfy Google&apos;s Search Quality Rater Guidelines for Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T), CelebEdge requires that all assertions of fact be corroborated through a strict hierarchy of verified sources:
          </p>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Tier 1: Certified Primary Public Records (Gold Standard)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Government civil registries (birth certificates, marriage licenses, authenticated probate and estate filings); Securities and Exchange Commission (SEC) Forms 10-K, 10-Q, and 8-K; UK Companies House accounts; official court judgments; SAG-AFTRA, Equity UK, and Writers Guild of America (WGA) official rosters; university commencement registries; and authorized on-the-record publicist statements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Tier 2: Historical Trade Publications of Record
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Established industry trades with published editorial correction policies, including <em>Variety</em>, <em>The Hollywood Reporter</em>, <em>Deadline Hollywood</em>, <em>Billboard</em>, <em>Screen Daily</em>, <em>Sight & Sound</em>, and cultural desks of leading newspapers of record (<em>The New York Times</em>, <em>The Los Angeles Times</em>, <em>The Guardian</em>).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Tier 3: Institutional Repositories & Academic Archives
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The British Film Institute (BFI) National Archive, the Academy of Motion Picture Arts and Sciences (AMPAS) Margaret Herrick Library, The Paley Center for Media, the Library of Congress National Film Registry, and authoritative published academic monographs from university presses.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700">
                Tier 4: Prohibited & Strictly Excluded Material
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uncredited tabloid rumors, paparazzi claims, speculative social media chatter (TikTok, X/Twitter rumors, Reddit threads), anonymous forum posts, and automated content scrapers are explicitly barred from consideration. No profile or metric may be grounded in uncorroborated single-source claims.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Financial Forensics & Net Worth Calculation Formula */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Financial Forensics & Net Worth Valuation Methodology
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Unlike automated websites that publish arbitrary round figures, CelebEdge approaches celebrity economics through forensic accounting principles. Celebrity net worth is inherently dynamic and largely private; therefore, we present our estimates as forensic valuations rather than liquid bank account balances.
            </p>
            <p>
              Our valuation algorithm models celebrity net worth through the following formula:
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-100 p-6 space-y-3 font-mono text-xs">
              <div className="text-slate-300 font-bold uppercase tracking-wider">
                Net Worth Valuation Formula:
              </div>
              <div className="bg-slate-800 p-4 rounded-xl leading-relaxed text-slate-200 border border-slate-700">
                Net Worth = (Gross Career Earnings + Backend Royalties + Real Estate Equity + Catalog/IP Rights + Private Equity Holdings) &minus; (Taxes + Agency/Management Commissions + Production Overhead + Known Liabilities)
              </div>
              <p className="text-slate-400 text-[11px] font-sans leading-relaxed pt-1">
                Where gross career contracts are discounted by estimated federal, state, and international tax obligations (averaging 37% to 50%), talent agency fees (10%), personal management fees (10%), legal representation fees (5%), and public relations retainers.
              </p>
            </div>

            <p>
              Our real estate valuations cross-reference county municipal deed registries (e.g., Los Angeles County Registrar-Recorder, New York City ACRIS) to determine acquisition prices, mortgage recordings, and comparative market valuations at current neighborhood comps. Where artists hold equity in alcohol brands, cosmetics lines, or production shingle deals, we benchmark their valuation against public enterprise multiples and documented financing rounds.
            </p>
          </div>
        </section>

        {/* Section 4: Corrections, Retractions & Right-of-Reply */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Corrections, Retractions & Right-of-Reply Policy
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebEdge takes full editorial responsibility for every word published on our platform. When a factual discrepancy is identified, we act swiftly and transparently to correct the record. We do not quietly &ldquo;stealth edit&rdquo; errors without acknowledging them to our readers.
            </p>
            <p>
              Our correction classifications are structured as follows:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Factual Corrections</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applied when a verifiable error of fact occurred (such as an incorrect birth year, misspelled creative collaborator, or misstated box office figure). A permanent footnote details the error and exact correction.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Contextual Clarifications</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applied when published information was factually accurate but lacked essential context or could lead to an incomplete understanding of a legal settlement or contractual deal.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Archival Updates</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Appended when significant subsequent events occur—such as the conclusion of a film festival, a posthumous award conferral, or a newly announced philanthropic gift.
                </p>
              </div>
            </div>

            <p>
              <strong>Right-of-Reply Guarantee:</strong> Any living public figure, or their accredited legal or public relations representative, possesses an unfettered right-of-reply. If an individual believes a profile contains an unfair characterization or incomplete financial picture, they may submit on-the-record statements via <span className="font-mono text-slate-800">corrections@celeb-edge.com</span>. When corroborated, their clarification is incorporated directly into the biographical text.
            </p>
          </div>
        </section>

        {/* Section 5: Media Licensing & Image Ethics */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Media Licensing, Image Attribution & Copyright Ethics
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebEdge maintains a strict zero-tolerance policy against copyright infringement. Photography published across our dossiers is obtained through legal, documented, and properly licensed channels:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pl-5 list-disc marker:text-slate-400">
              <li>
                <strong>Creative Commons & Open Archives:</strong> We utilize portraits curated from Wikimedia Commons and public open-access archives licensed under Creative Commons licenses (CC BY, CC BY-SA). Every image includes explicit photographer attribution, license versioning, and direct links to original repository files.
              </li>
              <li>
                <strong>Public Domain Works:</strong> Historical imagery originating from pre-1928 releases or verified United States federal archives is vetted for copyright expiration before cataloging.
              </li>
              <li>
                <strong>Studio Promotional Electronic Press Kits (EPK):</strong> Publicity stills issued by studios, distributors, and film festivals for editorial press coverage are utilized strictly in compliance with Section 107 of the U.S. Copyright Act (Fair Use) for news reporting, cultural commentary, and educational scholarship.
              </li>
              <li>
                <strong>Paparazzi Prohibition:</strong> CelebEdge strictly bans the purchase, display, or hosting of paparazzi photography depicting artists in private settings, off-duty residences, or distressing personal circumstances.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: Artificial Intelligence & Algorithmic Standards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Artificial Intelligence & Automated Tools Policy
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              While CelebEdge deploys advanced natural language models and data indexing pipelines to assist our research staff in cataloging thousands of film releases, box office tables, and regulatory filings, we maintain an uncompromising &ldquo;human-in-the-loop&rdquo; editorial standard.
            </p>
            <p>
              No biographical profile, critical evaluation, or financial assessment is ever published through unattended automated generation. Every sentence, credit, and dollar figure is reviewed, fact-checked, and approved by qualified human journalists. Large language models serve solely as investigative research assistants—not as authoritative sources of factual truth.
            </p>
          </div>
        </section>

        {/* Section 7: Commercial Independence & Conflict Firewall */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Commercial Independence & Advertising Firewall
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebEdge maintains an impenetrable barrier between editorial judgment and commercial revenue operations. We do not accept payment, gifts, sponsored travel, or consideration of any kind in exchange for creating, altering, or removing a biographical dossier.
            </p>
            <p>
              All advertising displayed across CelebEdge is served through standardized programmatic networks and is distinctly labeled. Advertisers exercise zero influence over newsroom coverage, editorial tone, or financial net worth estimations. Our staff members are prohibited from holding active equity stakes in private entertainment talent management agencies or production entities they directly cover.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
