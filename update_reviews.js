const fs = require('fs');
const path = require('path');

const countries = ['us', 'uk', 'ca', 'au'];

countries.forEach(country => {
  const filePath = path.join(__dirname, 'apps', country, 'src', 'data', 'reviews', 'muuhu-massage-kit-reviews.json');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Simple replacements to change the context of the reviews from a Red Light Torch to a Massage Kit
    content = content.replace(/red light/gi, "massage");
    content = content.replace(/red-light/gi, "massage");
    content = content.replace(/torch/gi, "kit");
    content = content.replace(/therapy/gi, "relaxation");
    content = content.replace(/wavelength/gi, "tool");
    content = content.replace(/light/gi, "massage");
    content = content.replace(/acne/gi, "puffiness");
    content = content.replace(/pain relief/gi, "tension relief");
    content = content.replace(/joint pain/gi, "facial tension");
    content = content.replace(/healing/gi, "soothing");
    
    // Explicitly remove any review images to strictly follow user's command
    // Find "images": [...] arrays and clear them
    content = content.replace(/"images":\s*\[[^\]]*\]/g, '"images": []');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated reviews for ${country}`);
  } else {
    console.log(`Reviews not found for ${country}`);
  }
});
