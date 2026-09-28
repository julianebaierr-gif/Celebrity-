const fs = require('fs');
const path = require('path');

const celebritiesFile = path.resolve('src/data/celebrities.ts');
const blogPostsFile = path.resolve('src/data/blog-posts.ts');
const updatesStoreFile = path.resolve('src/data/updates-store.json');
const registryFile = path.resolve('src/data/used-images-registry.json');

const registry = {};

function addEntry(filePath, entity, placement, pageSlug) {
  if (!filePath) return;
  const clean = filePath.replace(/['"\),;]+$/, '').trim();
  if (!clean.startsWith('/images/')) return;
  
  registry[clean.toLowerCase()] = {
    filePath: clean,
    entity: entity,
    placement: placement,
    pageSlug: pageSlug,
    assignedAt: new Date().toISOString()
  };
}

// 1. Scan celebrities.ts
const celebCode = fs.readFileSync(celebritiesFile, 'utf8');

// Parse RAW_CELEBRITIES basic attributes via regex
const slugMatches = [...celebCode.matchAll(/slug:\s*["']([^"']+)["']/g)];
for (const match of slugMatches) {
  const slug = match[1];
  // extract block for this celebrity
  const startIdx = match.index;
  const nextMatch = slugMatches.find(m => m.index > startIdx);
  const block = celebCode.slice(startIdx, nextMatch ? nextMatch.index : startIdx + 4000);

  const heroMatch = block.match(/heroImage:\s*["']([^"']+)["']/);
  if (heroMatch) addEntry(heroMatch[1], slug, 'profile_hero', slug);

  const contentMatch = block.match(/contentImage:\s*["']([^"']+)["']/);
  if (contentMatch) addEntry(contentMatch[1], slug, 'profile_content', slug);

  const partnerMatches = [...block.matchAll(/image:\s*["']([^"']+)["']/g)];
  partnerMatches.forEach(pm => {
    addEntry(pm[1], 'partner', 'partner_card', slug);
  });
}

// 2. Scan blog-posts.ts
if (fs.existsSync(blogPostsFile)) {
  const blogCode = fs.readFileSync(blogPostsFile, 'utf8');
  const coverMatches = [...blogCode.matchAll(/coverImage:\s*["']([^"']+)["']/g)];
  coverMatches.forEach(cm => addEntry(cm[1], 'blog', 'blog_cover', 'blog'));
}

// 3. Scan updates-store.json
if (fs.existsSync(updatesStoreFile)) {
  const store = JSON.parse(fs.readFileSync(updatesStoreFile, 'utf8'));
  (store.dynamicBlogPosts || []).forEach(post => {
    if (post.coverImage) addEntry(post.coverImage, post.slug, 'blog_cover', post.slug);
    
    // Scan markdown content for images
    const mdImages = [...post.content.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)];
    mdImages.forEach((imgMatch, idx) => {
      addEntry(imgMatch[1], post.slug, `blog_content_${idx + 1}`, post.slug);
    });
  });
}

const data = {
  version: '1.0.0',
  lastUpdated: new Date().toISOString(),
  totalUniqueImages: Object.keys(registry).length,
  registry: registry
};

fs.writeFileSync(registryFile, JSON.stringify(data, null, 2), 'utf8');
console.log(`✓ Seeded registry with ${Object.keys(registry).length} unique images at: ${registryFile}`);
