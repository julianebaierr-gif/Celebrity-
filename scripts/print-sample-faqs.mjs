import fs from "fs";

const content = fs.readFileSync("src/data/celebrities.ts", "utf8");
const rawChunks = content.split(/slug:\s*["']/);

// Print Tim Curry and Cillian Murphy
for (const slug of ["tim-curry", "cillian-murphy", "taylor-swift-wedding"]) {
  const chunk = rawChunks.find(c => c.startsWith(slug));
  if (!chunk) continue;
  const nameMatch = chunk.match(/name:\s*["']([^"']+)["']/);
  const name = nameMatch ? nameMatch[1] : slug;
  console.log(`\n=================== ${name.toUpperCase()} (${slug}) ===================`);
  
  const faqsMatch = chunk.match(/faqs:\s*\[([\s\S]*?)\]\s*,\s*sameAs/);
  if (faqsMatch) {
    const qMatches = [...faqsMatch[1].matchAll(/question:\s*["']([^"']+)["'],\s*answer:\s*["']([^"']+)["']/g)];
    qMatches.forEach((m, idx) => {
      console.log(`\n[FAQ ${idx + 1}] Q: ${m[1]}`);
      console.log(`         A: ${m[2]}`);
    });
  }
}
