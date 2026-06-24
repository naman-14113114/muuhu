const fs = require("fs");
const apps = ["us", "uk", "ca", "au"];
apps.forEach(app => {
    const p = `apps/${app}/src/data/reviews/buudy-led-mask-reviews.json`;
    if (!fs.existsSync(p)) return;
    let raw = fs.readFileSync(p, "utf8");
    if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
    const reviews = JSON.parse(raw);
    if (reviews[0]) reviews[0].images = ["/media/products/buudy-led-mask/images/review_img_1.png"];
    if (reviews[1]) reviews[1].images = ["/media/products/buudy-led-mask/images/review_img_2.png"];
    if (reviews[2]) reviews[2].images = ["/media/products/buudy-led-mask/images/review_img_3.png"];
    fs.writeFileSync(p, JSON.stringify(reviews, null, 2), "utf8");
});
console.log("Injected review images!");
