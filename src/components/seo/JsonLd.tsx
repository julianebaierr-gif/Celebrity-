import React from "react";
import { CelebrityProfile } from "@/data/celebrities";

interface JsonLdProps {
  celebrity?: CelebrityProfile;
  breadcrumbs?: { name: string; url: string }[];
  itemList?: { name: string; url: string; description?: string }[];
  isHomePage?: boolean;
}

export default function JsonLd({
  celebrity,
  breadcrumbs,
  itemList,
  isHomePage = false,
}: JsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.celebledger.com";

  const schemas: object[] = [];

  // 1. WebSite Schema with SearchAction
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CelebLedger",
    url: baseUrl,
    publisher: {
      "@type": "Organization",
      name: "CelebLedger Publishing Inc.",
      url: baseUrl,
      logo: `${baseUrl}/favicon-512x512.png`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });

  // 2. Primary NewsMediaOrganization Schema (Homepage & Brand Knowledge Graph)
  if (isHomePage || !celebrity) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "NewsMediaOrganization",
      name: "CelebLedger Publishing Inc.",
      alternateName: ["CelebLedger", "The Celebrity Ledger"],
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon-512x512.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://x.com/CelebLedgerLive",
        "https://www.youtube.com/@CelebLedger",
        "https://www.instagram.com/CelebLedger"
      ],
      publishingPrinciples: `${baseUrl}/editorial-standards`,
      correctionsPolicy: `${baseUrl}/editorial-standards#corrections`,
      diversityPolicy: `${baseUrl}/editorial-standards#diversity`,
      ethicsPolicy: `${baseUrl}/editorial-standards#ethics`,
      description:
        "The authoritative entertainment economic intelligence portal. Verified celebrity net worth, contract evaluations, relationship archives, and biographical records.",
      foundingDate: "2024",
    });
  }

  // 3. CollectionPage & ItemList Schema (For Homepage / Celebrities Index)
  if (itemList && itemList.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: isHomePage
        ? "CelebLedger Featured Celebrity Dossiers & Economic Ledger"
        : "CelebLedger Complete Celebrity Directory",
      url: isHomePage ? baseUrl : `${baseUrl}/celebrities`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: itemList.length,
        itemListElement: itemList.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: item.url,
          name: item.name,
          description: item.description,
        })),
      },
    });
  }

  // 4. Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }

  // ProfilePage & Person Schema
  if (celebrity) {
    const sameAsUrls = Object.values(celebrity.sameAs).filter(Boolean);
    const authorSlug = celebrity.editorialMetadata.authorName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: `${baseUrl}/celebrity/${celebrity.slug}`,
      name: `${celebrity.name} Official Biographical Profile`,
      dateModified: celebrity.editorialMetadata.lastUpdated,
      author: {
        "@type": "Person",
        name: celebrity.editorialMetadata.authorName,
        jobTitle: celebrity.editorialMetadata.authorRole,
        url: `${baseUrl}/about#author-${authorSlug}`,
      },
      editor: {
        "@type": "Person",
        name: celebrity.editorialMetadata.factCheckedBy,
        jobTitle: "Fact-Checking Editor",
      },
      publisher: {
        "@type": "NewsMediaOrganization",
        name: "CelebLedger Publishing Inc.",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/favicon-512x512.png`,
          width: 512,
          height: 512,
        },
        publishingPrinciples: `${baseUrl}/editorial-standards`,
      },
      mainEntity: {
        "@type": "Person",
        name: celebrity.name,
        alternateName: celebrity.quickFacts.fullName,
        description: celebrity.executiveSummary,
        birthDate: celebrity.quickFacts.birthDate,
        ...(celebrity.quickFacts.deathDate ? { deathDate: celebrity.quickFacts.deathDate } : {}),
        birthPlace: {
          "@type": "Place",
          name: celebrity.quickFacts.birthPlace,
        },
        height: celebrity.quickFacts.height,
        jobTitle: celebrity.quickFacts.primaryRole,
        image: celebrity.heroImage,
        sameAs: sameAsUrls,
        netWorth: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: celebrity.quickFacts.netWorth,
        },
      },
    });

    // FAQPage Schema
    if (celebrity.faqs && celebrity.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: celebrity.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    }
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
