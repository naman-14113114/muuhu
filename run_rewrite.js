const fs = require('fs');
const path = require('path');

const apps = ['us', 'uk', 'ca', 'au'];

const iplFeatures = `export const features: Feature[] = [
  {
    title: "999,999 Flashes",
    kicker: "Lifelong Use",
    body: "With 999,999 flashes, the Muuhu IPL device offers years of full-body treatments. You will never need to buy a replacement lamp or cartridge, making it a one-time investment for lifelong smooth skin.",
  },
  {
    title: "Ice Cooling Technology",
    kicker: "Painless Treatments",
    body: "Traditional hair removal can be painful, but Muuhu is different. Built-in ice cooling technology lowers the temperature at the treatment window to 8°C (46°F), soothing your skin on contact and making every flash comfortable.",
  },
  {
    title: "9 Energy Levels",
    kicker: "For All Skin Sensitivities",
    body: "Whether you're treating a sensitive bikini line or stubborn leg hair, you have total control. 9 adjustable energy levels up to a powerful 16J ensure you get effective results while keeping your skin safe and comfortable.",
  },
  {
    title: "Auto & Manual Modes",
    kicker: "Fast & Precise",
    body: "Use Auto-glide mode for fast, continuous flashes on large areas like legs and arms. Switch to Manual stamp mode for precision around the upper lip, underarms, and bikini line.",
  },
  {
    title: "LCD Touch Screen",
    kicker: "Smart Memory",
    body: "The intuitive LCD touch display shows your remaining flashes, current energy level, and mode. Plus, smart energy memory remembers your last used setting so you can pick up exactly where you left off.",
  },
  {
    title: "Universal Voltage",
    kicker: "Travel Ready",
    body: "Take your Muuhu IPL device anywhere in the world. It operates on AC 100-240V, meaning you just need a plug adapter to keep up with your hair removal routine while traveling.",
  },
];`;

const iplFaqs = `export const faqs: FAQItem[] = [
  {
    question: "Does IPL hair removal hurt?",
    answer: "No, especially with the Muuhu IPL device. The built-in ice cooling plate maintains 8°C at the treatment window to soothe the skin. Most users describe the sensation as a gentle warmth.",
  },
  {
    question: "How long until I see results?",
    answer: "Most users notice a significant reduction in hair growth after 6-8 weeks of consistent use (1-2 sessions per week). Continued maintenance sessions will keep your skin smooth long-term.",
  },
  {
    question: "Can I use it on my face and bikini line?",
    answer: "Yes! The Muuhu IPL device is safe for the bikini line, underarms, and facial areas below the cheekbones (like the upper lip and chin). Just avoid using it near your eyes.",
  },
  {
    question: "What skin tones and hair colors does it work on?",
    answer: "IPL works best on light to medium skin tones with dark blonde, brown, or black hair. It is not effective on very light, red, or grey hair, and is not recommended for very dark skin tones (Fitzpatrick V-VI).",
  },
  {
    question: "Do I need to wear goggles?",
    answer: "Yes, we include a pair of protective goggles in every box. While the device has a skin sensor to prevent accidental flashes into the air, the goggles protect your eyes from the bright light during your session.",
  },
  {
    question: "Do I need to shave before using it?",
    answer: "Yes. Always shave the treatment area before your session. This ensures the light energy travels directly to the hair root rather than burning the hair above the skin surface.",
  },
];`;

