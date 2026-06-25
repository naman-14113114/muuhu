const puppeteer = require('puppeteer-core');
const fs = require('fs');
const os = require('os');

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

  // We won't use the user's default data dir because Chrome might be running and it will crash.
  // BUT the user said "I have its extension in my browser". If they have it installed globally, maybe it works on a fresh profile.
  // Actually, we can try using their actual user data dir. If it fails, they need to close Chrome.
  // Let's use a fresh profile for now. Often extensions can't be loaded automatically in a fresh profile unless specified.
  // But wait, the user's IP might already be routed through UrbanVPN if it's a desktop app? "I have urban vpn installed and also have its extension in my browser."
  // So the desktop app might cover the whole OS!
  
  const browser = await puppeteer.launch({
    executablePath,
    headless: false, 
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();
  console.log('Navigating to AliExpress...');
  await page.goto('https://www.aliexpress.us/item/3256808856413208.html', { waitUntil: 'networkidle2', timeout: 60000 });
  
  console.log('Extracting data...');
  const title = await page.title();
  
  // Extract images
  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => img.src).filter(src => src.includes('alicdn'));
  });
  
  // Extract text
  const textContent = await page.evaluate(() => {
    return document.body.innerText;
  });

  const result = {
    title,
    images: images.slice(0, 15),
    textSnippet: textContent.substring(0, 3000)
  };

  fs.writeFileSync('result.json', JSON.stringify(result, null, 2));
  console.log('Done! Title:', title);
  
  await browser.close();
})();
