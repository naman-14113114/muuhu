const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    if (file === 'node_modules' || file === '.next' || file === 'dist' || file.startsWith('.')) return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(filePath));
    } else { 
      results.push(filePath);
    }
  });
  return results;
}

const appsDir = path.join(__dirname, 'apps');
const files = walk(appsDir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const replacements = {
    'MuuhuRedMassageKit': 'MuuhuMassageKit',
    'torchFeatures': 'massagerFeatures',
    'torchHowToUse': 'massagerHowToUse',
    'torchDetailImages': 'massagerDetailImages',
    'torchFaqs': 'massagerFaqs',
    'torchTimeline': 'massagerTimeline',
    'MuuhuRedTorch': 'MuuhuMassageKit'
  };

  for (const [key, value] of Object.entries(replacements)) {
    if (content.includes(key)) {
      content = content.replace(new RegExp(key, 'g'), value);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed imports in: ${path.basename(file)}`);
  }
});

console.log("Imports fix complete.");
