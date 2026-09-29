import fs from "fs";

const text = fs.readFileSync("src/data/target-celebrities-sheet.csv", "utf8");
const lines = text.split("\n");

console.log("HEADER:", lines[0]);
for (let i = 1; i <= 25; i++) {
  if (lines[i]) {
    console.log(`[${i}] ${lines[i].slice(0, 140)}...`);
  }
}
