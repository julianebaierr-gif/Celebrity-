import fs from 'fs';
import path from 'path';

function findHtmlFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      findHtmlFiles(full, list);
    } else if (item.name.endsWith('.html')) {
      list.push(full);
    }
  }
  return list;
}

const htmlFiles = findHtmlFiles('./.next/server/app');
console.log('Total HTML pages generated:', htmlFiles.length);

const longTitles = [];
const longDescriptions = [];
const longH1s = [];
const duplicateH2s = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const route = file.replace(/.*[\\\/]server[\\\/]app/, '').replace(/[\\\/]index\.html$/, '').replace(/\.html$/, '');

  // Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (titleMatch) {
    const title = titleMatch[1];
    if (title.length > 60) {
      longTitles.push({ route, title, len: title.length });
    }
  }

  // Meta description
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (descMatch) {
    const desc = descMatch[1];
    if (desc.length > 155) {
      longDescriptions.push({ route, desc, len: desc.length });
    }
  }

  // H1
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  h1Matches.forEach(h1 => {
    const cleanH1 = h1[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (cleanH1.length > 70) {
      longH1s.push({ route, h1: cleanH1, len: cleanH1.length });
    }
  });

  // H2 duplicates
  const h2Matches = [...content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  const h2Texts = h2Matches.map(h2 => h2[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
  const counts = {};
  h2Texts.forEach(t => {
    counts[t] = (counts[t] || 0) + 1;
  });
  const dups = Object.entries(counts).filter(([t, count]) => count > 1 && t.length > 0);
  if (dups.length > 0) {
    duplicateH2s.push({ route, dups });
  }
});

console.log('\n--- LONG TITLES (>60 chars) [Count: ' + longTitles.length + '] ---');
longTitles.forEach(t => console.log(`${t.route} (${t.len}c): ${t.title}`));

console.log('\n--- LONG DESCRIPTIONS (>155 chars) [Count: ' + longDescriptions.length + '] ---');
longDescriptions.forEach(d => console.log(`${d.route} (${d.len}c): ${d.desc}`));

console.log('\n--- LONG H1 (>70 chars) [Count: ' + longH1s.length + '] ---');
longH1s.forEach(h => console.log(`${h.route} (${h.len}c): ${h.h1}`));

console.log('\n--- DUPLICATE H2s [Count of pages: ' + duplicateH2s.length + '] ---');
duplicateH2s.forEach(d => console.log(`${d.route}:`, JSON.stringify(d.dups)));
