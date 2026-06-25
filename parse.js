const fs = require('fs'); 
const html = fs.readFileSync('dhgate.html', 'utf8'); 

// Title
const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/si); 
const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Unknown'; 

// Images
const imgMatches = html.match(/src=\"(https:\/\/image\.dhgate\.com[^\"]+)\"/g); 
const images = imgMatches ? [...new Set(imgMatches.map(m => m.replace('src=\"', '').replace('\"', '')))] : []; 

console.log(JSON.stringify({title, images: images.slice(0, 10)}, null, 2));
