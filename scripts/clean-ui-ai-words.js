const fs = require('fs');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;
  for (const { target, replace } of replacements) {
    if (content.includes(target)) {
      content = content.replace(target, replace);
      count++;
    } else {
      console.warn(`[${filePath}] target not found: "${target.slice(0, 40)}"`);
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${filePath}] Applied ${count}/${replacements.length} replacements.`);
}

// 1. src/components/profile/TableOfContents.tsx
replaceInFile('src/components/profile/TableOfContents.tsx', [
  { target: 'title: "Verified Quick Facts & Executive Summary"', replace: 'title: "Official Facts & Executive Summary"' },
  { target: 'title: "Economic Impact & Verified Metrics"', replace: 'title: "Economic Impact & Financial Benchmarks"' },
  { target: 'title: "Comprehensive Biography & Critical Analysis"', replace: 'title: "Full Biography & Career Analysis"' },
  { target: 'title: "Complete Filmography & Box Office"', replace: 'title: "Filmography & Box Office History"' },
  { target: 'title: "Media Rights & Verified Primary Sources"', replace: 'title: "Photo Credits & Primary Sources"' }
]);

// 2. src/components/profile/EditorialBiography.tsx
replaceInFile('src/components/profile/EditorialBiography.tsx', [
  { target: 'Comprehensive Biography & Critical Analysis', replace: 'Full Biography & Career Analysis' },
  { target: 'An exhaustive, verified biographical examination of', replace: 'An authoritative biographical chronicle of' }
]);

// 3. src/components/profile/ComparisonMetrics.tsx
replaceInFile('src/components/profile/ComparisonMetrics.tsx', [
  { target: 'Verified industry metrics, box office records, and career benchmarks for {celebrityName}.', replace: 'Audited industry metrics, box office records, and career benchmarks for {celebrityName}.' }
]);

// 4. src/components/profile/RelationshipSection.tsx
replaceInFile('src/components/profile/RelationshipSection.tsx', [
  { target: 'Verified marital records, documented partnerships, and personal milestones for {celebrityName}.', replace: 'Documented marital records, confirmed partnerships, and personal milestones for {celebrityName}.' },
  { target: "aria-label={`Explore ${partner.name}'s verified biographical dossier on CelebEdge`}", replace: "aria-label={`Read ${partner.name}'s biographical profile on CelebEdge`}" },
  { target: "Explore {partner.name}&apos;s Verified Profile", replace: "View {partner.name}&apos;s Official Profile" },
  { target: "Verified Dossier Record", replace: "Official Profile Record" }
]);

// 5. src/components/profile/FaqSection.tsx
replaceInFile('src/components/profile/FaqSection.tsx', [
  { target: "Direct answers to verified inquiries regarding {celebrityName}&apos;s career", replace: "Direct answers to public inquiries regarding {celebrityName}&apos;s career" }
]);

// 6. src/components/blog/FaqAccordion.tsx
replaceInFile('src/components/blog/FaqAccordion.tsx', [
  { target: "Verified Knowledge Briefing", replace: "Essential Event Briefing" },
  { target: "Need complete historical data, net worth valuation, and verified filmography?", replace: "Need comprehensive historical archives, net worth valuation, and filmography records?" }
]);

// 7. src/components/layout/Footer.tsx
replaceInFile('src/components/layout/Footer.tsx', [
  { target: "A comprehensive journalistic archive for verified celebrity biographies", replace: "An authoritative journalistic archive for official celebrity biographies" }
]);

// 8. src/app/celebrities/page.tsx
replaceInFile('src/app/celebrities/page.tsx', [
  { target: "Explore comprehensive celebrity profiles, career timelines, filmography records, net worth valuations, and relationship archives.", replace: "Browse official celebrity profiles, career timelines, filmography records, net worth valuations, and relationship archives." },
  { target: "Discover verified facts, box office statistics, and relationship archives across Hollywood, music, and television.", replace: "View confirmed records, box office statistics, and relationship archives across Hollywood, music, and television." },
  { target: "Comprehensive Profiles", replace: "Official Profiles" }
]);

// 9. src/app/search/page.tsx
replaceInFile('src/app/search/page.tsx', [
  { target: "<span>Explore All Celebrities</span>", replace: "<span>View All Celebrities</span>" }
]);

// 10. src/app/editorial-standards/page.tsx
replaceInFile('src/app/editorial-standards/page.tsx', [
  { target: "Explore CelebEdge's journalistic charter:", replace: "Review CelebEdge's journalistic charter:" }
]);

// 11. src/app/about/page.tsx
replaceInFile('src/app/about/page.tsx', [
  { target: "Discover the mission, editorial leadership, research methodology, and rigorous verification standards powering CelebEdge's certified biographical and financial archives.", replace: "Review the mission, editorial leadership, research methodology, and rigorous verification standards powering CelebEdge's certified biographical and financial archives." },
  { target: "Discover the mission, editorial leadership, research methodology, and rigorous verification standards powering CelebEdge's certified biographical and financial archives.", replace: "Review the mission, editorial leadership, research methodology, and rigorous verification standards powering CelebEdge's certified biographical and financial archives." }
]);

// 12. src/app/layout.tsx
replaceInFile('src/app/layout.tsx', [
  { target: "Verified celebrity profiles, box office tracking, net worth analysis, and relationship timelines.", replace: "Official celebrity profiles, box office tracking, net worth analysis, and relationship timelines." }
]);
