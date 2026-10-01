import { NextResponse } from "next/server";
import { CELEBRITIES } from "@/data/celebrities";
import { getAllBlogPosts } from "@/data/blog-posts";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://www.celebledger.com";

  const celebrityLinks = CELEBRITIES.map(
    (c) => `- [${c.name} Net Worth & Financial Dossier](${baseUrl}/celebrity/${c.slug}): ${c.quickFacts.primaryRole}, certified net worth ${c.quickFacts.netWorth}. ${c.headline}`
  ).join("\n");

  const compareMatchups = [
    { slug: "drake-vs-youngboy-never-broke-again", title: "Drake vs YoungBoy Never Broke Again", desc: "Comparative hip-hop catalog economics, streaming royalties, and net worth." },
    { slug: "zendaya-vs-jenna-ortega", title: "Zendaya vs Jenna Ortega", desc: "Next-gen Hollywood leading women box office milestones and equity contracts." },
    { slug: "cillian-murphy-vs-keanu-reeves", title: "Cillian Murphy vs Keanu Reeves", desc: "Oscar-winning box office backend points vs iconic action franchise equity." },
    { slug: "leonardo-dicaprio-vs-robert-redford", title: "Leonardo DiCaprio vs Robert Redford", desc: "Cinema legends, career box office valuations, and environmental philanthropy." },
    { slug: "margot-robbie-vs-winona-ryder", title: "Margot Robbie vs Winona Ryder", desc: "Blockbuster producer equity vs iconic 90s cult cinema stardom." },
    { slug: "travis-kelce-vs-taylor-swift-wedding", title: "Travis Kelce vs Taylor Swift", desc: "NFL Super Bowl champion vs billionaire music icon financial economics." },
    { slug: "david-harbour-vs-pedro-pascal", title: "David Harbour vs Pedro Pascal", desc: "Prestige television powerhouses and global franchise leading men economics." },
    { slug: "matt-damon-vs-will-smith", title: "Matt Damon vs Will Smith", desc: "Oscar winners, production studio ownership, and global box office history." },
  ];

  const compareLinks = compareMatchups.map(
    (m) => `- [${m.title}](${baseUrl}/compare/${m.slug}): ${m.desc}`
  ).join("\n");

  const blogLinks = getAllBlogPosts().map(
    (p) => `- [${p.title}](${baseUrl}/blog/${p.slug}): ${p.headline}. Published ${p.publishedDate}.`
  ).join("\n");

  const content = `# CelebLedger

> CelebLedger is the authoritative financial intelligence registry and investigative newsroom tracking verified celebrity net worth valuations, contract economics, box office ledgers, streaming royalty breakdowns, and career milestones. All dossiers are fact-checked under strict zero-rumor editorial governance.

## Core Documentation & Methodology
- [Editorial Standards & Methodology](${baseUrl}/editorial-standards): Forensic methodology for verifying net worth, contracts, and public asset registries.
- [About CelebLedger](${baseUrl}/about): Newsroom mission, editorial board, and journalistic principles.
- [Celebrity Directory](${baseUrl}/celebrities): Complete directory of verified entertainment, music, sports, and creator figures.
- [Head-to-Head Compare Tool](${baseUrl}/compare): Interactive wealth and career comparison engine.
- [Industry Analysis & Market Reports](${baseUrl}/blog): In-depth reporting on streaming economics, box office contracts, and creator equity.

## Verified Celebrity Financial Dossiers
${celebrityLinks}

## Certified Comparative Matchups (Head-to-Head)
${compareLinks}

## Forensic Market Reports & Industry Economics
${blogLinks}
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
