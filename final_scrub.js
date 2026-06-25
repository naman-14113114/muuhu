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

  // Replacements
  const replacements = {
    'FREE TORCH': 'FREE MASSAGE KIT',
    'muuhu-led-torch': 'muuhu-massage-kit',
    'Muuhu-led-torch': 'muuhu-massage-kit',
    'Muuhu-led-torch.jpg': 'massage_kit_spotlight.png', // replacing IPL page free gift image
    'free_torch.png': 'massage_kit_spotlight.png',
    'red light torch US': 'massage kit US',
    'near infrared torch': 'massage kit',
    'Red Light MassageKit': 'Massage Kit',
    'T5 torch': 'resin kit',
    'The torch combines red, deep red, and near-infrared wavelengths': 'The massage kit combines three tools',
    'Hold the torch over the target area': 'Glide the Gua Sha over the target area',
    'light therapy torch': 'resin massage kit',
    'keep the torch positioned': 'keep the Gua Sha positioned',
    'our torch unique': 'our massage kit unique',
    'Includes the torch, rechargeable battery, charger, USB cable': 'Includes the Gua Sha board, wide-toothed comb, and acupuncture pen',
    'torchWavelengths': 'massagerWavelengths'
  };

  for (const [key, value] of Object.entries(replacements)) {
    if (content.includes(key)) {
      content = content.replace(new RegExp(key, 'g'), value);
      changed = true;
    }
  }

  // A couple case-insensitive replacements for narrative text in freeGifts.ts
  if (content.includes('gives you a smaller tool you can use for targeted touch-up')) {
    content = content.replace(/The Muuhu LED MassageKit adds precision.*bundle more flexibility\./g, 'The Muuhu Massage Kit adds a touch of traditional luxury. While the IPL device gives you broad hair-removal coverage, the massage kit helps relieve facial tension, reduce puffiness, and provide a spa-quality relaxation session after your treatment.');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Scrubbed text in: ${path.basename(file)}`);
  }
});

console.log("Final scrub complete.");
