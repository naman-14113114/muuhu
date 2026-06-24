
const fs = require("fs");
const apps = ["us", "uk", "ca", "au"];

apps.forEach(app => {
    const productsPath = `apps/${app}/src/data/products.ts`;
    if (!fs.existsSync(productsPath)) return;
    let content = fs.readFileSync(productsPath, "utf8");
    
    // Replace gallery block - use ALL 9 provided images (2 thru 10), cartImage = ipl_provided_2
    const newGallery = `cartImage: productMediaAsset("ipl_provided_2.png"),
    gallery: [
      { src: productMediaAsset("ipl_provided_2.png"), alt: "Muuhu IPL Hair Removal" },
      { src: productMediaAsset("ipl_provided_3.png"), alt: "Muuhu IPL Device Side" },
      { src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu IPL In Use" },
      { src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu IPL Close Up" },
      { src: productMediaAsset("ipl_provided_6.png"), alt: "Muuhu IPL Ice Cooling" },
      { src: productMediaAsset("ipl_provided_7.png"), alt: "Muuhu IPL Product Shot" },
      { src: productMediaAsset("ipl_provided_8.png"), alt: "Muuhu IPL Full View" },
      { src: productMediaAsset("ipl_provided_9.png"), alt: "Muuhu IPL Lifestyle" },
      { src: productMediaAsset("ipl_provided_10.png"), alt: "Muuhu IPL Premium" }
    ],`;
    content = content.replace(/cartImage:\s*productMediaAsset\([^\]]+\]\,/s, newGallery);
    fs.writeFileSync(productsPath, content, "utf8");
    console.log(`Updated ${productsPath}`);
});

