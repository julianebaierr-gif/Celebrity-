import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use & Service | CelebLedger Legal Guidelines",
  description:
    "Terms governing CelebLedger dossiers, intellectual property rights, financial disclaimers, and statutory DMCA copyright protocols.",
  alternates: {
    canonical: "https://www.celebledger.com/terms",
  },
  openGraph: {
    title: "Terms of Use & Service | CelebLedger",
    description:
      "Legal terms of service, intellectual property ownership, financial disclaimer, and DMCA copyright enforcement procedures.",
    url: "https://www.celebledger.com/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Terms of Use & Service
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Please read these Terms of Use carefully before accessing or browsing CelebLedger. By using this website, you confirm your unconditional acceptance of these terms, our privacy policy, and our institutional editorial guidelines.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono pt-2">
            <span>Effective Date: January 1, 2026</span>
            <span>&bull;</span>
            <span>Last Updated: September 26, 2026</span>
            <span>&bull;</span>
            <span>Version: 4.0</span>
          </div>
        </header>

        {/* Section 1: Binding Agreement & Scope of Access */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Acceptance of Terms & Legal Authority
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;Reader,&rdquo; or &ldquo;You&rdquo;) and CelebLedger (&ldquo;CelebLedger,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to and interaction with the website located at <code>celebledger.com</code> and all associated digital subdomains, APIs, RSS feeds, and editorial archives (collectively, the &ldquo;Service&rdquo;).
            </p>
            <p>
              By accessing, browsing, reading, or caching any page on the Service, you represent and warrant that you have reached the age of majority in your jurisdiction of residence, possess the legal capacity to enter into binding agreements, and consent to comply with all provisions contained herein. If you do not agree to every term of this agreement, you must immediately terminate access to the Service.
            </p>
          </div>
        </section>

        {/* Section 2: Intellectual Property & Limited License */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Intellectual Property Rights & Limited Reader License
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              All proprietary editorial text, original biographical narratives, critical analytical synthesis, structured tabular data, bespoke UI designs, icons, graphics, audio, code, and overall compilation architecture hosted on the Service are the exclusive intellectual property of CelebLedger and are protected by United States and international copyright, trademark, patent, and trade dress laws.
            </p>
            <p>
              <strong>Limited Grant of License:</strong> CelebLedger grants you a limited, non-exclusive, revocable, non-transferable license to access, read, and locally cache pages of the Service strictly for your individual, personal, non-commercial educational, or research purposes.
            </p>
            <p>
              <strong>Restrictions:</strong> Except as explicitly permitted by fair use provisions under Section 107 of the U.S. Copyright Act, you may not republish, broadcast, syndicate, sell, sublicense, commercially exploit, or redistribute substantial portions of our biographical dossiers without prior written authorization from our <Link href="/contact" className="text-amber-700 font-bold hover:underline">Licensing Desk</Link>.
            </p>
          </div>
        </section>

        {/* Section 3: Prohibited Conduct & Anti-Scraping / Bot Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Prohibited Conduct & Anti-Scraping Restrictions
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              To protect the integrity of our digital infrastructure and ensure equitable access for all human readers, the following activities are strictly prohibited:
            </p>

            <ul className="space-y-2 text-xs text-slate-700 pl-5 list-disc marker:text-slate-400">
              <li>
                <strong>Automated Data Harvesting & AI Model Ingestion:</strong> Scraping, harvesting, spidering, or capturing textual biographies, net worth formulas, or tabular filmographies using automated tools (including bots, crawlers, headless browsers, or scripts) for the purpose of training machine learning models, commercial database resale, or automated website mirroring without an express commercial license.
              </li>
              <li>
                <strong>Infrastructure Disruption:</strong> Launching denial-of-service (DoS/DDoS) attacks, flooding server capacity, bypassing edge rate limits, or probing firewall vulnerabilities.
              </li>
              <li>
                <strong>Framing & Framing Architecture:</strong> Framing, embedding, or displaying any page of the Service inside an external website frame in a manner that obscures our masthead or legal disclosures.
              </li>
              <li>
                <strong>Impersonation & Malicious Inquiries:</strong> Transmitting fraudulent legal notices, false publicist representations, or deceptive claims to our fact-checking desk.
              </li>
            </ul>

            <p className="text-xs text-slate-600">
              CelebLedger actively deploys automated threat-intelligence filters to identify and throttle unauthorized scraping traffic. Violations of this section may result in permanent IP blacklisting and referral to legal counsel under the Computer Fraud and Abuse Act (CFAA) (18 U.S.C. § 1030).
            </p>
          </div>
        </section>

        {/* Section 4: Financial & Net Worth Valuation Disclaimer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Financial & Net Worth Valuation Disclaimer
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
              <div className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                Informational & Educational Purpose Only
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Biographical dossiers, economic timelines, and net worth estimations published across CelebLedger are compiled strictly for journalistic, cultural, historical, and educational purposes. Net worth figures represent our independent analytical models synthesized from public corporate filings, municipal deed records, and industry benchmarks.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>NO FINANCIAL OR LEGAL COUNSEL:</strong> Nothing contained within the Service constitutes investment advice, tax planning, financial counsel, accounting advice, or legal recommendation. You should not make financial or investment decisions based upon information found on CelebLedger. We disclaim all liability for any actions taken in reliance upon economic valuations published on this website.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Statutory DMCA Copyright Notice & Takedown Protocol */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Statutory DMCA Notice & Takedown Protocol (17 U.S.C. § 512)
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              CelebLedger complies fully with the provisions of Title 17, United States Code, Section 512(c) (the Digital Millennium Copyright Act). If you are a copyright owner or an agent authorized to act on their behalf, and you believe that material hosted on CelebLedger infringes your copyright, you may submit a formal notification containing the following elements:
            </p>

            <ol className="space-y-2 text-xs text-slate-700 pl-5 list-decimal marker:font-bold marker:text-slate-800">
              <li>
                <strong>Physical or Electronic Signature:</strong> An authorized physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
              </li>
              <li>
                <strong>Identification of the Copyrighted Work:</strong> Identification of the copyrighted work claimed to have been infringed, or, if multiple works are covered by a single notification, a representative list of such works.
              </li>
              <li>
                <strong>Identification of the Infringing Material:</strong> Specific identification of the material that is claimed to be infringing, including the exact URL or link on CelebLedger where the material is located.
              </li>
              <li>
                <strong>Complainant Contact Information:</strong> Your direct mailing address, telephone number, and email address.
              </li>
              <li>
                <strong>Good Faith Statement:</strong> A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law (such as fair use).
              </li>
              <li>
                <strong>Accuracy & Penalty of Perjury:</strong> A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.
              </li>
            </ol>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 text-xs">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Designated DMCA Agent for Notice:
              </h3>
              <p className="text-slate-600">
                DMCA Compliance Director, CelebLedger Legal Operations<br />
                Email: <a href="mailto:contact.celebledger.com@gmail.com?subject=DMCA%20Notice" className="text-amber-700 font-bold hover:underline">contact.celebledger.com@gmail.com</a><br />
                Address: Century City Media Center, Legal Suite 1400, Los Angeles, CA 90067
              </p>
            </div>

            <p className="text-xs text-slate-600">
              Upon receipt of a valid, compliant DMCA notice, CelebLedger will promptly remove or disable access to the challenged material and notify the content contributor. In accordance with Section 512(i), CelebLedger maintains a policy of terminating access for repeat infringers in appropriate circumstances.
            </p>
          </div>
        </section>

        {/* Section 6: Third-Party Links & External Repositories */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Third-Party Hyperlinks & External Repositories
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              The Service contains hyperlinks to external third-party repositories, including Box Office Mojo, IMDb, the British Film Institute, the Academy of Motion Picture Arts and Sciences, and government regulatory registries. These links are provided solely as bibliographic citations for your convenience.
            </p>
            <p>
              CelebLedger does not endorse, control, or assume responsibility for the content, privacy policies, or business practices of third-party platforms. Accessing third-party resources is done entirely at your own risk.
            </p>
          </div>
        </section>

        {/* Section 7: Warranty Disclaimer & Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Disclaimer of Warranties & Limitation of Liability
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="uppercase text-xs font-semibold text-slate-600">
              &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; PROVISION:
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, CELEBLEDGER DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR COMPLETELY ERROR-FREE.
            </p>
            <p className="uppercase text-xs font-semibold text-slate-600 pt-2">
              LIMITATION OF DAMAGES:
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              IN NO EVENT SHALL CELEBLEDGER, ITS DIRECTORS, EDITORS, OFFICERS, EMPLOYEES, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF, OR INABILITY TO USE, THE SERVICE OR ANY RELIANCE UPON BIOGRAPHICAL AND FINANCIAL CONTENT PUBLISHED HEREIN.
            </p>
          </div>
        </section>

        {/* Section 8: Governing Law & Mandatory Dispute Resolution */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Governing Law, Jurisdiction & Dispute Resolution
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              These Terms and any dispute arising out of or related to your use of the Service shall be governed by, construed, and enforced in accordance with the laws of the State of California and the federal laws of the United States of America, without regard to conflict of law principles.
            </p>
            <p>
              <strong>Informal Resolution Period:</strong> Prior to filing any legal claim or demand, you agree to contact CelebLedger via <a href="mailto:contact.celebledger.com@gmail.com?subject=Legal%20Dispute%20Resolution" className="font-mono text-slate-800 hover:text-amber-700 underline">contact.celebledger.com@gmail.com</a> and attempt in good faith to resolve the dispute informally for a period of not less than thirty (30) calendar days.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
