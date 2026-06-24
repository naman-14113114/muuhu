const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const apps = ['us', 'uk', 'ca', 'au'];
const files = apps.map(app => walk(`apps/${app}/src`)).flat();

files.forEach(file => {
  let c = fs.readFileSync(file, 'utf8');
  let orig = c;
  
  // Replace long specific name first
  c = c.replace(/Muuhu IPL Hair Removal/g, 'Muuhu Ultra Pro');
  // Replace base name everywhere else
  c = c.replace(/Muuhu IPL/g, 'Muuhu Ultra Pro');
  
  // Fix hero emphasis for the header split text
  c = c.replace(/heroTitle:\s*"Muuhu Ultra Pro"/g, 'heroTitle: "Muuhu Ultra"');
  c = c.replace(/heroEmphasis:\s*"Ultra Pro"/g, 'heroEmphasis: "Pro"');
  c = c.replace(/heroEmphasis:\s*"Hair Removal"/g, 'heroEmphasis: "Pro"');
  
  // Also just in case "Ultra Pro" became "Ultra Pro Ultra Pro" due to overlapping replacements
  c = c.replace(/Muuhu Ultra Pro Hair Removal/g, 'Muuhu Ultra Pro');
  c = c.replace(/Muuhu Ultra Pro Ultra Pro/g, 'Muuhu Ultra Pro');

  if (c !== orig) {
    fs.writeFileSync(file, c, 'utf8');
    console.log('Updated ' + file);
  }
});
