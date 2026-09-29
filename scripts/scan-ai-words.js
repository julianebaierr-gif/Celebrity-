const fs = require('fs');
const path = require('path');

const BANNED_PATTERNS = [
  "a deep dive into",
  "a guide to",
  "an in-depth look at",
  "an in-depth look into",
  "as we look ahead",
  "battle-tested",
  "beacon",
  "bulletproof",
  "comprehensive guide to",
  "comprehensive guide",
  "comprehensive",
  "cornerstone",
  "crucial component",
  "crucial",
  "deep dive",
  "delve into",
  "delving",
  "delve",
  "demystifying",
  "discover verified facts",
  "discover",
  "dive into",
  "elevate",
  "embark",
  "enterprise-grade",
  "evolution",
  "explore",
  "extracting",
  "find verified facts",
  "foster",
  "furthermore",
  "game-changer",
  "harness",
  "helpful background details and common queries",
  "helpful background",
  "high-fidelity",
  "in conclusion",
  "in this article, we explore",
  "in this article",
  "in today's digital era",
  "in today's fast-paced digital world",
  "in today's fast-paced",
  "in-depth",
  "it is crucial to",
  "it is important to note",
  "it is important to remember",
  "key insights",
  "landscape",
  "learn more details",
  "learn more now",
  "learn more today",
  "learn more",
  "learn how",
  "leverage",
  "look no further",
  "modern teams adopting",
  "moreover",
  "navigating the",
  "navigating",
  "orchestrate",
  "paradigm shift",
  "pivotal",
  "plethora",
  "powerhouse",
  "realm",
  "robust",
  "seamlessly",
  "seamless",
  "tapestry",
  "testament",
  "the ultimate",
  "ultimate guide",
  "ultimate",
  "ultra-high",
  "uncover",
  "unleash",
  "unlock",
  "unpacking",
  "vital role",
  "vital"
];

const SCAN_DIRS = ['src/data', 'src/app', 'src/components', 'src/lib'];

function scanFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const findings = [];

  lines.forEach((line, index) => {
    const lower = line.toLowerCase();
    for (const pattern of BANNED_PATTERNS) {
      // Use regex with word boundaries where appropriate
      const regex = new RegExp(`\\b${pattern}\\b`, 'i');
      if (regex.test(line)) {
        findings.push({
          file: filePath,
          line: index + 1,
          pattern,
          text: line.trim()
        });
      }
    }
  });

  return findings;
}

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json')) {
      if (!file.includes('target-celebrities-sheet') && !file.includes('backup') && !file.includes('.backup.')) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const allFindings = [];
for (const dir of SCAN_DIRS) {
  if (fs.existsSync(dir)) {
    const files = walkDir(dir);
    for (const f of files) {
      const hits = scanFile(f);
      allFindings.push(...hits);
    }
  }
}

console.log(`TOTAL AI WORD FINDINGS: ${allFindings.length}`);
const fileCount = {};
allFindings.forEach(f => {
  fileCount[f.file] = (fileCount[f.file] || 0) + 1;
});

console.log("\n--- FINDINGS BY FILE ---");
for (const [f, count] of Object.entries(fileCount)) {
  console.log(`${f}: ${count}`);
}

fs.writeFileSync('scripts/ai-word-findings.json', JSON.stringify(allFindings, null, 2));
console.log("\nWrote detailed findings to scripts/ai-word-findings.json");
