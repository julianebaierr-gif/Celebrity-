const fs = require('fs');
const path = require('path');

function scanFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const text = fs.readFileSync(filePath, 'utf8');
  const matches = text.match(/\/images\/[a-zA-Z0-9_\-\./]+/g) || [];
  return matches;
}

const celebImages = scanFile(path.resolve('src/data/celebrities.ts'));
const blogImages = scanFile(path.resolve('src/data/blog-posts.ts'));
const updateImages = scanFile(path.resolve('src/data/updates-store.json'));

const allUsage = {};

function record(list, source) {
  list.forEach(img => {
    // clean any trailing quote or punctuation
    const clean = img.replace(/['"\),;]+$/, '');
    if (!clean.endsWith('.webp') && !clean.endsWith('.png') && !clean.endsWith('.jpg')) return;
    if (!allUsage[clean]) allUsage[clean] = [];
    allUsage[clean].push(source);
  });
}

record(celebImages, 'celebrities.ts');
record(blogImages, 'blog-posts.ts');
record(updateImages, 'updates-store.json');

console.log('--- GLOBAL IMAGE AUDIT ---');
let duplicateCount = 0;
for (const [img, sources] of Object.entries(allUsage)) {
  if (sources.length > 1) {
    duplicateCount++;
    console.log(`DUPLICATE [${sources.length}x]: ${img} -> Used in: ${sources.join(', ')}`);
  }
}

if (duplicateCount === 0) {
  console.log('PERFECT! Zero duplicate images across the site!');
} else {
  console.log(`Found ${duplicateCount} duplicated images.`);
}
