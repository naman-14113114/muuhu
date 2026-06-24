
const fs = require("fs");
const apps = ["us", "uk", "ca", "au"];

apps.forEach(app => {
    // 1. Setup 4th review image
    const pubImgDir = `apps/${app}/public/media/products/buudy-led-mask/images`;
    if (fs.existsSync(`${pubImgDir}/ipl_provided_1.png`)) {
        fs.renameSync(`${pubImgDir}/ipl_provided_1.png`, `${pubImgDir}/review_img_4.png`);
    }

    // 2. Clean reviews json
    const revPath = `apps/${app}/src/data/reviews/buudy-led-mask-reviews.json`;
    if (fs.existsSync(revPath)) {
        let raw = fs.readFileSync(revPath, "utf8");
        if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
        const reviews = JSON.parse(raw);
        
        // Remove images from all reviews
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].images) {
                delete reviews[i].images;
            }
        }
        
        // Add images to first 4 reviews ONLY
        if (reviews[0]) reviews[0].images = ["/media/products/buudy-led-mask/images/review_img_1.png"];
        if (reviews[1]) reviews[1].images = ["/media/products/buudy-led-mask/images/review_img_2.png"];
        if (reviews[2]) reviews[2].images = ["/media/products/buudy-led-mask/images/review_img_3.png"];
        if (reviews[3]) reviews[3].images = ["/media/products/buudy-led-mask/images/review_img_4.png"];
        
        fs.writeFileSync(revPath, JSON.stringify(reviews, null, 2), "utf8");
    }

    // 3. UPDATE products.ts
    const productsPath = `apps/${app}/src/data/products.ts`;
    if (fs.existsSync(productsPath)) {
        let content = fs.readFileSync(productsPath, "utf8");
        const iplGallery = `cartImage: productMediaAsset("ipl_provided_2.png"),
    gallery: [
      { src: productMediaAsset("ipl_provided_2.png"), alt: "Muuhu IPL" },
      { src: productMediaAsset("ipl_provided_3.png"), alt: "Muuhu IPL Lifestyle" },
      { src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu IPL Device" },
      { src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu IPL Technology" },
      { src: productMediaAsset("ipl_provided_6.png"), alt: "Muuhu IPL Action" }
    ],`;
        content = content.replace(/cartImage:\s*productMediaAsset\([^\]]+\]\,/s, iplGallery);
        fs.writeFileSync(productsPath, content, "utf8");
    }

    // 4. UPDATE home.ts
    const homePath = `apps/${app}/src/data/home.ts`;
    if (fs.existsSync(homePath)) {
        let content = fs.readFileSync(homePath, "utf8");
        const homeImages = [
            "ipl_provided_2.png",
            "ipl_provided_3.png",
            "ipl_provided_4.png",
            "ipl_provided_5.png",
            "ipl_provided_6.png",
            "ipl_provided_7.png",
            "ipl_provided_8.png",
            "ipl_provided_9.png",
            "ipl_provided_10.png",
            "media__1782322332594.jpg"
        ];
        
        let counter = 0;
        content = content.replace(/productMediaAsset\("ipl_provided_\d+\.png"\)/g, (match) => {
            if (counter < homeImages.length) {
                const repl = `productMediaAsset("${homeImages[counter]}")`;
                counter++;
                return repl;
            }
            return match;
        });
        
        fs.writeFileSync(homePath, content, "utf8");
    }
});
console.log("Updated everything!");

