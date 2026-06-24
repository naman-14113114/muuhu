const fs = require('fs');
const path = require('path');

const targetDirs = [
  'apps/us/src/data',
  'apps/uk/src/data',
  'apps/ca/src/data',
  'apps/au/src/data',
  'apps/us/src/lib',
  'apps/uk/src/lib',
  'apps/ca/src/lib',
  'apps/au/src/lib'
];

function walkSync(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile()) {
      callback(filepath);
    }
  }
}

const replacements = [
  { regex: /Buudy LED Mask/gi, replacement: 'Muuhu IPL Device' },
  { regex: /Buudy led mask/gi, replacement: 'Muuhu IPL Device' },
  { regex: /LED Mask/g, replacement: 'IPL Device' },
  { regex: /LED Masks/g, replacement: 'IPL Devices' },
  { regex: /LED mask/g, replacement: 'IPL device' },
  { regex: /LED masks/g, replacement: 'IPL devices' },
  { regex: /the mask/gi, replacement: 'the device' },
  { regex: /this mask/gi, replacement: 'this device' },
  { regex: /\bBuudy\b/g, replacement: 'Muuhu' },
  { regex: /\bbuudy\b/g, replacement: 'muuhu' }
];

targetDirs.forEach(dir => {
  const fullDir = path.join(__dirname, dir);
  walkSync(fullDir, (filepath) => {
    if (!filepath.endsWith('.ts') && !filepath.endsWith('.tsx') && !filepath.endsWith('.json')) return;
    
    // Read file
    let content = fs.readFileSync(filepath, 'utf8');
    let modified = false;

    // We process line by line to protect Asset lines
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Skip lines with media assets
      if (line.includes('productAsset(') || 
          line.includes('productMediaAsset(') || 
          line.includes('torchAsset(') || 
          line.includes('.webp') || 
          line.includes('.jpg') || 
          line.includes('.png') || 
          line.includes('.mp4') ||
          line.includes('.gif') ||
          line.includes('import ') ||
          line.includes('buudy-led-mask') ||
          line.includes('buudy-red-torch') ||
          line.includes('muuhu-ipl-hair-removal')) {
        continue; // Do not touch this line
      }

      let newLine = line;
      for (const rule of replacements) {
        newLine = newLine.replace(rule.regex, rule.replacement);
      }

      if (newLine !== line) {
        lines[i] = newLine;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filepath, lines.join('\n'), 'utf8');
      console.log(`Updated: ${filepath}`);
    }
  });
});
console.log('Done rebranding data files.');
