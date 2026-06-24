const fs = require('fs');
const path = require('path');

const apps = ['us', 'uk', 'ca', 'au'];
const imagesToInject = [
  '/media/products/buudy-led-mask/images/ipl_ba_legs.png',
  '/media/products/buudy-led-mask/images/ipl_ba_underarm.png',
  '/media/products/buudy-led-mask/images/ipl_macro_v3.png',
  '/media/products/buudy-led-mask/images/ipl_lifestyle_v3.png'
];

apps.forEach(app => {
  const filePath = path.join(__dirname, 'apps', app, 'src', 'data', 'reviews', 'buudy-led-mask-reviews.json');
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let reviews = JSON.parse(content);
    
    // Inject images into the first 20 reviews randomly to make sure they show up at the top
    for (let i = 0; i < 20; i++) {
      if (reviews[i] && Math.random() > 0.3) {
        // give it 1 or 2 images
        let numImages = Math.floor(Math.random() * 2) + 1;
        let selectedImages = [];
        for(let j=0; j<numImages; j++) {
            selectedImages.push(imagesToInject[Math.floor(Math.random() * imagesToInject.length)]);
        }
        reviews[i].images = selectedImages;
      }
    }
    
    fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2), 'utf8');
    console.log("Updated reviews for " + app);
  } catch (err) {
    console.error("Error with " + app + ": " + err.message);
  }
});
