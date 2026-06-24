const fs = require("fs");
const path = require("path");

const apps = ["us", "uk", "ca", "au"];

apps.forEach(app => {
    const filePath = path.join("apps", app, "src", "data", "reviews", "buudy-led-mask-reviews.json");
    if (!fs.existsSync(filePath)) return;

    let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    
    data.forEach(review => {
        if (review.body) {
            let b = review.body;
            b = b.replace(/cleopatra mask/gi, "Muuhu IPL device");
            b = b.replace(/led mask/gi, "IPL hair removal device");
            b = b.replace(/mask/gi, "IPL device");
            b = b.replace(/yellow and blue light/gi, "ice cooling technology");
            b = b.replace(/red light/gi, "16J energy output");
            b = b.replace(/colours/gi, "intensity levels");
            b = b.replace(/acne/gi, "unwanted hair");
            b = b.replace(/breakouts/gi, "stubble");
            b = b.replace(/face/gi, "legs and underarms");
            b = b.replace(/collagen/gi, "smoothness");
            b = b.replace(/light wave/gi, "flash");
            b = b.replace(/7-colour/gi, "9-gear");
            review.body = b;
        }
        if (review.title) {
            let t = review.title;
            t = t.replace(/led mask/gi, "IPL device");
            t = t.replace(/mask/gi, "IPL");
            t = t.replace(/Breakouts/gi, "Hair");
            t = t.replace(/Clear Skin/gi, "Smooth Skin");
            review.title = t;
        }
        
        // Wipe old images so it doesn't show led masks
        review.images = [];
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated reviews for ${app}`);
});
