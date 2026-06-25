const fs = require('fs');

const files = [
  'apps/us/src/components/quiz/SkincareQuizPage.tsx',
  'apps/uk/src/components/quiz/SkincareQuizPage.tsx',
  'apps/ca/src/components/quiz/SkincareQuizPage.tsx',
  'apps/au/src/components/quiz/SkincareQuizPage.tsx',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace('aspect-[4/5]', 'aspect-square');
  content = content.replace('alt="Muuhu Ultra Pro IPL Device"', 'alt="Muuhu Ultra Pro Cost Comparison"');
  content = content.replace('className="object-cover"', 'className="object-contain bg-[var(--cream)]"');
  content = content.replace('src="/media/products/buudy-led-mask/images/ipl_product_angle.png"', 'src="/media/products/buudy-led-mask/images/ipl_price_comparison.jpg"');
  fs.writeFileSync(file, content);
}
console.log('Replaced successfully.');
