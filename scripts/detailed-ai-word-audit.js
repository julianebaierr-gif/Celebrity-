const fs = require('fs');
const path = require('path');

const RAW_USER_LIST = `
A deep dive into
A Guide to
Adopt
Adopting
An in-depth look at
An in-depth look into
As we look ahead
Battle-tested
Beacon
Bulletproof
Complete
Comprehensive
Comprehensive Guide
Comprehensive Guide to
Consumption
Cornerstone
Crucial
Crucial component
Deep dive
Delve
Delve into
Delving
Demystifying
Digital
Discover
Discover verified facts
Dive into
Elevate
Embark
Enterprise-grade
Evolution
Explore
Extracting
Find
Find verified facts
Foster
Furthermore
Game-changer
Guide
Harness
Helpful background
Helpful background details and common queries
High-Fidelity
In conclusion
In this article
In this article, we explore
In today's digital era
In today's fast-paced
In today's fast-paced digital world
In-depth
It is crucial to
It is important to note
It is important to remember
Key Insights
Landscape
Learn
Learn how
Learn more
Learn more details
Learn more now
Learn more today
Leverage
Look no further
Media
Modern
Modern teams adopting
Moreover
Navigating
Navigating the
Orchestrate
Paradigm shift
Pipelines
Pivotal
Plethora
Powerhouse
Realm
Robust
Seamless
Seamlessly
Tapestry
Technical
Testament
The Ultimate
Ultimate
Ultimate Guide
Ultra-High
Uncover
Unleash
Unlock
Unpacking
Verified
Vital
Vital role
`;

const bannedItems = RAW_USER_LIST.split('\n')
  .map(s => s.trim())
  .filter(s => s.length > 0)
  .sort((a, b) => b.length - a.length); // match longest phrases first

console.log(`Loaded ${bannedItems.length} banned phrases/words.`);

const SCAN_DIRS = ['src/data', 'src/app', 'src/components'];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || (file.endsWith('.json') && !file.includes('target-celebrities-sheet') && !file.includes('backup'))) {
      results.push(fullPath);
    }
  }
  return results;
}

const findings = [];

for (const dir of SCAN_DIRS) {
  if (!fs.existsSync(dir)) continue;
  const files = walkDir(dir);
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      // Don't flag import statements or standard type definitions if variable name
      if (line.trim().startsWith('import ') || line.trim().startsWith('export interface')) return;
      
      for (const item of bannedItems) {
        // match exact word/phrase boundary
        const escaped = item.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, 'i');
        if (regex.test(line)) {
          findings.push({
            file: f,
            lineNum: idx + 1,
            item,
            lineText: line.trim()
          });
          break; // move to next line once matched
        }
      }
    });
  }
}

console.log(`Total occurrences found in UI/Data: ${findings.length}`);
const summary = {};
findings.forEach(hit => {
  summary[hit.file] = (summary[hit.file] || 0) + 1;
});
console.log(summary);

fs.writeFileSync('scripts/detailed-audit.json', JSON.stringify(findings, null, 2));
