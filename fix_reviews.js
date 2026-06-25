const fs = require('fs');
const path = require('path');
const appsDir = path.join(__dirname, 'apps');

const apps = ['us', 'uk', 'ca', 'au'];

const replacements = [
  // Mojibake fixes
  { regex: /Â£/g, replace: '£' },
  { regex: /â€™/g, replace: "'" },
  { regex: /â€œ/g, replace: '"' },
  { regex: /â€/g, replace: '"' },
  { regex: /â€“/g, replace: '-' },
  { regex: /â€”/g, replace: '--' },
  { regex: /â™€ï¸/g, replace: '' },
  { regex: /Â°/g, replace: '°' },
  { regex: /Ã©/g, replace: 'é' },
  { regex: /Ã£/g, replace: 'ã' },
  { regex: /Ã/g, replace: 'í' }, // Note: Ã might match Ã© if not careful, but order matters
  // Actually, simpler to just replace specific ones safely
  
  // LED Mask terminology fixes that were missed
  { regex: /blue light/gi, replace: 'ice cooling' },
  { regex: /red light/gi, replace: 'auto mode' },
  { regex: /yellow light/gi, replace: 'manual mode' },
  { regex: /green light/gi, replace: 'highest intensity' },
  { regex: /purple color/gi, replace: 'display' },
  { regex: /color options/gi, replace: 'energy levels' },
  { regex: /3-minute session/gi, replace: 'quick session' },
  { regex: /10-minute session/gi, replace: 'treatment session' },
  { regex: /10-15 min/gi, replace: 'quick sessions' },
  { regex: /sheet IPL device/gi, replace: 'soothing gel' },
  { regex: /uncomfortable on the nose/gi, replace: 'uncomfortable to hold at first' },
  { regex: /the eyes apply pressure/gi, replace: 'the grip can be tight' },
  { regex: /mist mouth breathe because the nose in tight/gi, replace: 'make sure to hold it properly' },
  { regex: /squishing between my eyebrows/gi, replace: 'pressing too hard' },
  { regex: /free LED torch/gi, replace: 'free gifts' }
];

apps.forEach(app => {
  const reviewsPath = path.join(appsDir, app, 'src/data/reviews/buudy-led-mask-reviews.json');
  if (fs.existsSync(reviewsPath)) {
    console.log('Processing ' + reviewsPath);
    let content = fs.readFileSync(reviewsPath, 'utf8');
    
    // Parse to iterate over fields to avoid breaking JSON structure
    let reviews = JSON.parse(content);
    
    reviews.forEach(review => {
      ['body', 'title', 'name'].forEach(field => {
        if (review[field]) {
          let text = review[field];
          
          // Apply Mojibake fixes safely
          text = text.replace(/Â£/g, '£');
          text = text.replace(/â€™/g, "'");
          text = text.replace(/â€œ/g, '"');
          text = text.replace(/â€/g, '"');
          text = text.replace(/â€“/g, '-');
          text = text.replace(/â€”/g, '--');
          text = text.replace(/â™€ï¸/g, '');
          text = text.replace(/Â°/g, '°');
          
          // Apply Terminology fixes
          replacements.slice(11).forEach(r => { // Skip the first ones as they are done manually above
             text = text.replace(r.regex, r.replace);
          });
          
          review[field] = text;
        }
      });
    });
    
    fs.writeFileSync(reviewsPath, JSON.stringify(reviews, null, 2), 'utf8');
  }
});
console.log('Finished sweeping reviews.');
