import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CelebLedger Data Protection & GDPR",
  description:
    "CelebLedger privacy policy: how we safeguard user data, uphold GDPR and CCPA standards, and enforce transparent privacy practices.",
  alternates: {
    canonical: "https://www.celebledger.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | CelebLedger",
    description:
      "Our data protection charter, user rights under GDPR/CCPA, cookie policies, and transparent information practices.",
    url: "https://www.celebledger.com/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            CelebLedger is committed to transparent data practices, rigorous cybersecurity standards, and the protection of user privacy. This policy explains what information is processed when you visit our public reference portal, how it is utilized, and your legal rights under global privacy frameworks.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono pt-2">
            <span>Effective Date: January 1, 2026</span>
            <span>&bull;</span>
            <span>Last Reviewed & Updated: September 26, 2026</span>
            <span>&bull;</span>
            <span>Version: 3.2 (GDPR & CPRA Compliant)</span>
          </div>
        </header>

        {/* Section 1: Executive Overview & Privacy Commitment */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Foundational Privacy Architecture
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebLedger is an open-access public reference archive and biographical journal. Unlike many digital publications, <strong>we do not require user account registration, subscription logins, credit card numbers, or passwords</strong> to read our biographies, filmographies, or financial analyses.
            </p>
            <p>
              Our fundamental principle is data minimization: we process only the minimum technical telemetry necessary to deliver fast, secure, and reliable web pages to your browser, monitor site availability, and safeguard our infrastructure against distributed denial-of-service (DDoS) attacks and malicious automated data scrapers.
            </p>
          </div>
        </section>

        {/* Section 2: Categories of Information Processed */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Categories of Information We Process
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                A. Technical Telemetry & Automated Server Logs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When you navigate through CelebLedger, our edge network (powered by Vercel and Cloudflare) automatically logs standard technical metadata transmitted by your browser. This includes your Internet Protocol (IP) address (truncated/pseudonymized for geographic region estimation), browser type and version, operating system, referring URL, pages viewed, time spent per dossier, and HTTP response codes. This telemetry is processed strictly for infrastructure health, bot mitigation, and Core Web Vitals optimization.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                B. Direct Inquiries & Newsroom Correspondence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you voluntarily submit an inquiry through our <Link href="/contact" className="text-amber-700 font-bold hover:underline">Contact Desk</Link> or email our fact-checking bureau, we collect your name, email address, organization affiliation, and any evidentiary documents you provide. This information is retained solely to investigate, verify, and resolve your editorial query or licensing agreement.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                C. Information We Explicitly DO NOT Collect
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                CelebLedger <strong>never</strong> collects government identification numbers (Social Security numbers, national ID numbers), biometric data, health records, financial payment details, or precise GPS mobile geolocation. We do not engage in cross-site keystroke logging or covert behavioral profiling.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Lawful Basis for Processing (GDPR & International Law) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Lawful Basis for Processing Under GDPR & UK GDPR
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              For visitors residing within the European Economic Area (EEA) and the United Kingdom, our processing of personal data is anchored in the following lawful grounds established under Article 6 of the General Data Protection Regulation (GDPR):
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pl-5 list-disc marker:text-slate-400">
              <li>
                <strong>Legitimate Interests (Art. 6(1)(f)):</strong> To maintain network and information security, detect and prevent fraudulent bot traffic, optimize edge delivery performance, and publish biographical reference materials in the public interest.
              </li>
              <li>
                <strong>Consent (Art. 6(1)(a)):</strong> Where you explicitly grant permission through our cookie preference banner for non-essential analytical measurement cookies.
              </li>
              <li>
                <strong>Legal Obligations (Art. 6(1)(c)):</strong> To satisfy statutory compliance requirements, such as responding to lawful court orders, subpoenas, or statutory copyright notifications under the Digital Millennium Copyright Act.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Cookies & Third-Party Advertising Standards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Cookies, Analytics & Programmatic Advertising Standards
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Cookies are small text files placed on your device to ensure web functionality and measure reader engagement. CelebLedger categorizes cookies as follows:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">
                  Strictly Necessary Cookies
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Required for security, load balancing, server routing, and Cloudflare anti-bot verification. These cookies do not store personally identifiable information and cannot be disabled.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
                <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">
                  Performance & Analytics Cookies
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aggregate measurement tools (such as Vercel Web Analytics) that calculate page load speed, reader retention, and search queries without using persistent personal identifiers or cross-site tracking.
                </p>
              </div>
            </div>

            <p>
              <strong>Third-Party Advertising Compliance:</strong> CelebLedger may display advertisements served through Google AdSense or certified programmatic partners. These partners adhere to Google Publisher Policies, the Interactive Advertising Bureau (IAB) Transparency and Consent Framework, and applicable consumer privacy regulations. Readers may manage personalized advertising preferences or opt out entirely via the{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 font-bold hover:underline"
              >
                Digital Advertising Alliance (DAA)
              </a>{" "}
              and the{" "}
              <a
                href="https://www.networkadvertising.org/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 font-bold hover:underline"
              >
                Network Advertising Initiative (NAI)
              </a>.
            </p>
          </div>
        </section>

        {/* Section 5: California Privacy Rights (CCPA / CPRA & CalOPPA) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            California Consumer Privacy Rights (CCPA / CPRA & CalOPPA)
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Under the California Consumer Privacy Act of 2018 (CCPA) and the California Privacy Rights Act of 2020 (CPRA), California residents are afforded specific statutory rights regarding their personal information:
            </p>

            <ul className="space-y-2 text-xs text-slate-700 pl-5 list-disc marker:text-slate-400">
              <li>
                <strong>Right to Know & Access:</strong> The right to request disclosure of the specific categories of personal information collected, the sources of collection, the business purpose for processing, and third parties with whom data was shared over the past 12 months.
              </li>
              <li>
                <strong>Right to Deletion:</strong> The right to request the deletion of personal information collected directly from you, subject to statutory exceptions (such as legal compliance or completing a transaction).
              </li>
              <li>
                <strong>Right to Correction:</strong> The right to request rectification of inaccurate personal telemetry maintained in our records.
              </li>
              <li>
                <strong>Right to Opt-Out of Sale or Sharing:</strong> <em>CelebLedger does not sell personal information for monetary compensation, nor do we share consumer information with data brokers.</em>
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We do not deny services, adjust quality, or charge different rates based upon the exercise of your statutory privacy rights.
              </li>
            </ul>

            <p className="text-xs text-slate-600">
              To exercise any of these California privacy rights, submit a verifiable consumer request to <span className="font-mono text-slate-800">privacy@celebledger.com</span> with the subject line &ldquo;California Privacy Rights Request.&rdquo;
            </p>
          </div>
        </section>

        {/* Section 6: European Data Subject Rights & The Journalistic Exemption */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            European Data Subject Rights & The Journalistic Exemption
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Readers located in the EU and UK possess the right to access (Art. 15), rectify (Art. 16), erase (Art. 17), restrict processing (Art. 18), and object to processing (Art. 21) regarding their personal telemetry data.
            </p>
            <p>
              <strong>Biographical Profiles & Article 85 GDPR:</strong> Please note that biographical archives chronicling public figures, historical filmographies, and public interest economics are published pursuant to the statutory <em>journalistic, academic, and literary exemption</em> codified in Article 85 of the GDPR and Section 124 of the UK Data Protection Act 2018. While we welcome verifiable corrections of demonstrably false facts via our corrections desk, the &ldquo;Right to be Forgotten&rdquo; does not mandate the removal of historically accurate public interest journalism concerning notable public figures.
            </p>
          </div>
        </section>

        {/* Section 7: Data Retention & Security Architecture */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Data Retention & Cybersecurity Architecture
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebLedger enforces stringent security protocols to protect all operational data against unauthorized access, disclosure, alteration, or destruction. Our technical posture includes:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pl-5 list-disc marker:text-slate-400">
              <li>
                <strong>Transport Layer Security:</strong> Full TLS 1.3 / SSL encryption enforced across all domain endpoints with HTTP Strict Transport Security (HSTS) headers.
              </li>
              <li>
                <strong>Log Rotation & Scrubbing:</strong> Standard server access telemetry is pseudonymized and automatically rotated or purged within 30 to 90 days.
              </li>
              <li>
                <strong>Access Controls:</strong> Newsroom editorial correspondence and editorial ticketing queues are restricted through multi-factor authentication (MFA) and least-privilege role-based access controls (RBAC).
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: Children's Online Privacy Protection (COPPA) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Children&apos;s Online Privacy Protection Act (COPPA)
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebLedger is an informational publication intended for general audiences and film researchers. We do not knowingly solicit or collect personal information from children under the age of 13 (or under 16 in certain European jurisdictions). If we determine that a minor under 13 has transmitted personal data through our contact forms without verifiable parental consent, we will promptly delete that information from our active queues.
            </p>
          </div>
        </section>

        {/* Section 9: Data Protection Officer (DPO) & Inquiries */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Contacting Our Data Protection Officer
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              If you have questions, comments, or statutory requests concerning this Privacy Policy or our information governance practices, please reach out to our appointed Data Protection Officer:
            </p>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 text-xs">
              <div className="font-bold text-slate-900 text-sm">CelebLedger Data Protection Officer (DPO)</div>
              <div className="text-slate-600 space-y-1">
                <div>Email: <a href="mailto:privacy@celebledger.com" className="text-amber-700 font-bold hover:underline">privacy@celebledger.com</a></div>
                <div>Legal Operations Desk: <a href="mailto:legal@celebledger.com" className="text-slate-900 font-bold hover:underline">legal@celebledger.com</a></div>
                <div>Postal Service: CelebLedger Legal & Privacy Operations, Century City Media Center, Los Angeles, CA 90067</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
