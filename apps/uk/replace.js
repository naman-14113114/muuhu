const fs = require('fs');
const path = require('path');

const files = [
  'src/app/page.tsx',
  'src/app/not-found.tsx',
  'src/app/layout.tsx',
  'src/data/about.ts',
  'src/data/contact.ts',
  'src/data/faqs.ts',
  'src/lib/site.ts',
  'src/lib/seo.ts',
  'src/lib/market.ts'
];

const basePath = 'e:\\1st YEAR DTU\\New folder\\muuhu\\apps\\uk';

function replaceAll(text) {
  let t = text;
  t = t.replace(/Buudy LED Mask/g, 'Muuhu IPL');
  t = t.replace(/buudy-led-mask/g, 'muuhu-ipl-hair-removal');
  t = t.replace(/LED Face Mask/g, 'IPL Hair Removal');
  t = t.replace(/LED face mask/g, 'IPL hair removal');
  t = t.replace(/LED Mask/g, 'IPL');
  t = t.replace(/Buudy/g, 'Muuhu');
  t = t.replace(/buudy/g, 'muuhu');
  return t;
}

function processFile(filePath) {
  const fullPath = path.join(basePath, filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return;
  }
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  const pattern = /(\/images\/[^"'\s]+|\/media\/[^"'\s]+)/g;
  
  const segments = content.split(pattern);
  let newContent = '';
  
  for (let i = 0; i < segments.length; i++) {
    if (i % 2 === 1) {
      // Protected path
      newContent += segments[i];
    } else {
      newContent += replaceAll(segments[i]);
    }
  }
  
  fs.writeFileSync(fullPath, newContent, 'utf-8');
  console.log(`Processed: ${filePath}`);
}

files.forEach(processFile);
console.log('Done replacing.');
