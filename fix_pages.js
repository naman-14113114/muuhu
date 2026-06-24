const fs = require('fs');
const apps = ['us', 'uk', 'ca', 'au'];

apps.forEach(app => {
    // 1. Update products.ts
    const pPath = `apps/${app}/src/data/products.ts`;
    if (fs.existsSync(pPath)) {
        let content = fs.readFileSync(pPath, 'utf8');
        const newGallery = `    gallery: [
      { src: productMediaAsset("ipl_provided_11.png"), alt: "Muuhu IPL Premium" },
      { src: productMediaAsset("ipl_provided_2.png"), alt: "Muuhu IPL Hair Removal" },
      { src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu IPL In Use" },
      { src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu IPL Close Up" },
      { src: productMediaAsset("ipl_provided_6.png"), alt: "Muuhu IPL Ice Cooling" },
      { src: productMediaAsset("ipl_provided_7.png"), alt: "Muuhu IPL Product Shot" },
      { src: productMediaAsset("ipl_provided_8.png"), alt: "Muuhu IPL Full View" },
      { src: productMediaAsset("ipl_provided_9.png"), alt: "Muuhu IPL Lifestyle" },
      { src: productMediaAsset("ipl_provided_10.png"), alt: "Muuhu IPL Premium" }
    ],`;
        content = content.replace(/gallery: \[\s*\{ src: productMediaAsset\("ipl_provided_2\.png"\)[^\]]*\],/m, newGallery);
        
        // Also update cartImage if it was 2
        content = content.replace(/cartImage: productMediaAsset\("ipl_provided_2\.png"\),/, 'cartImage: productMediaAsset("ipl_provided_11.png"),');
        
        fs.writeFileSync(pPath, content, 'utf8');
        console.log(`Updated products.ts in ${app}`);
    }

    // 2. Update home.ts
    const hPath = `apps/${app}/src/data/home.ts`;
    if (fs.existsSync(hPath)) {
        let content = fs.readFileSync(hPath, 'utf8');
        
        // Replace homeHero.images array
        const newHeroImages = `  images: [
    productMediaAsset("ipl_horizontal_banner.jpg", "buudy-led-mask", "images"),
    productMediaAsset("ipl_provided_2.png", "buudy-led-mask", "images"),
    productMediaAsset("ipl_provided_4.png", "buudy-led-mask", "images"),
  ],`;
        content = content.replace(/images: \[\s*productMediaAsset\("ipl_provided_2\.png"[^\)]*\),\s*productMediaAsset\("ipl_provided_3\.png"[^\)]*\),\s*productMediaAsset\("ipl_provided_4\.png"[^\)]*\),\s*\],/m, newHeroImages);
        
        // Ensure no ipl_provided_3.png in home.ts at all. Replace with ipl_provided_11.png
        content = content.replace(/ipl_provided_3\.png/g, "ipl_provided_11.png");
        
        fs.writeFileSync(hPath, content, 'utf8');
        console.log(`Updated home.ts in ${app}`);
    }

    // 3. Update BeforeAfterGrid.tsx padding
    const bPath = `apps/${app}/src/components/product/BeforeAfterGrid.tsx`;
    if (fs.existsSync(bPath)) {
        let content = fs.readFileSync(bPath, 'utf8');
        content = content.replace(/<section className="Muuhu-section bg-\[var\(--cream\)\] md: md: py-14 md:py-24">/, '<section className="Muuhu-section bg-[var(--cream)] pb-14 md:pb-24 pt-4 md:pt-8">');
        fs.writeFileSync(bPath, content, 'utf8');
        console.log(`Updated BeforeAfterGrid.tsx padding in ${app}`);
    }

    // 4. Update reviews to use new review images
    const rPath = `apps/${app}/src/data/reviews/buudy-led-mask-reviews.json`;
    if (fs.existsSync(rPath)) {
        let data = JSON.parse(fs.readFileSync(rPath, 'utf8'));
        // First 4 reviews get the 4 review images
        if (data.length >= 4) {
            data[0].images = ["/media/products/buudy-led-mask/images/ipl_review_1.jpg"];
            data[1].images = ["/media/products/buudy-led-mask/images/ipl_review_2.png"];
            data[2].images = ["/media/products/buudy-led-mask/images/ipl_review_3.png"];
            data[3].images = ["/media/products/buudy-led-mask/images/ipl_review_4.png"];
        }
        
        // Strip out any image paths from remaining reviews
        for (let i = 4; i < data.length; i++) {
             data[i].images = [];
        }
        
        fs.writeFileSync(rPath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Updated reviews JSON in ${app}`);
    }
});
