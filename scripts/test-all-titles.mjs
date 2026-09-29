import fs from "fs";
import path from "path";

const registry = JSON.parse(fs.readFileSync("src/data/used-keywords-registry.json", "utf-8"));
const celebrities = registry.lockedKeywords;

function generateCleanTitle(celebrity) {
  let domainKeyword = "Career";
  let specificKeywords = [];
  const cat = (celebrity.category || "").toLowerCase();
  const nameLower = celebrity.name.toLowerCase();

  if (
    cat.includes("music") ||
    cat.includes("sound") ||
    ["drake", "rosalia", "taylor swift", "britney spears", "mariah carey", "chris brown", "nba youngboy", "youngboy"].some((m) => nameLower.includes(m))
  ) {
    domainKeyword = "Music";
    specificKeywords = ["Music Career", "Songs & Bio", "Albums & Bio", "Music & Net Worth"];
  } else if (
    cat.includes("sport") ||
    cat.includes("athlete") ||
    ["travis kelce"].some((s) => nameLower.includes(s))
  ) {
    domainKeyword = "Stats";
    specificKeywords = ["Career Stats", "NFL Career", "Stats & Bio", "Contracts & Bio"];
  } else if (
    cat.includes("creator") ||
    cat.includes("digital") ||
    cat.includes("influencer") ||
    ["kylie jenner", "mrbeast", "ishowspeed", "kai cenat"].some((c) => nameLower.includes(c))
  ) {
    domainKeyword = "Brands";
    specificKeywords = ["Brand Ventures", "Brands & Bio", "Enterprises", "Business & Bio"];
  } else {
    specificKeywords = ["Acting Career", "Movies & Bio", "Film Roles", "Career & Bio"];
  }

  const titleCandidates = [
    `${celebrity.name} Net Worth, Age, ${domainKeyword} & Full Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Bio & ${domainKeyword} | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Career, Movies & Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Music Career & Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Career & Biography | CelebEdge`,
    `${celebrity.name} Net Worth, Age, ${specificKeywords[0]} | CelebEdge`,
    `${celebrity.name} Net Worth, Age, ${specificKeywords[1]} | CelebEdge`,
    `${celebrity.name} Net Worth, Age & ${domainKeyword} | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Bio & Career | CelebEdge`,
    `${celebrity.name} Net Worth, Age, Career & Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Full Bio & Career | CelebEdge`,
    `${celebrity.name} Net Worth, Career & Biography | CelebEdge`,
    `${celebrity.name} Net Worth, Age & Career Guide | CelebEdge`,
    `${celebrity.name} Net Worth, Career & Bio | CelebEdge`,
    `${celebrity.name} Net Worth, Age & 2026 Bio | CelebEdge`,
    `${celebrity.name} Net Worth & Verified Bio | CelebEdge`,
    `${celebrity.name} Net Worth & Complete Bio | CelebEdge`,
    `${celebrity.name} Net Worth & 2026 Dossier | CelebEdge`,
    `${celebrity.name} Net Worth & Biography | CelebEdge`,
    `${celebrity.name} Net Worth, Age & Bio | CelebEdge`,
    `${celebrity.name} Net Worth & Career | CelebEdge`,
    `${celebrity.name} Net Worth & Bio | CelebEdge`
  ];

  for (const c of titleCandidates) {
    if (c.length >= 50 && c.length <= 58) {
      return c;
    }
  }

  // Fallback if none in 50-58: find closest <= 58 and pad with meaningful keywords
  const valid = titleCandidates.filter(c => c.length <= 58);
  if (valid.length > 0) {
    let best = valid[0];
    if (best.length < 50) {
      let padded = best.replace(" & Bio | CelebEdge", " & Full Bio | CelebEdge");
      if (padded.length >= 50 && padded.length <= 58) return padded;
      padded = best.replace("Net Worth, Age", "Net Worth, Age, Career");
      if (padded.length >= 50 && padded.length <= 58) return padded;
      padded = best.replace("Net Worth &", "Net Worth, Career &");
      if (padded.length >= 50 && padded.length <= 58) return padded;
      padded = best.replace("| CelebEdge", "& Full Bio | CelebEdge");
      if (padded.length >= 50 && padded.length <= 58) return padded;
    }
    return best;
  }
  return `${celebrity.name.slice(0, 35)} Net Worth & Bio | CelebEdge`;
}

console.log("=== AUDITING ALL CELEBRITY TITLES ===");
let allPassed = true;
celebrities.forEach(c => {
  const title = generateCleanTitle(c);
  const countCelebEdge = (title.match(/CelebEdge/g) || []).length;
  const isPass = title.length >= 50 && title.length <= 58 && countCelebEdge === 1 && title.endsWith(" | CelebEdge");
  if (!isPass) allPassed = false;
  console.log(`${c.name} (${title.length} chars) [CelebEdge: ${countCelebEdge}]: "${title}" -> ${isPass ? 'PASS' : 'FAIL'}`);
});
console.log(`\nOVERALL STATUS: ${allPassed ? "ALL 100% PASSED" : "SOME FAILED"}`);
