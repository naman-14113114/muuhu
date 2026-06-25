const fs = require('fs');
const path = require('path');

const apps = ['us', 'uk', 'ca', 'au'];

apps.forEach(app => {
  const productsPath = path.join(__dirname, 'apps', app, 'src', 'data', 'products.ts');
  const cartPath = path.join(__dirname, 'apps', app, 'src', 'lib', 'cart.ts');
  const cartSummaryPath = path.join(__dirname, 'apps', app, 'src', 'components', 'cart', 'CartSummary.tsx');

  // 1. Fix products.ts
  if (fs.existsSync(productsPath)) {
    let content = fs.readFileSync(productsPath, 'utf8');
    content = content.replace(
      /productAsset\("muuhu-massage-kit\.jpg"\)/g,
      'productAsset("massage_kit_hero.png", "muuhu-massage-kit")'
    );
    content = content.replace(
      /productMediaAsset\("ChatGPT Image May 31, 2026, 11_53_13 PM\.png"\)/g,
      'productMediaAsset("ipl_price_comparison.jpg")'
    );
    fs.writeFileSync(productsPath, content, 'utf8');
    console.log(`Fixed products.ts in ${app}`);
  }

  // 2. Fix cart.ts
  if (fs.existsSync(cartPath)) {
    let content = fs.readFileSync(cartPath, 'utf8');
    content = content.replace(
      /image:\s*"\/media\/products\/buudy-led-mask\/images\/84-w\.webp"/g,
      'image: "/media/products/buudy-led-mask/images/ipl_price_comparison.jpg"'
    );
    fs.writeFileSync(cartPath, content, 'utf8');
    console.log(`Fixed cart.ts in ${app}`);
  }

  // 3. Fix CartSummary.tsx
  if (fs.existsSync(cartSummaryPath)) {
    let content = fs.readFileSync(cartSummaryPath, 'utf8');
    // Replace all instances of hardcoded formatMoney(7000) with formatMoney(totals.giftValueCents)
    content = content.replace(/formatMoney\(7000\)/g, 'formatMoney(totals.giftValueCents)');
    fs.writeFileSync(cartSummaryPath, content, 'utf8');
    console.log(`Fixed CartSummary.tsx in ${app}`);
  }
});

console.log("All fixes applied successfully.");
