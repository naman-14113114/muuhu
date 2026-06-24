const fs = require('fs');
const apps = ['us', 'uk', 'ca', 'au'];

apps.forEach(app => {
    const pPath = `apps/${app}/src/data/productSections.ts`;
    if (!fs.existsSync(pPath)) return;
    
    let content = fs.readFileSync(pPath, 'utf8');
    
    const newTransformations = `export const transformations: Transformation[] = [
  {
    id: "result-01",
    image: "",
    imageBefore: productMediaAsset("trustoo_ba_1_before.jpg", "buudy-led-mask", "images"),
    imageAfter: productMediaAsset("trustoo_ba_1_after.jpg", "buudy-led-mask", "images"),
    concern: "Leg Hair Stubbles",
    title: "Best investment ever",
    quote: "By week 2, I noticed a significant reduction in leg hair growth. It's so smooth now!",
    name: "Donna P.",
  },
  {
    id: "result-02",
    image: "",
    imageBefore: productMediaAsset("trustoo_ba_2_before.jpg", "buudy-led-mask", "images"),
    imageAfter: productMediaAsset("trustoo_ba_2_after.jpg", "buudy-led-mask", "images"),
    concern: "Dark Underarms",
    title: "IT REALLY WORKS!!",
    quote: "After using for 2 weeks, I cannot believe the difference! The shadow is gone.",
    name: "Jane P.",
  },
  {
    id: "result-03",
    image: "",
    imageBefore: productMediaAsset("trustoo_ba_3_before.jpg", "buudy-led-mask", "images"),
    imageAfter: productMediaAsset("trustoo_ba_3_after.jpg", "buudy-led-mask", "images"),
    concern: "Strawberry Legs",
    title: "Incredible results",
    quote: "In less than 2 weeks, my strawberry legs have completely vanished.",
    name: "Sarah K.",
  },
  {
    id: "result-06",
    image: "",
    imageBefore: productMediaAsset("trustoo_ba_6_before.jpg", "buudy-led-mask", "images"),
    imageAfter: productMediaAsset("trustoo_ba_6_after.jpg", "buudy-led-mask", "images"),
    concern: "Shaving Rash",
    title: "Literal Glow Up",
    quote: "My skin looks so much more radiant by week 2. No more razor bumps!",
    name: "Karen W.",
  },
  {
    id: "result-07",
    image: "",
    imageBefore: productMediaAsset("trustoo_ba_7_before.jpg", "buudy-led-mask", "images"),
    imageAfter: productMediaAsset("trustoo_ba_7_after.jpg", "buudy-led-mask", "images"),
    concern: "Fast Regrowth",
    title: "Skin looks refreshed",
    quote: "The regrowth is so slow now after 2 weeks. I barely have to use it anymore!",
    name: "Linda S.",
  }
];`;

    content = content.replace(/export const transformations: Transformation\[\] = \[\];/, newTransformations);
    fs.writeFileSync(pPath, content, 'utf8');
    console.log(`Updated Before/After in ${app}`);
});
