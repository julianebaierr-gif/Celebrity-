import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/celebrities');
fs.mkdirSync(outputDir, { recursive: true });

const imageManifest = [
  {
    slug: 'tim-curry',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tim_Curry_cropped_%28cropped%29.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Tim_Curry_-_Rocky_Horror_50th.jpg',
    heroCaption: 'Tim Curry attending the 69th Annual Tony Awards. Photo: Wikimedia Commons.',
    contentCaption: 'Tim Curry appearing at The Rocky Horror Picture Show 50th Anniversary Gala celebration.',
    heroLicense: 'CC BY-SA 2.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  {
    slug: 'cillian-murphy',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Cillian_Murphy_at_the_London_premier_of_Steve_in_September_2025_%28cropped%29.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Cillian_Murphy_Press_Conference_The_Party_Berlinale_2017_02cr.jpg',
    heroCaption: 'Cillian Murphy at the London premiere of Steve in September 2025.',
    contentCaption: 'Cillian Murphy speaking at the Berlin International Film Festival press conference.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 3.0 / Wikimedia Commons'
  },
  {
    slug: 'zendaya',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zendaya-byPhilipRomano.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg',
    heroCaption: 'Zendaya at the premiere of Dune: Part Two in New York City. Photo: Philip Romano.',
    contentCaption: 'Zendaya on the red carpet at the 2019 international cinema awards gala.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  {
    slug: 'matt-damon',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/MattDamon-byPhilipRomano2.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Matt_Damon_Venice_2009.jpg',
    heroCaption: 'Matt Damon attending the Toronto International Film Festival premiere. Photo: Philip Romano.',
    contentCaption: 'Matt Damon greeting press at the Venice International Film Festival photocall.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 3.0 / Wikimedia Commons'
  },
  {
    slug: 'taylor-swift-wedding',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Taylor_Swift_The_Eras_Tour_Midnights_Era_Set_%2853109799784%29_%28cropped%29.jpg',
    heroCaption: 'Taylor Swift at the MTV Video Music Awards ceremony in Newark, New Jersey.',
    contentCaption: 'Taylor Swift performing live on stage during The Eras Tour stadium concert.',
    heroLicense: 'CC BY 3.0 / Wikimedia Commons',
    contentLicense: 'CC BY 2.0 / Wikimedia Commons'
  },
  {
    slug: 'pedro-pascal',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Pedro_Pascal_at_the_2025_Cannes_Film_Festival_04.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Bella_Ramsey_and_Pedro_Pascal_at_SXSW_2025_02_%28cropped%29.jpg',
    heroCaption: 'Pedro Pascal attending the 2025 Cannes Film Festival red carpet.',
    contentCaption: 'Pedro Pascal and Bella Ramsey discussing The Last of Us at SXSW festival panel.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 2.0 / Wikimedia Commons'
  },
  {
    slug: 'margot-robbie',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Margot_Robbie_Wuthering_Heights_premiere.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Margot_Robbie_2019_by_Glenn_Francis_%28cropped%29.jpg',
    heroCaption: 'Margot Robbie at the premiere of Wuthering Heights.',
    contentCaption: 'Margot Robbie attending the international gala screening for Once Upon a Time in Hollywood.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  {
    slug: 'keanu-reeves',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Keanu_Reeves_at_TIFF_2025_02_%28Cropped%29.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Keanu_Reeves_SDCC_2024_10.jpg',
    heroCaption: 'Keanu Reeves at the Toronto International Film Festival premiere in 2025.',
    contentCaption: 'Keanu Reeves speaking on the Hall H stage at San Diego Comic-Con.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  {
    slug: 'jeremy-allen-white',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Jeremy_Allen_White_Springsteen-33_%28cropped%29.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Jeremy_Allen_White_at_the_2025_Telluride_Film_Festival_with_microphone.jpg',
    heroCaption: 'Jeremy Allen White at the Bruce Springsteen biopic special presentation.',
    contentCaption: 'Jeremy Allen White engaging with audiences at the 2025 Telluride Film Festival.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  {
    slug: 'finn-wolfhard',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Stranger_Things_cast_2025_%282%29_%28cropped%29.png',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Finn_Wolfhard_by_Gage_Skidmore_2.jpg',
    heroCaption: 'Finn Wolfhard with the Stranger Things ensemble at the 2025 series presentation.',
    contentCaption: 'Finn Wolfhard answering audience questions at Comic-Con International.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 3.0 / Wikimedia Commons'
  },
  {
    slug: 'jenna-ortega',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Jenna_Ortega-63799_%28cropped%29.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Jenna_Ortega_at_the_2026_Sundance_Film_Festival.jpg',
    heroCaption: 'Jenna Ortega at the Beetlejuice Beetlejuice international press tour.',
    contentCaption: 'Jenna Ortega presenting her new indie project at the 2026 Sundance Film Festival.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'CC BY-SA 4.0 / Wikimedia Commons'
  },
  {
    slug: 'leonardo-dicaprio',
    heroUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/LeoPTABFI191125-28_%28cropped%29.jpg',
    contentUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Actor_and_Environmentalist_Leonardo_DiCaprio_Walks_With_Secretary_Kerry_Before_he_Addresses_the_Third_Our_Ocean_Conference_in_Washington_%2829627440831%29.jpg',
    heroCaption: 'Leonardo DiCaprio attending the BFI London special screening.',
    contentCaption: 'Leonardo DiCaprio advocating for marine conservation at the Our Ocean Global Conference.',
    heroLicense: 'CC BY-SA 4.0 / Wikimedia Commons',
    contentLicense: 'Public Domain / US State Dept'
  }
];

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function downloadBufferWithRetry(url, retries = 5, backoff = 3000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const buffer = await new Promise((resolve, reject) => {
        const req = https.get(url, {
          headers: {
            'User-Agent': 'CelebEdgeBot/2.0 (https://celeb-edge.vercel.app; celebedge@gmail.com) Node/20',
            'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8'
          }
        }, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return downloadBufferWithRetry(res.headers.location, retries - attempt, backoff)
              .then(resolve)
              .catch(reject);
          }
          if (res.statusCode === 429) {
            return reject(new Error('STATUS_429'));
          }
          if (res.statusCode !== 200) {
            return reject(new Error(`STATUS_${res.statusCode}`));
          }
          const chunks = [];
          res.on('data', c => chunks.push(c));
          res.on('end', () => resolve(Buffer.concat(chunks)));
          res.on('error', reject);
        });
        req.on('error', reject);
      });
      return buffer;
    } catch (err) {
      if (err.message === 'STATUS_429' && attempt < retries) {
        console.warn(`[429 Throttled] Backing off for ${backoff / 1000}s on ${url.split('/').pop()} (Attempt ${attempt}/${retries})...`);
        await delay(backoff);
        backoff *= 1.5;
      } else {
        throw err;
      }
    }
  }
}

