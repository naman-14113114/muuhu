const fs = require('fs');

const apps = ['us', 'uk', 'ca', 'au'];
const prices = {
  'us': '$129',
  'uk': '£99',
  'ca': '$179',
  'au': '$199'
};

const americanToBritish = {
  'color': 'colour',
  'colors': 'colours',
  'flavor': 'flavour',
  'flavors': 'flavours',
  'mom': 'mum',
  'moms': 'mums',
  'favorite': 'favourite',
  'favorites': 'favourites',
  'aluminum': 'aluminium',
  'center': 'centre',
  'centers': 'centres',
  'meter': 'metre',
  'meters': 'metres',
  'realize': 'realise',
  'realized': 'realised',
  'organize': 'organise',
  'organized': 'organised',
  'traveling': 'travelling',
  'traveler': 'traveller'
};

const britishToAmerican = {
  'colour': 'color',
  'colours': 'colors',
  'flavour': 'flavor',
  'flavours': 'flavors',
  'mum': 'mom',
  'mums': 'moms',
  'favourite': 'favorite',
  'favourites': 'favorites',
  'aluminium': 'aluminum',
  'centre': 'center',
  'centres': 'centers',
  'metre': 'meter',
  'metres': 'meters',
  'realise': 'realize',
  'realised': 'realized',
  'organise': 'organize',
  'organised': 'organized',
  'travelling': 'traveling',
  'traveller': 'traveler'
};

function fixPrices(text, localPrice) {
  if (!text) return text;
  
  // Replace €XX, £XX, $XX with local price
  text = text.replace(/(€|£|\$)\s*\d+(\.\d{2})?/gi, () => localPrice);
  
  // Replace "XX euros", "XX pounds", "XX bucks", "XX dollars"
  text = text.replace(/\b\d+(\.\d{2})?\s*(euros?|pounds?|bucks?|dollars?)\b/gi, () => localPrice);
  
  if (localPrice.includes('$')) {
    text = text.replace(/\beuros?\b/gi, 'dollars');
    text = text.replace(/\bpounds?\b/gi, 'dollars');
  } else {
    text = text.replace(/\beuros?\b/gi, 'pounds');
    text = text.replace(/\bdollars?\b/gi, 'pounds');
    text = text.replace(/\bbucks?\b/gi, 'quid');
  }
  
  return text;
}

function fixSpelling(text, isAmerican) {
  if (!text) return text;
  const map = isAmerican ? britishToAmerican : americanToBritish;
  
  for (const [from, to] of Object.entries(map)) {
    const regex = new RegExp('\\b' + from + '\\b', 'gi');
    text = text.replace(regex, (match) => {
      if (match[0] === match[0].toUpperCase()) {
        return to.charAt(0).toUpperCase() + to.slice(1);
      }
      return to;
    });
  }
  return text;
}

for (const app of apps) {
  const filePath = `E:/1st YEAR DTU/New folder/muuhu/apps/${app}/src/data/reviews/buudy-led-mask-reviews.json`;
  if (!fs.existsSync(filePath)) continue;
  
  let raw = fs.readFileSync(filePath, 'utf8');
  let data = JSON.parse(raw);
  
  const isAmerican = (app === 'us');
  const localPrice = prices[app];
  
  let changed = 0;
  
  for (const review of data) {
    const origBody = review.body;
    const origTitle = review.title;
    
    review.body = fixPrices(review.body, localPrice);
    review.body = fixSpelling(review.body, isAmerican);
    
    review.title = fixPrices(review.title, localPrice);
    review.title = fixSpelling(review.title, isAmerican);
    
    if (origBody !== review.body || origTitle !== review.title) {
      changed++;
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Updated ${app}: changed ${changed} reviews`);
}
