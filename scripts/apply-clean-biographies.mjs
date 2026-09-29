import fs from "fs";
import path from "path";
import { drakeChapters, kylieChapters, winonaChapters, thorntonChapters } from "./biography-data.mjs";

const biosPath = path.resolve(process.cwd(), "src/data/celebrity-biographies.ts");
const currentBios = fs.readFileSync(biosPath, "utf-8");

const kelceEndMarker = '"billy-bob-thornton":';
const kelceEndIdx = currentBios.indexOf(kelceEndMarker);

if (kelceEndIdx === -1) {
  console.error("Could not find billy-bob-thornton marker!");
  process.exit(1);
}

let baseContent = currentBios.slice(0, kelceEndIdx).trimEnd();
if (!baseContent.endsWith(",")) {
  baseContent += ",";
}

let newBioContent = baseContent;
newBioContent += `\n  "billy-bob-thornton": ${JSON.stringify(thorntonChapters, null, 2)},\n\n`;
newBioContent += `  "winona-ryder": ${JSON.stringify(winonaChapters, null, 2)},\n\n`;
newBioContent += `  "drake": ${JSON.stringify(drakeChapters, null, 2)},\n\n`;
newBioContent += `  "kylie-jenner": ${JSON.stringify(kylieChapters, null, 2)}\n};\n`;

fs.writeFileSync(biosPath, newBioContent, "utf-8");

console.log("✓ Successfully constructed src/data/celebrity-biographies.ts!");

[
  { name: "Drake", chapters: drakeChapters },
  { name: "Kylie Jenner", chapters: kylieChapters },
  { name: "Winona Ryder", chapters: winonaChapters },
  { name: "Billy Bob Thornton", chapters: thorntonChapters }
].forEach(item => {
  const words = item.chapters.map(c => c.heading + " " + c.paragraphs.join(" ") + " " + c.keyTakeaway).join(" ").split(/\s+/).filter(Boolean).length;
  console.log(`- ${item.name}: ${item.chapters.length} chapters, ${words} words (Requirement: >= 1200)`);
});
