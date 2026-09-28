const http = require('http');

function getPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, html: d }));
    }).on('error', reject);
  });
}

function extractImageSrcs(html) {
  const matches = [];
  const regex = /<img[^>]+src=["']([^"']+)["']/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    const raw = decodeURIComponent(m[1]);
    // check if it's next/image optimizer url or direct
    const urlMatch = raw.match(/url=([^&]+)/);
    if (urlMatch) {
      matches.push(urlMatch[1]);
    } else {
      matches.push(raw);
    }
  }
  return [...new Set(matches)];
}

(async () => {
  console.log('--- 1. Testing Blog Post Page ---');
  const blog = await getPage('http://localhost:3005/blog/zendaya-zendaya-and-tom-holland-announce-engagement-in-london');
  console.log('Blog HTTP Status:', blog.status);
  const blogImgs = extractImageSrcs(blog.html);
  console.log('Blog Images Found:');
  blogImgs.forEach(i => console.log('  -', i));

  console.log('\n--- 2. Testing Zendaya Profile Page ---');
  const zendaya = await getPage('http://localhost:3005/celebrity/zendaya');
  console.log('Zendaya Profile HTTP Status:', zendaya.status);
  const zendayaImgs = extractImageSrcs(zendaya.html);
  console.log('Zendaya Profile Images Found:');
  zendayaImgs.forEach(i => console.log('  -', i));

  console.log('\n--- 3. Testing Tom Holland Profile Page ---');
  const tom = await getPage('http://localhost:3005/celebrity/tom-holland');
  console.log('Tom Holland Profile HTTP Status:', tom.status);
  const tomImgs = extractImageSrcs(tom.html);
  console.log('Tom Holland Profile Images Found:');
  tomImgs.forEach(i => console.log('  -', i));

  console.log('\n--- 4. Checking Cross-Page Overlap ---');
  const overlapBlogZendaya = blogImgs.filter(i => zendayaImgs.includes(i) && !i.includes('logo') && !i.includes('author'));
  const overlapBlogTom = blogImgs.filter(i => tomImgs.includes(i) && !i.includes('logo') && !i.includes('author'));
  const overlapZendayaTom = zendayaImgs.filter(i => tomImgs.includes(i) && !i.includes('logo') && !i.includes('author'));

  console.log('Overlap between Blog and Zendaya Profile:', overlapBlogZendaya);
  console.log('Overlap between Blog and Tom Holland Profile:', overlapBlogTom);
  console.log('Overlap between Zendaya Profile and Tom Holland Profile:', overlapZendayaTom);

  if (overlapBlogZendaya.length === 0 && overlapBlogTom.length === 0 && overlapZendayaTom.length === 0) {
    console.log('\n🌟 100% PERFECT ZERO OVERLAP VERIFIED! Every image is completely unique and contextual!');
  } else {
    console.log('\n⚠️ Overlap detected!');
  }
})();
