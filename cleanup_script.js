const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, 'apps');

const replacements = [
  { search: 'your mask order so your routine starts', replace: 'your IPL order so your routine starts' },
  { search: 'Buy the mask, unlock the full bonus bundle.', replace: 'Buy the IPL device, unlock the full bonus bundle.' },
  { search: 'What makes our mask unique?', replace: 'What makes our IPL unique?' },
  { search: 'Muuhu Mask <em className=\"buudy-italic\">customer reviews</em>', replace: 'Muuhu IPL <em className=\"buudy-italic\">customer reviews</em>' },
  { search: 'Muuhu mask, in real life.', replace: 'Muuhu IPL, in real life.' },
  { search: 'product.template === \"mask\" ? \"LED Mask\" : \"Red Light Torch\"', replace: 'product.template === \"mask\" ? \"IPL Hair Removal\" : \"Red Light Torch\"' },
  { search: 'product?.template === \"torch\" ? \"Red Light Torch\" : \"LED Mask\"', replace: 'product?.template === \"torch\" ? \"Red Light Torch\" : \"IPL Hair Removal\"' },
  { search: 'Muuhu LED Skincare Mask', replace: 'Muuhu IPL Hair Removal Device' },
  { search: 'wire-free LED mask innovation', replace: 'IPL hair removal innovation' },
  { search: 'our story of wire-free LED mask innovation', replace: 'our story of IPL hair removal innovation' },
  { search: 'maskQuantity', replace: 'iplQuantity' },
  { search: 'maskProductId', replace: 'iplProductId' },
  { search: 'maskVariantId', replace: 'iplVariantId' },
  { search: 'maskLine', replace: 'iplLine' },
  { search: 'mask spotlight image', replace: 'IPL spotlight image' },
  { search: 'What makes our mask ', replace: 'What makes our IPL ' },
];

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (!dirPath.includes('node_modules') && !dirPath.includes('.next')) {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

let modifiedCount = 0;

walkDir(appsDir, (filePath) => {
  if (filePath.match(/\.(ts|tsx)$/)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    replacements.forEach(rep => {
      content = content.split(rep.search).join(rep.replace);
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log('Modified: ' + filePath.replace(appsDir, ''));
    }
  }
});

console.log('\nFinished replacing strings. Modified ' + modifiedCount + ' files.');
