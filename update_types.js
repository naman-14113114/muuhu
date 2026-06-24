
const fs = require("fs");
const apps = ["us", "uk", "ca", "au"];

apps.forEach(app => {
    const revPath = `apps/${app}/src/data/reviews/buudy-led-mask-reviews.json`;
    if (fs.existsSync(revPath)) {
        let raw = fs.readFileSync(revPath, "utf8");
        if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
        const reviews = JSON.parse(raw);
        
        for (let i = 0; i < reviews.length; i++) {
            if (!reviews[i].images || i >= 4) {
                reviews[i].images = [];
            }
        }
        
        fs.writeFileSync(revPath, JSON.stringify(reviews, null, 2), "utf8");
    }
});
console.log("Fixed review images types!");