async function processImage(url, destPath, targetWidth = 800) {
  console.log(`Downloading: ${url.split('/').pop()}...`);
  const buf = await downloadBufferWithRetry(url);
  console.log(`Downloaded ${buf.length} bytes. Optimizing with sharp...`);
  await sharp(buf)
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(destPath);
  const stat = fs.statSync(destPath);
  console.log(`Saved -> ${path.basename(destPath)} (${Math.round(stat.size / 1024)} KB)`);
}

async function run() {
  console.log(`Checking files for ${imageManifest.length} celebrities (24 images)...`);
  for (const item of imageManifest) {
    const heroDest = path.join(outputDir, `${item.slug}-hero.webp`);
    const contentDest = path.join(outputDir, `${item.slug}-content.webp`);

    console.log(`\n--- [${item.slug}] ---`);
    if (!fs.existsSync(heroDest)) {
      try {
        await processImage(item.heroUrl, heroDest, 800);
        await delay(2000); // 2s gap between requests
      } catch (err) {
        console.error(`Failed hero for ${item.slug}:`, err.message);
      }
    } else {
      console.log(`Hero already exists: ${path.basename(heroDest)}`);
    }

    if (!fs.existsSync(contentDest)) {
      try {
        await processImage(item.contentUrl, contentDest, 850);
        await delay(2000); // 2s gap between requests
      } catch (err) {
        console.error(`Failed content for ${item.slug}:`, err.message);
      }
    } else {
      console.log(`Content already exists: ${path.basename(contentDest)}`);
    }
  }
  console.log('\nPipeline completed!');
}

run();
