import fs from "fs";

const registry = JSON.parse(fs.readFileSync("src/data/used-keywords-registry.json", "utf-8"));
console.log(`=== ANTI-CANNIBALIZATION AUDIT ===`);
console.log(`Total Locked Entities: ${registry.totalLocked}`);
console.log(`Protected Keywords/Tags Count: ${registry.bannedKeywordSet.length}`);

// Test duplicate detection logic
function checkDuplicate(query) {
  const normalized = query.toLowerCase().trim();
  const slugified = normalized.replace(/[^a-z0-9]+/g, "-");

  const matched = registry.lockedKeywords.find(k => 
    k.keyword === normalized || 
    k.name.toLowerCase() === normalized || 
    k.slug === slugified ||
    k.slug === normalized
  );

  if (matched) {
    return { blocked: true, entity: matched.name, url: matched.canonicalUrl, reason: "Direct keyword/entity match" };
  }

  const containment = registry.lockedKeywords.find(k => {
    const itemKw = k.keyword.toLowerCase();
    const itemName = k.name.toLowerCase();
    return (
      (normalized.length > 5 && (normalized.includes(itemKw) || normalized.includes(itemName))) ||
      (itemKw.length > 5 && (itemKw.includes(normalized) || itemName.includes(normalized)))
    );
  });

  if (containment) {
    return { blocked: true, entity: containment.name, url: containment.canonicalUrl, reason: "Containment/LSI conflict" };
  }

  return { blocked: false };
}

// Test cases
const testQueries = [
  "tim curry",
  "Tim Curry",
  "TIM CURRY",
  "tim-curry",
  "Zendaya",
  "zendaya movies and tv shows",
  "Taylor Swift",
  "taylor swift wedding",
  "Robert Redford", // NOT published yet
  "Sydney Sweeney", // NOT published yet
  "Cillian Murphy",
  "travis kelce net worth"
];

console.log("\nTesting Queries against Registry:");
testQueries.forEach(q => {
  const res = checkDuplicate(q);
  if (res.blocked) {
    console.log(`[BLOCKED - DUPLICATE] "${q}" -> Conflicts with "${res.entity}" (${res.reason})`);
  } else {
    console.log(`[ALLOWED - NEW TOPIC] "${q}" -> Ready to produce`);
  }
});
