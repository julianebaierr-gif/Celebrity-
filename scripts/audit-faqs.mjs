import fs from "fs";

const content = fs.readFileSync("src/data/celebrities.ts", "utf8");
const rawChunks = content.split(/slug:\s*["']/);

console.log("=== EXISTING CELEBRITY FAQs AUDIT ===");
for (let i = 1; i < rawChunks.length; i++) {
  const slug = rawChunks[i].split(/["']/)[0];
  const nameMatch = rawChunks[i].match(/name:\s*["']([^"']+)["']/);
  const name = nameMatch ? nameMatch[1] : slug;

  const faqsMatch = rawChunks[i].match(/faqs:\s*\[([\s\S]*?)\]\s*,\s*sameAs/);
  let count = 0;
  let sampleQ = "";
  if (faqsMatch) {
    const qMatches = [...faqsMatch[1].matchAll(/question:\s*["']([^"']+)["']/g)];
    count = qMatches.length;
    if (count > 0) sampleQ = qMatches[0][1];
  }
  console.log(`${slug.padEnd(24)} (${name}) -> ${count} FAQs | Sample: "${sampleQ}"`);
}
