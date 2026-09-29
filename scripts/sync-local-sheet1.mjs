import fs from "fs";
import path from "path";

const registryPath = path.resolve(process.cwd(), "src/data/used-keywords-registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));

const headerCsv = 'Keywords,Category,Tags,Status,Post Url,Post Date / Tmie\n';
const rowsCsv = registry.lockedKeywords.map((k) => {
  const tags = (k.associatedTags || []).slice(0, 4).join(" | ");
  return `"${k.keyword}","${k.category}","${tags}","Published","${k.canonicalUrl}","${k.publishedAt}"`;
}).join("\n");

fs.writeFileSync(path.resolve(process.cwd(), "src/data/sheet1-populated.csv"), headerCsv + rowsCsv + "\n", "utf-8");

const rowsTsv = registry.lockedKeywords.map((k) => {
  const tags = (k.associatedTags || []).slice(0, 4).join(" | ");
  return `${k.keyword}\t${k.category}\t${tags}\tPublished\t${k.canonicalUrl}\t${k.publishedAt}`;
}).join("\n");

fs.writeFileSync(path.resolve(process.cwd(), "src/data/sheet1-pasteable.tsv"), rowsTsv + "\n", "utf-8");

console.log(`✓ Cleanly synchronized local sheet1 exports with all ${registry.lockedKeywords.length} locked records.`);
