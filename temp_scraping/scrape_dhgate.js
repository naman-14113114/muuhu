const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  console.log('Launching user Chrome browser...');
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ];
  let executablePath = '';
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      executablePath = p;
      break;
    }
  }

  if (!executablePath) {
    console.error('Chrome not found');
    process.exit(1);
  }
  
  const browser = await puppeteer.launch({
    executablePath,
    headless: false, 
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();
  console.log('Navigating to DHgate...');
  await page.goto('https://ie.dhgate.com/product/skin-scraping-resin-guasha-massage-board/1087570533.html', { waitUntil: 'networkidle2', timeout: 60000 });
  
  console.log('Extracting data...');
  const title = await page.title();
  
  // Extract images
  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => img.src).filter(src => src.startsWith('http') && (src.includes('dhgate') || src.includes('alicdn') || src.includes('.jpg') || src.includes('.webp')));
  });
  
  fs.writeFileSync('dhgate_result.json', JSON.stringify({title, images: [...new Set(images)].slice(0, 30)}, null, 2));
  console.log('Done! Downloaded data.');
  
  await browser.close();
})();
