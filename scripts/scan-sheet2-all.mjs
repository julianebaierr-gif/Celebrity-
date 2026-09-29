import fs from "fs";

const registry = JSON.parse(fs.readFileSync("src/data/used-keywords-registry.json", "utf8"));
const lockedSlugs = new Set(registry.lockedKeywords.map((k) => k.slug));
const lockedKeywords = new Set(registry.lockedKeywords.map((k) => k.keyword.toLowerCase()));
const lockedNames = new Set(registry.lockedKeywords.map((k) => k.name.toLowerCase()));

const sheet2Content = fs.readFileSync("src/data/target-celebrities-sheet.csv", "utf8");
const lines = sheet2Content.split("\n").filter((l) => l.trim().length > 0);

const candidates = [];

for (let i = 1; i < lines.length && candidates.length < 25; i++) {
  const parts = lines[i].split(",");
  if (parts.length < 8) continue;

  const rank = parseInt(parts[0], 10);
  const keyword = parts[1].trim();
  const entity = parts[2].trim();
  const volume = parseInt(parts[3] || "0", 10);
  const silo = parts[7].trim();
  const slug = entity.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  if (
    lockedKeywords.has(keyword.toLowerCase()) ||
    lockedSlugs.has(slug) ||
    lockedNames.has(entity.toLowerCase())
  ) {
    continue;
  }

  candidates.push({ rank, keyword, entity, volume, silo, slug });
}

console.log("=== TOP 25 CELEBRITIES FROM SHEET2 (ACTORS, RAPPERS, ATHLETES, CREATORS) ===");
candidates.forEach((c, idx) => {
  console.log(`[${idx + 1}] Rank ${c.rank} | ${c.entity} (Keyword: "${c.keyword}") | Silo: ${c.silo} | Vol: ${c.volume.toLocaleString()}/mo`);
});
