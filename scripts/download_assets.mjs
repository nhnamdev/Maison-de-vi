import fs from 'node:fs';
import path from 'node:path';

const images = [
  'https://vi-hanoi.com/images/hero-3.webp',
  'https://vi-hanoi.com/images/hero-4.webp',
  'https://vi-hanoi.com/images/hero-5.webp',
  'https://vi-hanoi.com/images/gallery-restaurant-4.webp',
  'https://vi-hanoi.com/images/gallery-restaurant-2.webp',
  'https://vi-hanoi.com/images/gallery-restaurant-3.webp',
  'https://vi-hanoi.com/images/gallery-restaurant-5.webp',
  'https://vi-hanoi.com/images/food-1.jpeg',
  'https://vi-hanoi.com/images/food-2.jpeg',
  'https://vi-hanoi.com/images/food-3.jpeg',
  'https://vi-hanoi.com/images/food-6.jpeg',
  'https://vi-hanoi.com/images/press-pudlowski1.jpg'
];

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  for (const url of images) {
    const filename = path.basename(url);
    const dest = path.join(outDir, filename);
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) {
        console.error(`Failed ${url}: ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${filename} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error ${url}:`, err.message);
    }
  }
}

run();
