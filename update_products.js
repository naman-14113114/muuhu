const fs = require('fs');
const path = require('path');

const countries = ['us', 'uk', 'ca', 'au'];

const prices = {
  us: { priceCents: 4900, compareAtCents: 16000 },
  au: { priceCents: 7900, compareAtCents: 16000 },
  uk: { priceCents: 3900, compareAtCents: 12500 }, // roughly proportional
  ca: { priceCents: 6900, compareAtCents: 22000 }
};

countries.forEach(country => {
  const filePath = path.join(__dirname, 'apps', country, 'src', 'data', 'products.ts');
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace torchAsset with massagerAsset
  content = content.replace(
    /const torchAsset = \(fileName: string\) =>\s*productAsset\(fileName, "buudy-red-torch"\);/g,
    `const massagerAsset = (fileName: string) => productAsset(fileName, "muuhu-massage-kit");`
  );

  // We need to replace the entire export const MuuhuRedTorch block
  const torchBlockRegex = /export const MuuhuRedTorch: Product = \{[\s\S]*?\n\};/g;

  const newBlock = `export const MuuhuMassageKit: Product = {
  id: "muuhu-massage-kit",
  sku: "1458336123034558477",
  slug: "muuhu-massage-kit",
  template: "torch",
  name: "Muuhu Massage Kit",
  heroTitle: "Muuhu",
  heroEmphasis: "Massage Kit",
  shortDescription:
    "A versatile 3-piece resin massage tool kit including a Gua Sha board, massage comb, and beauty pen for comprehensive body relaxation and puffiness relief.",
  description:
    "Experience SPA-quality massage at home. This 3-piece resin kit features a Gua Sha scraping board to reduce puffiness, a wide-toothed comb to relieve tension, and an acupuncture beauty pen. Embrace traditional Chinese therapy for a rejuvenated appearance.",
  seoTitle: "Muuhu Massage Kit | 3-Piece Gua Sha & Tension Relief",
  seoDescription:
    "Reduce puffiness and tension with the Muuhu Massage Kit. Features a premium resin Gua Sha scraping board, massage comb, and beauty pen.",
  currency: market.currency,
  priceCents: ${prices[country].priceCents},
  compareAtCents: ${prices[country].compareAtCents},
  rating: 4.9,
  reviewCount: 1172,
  customerCount: "1,100+",
  promoCode: "MASSAGE50",
  promoLabel: "Massage kit offer applied",
  cartImage: massagerAsset("massage_kit_hero.png"),
  gallery: [
    { src: massagerAsset("massage_kit_gallery_1.png"), alt: "Muuhu Massage Kit Gua Sha" },
    { src: massagerAsset("massage_kit_gallery_2.png"), alt: "Muuhu Massage Kit Comb" },
    { src: massagerAsset("massage_kit_gallery_3.png"), alt: "Muuhu Massage Kit Application" },
    { src: massagerAsset("massage_kit_gallery_4.png"), alt: "Muuhu Massage Kit Beauty Pen" },
    { src: massagerAsset("massage_kit_hero.png"), alt: "Muuhu Massage Kit Bundle" }
  ],
  gifts: [],
  specs: [
    { label: "Material", value: "Premium Smooth Resin" },
    { label: "Scraping Board", value: "5.2 x 8.9cm" },
    { label: "Massage Comb", value: "4.5 x 10.6cm" },
    { label: "Beauty Pen", value: "Included" },
    { label: "Application", value: "Face, Neck, Body, Feet" },
    { label: "Power Supply", value: "None Electric (Manual)" }
  ],
  included: [
    { quantity: "1×", label: "Gua Sha Scraping Board" },
    { quantity: "1×", label: "Wide-Toothed Massage Comb" },
    { quantity: "1×", label: "Acupuncture Beauty Pen" },
    { quantity: "1×", label: "Storage Pouch" }
  ],
  highlights: [
    "Versatile 3-piece comprehensive relaxation kit",
    "Reduces puffiness and relieves muscle tension",
    "Traditional Chinese acupuncture and scraping therapy",
    "SPA-quality full-body treatment at home"
  ],
  keyBenefits: [
    "Reduces facial puffiness",
    "Relieves neck and back tension",
    "Promotes rejuvenated appearance",
    "Durable resin material",
    "Portable and lightweight"
  ],
  differentiators: [
    "Complete 3-piece kit versus standard single boards",
    "Acupuncture pen included for targeted relief",
    "Combines Gua Sha with scalp tension relief",
    "Smooth resin finish for sensitive skin"
  ],
  badges: [
    "Reduces puffiness",
    "Relieves tension",
    "SPA-quality",
    "Full-body use"
  ],
  faqs: [
    {
      question: "How do I use the Gua Sha scraping board?",
      answer: "Apply a facial oil or serum, then gently glide the scraping board upwards and outwards along your jawline, cheeks, and forehead to reduce puffiness and promote lymphatic drainage."
    },
    {
      question: "What is the massage comb used for?",
      answer: "The wide-toothed resin comb is perfect for massaging the scalp and neck. It releases deep tension without tangling or breaking your hair, providing ultimate relaxation."
    },
    {
      question: "Can I use this kit anywhere on my body?",
      answer: "Yes! While primarily used for the face and neck, the tools are versatile enough to relieve tension on your back, shoulders, arms, and even feet."
    },
    {
      question: "How do I clean the resin tools?",
      answer: "Simply wipe them clean with a damp cloth or wash them with mild soap and lukewarm water. Dry completely before storing them in the provided pouch."
    }
  ]
};`;

  content = content.replace(torchBlockRegex, newBlock);

  // Also replace `included` inside MuuhuIPL (if it references Muuhu LED Torch)
  content = content.replace(/Muuhu LED Torch/g, "Muuhu Massage Kit");

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated products.ts for ${country}`);
});
