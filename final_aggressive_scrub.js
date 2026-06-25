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
    // Variable and structural replacements
    'torchProductId': 'massageKitProductId',
    'torchVariantId': 'massageKitVariantId',
    'product?.template === "torch"': 'product?.template === "massage-kit"',
    'product.template === "torch"': 'product.template === "massage-kit"',
    'template: "mask" | "torch"': 'template: "mask" | "massage-kit"',
    'template: "torch"': 'template: "massage-kit"',
    'id="torch-offer"': 'id="massage-kit-offer"',
    'torchReviews': 'massagerReviews',
    'torchWavelengths': 'massagerWavelengths',

    // Textual replacements
    'red light torch US': 'massage kit US',
    'red light torch UK': 'massage kit UK',
    'red light torch Canada': 'massage kit Canada',
    'red light torch Australia': 'massage kit Australia',
    'near infrared torch': 'massage kit tools',
    'the torch gives you a smaller tool': 'the massage kit gives you traditional tools',
    'The torch fits that role well': 'The massage kit fits that role well',
    'The T5 torch combines blue, red, deep red, and near-infrared wavelengths': 'The massage kit combines three tools',
    'Hold the torch over the target area': 'Glide the Gua Sha over the target area',
    'light therapy torch.': 'resin massage kit.',
    'keep the torch positioned': 'keep the Gua Sha positioned',
    'our torch unique': 'our massage kit unique',
    'Includes the torch, rechargeable battery, charger, USB cable': 'Includes the Gua Sha board, wide-toothed comb, and acupuncture pen',
    'FREE TORCH': 'FREE MASSAGE KIT',
    'T5 torch': 'resin kit',
    'The torch combines red, deep red, and near-infrared wavelengths': 'The massage kit combines three tools',
    'Red Light MassageKit': 'Massage Kit',
    '"torch"': '"massage-kit"' // Catch any straggling string comparisons
  };

  for (const [key, value] of Object.entries(replacements)) {
    // Use split/join to replace all occurrences without regex escaping issues
    if (content.includes(key)) {
      content = content.split(key).join(value);
      changed = true;
    }
  }

  // Final catch-all for any straggling word "torch" in text blocks, case insensitive
  // Only target "torch" surrounded by spaces or punctuation to avoid breaking code like "TorchProduct"
  if (/\btorch\b/i.test(content)) {
    content = content.replace(/\btorch\b/gi, 'massage kit');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Scrubbed text in: ${path.basename(file)}`);
  }
});

console.log("Aggressive final scrub complete.");
