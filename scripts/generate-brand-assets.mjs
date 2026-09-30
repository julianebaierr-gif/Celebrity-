import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Refined Mathematically Centered Master SVG Emblem
const masterLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Deep obsidian luxury background gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1526" />
      <stop offset="50%" stop-color="#070b16" />
      <stop offset="100%" stop-color="#020308" />
    </linearGradient>

    <!-- Warm Metallic Gold Gradient for 'C' and Accents -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>

    <!-- Pale Champagne Gold for 'L' (Creates Contrast and Readability) -->
    <linearGradient id="champagneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="30%" stop-color="#FEF3C7" />
      <stop offset="75%" stop-color="#FDE68A" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>

    <!-- Inset Frame Gradient -->
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#92400E" stop-opacity="0.5" />
    </linearGradient>

    <filter id="subtleGlow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#F59E0B" flood-opacity="0.28" />
    </filter>
  </defs>

  <!-- Squircle Base -->
  <rect x="10" y="10" width="492" height="492" rx="114" fill="url(#bgGrad)" />

  <!-- Outer Precision Inset Border -->
  <rect x="22" y="22" width="468" height="468" rx="102" fill="none" stroke="url(#borderGrad)" stroke-width="3" />
  <rect x="32" y="32" width="448" height="448" rx="92" fill="none" stroke="#F59E0B" stroke-width="1" stroke-opacity="0.12" />

  <!-- Monogram Group (Centered at 256, 256) -->
  <g filter="url(#subtleGlow)">
    <!-- THE 'C': Majestic Architectural Arch -->
    <path d="
      M 346 150
      A 152 152 0 1 0 346 362
      L 312 328
      A 104 104 0 1 1 312 184
      Z"
      fill="url(#goldGrad)" />

    <!-- THE 'L': Refined Financial Pillar &amp; Ledger Baseline -->
    <path d="
      M 216 182
      L 254 182
      L 254 288
      L 348 288
      L 348 326
      L 216 326
      Z"
      fill="url(#champagneGrad)" />

    <!-- LEDGER HORIZONTAL BALANCE LINES (3 Certified Statement Ticks) -->
    <rect x="270" y="200" width="68" height="8" rx="4" fill="url(#goldGrad)" opacity="0.95" />
    <rect x="270" y="228" width="54" height="8" rx="4" fill="url(#goldGrad)" opacity="0.8" />
    <rect x="270" y="256" width="62" height="8" rx="4" fill="url(#goldGrad)" opacity="0.65" />

    <!-- THE NORTH STAR OF CELEBRITY TRUTH -->
    <path d="
      M 358 108
      Q 358 140 378 148
      Q 358 156 358 188
      Q 358 156 338 148
      Q 358 140 358 108 Z"
      fill="url(#champagneGrad)" />
    <circle cx="358" cy="148" r="4.5" fill="#FFFFFF" />
  </g>
</svg>`;

// 2. Horizontal Logo with Wordmark
const horizontalLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 120" width="600" height="120">
  <defs>
    <linearGradient id="hBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1526" />
      <stop offset="100%" stop-color="#020308" />
    </linearGradient>
    <linearGradient id="hGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="35%" stop-color="#F59E0B" />
      <stop offset="75%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <linearGradient id="hChampagne" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
  </defs>

  <!-- Left Icon Emblem (Scale 100x100 at x=10, y=10) -->
  <g transform="translate(10, 10)">
    <rect width="100" height="100" rx="24" fill="url(#hBg)" />
    <rect x="3" y="3" width="94" height="94" rx="21" fill="none" stroke="url(#hGold)" stroke-width="1.5" stroke-opacity="0.4" />
    
    <!-- Mini Centered Monogram -->
    <g transform="translate(4, 4) scale(0.18)">
      <path d="M 346 150 A 152 152 0 1 0 346 362 L 312 328 A 104 104 0 1 1 312 184 Z" fill="url(#hGold)" />
      <path d="M 216 182 L 254 182 L 254 288 L 348 288 L 348 326 L 216 326 Z" fill="url(#hChampagne)" />
      <rect x="270" y="200" width="68" height="8" rx="4" fill="url(#hGold)" opacity="0.95" />
      <rect x="270" y="228" width="54" height="8" rx="4" fill="url(#hGold)" opacity="0.8" />
      <rect x="270" y="256" width="62" height="8" rx="4" fill="url(#hGold)" opacity="0.65" />
      <path d="M 358 108 Q 358 140 378 148 Q 358 156 358 188 Q 358 156 338 148 Q 358 140 358 108 Z" fill="url(#hChampagne)" />
      <circle cx="358" cy="148" r="4.5" fill="#FFFFFF" />
    </g>
  </g>

  <!-- Wordmark -->
  <text x="130" y="65" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="44" letter-spacing="-0.03em" fill="#0F172A">CELEB<tspan fill="#D97706">LEDGER</tspan></text>
  <text x="132" y="88" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="12" letter-spacing="0.28em" fill="#64748B">THE CELEBRITY LEDGER • VERIFIED ARCHIVES</text>
</svg>`;

