import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About CelebEdge | Independent Entertainment Editorial & Biographical Archive",
  description:
    "Discover the mission, editorial leadership, research methodology, and rigorous verification standards powering CelebEdge's certified biographical and financial archives.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            About CelebEdge
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            CelebEdge is an authoritative digital reference portal and independent biographical publication dedicated to delivering forensic celebrity profiles, verified career benchmarks, historical filmographies, and authenticated net worth analysis.
          </p>
        </header>

        {/* Section 1: Executive Mission & Founding Vision */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our Mission & Journalistic Purpose
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              In an era dominated by algorithmic aggregators, unchecked social media speculation, and sensationalist tabloid clickbait, authentic public records have become increasingly difficult to distinguish from fiction. CelebEdge was established with a singular editorial charter: to serve as the definitive, dignified, and forensic record of performing artists, cinematic architects, cultural icons, and living legends.
            </p>
            <p>
              We believe that public curiosity surrounding prominent cultural figures deserves rigorous journalistic standards. Whether documenting an actor’s classical theater training, dissecting studio backend profit participation formulas, or chronicling an artist’s lifelong philanthropic advocacy, our profiles are anchored in primary public documentation, authorized trade releases, and historical archives.
            </p>
            <p>
              CelebEdge is operated by an independent collective of cinema historians, cultural reporters, and entertainment financial analysts. We do not participate in sensationalized gossip, unauthorized surveillance, or invasive paparazzi coverage. Every profile hosted on our service represents an exhaustive biographical examination designed to inform researchers, industry executives, journalists, and film enthusiasts alike.
            </p>
          </div>
        </section>

        {/* Section 2: Research Methodology & Verification Pillars */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Research Methodology & Data Integrity
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Our newsroom adheres to a multi-tiered verification framework aligned with Google’s Search Quality Rater Guidelines for Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Every biographical entry undergoes a four-stage editorial review before publication:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900">
                Primary Source Ingestion
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Biographical milestones are grounded strictly in primary records, including certified public birth and civil registrations, conservatory archives, university commencement catalogs, SAG-AFTRA and Equity UK guild rosters, and official agency talent announcements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900">
                Financial Forensics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Net worth valuations are calculated using verified studio contract metrics, box office profit-sharing structures (first-dollar gross or backend pool distributions), county municipal property deed registries, and corporate filings with regulatory agencies such as the SEC and UK Companies House.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900">
                Filmography & Box Office Auditing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Performance credits and box office earnings are cross-verified against official studio releases, Box Office Mojo, The Numbers, Variety Archives, the British Film Institute (BFI), and the Academy of Motion Picture Arts and Sciences (AMPAS) historical records.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900">
                Real-Time Lifecycle Tracking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our dynamic chronological algorithms calculate celebrity ages in real time down to the calendar day. For deceased figures, career spans and lifespans automatically transition to verified memorial timelines with certified passing dates and locations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Editorial Leadership & Masthead */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Editorial Masthead & Senior Researchers
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            CelebEdge is staffed by veteran journalists, film scholars, and archival researchers who bring decades of combined experience across premier entertainment newsrooms, literary publications, and film preservation institutions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Senior Industry Writer &bull; 15+ Yrs Exp
              </div>
              <h3 className="text-lg font-bold text-slate-900">Marcus Vance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Marcus oversees studio film history, box office tracking, and creative leadership profiles. Prior to CelebEdge, he served as a senior studio analyst in Los Angeles, contributing extensively to trade retrospectives on Hollywood studio financing and independent cinema distribution models.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Chief Biographer &bull; 12+ Yrs Exp
              </div>
              <h3 className="text-lg font-bold text-slate-900">Elena Rostova</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elena leads biographical investigations, archival interviews, and cultural impact assessments. With a master’s degree in European Film Studies from King’s College London, she specializes in West End stage history, auteur film directors, and post-war international cinematic movements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Fact-Checking Director &bull; 10+ Yrs Exp
              </div>
              <h3 className="text-lg font-bold text-slate-900">Sarah Jenkins</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sarah directs our fact-checking desk and copyright verification workflows. A former legal researcher specializing in media law and intellectual property, she ensures that every claim, quotation, and primary source citation complies with international fair use doctrines.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Entertainment Economist &bull; 8+ Yrs Exp
              </div>
              <h3 className="text-lg font-bold text-slate-900">David Thorne</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                David heads our celebrity financial forensics desk. With a background in forensic accounting and entertainment equity analysis, David decodes backend studio participation points, streaming residuals, licensing portfolios, and real estate holdings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Ethics, Dignity & Anti-Gossip Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Ethical Boundaries & The Anti-Gossip Standard
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Unlike conventional celebrity gossip blogs that profit from intrusive paparazzi photos, unconfirmed marital speculation, or manufactured feuds, CelebEdge enforces strict ethical guardrails:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pl-4 list-disc marker:text-slate-400">
              <li>
                <strong>No Unverified Speculation:</strong> Rumors regarding personal health, domestic relationships, or legal proceedings are strictly excluded unless corroborated by verified public filings or on-record statements from primary representatives.
              </li>
              <li>
                <strong>Dignity in Obituary & Memorial Reporting:</strong> In the event of an artist’s passing, our coverage focuses on artistic achievements, verified career retrospectives, and documented cultural contributions rather than sensationalized circumstances.
              </li>
              <li>
                <strong>Privacy Boundaries for Minor Children:</strong> We deliberately exclude the private lives, school enrollments, and personal residences of celebrity children, maintaining a firm policy of respect for family privacy.
              </li>
              <li>
                <strong>Commercial Independence:</strong> Our biographical ratings, editorial inclusions, and valuation audits cannot be purchased, sponsored, or influenced by talent agencies, PR firms, or commercial sponsors.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Corrections & Reader Accountability */}
        <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Transparent Corrections & Reader Feedback
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Accuracy is a continuous discipline. When historical records are revised, civil documents are updated, or new studio data becomes available, CelebEdge reviews and publishes corrections promptly. If you represent an artist, estate, or archival organization and have verifiable documentation to update an existing profile, please contact our editorial desk.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/editorial-standards"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-amber-600 transition"
            >
              <span>Read Full Editorial Policy</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 border border-slate-200 transition"
            >
              <span>Submit a Correction Request</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
