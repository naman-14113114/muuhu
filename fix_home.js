
const fs = require("fs");
const apps = ["us", "uk", "ca", "au"];

apps.forEach(app => {
    const homePath = `apps/${app}/src/data/home.ts`;
    if (!fs.existsSync(homePath)) return;
    let content = fs.readFileSync(homePath, "utf8");
    
    // Replace all image references to use unique provided images
    // Hero images: 2, 3, 4
    // Spotlight: 5
    // Technology: 6
    // Feature cards: 7, 8, 9
    // Light therapy: 10
    // Younger you: 3 (different section so OK)
    
    const replacements = [
        // Hero 3 images
        [/images:\s*\[\s*\{[^}]+\},\s*\{[^}]+\},\s*\{[^}]+\},?\s*\]/s, 
         `images: [
      { src: productMediaAsset("ipl_provided_2.png"), alt: "Muuhu IPL Hero" },
      { src: productMediaAsset("ipl_provided_3.png"), alt: "Muuhu IPL Lifestyle" },
      { src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu IPL In Use" },
    ]`],
    ];
    
    // Simple sequential replacement for all productMediaAsset("ipl_provided_X.png") refs
    const imageMap = [
        "ipl_provided_2.png",   // 1: hero img 1
        "ipl_provided_3.png",   // 2: hero img 2
        "ipl_provided_4.png",   // 3: hero img 3
        "ipl_provided_5.png",   // 4: spotlight
        "ipl_provided_6.png",   // 5: technology
        "ipl_provided_7.png",   // 6: feature card 1
        "ipl_provided_8.png",   // 7: feature card 2
        "ipl_provided_9.png",   // 8: feature card 3
        "ipl_provided_10.png",  // 9: light therapy
        "ipl_provided_5.png",   // 10: younger you (different section)
    ];
    
    let counter = 0;
    content = content.replace(/productMediaAsset\("ipl_provided_\d+\.png"\)/g, () => {
        const img = imageMap[counter] || imageMap[0];
        counter++;
        return `productMediaAsset("${img}")`;
    });
    
    // Also replace the media__1782322332594.jpg reference with a provided image
    content = content.replace(/productMediaAsset\("media__1782322332594\.jpg"\)/g, 
        `productMediaAsset("ipl_provided_5.png")`);
    
    fs.writeFileSync(homePath, content, "utf8");
    console.log(`Updated ${homePath}`);
});