// Helper function to build a multi-size ICO buffer from 48x48 PNG
async function buildIcoFromPngBuffer(png48Buffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO image type (1)
  header.writeUInt16LE(1, 4); // 1 image

  const directoryEntry = Buffer.alloc(16);
  directoryEntry.writeUInt8(48, 0);  // width (48)
  directoryEntry.writeUInt8(48, 1);  // height (48)
  directoryEntry.writeUInt8(0, 2);   // color palette (0)
  directoryEntry.writeUInt8(0, 3);   // reserved
  directoryEntry.writeUInt16LE(1, 4); // color planes
  directoryEntry.writeUInt16LE(32, 6); // bits per pixel (32)
  directoryEntry.writeUInt32LE(png48Buffer.length, 8); // size of image data
  directoryEntry.writeUInt32LE(6 + 16, 12); // offset of image data

  return Buffer.concat([header, directoryEntry, png48Buffer]);
}

async function run() {
  console.log('Generating CelebLedger Brand Assets...');

  // 1. Write SVGs
  fs.writeFileSync('public/logo.svg', masterLogoSvg);
  fs.writeFileSync('public/favicon.svg', masterLogoSvg);
  fs.writeFileSync('public/logo-horizontal.svg', horizontalLogoSvg);
  fs.writeFileSync('src/app/icon.svg', masterLogoSvg);
  console.log('✓ Wrote SVG files (public/logo.svg, public/favicon.svg, src/app/icon.svg)');

  const svgBuffer = Buffer.from(masterLogoSvg);

  // 2. Generate PNGs at all Google Search & Web Standard Sizes
  const sizes = [
    { name: 'public/favicon-48x48.png', size: 48 },   // Google Search explicit recommendation
    { name: 'public/favicon-96x96.png', size: 96 },   // High-DPI Google Search
    { name: 'public/apple-touch-icon.png', size: 180 }, // iOS Safari
    { name: 'public/favicon-192x192.png', size: 192 }, // Android / Chrome PWA
    { name: 'public/favicon-512x512.png', size: 512 }, // High-Res Brand & Web App Icon
    { name: 'src/app/apple-icon.png', size: 180 },    // Next.js App Router Apple Icon
    { name: 'src/app/icon.png', size: 96 },          // Next.js App Router Standard Icon
  ];

  let png48Buffer = null;

  for (const item of sizes) {
    const buf = await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png({ compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(item.name, buf);
    console.log(`✓ Generated ${item.name} (${item.size}x${item.size})`);

    if (item.size === 48) {
      png48Buffer = buf;
    }
  }

  // 3. Generate Valid ICO file containing 48x48 icon
  if (png48Buffer) {
    const icoBuffer = await buildIcoFromPngBuffer(png48Buffer);
    fs.writeFileSync('public/favicon.ico', icoBuffer);
    fs.writeFileSync('src/app/favicon.ico', icoBuffer);
    console.log('✓ Generated public/favicon.ico and src/app/favicon.ico (48x48 valid ICO)');
  }

  // 4. Generate OpenGraph Banner (1200x630) for Social Previews
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a0f1d" />
        <stop offset="50%" stop-color="#060913" />
        <stop offset="100%" stop-color="#020409" />
      </linearGradient>
      <linearGradient id="ogGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE68A" />
        <stop offset="35%" stop-color="#F59E0B" />
        <stop offset="75%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#92400E" />
      </linearGradient>
      <linearGradient id="ogChampagne" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#FDE68A" />
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#ogBg)" />

    <!-- Background Grid Lines -->
    <g stroke="#F59E0B" stroke-opacity="0.05" stroke-width="1">
      <line x1="0" y1="105" x2="1200" y2="105" />
      <line x1="0" y1="210" x2="1200" y2="210" />
      <line x1="0" y1="315" x2="1200" y2="315" />
      <line x1="0" y1="420" x2="1200" y2="420" />
      <line x1="0" y1="525" x2="1200" y2="525" />
      <line x1="200" y1="0" x2="200" y2="630" />
      <line x1="400" y1="0" x2="400" y2="630" />
      <line x1="600" y1="0" x2="600" y2="630" />
      <line x1="800" y1="0" x2="800" y2="630" />
      <line x1="1000" y1="0" x2="1000" y2="630" />
    </g>

    <!-- Outer Gold Border -->
    <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="url(#ogGold)" stroke-width="2" stroke-opacity="0.3" />

    <!-- Central Logo Mark (Scale 200x200 at x=500, y=90) -->
    <g transform="translate(500, 90) scale(0.39)">
      <rect width="512" height="512" rx="114" fill="#070b16" stroke="url(#ogGold)" stroke-width="6" />
      <path d="M 346 150 A 152 152 0 1 0 346 362 L 312 328 A 104 104 0 1 1 312 184 Z" fill="url(#ogGold)" />
      <path d="M 216 182 L 254 182 L 254 288 L 348 288 L 348 326 L 216 326 Z" fill="url(#ogChampagne)" />
      <rect x="270" y="200" width="68" height="8" rx="4" fill="url(#ogGold)" opacity="0.95" />
      <rect x="270" y="228" width="54" height="8" rx="4" fill="url(#ogGold)" opacity="0.8" />
      <rect x="270" y="256" width="62" height="8" rx="4" fill="url(#ogGold)" opacity="0.65" />
      <path d="M 358 108 Q 358 140 378 148 Q 358 156 358 188 Q 358 156 338 148 Q 358 140 358 108 Z" fill="url(#ogChampagne)" />
      <circle cx="358" cy="148" r="4.5" fill="#FFFFFF" />
    </g>

    <!-- Brand Typography -->
    <text x="600" y="360" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" letter-spacing="-0.02em" fill="#FFFFFF">CELEB<tspan fill="#F59E0B">LEDGER</tspan></text>
    
    <text x="600" y="410" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="18" letter-spacing="0.3em" fill="#94A3B8">THE CELEBRITY LEDGER • VERIFIED ARCHIVES</text>

    <text x="600" y="470" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="20" fill="#CBD5E1">Official Celebrity Profiles • Financial Ledgers • Cultural Biographies</text>

    <!-- URL Tagline -->
    <rect x="490" y="515" width="220" height="38" rx="19" fill="#F59E0B" fill-opacity="0.12" stroke="#F59E0B" stroke-width="1" stroke-opacity="0.3" />
    <text x="600" y="540" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="15" letter-spacing="0.05em" fill="#F59E0B">celebledger.com</text>
  </svg>`;

  const ogBuffer = await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('public/og-image.png', ogBuffer);
  fs.writeFileSync('src/app/opengraph-image.png', ogBuffer);
  console.log('✓ Generated public/og-image.png and src/app/opengraph-image.png (1200x630)');

  console.log('\nAll CelebLedger brand and favicon assets successfully generated!');
}

run().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
