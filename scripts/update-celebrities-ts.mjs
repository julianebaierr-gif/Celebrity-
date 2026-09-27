import fs from 'node:fs';

const manifest = {
  'tim-curry': {
    heroImage: '/images/celebrities/tim-curry-hero.webp',
    heroImageCaption: 'Tim Curry attending the 69th Annual Tony Awards. Photo: Wikimedia Commons.',
    heroImageLicense: 'CC BY-SA 2.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/tim-curry-content.webp',
    contentImageCaption: 'Tim Curry appearing at The Rocky Horror Picture Show 50th Anniversary Gala celebration.',
    contentImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  'cillian-murphy': {
    heroImage: '/images/celebrities/cillian-murphy-hero.webp',
    heroImageCaption: 'Cillian Murphy at the London premiere of Steve in September 2025.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/cillian-murphy-content.webp',
    contentImageCaption: 'Cillian Murphy addressing the international press corps at the Berlin International Film Festival.',
    contentImageLicense: 'CC BY-SA 3.0 / Wikimedia Commons'
  },
  'zendaya': {
    heroImage: '/images/celebrities/zendaya-hero.webp',
    heroImageCaption: 'Zendaya at the premiere of Dune: Part Two in New York City. Photo: Philip Romano.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/zendaya-content.webp',
    contentImageCaption: 'Zendaya walking the red carpet at the international cinema awards celebration.',
    contentImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  'matt-damon': {
    heroImage: '/images/celebrities/matt-damon-hero.webp',
    heroImageCaption: 'Matt Damon attending the Toronto International Film Festival premiere. Photo: Philip Romano.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/matt-damon-content.webp',
    contentImageCaption: 'Matt Damon greeting international photographers at the Venice Film Festival photocall.',
    contentImageLicense: 'CC BY-SA 3.0 / Wikimedia Commons'
  },
  'taylor-swift-wedding': {
    heroImage: '/images/celebrities/taylor-swift-wedding-hero.webp',
    heroImageCaption: 'Taylor Swift at the MTV Video Music Awards ceremony in Newark, New Jersey.',
    heroImageLicense: 'CC BY 3.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/taylor-swift-wedding-content.webp',
    contentImageCaption: 'Taylor Swift performing live during The Eras Tour record-breaking stadium run.',
    contentImageLicense: 'CC BY 2.0 / Wikimedia Commons'
  },
  'pedro-pascal': {
    heroImage: '/images/celebrities/pedro-pascal-hero.webp',
    heroImageCaption: 'Pedro Pascal attending the 2025 Cannes Film Festival red carpet.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/pedro-pascal-content.webp',
    contentImageCaption: 'Pedro Pascal and Bella Ramsey discussing The Last of Us at SXSW festival panel.',
    contentImageLicense: 'CC BY-SA 2.0 / Wikimedia Commons'
  },
  'margot-robbie': {
    heroImage: '/images/celebrities/margot-robbie-hero.webp',
    heroImageCaption: 'Margot Robbie at the premiere of Wuthering Heights.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/margot-robbie-content.webp',
    contentImageCaption: 'Margot Robbie attending the international gala screening for Once Upon a Time in Hollywood.',
    contentImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  'keanu-reeves': {
    heroImage: '/images/celebrities/keanu-reeves-hero.webp',
    heroImageCaption: 'Keanu Reeves at the Toronto International Film Festival premiere in 2025.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/keanu-reeves-content.webp',
    contentImageCaption: 'Keanu Reeves presenting new cinema adaptations on stage at Comic-Con.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  'jeremy-allen-white': {
    heroImage: '/images/celebrities/jeremy-allen-white-hero.webp',
    heroImageCaption: 'Jeremy Allen White at the Bruce Springsteen biopic special presentation.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/jeremy-allen-white-content.webp',
    contentImageCaption: 'Jeremy Allen White discussing character craft at the 2025 Telluride Film Festival.',
    contentImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  'finn-wolfhard': {
    heroImage: '/images/celebrities/finn-wolfhard-hero.webp',
    heroImageCaption: 'Finn Wolfhard with the Stranger Things ensemble at the 2025 series presentation.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/finn-wolfhard-content.webp',
    contentImageCaption: 'Finn Wolfhard participating in an open Q&A panel at Comic-Con International.',
    contentImageLicense: 'CC BY-SA 3.0 / Wikimedia Commons'
  },
  'jenna-ortega': {
    heroImage: '/images/celebrities/jenna-ortega-hero.webp',
    heroImageCaption: 'Jenna Ortega at the Beetlejuice Beetlejuice international press tour.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/jenna-ortega-content.webp',
    contentImageCaption: 'Jenna Ortega introducing independent film selections at the 2026 Sundance Film Festival.',
    contentImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  'leonardo-dicaprio': {
    heroImage: '/images/celebrities/leonardo-dicaprio-hero.webp',
    heroImageCaption: 'Leonardo DiCaprio attending the BFI London special screening.',
    heroImageLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentImage: '/images/celebrities/leonardo-dicaprio-content.webp',
    contentImageCaption: 'Leonardo DiCaprio delivering the environmental keynote at the Our Ocean Global Conference.',
    contentImageLicense: 'Public Domain / US State Dept'
  }
};

let content = fs.readFileSync('src/data/celebrities.ts', 'utf8');

// 1. Update interface
const oldInterfaceBlock = `  heroImage: string;
  heroImageCaption: string;
  heroImageLicense: string;
  backdropImage: string;`;

const newInterfaceBlock = `  heroImage: string;
  heroImageCaption: string;
  heroImageLicense: string;
  contentImage: string;
  contentImageCaption: string;
  contentImageLicense: string;
  backdropImage: string;`;

if (!content.includes('contentImage: string;')) {
  content = content.replace(oldInterfaceBlock, newInterfaceBlock);
}

// 2. Update each celebrity
for (const [slug, data] of Object.entries(manifest)) {
  // Regex to match from slug to backdropImage
  const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?)(heroImage:\\s*"[^"]*",\\s*heroImageCaption:\\s*"[^"]*",\\s*heroImageLicense:\\s*"[^"]*",)(\\s*backdropImage:)`);
  
  const replacement = `$1heroImage: "${data.heroImage}",\n    heroImageCaption: "${data.heroImageCaption}",\n    heroImageLicense: "${data.heroImageLicense}",\n    contentImage: "${data.contentImage}",\n    contentImageCaption: "${data.contentImageCaption}",\n    contentImageLicense: "${data.contentImageLicense}",$3`;
  
  if (regex.test(content)) {
    content = content.replace(regex, replacement);
    console.log(`Updated ${slug}`);
  } else {
    console.warn(`Could not match regex for ${slug}`);
  }
}

fs.writeFileSync('src/data/celebrities.ts', content, 'utf8');
console.log('Successfully updated src/data/celebrities.ts');
