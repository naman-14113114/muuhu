const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, 'apps');

const replacements = [
  { search: 'Muuhu Mask <span className="buudy-italic text-[var(--gold)]">reviews</span>', replace: 'Muuhu IPL <span className="buudy-italic text-[var(--gold)]">reviews</span>' },
  { search: 'Shop the Muuhu Mask', replace: 'Shop the Muuhu IPL' },
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
