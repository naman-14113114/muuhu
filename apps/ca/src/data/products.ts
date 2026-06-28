import {
  productAsset,
  productMediaAsset,
  type ProductImage,
} from "@/lib/media";
import { market, type StoreCurrency } from "@/lib/market";
import {
  faqs,
  massagerFaqs,
  massagerWavelengths,
  type FAQItem,
  type Wavelength,
} from "./productSections";

export type ProductGift = {
  id: string;
  name: string;
  valueCents: number;
  image: string;
  label: string;
  href: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type IncludedItem = {
  quantity: string;
  label: string;
  tag?: string;
};

export type Product = {
  id: string;
  sku: string;
  slug: string;
  template: "mask" | "massage-kit";
  name: string;
  heroTitle: string;
  heroEmphasis: string;
  shortDescription: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  currency: StoreCurrency;
  priceCents: number;
  compareAtCents: number;
  rating: number;
  reviewCount: number;
  customerCount: string;
  promoCode: string;
  promoLabel: string;
  cartImage: string;
  gallery: ProductImage[];
  gifts: ProductGift[];
  specs: ProductSpec[];
  included: IncludedItem[];
  highlights: string[];
  keyBenefits?: string[];
  differentiators?: string[];
  faqs: FAQItem[];
  wavelengths?: Wavelength[];
  badges: string[];
};

export const muuhuIpl: Product = {
  id: "muuhu-ipl-hair-removal",
  sku: "MUUHU-IPL-ICE-1",
  slug: "muuhu-ipl-hair-removal",
  template: "mask",
  name: "Muuhu Ultra Pro",
  heroTitle: "Muuhu Ultra",
  heroEmphasis: "Pro",
  shortDescription:
    "At-home IPL hair removal with ice cooling, 999,999 flashes, and 9 energy levels for long-lasting smoothness.",
  description:
    "At-home IPL hair removal reimagined for Canadian homes. The Muuhu Ultra Pro combines 999,999 flashes, built-in ice cooling at 8°C, 9 adjustable energy levels up to 16J, Auto and Manual modes, and an LCD touch display for painless, long-lasting hair reduction across your entire body.",
  seoTitle: "Best IPL Hair Removal Canada | Muuhu Ice Cooling Device",
  seoDescription:
    "Shop the Muuhu Ultra Pro in Canada: 999,999 flashes, ice cooling, 9 energy levels, 16J max output, Auto and Manual modes, LCD touch display, 90-day returns, and free shipping.",
  currency: market.currency,
  priceCents: 17900,
  compareAtCents: 35900,
  rating: 4.9,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "GLOWKIT",
  promoLabel: "Glow kit promo applied",
  cartImage: productMediaAsset("ipl_face_closeup.png"),
        gallery: [
      { src: productMediaAsset("ipl_face_closeup.png"), alt: "Muuhu Ultra Pro Face Close Up" },
      { src: productMediaAsset("ipl_price_comparison.jpg"), alt: "Muuhu Ultra Pro Premium" },
      { src: productMediaAsset("ipl_provided_2_v2.png"), alt: "Muuhu Ultra Pro" },
      { src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu Ultra Pro In Use" },
      { src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu Ultra Pro Close Up" },
      { src: productMediaAsset("ipl_provided_7.png"), alt: "Muuhu Ultra Pro Product Shot" },
      { src: productMediaAsset("ipl_replacement_3.png"), alt: "Muuhu Ultra Pro Full View" },
      { src: productMediaAsset("ipl_replacement_4.png"), alt: "Muuhu Ultra Pro Lifestyle" },
      { src: productMediaAsset("ipl_provided_10.png"), alt: "Muuhu Ultra Pro Premium" }
    ],
  gifts: [
    {
      id: "premium-travel-box",
      name: "Premium Travel Box",
      valueCents: 3900,
      image: productMediaAsset("ipl_price_comparison.jpg"),
      label: "Exclusive item",
      href: "/pages/premium-travel-box",
    },
    {
      id: "muuhu-massage-kit",
      name: "Muuhu Massage Kit",
      valueCents: 9900,
      image: productMediaAsset("massage_kit_hero.png", "muuhu-massage-kit", "images"),
      label: "Limited edition",
      href: "/products/muuhu-massage-kit",
    },
    {
      id: "skincare-ebook",
      name: "Skincare E-Book",
      valueCents: 1900,
      image: productMediaAsset("free_guide-v2.webp"),
      label: "Digital copy",
      href: "/pages/skincare-guide",
    },
  ],
  specs: [
    { label: "Technology", value: "IPL (Intense Pulsed Light)" },
    { label: "Flash Count", value: "999,999 flashes" },
    { label: "Max Energy", value: "16J" },
    { label: "Energy Levels", value: "9 adjustable levels" },
    { label: "Wavelength Range", value: "600–1200nm" },
    { label: "Cooling", value: "Built-in ice cooling (~8°C / 46°F)" },
    { label: "Modes", value: "Auto (glide) + Manual (stamp)" },
    { label: "Display", value: "LCD touch screen" },
    { label: "Power Supply", value: "AC 100–240V (corded)" },
    { label: "Material", value: "Plastic" },
    { label: "Waterproof", value: "No" },
  ],
  included: [
    { quantity: "1×", label: "Premium Travel Box", tag: "Free gift" },
    { quantity: "1×", label: "Muuhu Ultra Pro Device" },
    { quantity: "1×", label: "Power Adapter (100–240V)" },
    { quantity: "1×", label: "Protective Goggles" },
    { quantity: "1×", label: "User Manual" },
    { quantity: "1×", label: "Muuhu Massage Kit", tag: "Free gift" },
  ],
  highlights: [
    "999,999 flashes for years of full-body treatments",
    "Built-in ice cooling for painless sessions",
    "9 adjustable energy levels for all skin sensitivities",
    "Auto-glide mode for fast treatment on large areas",
  ],
  keyBenefits: [
    "Painless ice-cooling technology",
    "Long-lasting hair reduction",
    "Full-body treatment capability",
    "Fast auto-glide mode for legs and arms",
    "LCD touch display with energy memory",
    "Universal voltage for worldwide use",
    "Compact and ergonomic design",
  ],
  differentiators: [
    "999,999 flash lifespan — no lamp replacements",
    "Ice cooling at 8°C for pain-free sessions",
    "16J max energy for effective results",
    "9 intensity levels for sensitive to coarse hair",
    "Auto and Manual modes for precision and speed",
    "LCD display shows level, flash count, and mode",
    "Energy memory remembers your last setting",
  ],
  badges: [
    "999,999 flashes",
    "Ice cooling technology",
    "90-day money back",
    "Free tracked shipping",
  ],
  faqs: [
    {
      question: "How does IPL hair removal work?",
      answer: "IPL (Intense Pulsed Light) targets the melanin in hair follicles with broad-spectrum light energy (600–1200nm). The light is absorbed by the hair pigment, which disrupts the growth cycle over repeated treatments, leading to long-lasting hair reduction."
    },
    {
      question: "Is the ice cooling really painless?",
      answer: "The built-in ice cooling plate maintains a temperature of approximately 8°C (46°F) at the treatment window, soothing the skin on contact. Most users describe the sensation as a mild warm snap followed by instant cooling relief."
    },
    {
      question: "How many sessions until I see results?",
      answer: "Results vary by individual. Many users notice hair shedding after 2–3 weekly sessions. Consistent use over 6–12 weeks typically produces significant, long-lasting hair reduction. After that, occasional maintenance sessions keep results smooth."
    },
    {
      question: "What skin tones and hair colours work with IPL?",
      answer: "IPL works best on light to medium skin tones with dark hair, where the contrast between skin and hair pigment allows effective light absorption. It is not recommended for very dark skin tones (Fitzpatrick V–VI) or for very light, red, grey, or white hair due to insufficient melanin."
    },
    {
      question: "Can I use this on any body area?",
      answer: "Yes, the device is designed for full-body use including legs, arms, underarms, bikini line, chest, back, and facial areas below the cheekbones. Avoid use around the eyes, on tattoos, moles, or irritated skin."
    },
    {
      question: "Can I use it in my country?",
      answer: "Yes. The Muuhu Ultra Pro device is universal voltage (AC 100–240V) which means it can be used worldwide without any issues."
    },
    {
      question: "What if I am pregnant or have a medical condition?",
      answer: "Do not use if you are pregnant, breastfeeding, or under 18. Consult your physician if you have epilepsy, are sensitive to light, take photosensitising medication, or have any skin condition. Avoid use on active infections, wounds, or recently tanned skin."
    },
    {
      question: "Do you sell this anywhere else?",
      answer: "The Muuhu Ultra Pro device is exclusively sold through our official store. There are no other authorised online retailers."
    },
  ],
};

const massagerAsset = (fileName: string) => productMediaAsset(fileName, "muuhu-massage-kit", "images");

export const MuuhuMassageKit: Product = {
  id: "muuhu-massage-kit",
  sku: "1458336123034558477",
  slug: "muuhu-massage-kit",
  template: "massage-kit",
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
  priceCents: 6900,
  compareAtCents: 22000,
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
};

export const products = [muuhuIpl, MuuhuMassageKit];

export const productsById = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<string, Product>;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return productsById[id];
}




