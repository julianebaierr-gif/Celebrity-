import fs from "fs";

// Load used registry
const registry = JSON.parse(fs.readFileSync("src/data/used-keywords-registry.json", "utf8"));
const lockedSlugs = new Set(registry.lockedKeywords.map(k => k.slug));
const lockedKeywords = new Set(registry.lockedKeywords.map(k => k.keyword.toLowerCase()));

// Known non-actor indicators (rappers, influencers, athletes, commentators)
const NON_ACTOR_KEYWORDS = [
  "nba youngboy", "drake", "chris brown", "britney spears", "mariah carey",
  "kylie jenner", "jimmy kimmel", "debbie rowe", "lisa marie presley", "travis kelce",
  "taylor swift", "rosalia", "rapper", "nfl", "nba", "streamer", "youtuber", "tiktok"
];

const sheet2Content = fs.readFileSync("src/data/target-celebrities-sheet.csv", "utf8");
const lines = sheet2Content.split("\n").filter(l => l.trim().length > 0);

const candidates = [];

for (let i = 1; i < lines.length; i++) {
  // Priority_Rank,Primary_Target_Keyword,Topic_Entity,Total_Cluster_Volume,Primary_Keyword_Volume,Lowest_KD,Max_CPC_USD,Content_Silo,Secondary_Keywords_Merge_In_Same_Article (Avoid_Cannibalization),Semantic_LSI_Content_Architecture,SERP_Features
  const parts = lines[i].split(",");
  if (parts.length < 8) continue;

  const rank = parseInt(parts[0], 10);
  const keyword = parts[1].trim();
  const entity = parts[2].trim();
  const volume = parseInt(parts[3] || "0", 10);
  const silo = parts[7].trim();
  const secondary = parts[8] || "";

  const slug = keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  // Check 1: Already published in Sheet1?
  const isAlreadyInSheet1 = 
    lockedKeywords.has(keyword.toLowerCase()) || 
    lockedSlugs.has(slug) ||
    registry.lockedKeywords.some(k => k.name.toLowerCase() === entity.toLowerCase());

  if (isAlreadyInSheet1) {
    continue;
  }

  // Check 2: Filter out non-actors
  const isNonActor = NON_ACTOR_KEYWORDS.some(na => 
    keyword.toLowerCase().includes(na) || entity.toLowerCase().includes(na)
  );

  if (isNonActor) {
    continue;
  }

  candidates.push({
    rank,
    keyword,
    entity,
    volume,
    silo,
    secondary: secondary.slice(0, 80)
  });

  if (candidates.length >= 20) break;
}

console.log("=== TOP 20 FILTERED ACTORS & ACTRESSES FROM SHEET2 (NOT IN SHEET1) ===");
candidates.forEach((c, idx) => {
  console.log(`[${idx + 1}] Rank ${c.rank} | ${c.entity} (Keyword: "${c.keyword}") | Monthly Volume: ${c.volume.toLocaleString()}`);
});
