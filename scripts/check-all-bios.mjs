import { createJiti } from "jiti";
import path from "path";

const jiti = createJiti(path.resolve(process.cwd(), "package.json"));
const { CELEBRITY_BIOGRAPHIES } = jiti("./src/data/celebrity-biographies.ts");

console.log("=== BIOGRAPHY WORD COUNTS ===");
for (const [slug, chapters] of Object.entries(CELEBRITY_BIOGRAPHIES)) {
  const text = chapters.map(c => c.heading + " " + c.paragraphs.join(" ") + " " + (c.keyTakeaway || "")).join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  console.log(`${slug.padEnd(25)}: ${words} words (${chapters.length} chapters) -> ${words >= 1200 ? "PASS" : "FAIL (THIN)"}`);
}
