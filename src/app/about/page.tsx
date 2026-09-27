import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About CelebEdge | Independent Entertainment Editorial & Biographical Archive",
  description:
    "Discover the mission, editorial leadership, research methodology, and rigorous verification standards powering CelebEdge's certified biographical and financial archives.",
  alternates: {
    canonical: "https://celeb-edge.vercel.app/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://celeb-edge.vercel.app/about#webpage",
      url: "https://celeb-edge.vercel.app/about",
      name: "About CelebEdge | Independent Entertainment Editorial & Biographical Archive",
      description:
        "Discover the mission, editorial leadership, research methodology, and rigorous verification standards powering CelebEdge's certified biographical and financial archives.",
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://celeb-edge.vercel.app/#website",
        name: "CelebEdge",
        url: "https://celeb-edge.vercel.app",
      },
      about: {
        "@type": "NewsMediaOrganization",
        "@id": "https://celeb-edge.vercel.app/#organization",
        name: "CelebEdge Publishing Inc.",
        url: "https://celeb-edge.vercel.app",
        publishingPrinciples: "https://celeb-edge.vercel.app/editorial-standards",
        correctionsPolicy: "https://celeb-edge.vercel.app/editorial-standards#corrections-framework",
        employee: [
          {
            "@type": "Person",
            "@id": "https://celeb-edge.vercel.app/about#author-marcus-vance",
            name: "Marcus Vance",
            jobTitle: "Senior Industry Writer",
            description:
              "Marcus oversees studio film history, box office tracking, and creative leadership profiles with 7 years of specialized entertainment reporting experience.",
            email: "marcus.vance@celeb-edge.com",
            knowsAbout: ["Studio Film History", "Box Office Tracking", "Hollywood Studio Financing", "Film Industry Economics"],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "UCLA School of Theater, Film and Television",
            },
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Professional Experience",
              description: "7 Years Professional Entertainment Journalism & Studio Analysis",
            },
          },
          {
            "@type": "Person",
            "@id": "https://celeb-edge.vercel.app/about#author-elena-rostova",
            name: "Elena Rostova",
            jobTitle: "Chief Biographer",
            description:
              "Elena leads biographical investigations, archival interviews, and cultural impact assessments with 6 years of academic film scholarship and reporting.",
            email: "elena.rostova@celeb-edge.com",
            knowsAbout: ["European Film Studies", "West End Stage History", "Auteur Film Directors", "Biographical Archiving"],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "King's College London",
            },
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Professional Experience",
              description: "6 Years Cultural Reporting & Archival Biography Research",
            },
          },
          {
            "@type": "Person",
            "@id": "https://celeb-edge.vercel.app/about#author-sarah-jenkins",
            name: "Sarah Jenkins",
            jobTitle: "Fact-Checking Director",
            description:
              "Sarah directs our fact-checking desk and copyright verification workflows with 5 years of legal research in media law and intellectual property.",
            email: "sarah.jenkins@celeb-edge.com",
            knowsAbout: ["Media Law", "Copyright Verification", "Primary Source Citations", "Fair Use Doctrine"],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Columbia Law School",
            },
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Professional Experience",
              description: "5 Years Media Law Research & Newsroom Fact-Checking",
            },
          },
          {
            "@type": "Person",
            "@id": "https://celeb-edge.vercel.app/about#author-david-thorne",
            name: "David Thorne",
            jobTitle: "Entertainment Economist",
            description:
              "David heads our celebrity financial forensics desk with 4 years of entertainment equity analysis and forensic accounting experience.",
            email: "david.thorne@celeb-edge.com",
            knowsAbout: ["Forensic Accounting", "Celebrity Net Worth Valuation", "Streaming Residuals", "Real Estate Deeds"],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "NYU Stern School of Business",
            },
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Professional Experience",
              description: "4 Years Forensic Entertainment Accounting & Equity Analysis",
            },
          },
        ],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
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
        <section className="space-y-6" aria-labelledby="masthead-heading">
          <h2 id="masthead-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
            Editorial Masthead & Senior Researchers
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            CelebEdge is staffed by credentialed entertainment researchers, film scholars, and financial analysts who bring specialized investigative training, academic rigor, and dedicated archival methodology across contemporary entertainment journalism:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Author 1: Marcus Vance */}
            <article
              id="author-marcus-vance"
              aria-labelledby="author-marcus-vance-name"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3 scroll-mt-24 transition-shadow hover:shadow-sm"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center justify-between">
                <span>Senior Industry Writer</span>
                <span className="text-slate-600 font-semibold normal-case tracking-normal">7 Yrs Exp</span>
              </div>
              <h3 id="author-marcus-vance-name" className="text-lg font-bold text-slate-900">
                Marcus Vance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Marcus oversees studio film history, box office tracking, and creative leadership profiles. Prior to CelebEdge, he served as an entertainment studio analyst in Los Angeles, contributing extensively to trade retrospectives on Hollywood studio financing and independent cinema distribution models.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Beat: Studio History & Box Office</span>
                <a
                  href="mailto:marcus.vance@celeb-edge.com"
                  className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-900 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1 transition-colors"
                  aria-label="Send editorial inquiry to Marcus Vance via email (marcus.vance@celeb-edge.com)"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </div>
            </article>

            {/* Author 2: Elena Rostova */}
            <article
              id="author-elena-rostova"
              aria-labelledby="author-elena-rostova-name"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3 scroll-mt-24 transition-shadow hover:shadow-sm"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center justify-between">
                <span>Chief Biographer</span>
                <span className="text-slate-600 font-semibold normal-case tracking-normal">6 Yrs Exp</span>
              </div>
              <h3 id="author-elena-rostova-name" className="text-lg font-bold text-slate-900">
                Elena Rostova
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elena leads biographical investigations, archival interviews, and cultural impact assessments. With a master’s degree in European Film Studies from King’s College London, she specializes in West End stage history, auteur film directors, and post-war international cinematic movements.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Beat: Cultural Impact & Archival Profiles</span>
                <a
                  href="mailto:elena.rostova@celeb-edge.com"
                  className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-900 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1 transition-colors"
                  aria-label="Send biographical inquiry to Elena Rostova via email (elena.rostova@celeb-edge.com)"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </div>
            </article>

            {/* Author 3: Sarah Jenkins */}
            <article
              id="author-sarah-jenkins"
              aria-labelledby="author-sarah-jenkins-name"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3 scroll-mt-24 transition-shadow hover:shadow-sm"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center justify-between">
                <span>Fact-Checking Director</span>
                <span className="text-slate-600 font-semibold normal-case tracking-normal">5 Yrs Exp</span>
              </div>
              <h3 id="author-sarah-jenkins-name" className="text-lg font-bold text-slate-900">
                Sarah Jenkins
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sarah directs our fact-checking desk and copyright verification workflows. A legal researcher specializing in media law and intellectual property, she ensures that every claim, quotation, and primary source citation complies with international fair use doctrines and statutory public records.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Beat: Copyright Verification & Sourcing</span>
                <a
                  href="mailto:sarah.jenkins@celeb-edge.com"
                  className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-900 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1 transition-colors"
                  aria-label="Send verification or corrections inquiry to Sarah Jenkins via email (sarah.jenkins@celeb-edge.com)"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </div>
            </article>

            {/* Author 4: David Thorne */}
            <article
              id="author-david-thorne"
              aria-labelledby="author-david-thorne-name"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3 scroll-mt-24 transition-shadow hover:shadow-sm"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center justify-between">
                <span>Entertainment Economist</span>
                <span className="text-slate-600 font-semibold normal-case tracking-normal">4 Yrs Exp</span>
              </div>
              <h3 id="author-david-thorne-name" className="text-lg font-bold text-slate-900">
                David Thorne
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                David heads our celebrity financial forensics desk. With a background in forensic accounting and entertainment equity analysis, David decodes backend studio participation points, streaming residuals, licensing portfolios, and real estate holdings.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Beat: Net Worth Audits & Financial Forensics</span>
                <a
                  href="mailto:david.thorne@celeb-edge.com"
                  className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-900 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1 transition-colors"
                  aria-label="Send financial valuation inquiry to David Thorne via email (david.thorne@celeb-edge.com)"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </div>
            </article>
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
  </>
);
}
