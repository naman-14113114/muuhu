const fs = require('fs');
const path = require('path');
const appsDir = path.join(__dirname, 'apps');

const apps = ['us', 'uk', 'ca', 'au'];

apps.forEach(app => {
  const appPath = path.join(appsDir, app);
  
  const filesToFix = [
    'src/app/page.tsx',
    'src/data/productSections.ts'
  ];

  filesToFix.forEach(file => {
    const fullPath = path.join(appPath, file);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/Â°C/g, '°C');
      content = content.replace(/Â°F/g, '°F');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  });
});
console.log('Fixed Â°C and Â°F in productSections.ts and page.tsx across all apps.');
