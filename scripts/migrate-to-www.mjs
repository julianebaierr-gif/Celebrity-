import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'src/app/layout.tsx',
  'src/app/robots.ts',
  'src/app/sitemap.ts',
  'src/components/seo/JsonLd.tsx',
  'src/app/celebrity/[slug]/page.tsx',
  'src/app/page.tsx',
  'src/app/celebrities/page.tsx',
  'src/app/search/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/blog/[slug]/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/editorial-standards/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/terms/page.tsx',
  'src/lib/auto-content-engine.ts',
  'src/lib/verified-image-pipeline.ts',
  'src/data/used-keywords-registry.json',
  'src/data/sheet1-populated.csv',
  'src/data/sheet1-pasteable.tsv',
  'scripts/pre-publish-validator.mjs'
];

let totalReplacements = 0;

for (const relPath of filesToUpdate) {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping non-existent: ${relPath}`);
    continue;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  // Match https://celebledger.com but NOT https://www.celebledger.com
  const regex = /https:\/\/celebledger\.com(?!\/www\.)/g;
  const count = (content.match(regex) || []).length;
  
  if (count > 0) {
    content = content.replace(regex, 'https://www.celebledger.com');
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✓ Updated ${relPath} (${count} occurrences)`);
    totalReplacements += count;
  } else {
    console.log(`- No matches in ${relPath}`);
  }
}

console.log(`\nCompleted domain migration to https://www.celebledger.com. Total replacements: ${totalReplacements}`);
