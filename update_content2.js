const fs = require('fs');
const apps = ['us', 'uk', 'ca', 'au'];

apps.forEach(app => {
    // UPDATE products.ts
    const productsPath = pps//src/data/products.ts;
    if (fs.existsSync(productsPath)) {
        let content = fs.readFileSync(productsPath, 'utf8');
        
        const iplGallery = cartImage: productMediaAsset("ipl_provided_2.png"),
    gallery: [
      { src: productMediaAsset("ipl_provided_2.png"), alt: "Muuhu IPL" },
      { src: productMediaAsset("ipl_provided_3.png"), alt: "Muuhu IPL Lifestyle" },
      { src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu IPL Device" },
      { src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu IPL Technology" },
      { src: productMediaAsset("ipl_provided_6.png"), alt: "Muuhu IPL Action" }
    ],;
        content = content.replace(/cartImage:\s*productMediaAsset\([^\]]+\]\,/s, iplGallery);
        fs.writeFileSync(productsPath, content, 'utf8');
    }

    // UPDATE home.ts
    const homePath = pps//src/data/home.ts;
    if (fs.existsSync(homePath)) {
        let content = fs.readFileSync(homePath, 'utf8');
        
        // We have 10 occurrences of productMediaAsset("ipl_provided_X.png") in home.ts
        // Let's replace them sequentially with 2..10, and the 10th one with media__1782322332594.jpg
        const homeImages = [
            'ipl_provided_2.png',
            'ipl_provided_3.png',
            'ipl_provided_4.png',
            'ipl_provided_5.png',
            'ipl_provided_6.png',
            'ipl_provided_7.png',
            'ipl_provided_8.png',
            'ipl_provided_9.png',
            'ipl_provided_10.png',
            'media__1782322332594.jpg'
        ];
        
        let counter = 0;
        content = content.replace(/productMediaAsset\("ipl_provided_\d+\.png"\)/g, (match) => {
            if (counter < homeImages.length) {
                const repl = productMediaAsset("");
                counter++;
                return repl;
            }
            return match;
        });
        
        fs.writeFileSync(homePath, content, 'utf8');
    }
});
console.log('Updated products.ts and home.ts correctly!');
