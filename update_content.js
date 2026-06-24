
const fs = require("fs");
const apps = ["us", "uk", "ca", "au"];

apps.forEach(app => {
    // 1. Update products.ts
    const productsPath = `apps/${app}/src/data/products.ts`;
    if (fs.existsSync(productsPath)) {
        let content = fs.readFileSync(productsPath, "utf8");
        
        const iplGallery = `cartImage: productMediaAsset("ipl_provided_1.png"),
    gallery: [
      { src: productMediaAsset("ipl_provided_1.png"), alt: "Muuhu IPL" },
      { src: productMediaAsset("ipl_provided_2.png"), alt: "Muuhu IPL Lifestyle" },
      { src: productMediaAsset("ipl_provided_3.png"), alt: "Muuhu IPL Device" },
      { src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu IPL Technology" },
      { src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu IPL Action" }
    ],`;
        content = content.replace(/cartImage:\s*productMediaAsset\([^\]]+\]\,/s, iplGallery);
        
        const torchGallery = `cartImage: torchAsset("01-buudy-red-torch-main.png"),
    gallery: [
      { src: torchAsset("01-buudy-red-torch-main.png"), alt: "Muuhu LED Torch" },
      { src: torchAsset("02-buudy-red-torch-angle.png"), alt: "Muuhu LED Torch Lifestyle" },
      { src: torchAsset("03-buudy-red-torch-lifestyle.png"), alt: "Muuhu LED Torch Device" }
    ],`;
        const parts = content.split("cartImage: torchAsset");
        if (parts.length > 1) {
             const rest = parts[1].replace(/^[^\]]+\]\,/s, "");
             content = parts[0] + torchGallery + rest;
        }
        
        fs.writeFileSync(productsPath, content, "utf8");
    }

    // 2. Update home.ts
    const homePath = `apps/${app}/src/data/home.ts`;
    if (fs.existsSync(homePath)) {
        let content = fs.readFileSync(homePath, "utf8");
        
        let counter = 1;
        content = content.replace(/productMediaAsset\("ipl_[^"]+"\)/g, () => {
            const repl = `productMediaAsset("ipl_provided_${counter}.png")`;
            counter++;
            return repl;
        });
        
        fs.writeFileSync(homePath, content, "utf8");
    }
});
console.log("Updated products.ts and home.ts");

