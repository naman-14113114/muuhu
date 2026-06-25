const fs = require('fs');
const path = require('path');

const apps = ['us', 'uk', 'ca', 'au'];

apps.forEach(app => {
  const productsPath = path.join(__dirname, 'apps', app, 'src', 'data', 'products.ts');

  if (fs.existsSync(productsPath)) {
    let content = fs.readFileSync(productsPath, 'utf8');
    
    // Fix massagerAsset definition to use productMediaAsset instead of productAsset
    content = content.replace(
      /const massagerAsset = \(fileName: string\) => productAsset\(fileName, "muuhu-massage-kit"\);/g,
      'const massagerAsset = (fileName: string) => productMediaAsset(fileName, "muuhu-massage-kit", "images");'
    );

    // Fix the massage kit gift image to use productMediaAsset
    content = content.replace(
      /productAsset\("massage_kit_hero\.png", "muuhu-massage-kit"\)/g,
      'productMediaAsset("massage_kit_hero.png", "muuhu-massage-kit", "images")'
    );

    fs.writeFileSync(productsPath, content, 'utf8');
    console.log(`Fixed products.ts asset paths in ${app}`);
  }
});
