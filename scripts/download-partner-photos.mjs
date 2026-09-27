import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/partners');
fs.mkdirSync(outputDir, { recursive: true });

const partners = [
  {
    name: 'tom-holland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/TomHolland-byPhilipRomano.jpg'
  },
  {
    name: 'rosalia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/2023-11-16_Gala_de_los_Latin_Grammy%2C_27_%28cropped%29.jpg'
  },
  {
    name: 'travis-kelce',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Travis_Kelce_in_the_Oval_Office_of_the_White_House_on_June_5%2C_2023_%28cropped%29.jpg'
  },
  {
    name: 'alexandra-grant',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Alexandra_Grant_May_2014.jpg'
  },
  {
    name: 'joe-alwyn',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Joseph_Alwyn.jpg'
  },
  {
    name: 'vittoria-ceretti',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Vittoria_Ceretti_for_Chaos.jpg'
  },
  {
    name: 'luciana-barroso',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Matt_Damon_and_Luciana_Barroso_at_TIFF_2015_%2821163714288%29.jpg'
  },
  {
    name: 'addison-timlin',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'tom-ackerley',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'yvonne-mcguinness',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'elsie-richter',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
  }
];

async function downloadBuffer(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await new Promise((resolve, reject) => {
        https.get(url, {
          headers: {
            'User-Agent': 'CelebEdgePartnerBot/1.0 (https://celeb-edge.vercel.app; info@celeb-edge.com)'
          }
        }, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return downloadBuffer(res.headers.location).then(resolve).catch(reject);
          }
          if (res.statusCode !== 200) {
            return reject(new Error(`Status ${res.statusCode}`));
          }
          const chunks = [];
          res.on('data', chunk => chunks.push(chunk));
          res.on('end', () => resolve(Buffer.concat(chunks)));
        }).on('error', reject);
      });
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise(r => setTimeout(r, 1500));
    }
  }
}

async function processPartners() {
  console.log('Processing partner photos...');
  for (const p of partners) {
    const targetFile = path.join(outputDir, `${p.name}.webp`);
    try {
      console.log(`Downloading ${p.name} from ${p.url}...`);
      const buffer = await downloadBuffer(p.url);
      await sharp(buffer)
        .resize({ width: 600, height: 600, fit: 'cover', position: 'top' })
        .webp({ quality: 85 })
        .toFile(targetFile);
      console.log(`✓ Saved ${targetFile}`);
    } catch (err) {
      console.error(`✗ Error processing ${p.name}:`, err.message);
    }
  }
  console.log('Done processing partner photos.');
}

processPartners();
