import fs from "fs";

// Read celebrities.ts directly and extract each celebrity's metadata
const fileContent = fs.readFileSync("src/data/celebrities.ts", "utf8");

// Parse RAW_CELEBRITIES array items
const entries = [];

// Split by slug:
const rawChunks = fileContent.split(/slug:\s*["']/);
// First chunk is header/interfaces
for (let i = 1; i < rawChunks.length; i++) {
  const chunk = rawChunks[i];
  const slug = chunk.split(/["']/)[0];
  
  // Extract name
  const nameMatch = chunk.match(/name:\s*["']([^"']+)["']/);
  const name = nameMatch ? nameMatch[1] : slug;

  // Extract silo
  const siloMatch = chunk.match(/silo:\s*["']([^"']+)["']/);
  const silo = siloMatch ? siloMatch[1] : "Celebrity Profiles & Bios";

  // Extract primaryKeyword
  const pkMatch = chunk.match(/primaryKeyword:\s*["']([^"']+)["']/);
  const primaryKeyword = pkMatch ? pkMatch[1] : name.toLowerCase();

  // Extract secondaryKeywords
  const skMatch = chunk.match(/secondaryKeywords:\s*\[([\s\S]*?)\]/);
  let tags = [];
  if (skMatch) {
    tags = [...skMatch[1].matchAll(/["']([^"']+)["']/g)].map(m => m[1]);
  }

  // Extract publishedDate
  const dateMatch = chunk.match(/publishedDate:\s*["']([^"']+)["']/);
  let publishedDate = dateMatch ? dateMatch[1] : "2026-02-14T09:00:00Z";

  // Format date nicely
  // Convert 2026-02-10T10:00:00Z to 2026-02-10 10:00:00
  let formattedDate = publishedDate.replace("T", " ").replace("Z", "").slice(0, 19);

  entries.push({
    slug,
    name,
    primaryKeyword,
    silo,
    tags: tags.slice(0, 4).join(" | "),
    allTags: tags,
    status: "Published",
    url: `https://celebledger.com/celebrity/${slug}`,
    publishedDate: formattedDate
  });
}

console.log(`Parsed ${entries.length} celebrities from celebrities.ts:`);
entries.forEach((e, idx) => {
  console.log(`[${idx + 1}] ${e.name} (${e.slug}) -> Keyword: "${e.primaryKeyword}", Silo: "${e.silo}", Date: ${e.publishedDate}`);
});

// Build CSV matching exact Sheet1 schema:
// Keywords,Category,Tags,Status,Post Url,Post Date / Tmie
const csvHeader = "Keywords,Category,Tags,Status,Post Url,Post Date / Tmie\n";
const csvRows = entries.map(e => {
  const kw = `"${e.primaryKeyword.replace(/"/g, '""')}"`;
  const cat = `"${e.silo.replace(/"/g, '""')}"`;
  const tags = `"${e.tags.replace(/"/g, '""')}"`;
  const status = `"${e.status}"`;
  const url = `"${e.url}"`;
  const date = `"${e.publishedDate}"`;
  return `${kw},${cat},${tags},${status},${url},${date}`;
}).join("\n");

fs.writeFileSync("src/data/sheet1-populated.csv", csvHeader + csvRows, "utf8");
console.log("Wrote src/data/sheet1-populated.csv successfully!");

// Also create TSV version for seamless 1-click copy-paste into Google Sheet cell A2
const tsvRows = entries.map(e => {
  return [e.primaryKeyword, e.silo, e.tags, e.status, e.url, e.publishedDate].join("\t");
}).join("\n");

fs.writeFileSync("src/data/sheet1-pasteable.tsv", tsvRows, "utf8");
console.log("Wrote src/data/sheet1-pasteable.tsv successfully!");

// Create the used-keywords registry JSON
const registry = {
  description: "CelebLedger Master Anti-Cannibalization & Anti-Duplication Registry. Celebrities and keywords in this registry are permanently locked and cannot be regenerated or re-posted.",
  totalLocked: entries.length,
  lastUpdated: new Date().toISOString(),
  lockedKeywords: entries.map(e => ({
    keyword: e.primaryKeyword.toLowerCase().trim(),
    slug: e.slug,
    name: e.name,
    category: e.silo,
    canonicalUrl: e.url,
    publishedAt: e.publishedDate,
    associatedTags: e.allTags
  })),
  bannedKeywordSet: Array.from(new Set([
    ...entries.map(e => e.primaryKeyword.toLowerCase().trim()),
    ...entries.map(e => e.name.toLowerCase().trim()),
    ...entries.flatMap(e => (e.allTags || []).map(t => t.toLowerCase().trim()))
  ]))
};

fs.writeFileSync("src/data/used-keywords-registry.json", JSON.stringify(registry, null, 2), "utf8");
console.log("Wrote src/data/used-keywords-registry.json successfully with", registry.bannedKeywordSet.length, "protected keyword variations!");
