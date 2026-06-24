const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const basePath = 'e:/1st YEAR DTU/New folder/muuhu/apps/uk/src';
const files = walk(basePath);
let found = false;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.toLowerCase().includes('buudy')) {
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      if (line.toLowerCase().includes('buudy')) {
        const noImage = line.replace(/(\/images\/|\/media\/)[^"'\`\s]*/g, '');
        if (noImage.toLowerCase().includes('buudy')) {
          console.log(f, i + 1, line);
          found = true;
        }
      }
    });
  }
});
if (!found) console.log('No remaining references found');
