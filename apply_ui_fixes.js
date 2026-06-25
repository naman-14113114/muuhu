const fs = require('fs');
const path = require('path');
const appsDir = path.join(__dirname, 'apps');

const apps = ['us', 'uk', 'ca', 'au'];

apps.forEach(app => {
  const appPath = path.join(appsDir, app);
  
  // 1. IPLVideo.tsx
  const videoPath = path.join(appPath, 'src/components/product/IPLVideo.tsx');
  if (fs.existsSync(videoPath)) {
    let videoContent = fs.readFileSync(videoPath, 'utf8');
    videoContent = videoContent.replace(
      'export function IPLVideo() {',
      'import { useEffect, useRef } from "react";\n\nexport function IPLVideo() {\n  const videoRef = useRef<HTMLVideoElement>(null);\n  useEffect(() => {\n    if (videoRef.current) {\n      videoRef.current.play().catch(e => console.log("Autoplay blocked:", e));\n    }\n  }, []);'
    );
    videoContent = videoContent.replace(
      /<video[\s\S]*?\/>/,
      '<video\n            ref={videoRef}\n            src="/media/products/buudy-led-mask/videos/hero.mp4"\n            autoPlay={true}\n            muted={true}\n            defaultMuted={true}\n            loop={true}\n            playsInline={true}\n            style={{ width: "100%", height: "100%", objectFit: "cover" }}\n          />'
    );
    fs.writeFileSync(videoPath, videoContent, 'utf8');
  }

  // 2. products.ts cartImage
  const productsPath = path.join(appPath, 'src/data/products.ts');
  if (fs.existsSync(productsPath)) {
    let prodContent = fs.readFileSync(productsPath, 'utf8');
    prodContent = prodContent.replace(
      /cartImage: productMediaAsset\("ipl_face_closeup\.png"\)/,
      'cartImage: productMediaAsset("ipl_provided_2.png")'
    );
    fs.writeFileSync(productsPath, prodContent, 'utf8');
  }

  // 3. home.ts Hero banner
  const homePath = path.join(appPath, 'src/data/home.ts');
  if (fs.existsSync(homePath)) {
    let homeContent = fs.readFileSync(homePath, 'utf8');
    homeContent = homeContent.replace(
      /src: productMediaAsset\("ipl_provided_2\.png"\)/,
      'src: productMediaAsset("ipl_hero_banner.png")'
    );
    fs.writeFileSync(homePath, homeContent, 'utf8');
  }

  // 4. buudy-led-mask-reviews.json
  const reviewsPath = path.join(appPath, 'src/data/reviews/buudy-led-mask-reviews.json');
  if (fs.existsSync(reviewsPath)) {
    let reviewsContent = fs.readFileSync(reviewsPath, 'utf8');
    let reviews = JSON.parse(reviewsContent);
    reviews.forEach((rev, idx) => {
      if (idx === 0) rev.images = ["/media/products/buudy-led-mask/images/review_img_1.png"];
      else if (idx === 1) rev.images = ["/media/products/buudy-led-mask/images/review_img_2.png"];
      else if (idx === 2) rev.images = ["/media/products/buudy-led-mask/images/review_img_3.png"];
      else if (idx === 3) rev.images = ["/media/products/buudy-led-mask/images/review_img_4.png"];
      else rev.images = [];
    });
    fs.writeFileSync(reviewsPath, JSON.stringify(reviews, null, 2), 'utf8');
  }

  // 5. productSections.ts Before/After
  const prodSecPath = path.join(appPath, 'src/data/productSections.ts');
  if (fs.existsSync(prodSecPath)) {
    let psContent = fs.readFileSync(prodSecPath, 'utf8');
    const newTrans = `export const transformations: Transformation[] = [
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
    id: "result-03",
    image: "",
    imageBefore: productMediaAsset("trustoo_ba_3_before.jpg", "buudy-led-mask", "images"),
    imageAfter: productMediaAsset("trustoo_ba_3_after.jpg", "buudy-led-mask", "images"),
    concern: "Strawberry Legs",
    title: "Incredible results",
    quote: "In less than 2 weeks, my strawberry legs have completely vanished.",
    name: "Sarah K.",
  }
];`;
    psContent = psContent.replace(/export const transformations: Transformation\[\] = \[[\s\S]*?\];/g, newTrans);
    fs.writeFileSync(prodSecPath, psContent, 'utf8');
  }

  // 6. YoungerYou.tsx Padding
  const youngerPath = path.join(appPath, 'src/components/home/YoungerYou.tsx');
  if (fs.existsSync(youngerPath)) {
    let yContent = fs.readFileSync(youngerPath, 'utf8');
    yContent = yContent.replace(/pt-20 md:pt-32/g, 'pt-8 md:pt-12');
    yContent = yContent.replace(/pt-16 md:pt-24/g, 'pt-6 md:pt-10');
    fs.writeFileSync(youngerPath, yContent, 'utf8');
  }
});
console.log('Successfully updated files across all apps.');