for (const app of apps) {
  const baseDir = path.join(process.cwd(), 'apps', app, 'src');

  // 1. Rewrite footer.ts
  const footerPath = path.join(baseDir, 'data', 'footer.ts');
  if (fs.existsSync(footerPath)) {
    let content = fs.readFileSync(footerPath, 'utf8');
    content = content.replace(/"LED Face Mask"/g, '"IPL Hair Removal"');
    content = content.replace(/\/products\/buudy-led-mask/g, '/products/muuhu-ipl-hair-removal');
    content = content.replace(/"Best LED Mask (.*?) Guide"/g, '"Best IPL Hair Removal $1 Guide"');
    content = content.replace(/\/pages\/best-led-face-mask-(.*?)"/g, '/pages/best-ipl-hair-removal-$1"');
    fs.writeFileSync(footerPath, content);
    console.log('Updated ' + footerPath);
  }

  // 2. Rewrite freeGifts.ts
  const freeGiftsPath = path.join(baseDir, 'data', 'freeGifts.ts');
  if (fs.existsSync(freeGiftsPath)) {
    let content = fs.readFileSync(freeGiftsPath, 'utf8');
    content = content.replace(/LED Mask/g, 'IPL device');
    content = content.replace(/the mask becomes/g, 'the device becomes');
    content = content.replace(/the mask protected/g, 'the device protected');
    content = content.replace(/keep the mask safe/g, 'keep the device safe');
    content = content.replace(/main mask/g, 'main device');
    content = content.replace(/full-size mask/g, 'full-size device');
    content = content.replace(/full mask session/g, 'full body session');
    content = content.replace(/buy the mask/g, 'buy the device');
    content = content.replace(/Claim The Mask/g, 'Claim The IPL Device');
    content = content.replace(/Muuhu-led-torch/g, 'muuhu-led-torch');
    fs.writeFileSync(freeGiftsPath, content);
    console.log('Updated ' + freeGiftsPath);
  }

  // 3. Rewrite about.ts
  const aboutPath = path.join(baseDir, 'data', 'about.ts');
  if (fs.existsSync(aboutPath)) {
    let content = fs.readFileSync(aboutPath, 'utf8');
    content = content.replace(/Goddess Guarantee/g, 'Guarantee');
    content = content.replace(/Goddess guarantee/g, '90-Day Guarantee');
    content = content.replace(/we use the Muuhu Mask ourselves/g, 'we use the Muuhu IPL ourselves');
    content = content.replace(/output of every LED bulb/g, 'output of every flash');
    content = content.replace(/light therapy journey/g, 'hair removal journey');
    content = content.replace(/science behind clinical LED light therapy worked/g, 'science behind clinical IPL hair removal worked');
    content = content.replace(/100% wireless device packed with 7 visible wavelengths plus 830nm near-infrared/g, 'device packed with ice cooling and 9 energy levels');
    fs.writeFileSync(aboutPath, content);
    console.log('Updated ' + aboutPath);
  }

  // 4. Update home.ts for UK, CA, AU
  const usHomePath = path.join(process.cwd(), 'apps', 'us', 'src', 'data', 'home.ts');
  const appHomePath = path.join(baseDir, 'data', 'home.ts');
  if (app !== 'us' && fs.existsSync(usHomePath) && fs.existsSync(appHomePath)) {
    fs.copyFileSync(usHomePath, appHomePath);
    console.log('Copied US home.ts to ' + appHomePath);
  }

  // 5. site.ts
  const sitePath = path.join(baseDir, 'lib', 'site.ts');
  if (fs.existsSync(sitePath)) {
    let content = fs.readFileSync(sitePath, 'utf8');
    content = content.replace(/buudy-red-torch/g, 'red-light-torch');
    content = content.replace(/Muuhu-red-light-torch/g, 'red-light-torch');
    content = content.replace(/muuhu-red-torch/g, 'red-light-torch');
    fs.writeFileSync(sitePath, content);
    console.log('Updated ' + sitePath);
  }

  // 6. sitemap.ts
  const sitemapPath = path.join(baseDir, 'app', 'sitemap.ts');
  if (fs.existsSync(sitemapPath)) {
    let content = fs.readFileSync(sitemapPath, 'utf8');
    content = content.replace(/Muuhu-led-torch/g, 'red-light-torch');
    fs.writeFileSync(sitemapPath, content);
    console.log('Updated ' + sitemapPath);
  }

  // 7. products.ts
  const productsPath = path.join(baseDir, 'data', 'products.ts');
  if (fs.existsSync(productsPath)) {
    let content = fs.readFileSync(productsPath, 'utf8');
    content = content.replace(/id: "Muuhu-led-torch"/g, 'id: "red-light-torch"');
    content = content.replace(/id: "buudy-red-torch"/g, 'id: "red-light-torch"');
    content = content.replace(/slug: "Muuhu-led-torch"/g, 'slug: "red-light-torch"');
    content = content.replace(/slug: "buudy-red-torch"/g, 'slug: "red-light-torch"');
    content = content.replace(/\/pages\/Muuhu-led-torch/g, '/products/red-light-torch');
    content = content.replace(/\/pages\/buudy-red-torch/g, '/products/red-light-torch');
    fs.writeFileSync(productsPath, content);
    console.log('Updated ' + productsPath);
  }

  // 8. productSections.ts
  const productSectionsPath = path.join(baseDir, 'data', 'productSections.ts');
  if (fs.existsSync(productSectionsPath)) {
    let content = fs.readFileSync(productSectionsPath, 'utf8');
    
    // Replace features
    content = content.replace(/export const features: Feature\[\] = \[[\s\S]*?\];/m, iplFeatures);
    
    // Replace faqs
    content = content.replace(/export const faqs: FAQItem\[\] = \[[\s\S]*?\];/m, iplFaqs);

    // Empty wavelengths
    content = content.replace(/export const wavelengths: Wavelength\[\] = \[[\s\S]*?\];/m, 'export const wavelengths: Wavelength[] = [];');
    
    fs.writeFileSync(productSectionsPath, content);
    console.log('Updated ' + productSectionsPath);
  }
}
