const fs = require('fs');
const path = require('path');

const apps = ['uk', 'ca', 'au'];
const filesToCopy = [
  'src/components/product/SuitabilitySection.tsx',
  'src/components/product/ComparisonTable.tsx',
  'src/components/product/AppPromo.tsx',
  'src/components/product/ProductPage.tsx'
];

for (const app of apps) {
  const destBase = path.join(process.cwd(), 'apps', app);
  
  for (const file of filesToCopy) {
    const srcPath = path.join(process.cwd(), 'apps', 'us', file);
    const destPath = path.join(destBase, file);
    
    if (fs.existsSync(srcPath)) {
      // Ensure directory exists for SuitabilitySection.tsx in other apps just in case
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${app}`);
    } else {
      console.error(`Source file not found: ${srcPath}`);
    }
  }
}
