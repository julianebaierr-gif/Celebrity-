import React from "react";
import { CelebrityProfile } from "@/data/celebrities";

interface JsonLdProps {
  celebrity?: CelebrityProfile;
  breadcrumbs?: { name: string; url: string }[];
}

export default function JsonLd({ celebrity, breadcrumbs }: JsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://celeb-edge.vercel.app";

  const schemas: object[] = [];

  // WebSite Schema with SearchAction
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CelebEdge",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });

  // Breadcrumbs Schema
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
        name: "CelebEdge Publishing Inc.",
        url: baseUrl,
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
