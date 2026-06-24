
const fs = require("fs");
const apps = ["us", "uk", "ca", "au"];

apps.forEach(app => {
    const revPath = `apps/${app}/src/data/reviews/buudy-led-mask-reviews.json`;
    if (!fs.existsSync(revPath)) return;
    let raw = fs.readFileSync(revPath, "utf8");
    if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
    const reviews = JSON.parse(raw);
    
    // Clear ALL images
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].images = [];
    }
    
    // Only top 4 get images
    if (reviews[0]) reviews[0].images = ["/media/products/buudy-led-mask/images/review_img_1.png"];
    if (reviews[1]) reviews[1].images = ["/media/products/buudy-led-mask/images/review_img_2.png"];
    if (reviews[2]) reviews[2].images = ["/media/products/buudy-led-mask/images/review_img_3.png"];
    if (reviews[3]) reviews[3].images = ["/media/products/buudy-led-mask/images/review_img_4.png"];
    
    fs.writeFileSync(revPath, JSON.stringify(reviews, null, 2), "utf8");
    console.log(`Cleaned reviews in ${revPath}`);
});

