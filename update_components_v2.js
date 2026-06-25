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
let files = walk(appsDir);

// 1. Rename files
files.forEach(file => {
  const basename = path.basename(file);
  if (basename.includes('Torch')) {
    const newBasename = basename.replace('Torch', 'MassageKit');
    const newPath = path.join(path.dirname(file), newBasename);
    fs.renameSync(file, newPath);
    console.log(`Renamed: ${basename} -> ${newBasename}`);
  }
});

// Re-walk to get updated paths
files = walk(appsDir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));

// 2. Perform replacements
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('Torch')) {
    content = content.replace(/Torch/g, 'MassageKit');
    changed = true;
  }
  if (content.includes('red-light-torch')) {
    content = content.replace(/red-light-torch/g, 'muuhu-massage-kit');
    changed = true;
  }
  if (content.includes('buudy-red-torch')) {
    content = content.replace(/buudy-red-torch/g, 'muuhu-massage-kit');
    changed = true;
  }
  if (content.includes('torchSpotlight')) {
    content = content.replace(/torchSpotlight/g, 'massagerSpotlight');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated content: ${path.basename(file)}`);
  }
});

console.log("Component replacements complete.");
