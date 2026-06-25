import {
  productAsset,
  productMediaAsset,
  type ProductImage,
} from "@/lib/media";
import { market, type StoreCurrency } from "@/lib/market";
import {
  torchFaqs,
  torchWavelengths,
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
  template: "mask" | "torch";
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
    "At-home IPL hair removal reimagined for UK homes. The Muuhu Ultra Pro combines 999,999 flashes, built-in ice cooling at 8°C, 9 adjustable energy levels up to 16J, Auto and Manual modes, and an LCD touch display for painless, long-lasting hair reduction across your entire body.",
  seoTitle: "Best IPL Hair Removal UK | Muuhu Ice Cooling Device",
  seoDescription:
    "Shop the Muuhu Ultra Pro in the UK: 999,999 flashes, ice cooling, 9 energy levels, 16J max output, Auto and Manual modes, LCD touch display, 90-day returns, and free shipping.",
  currency: market.currency,
  priceCents: 9900,
  compareAtCents: 20900,
  rating: 4.9,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "GLOWKIT",
  promoLabel: "Glow kit promo applied",
  cartImage: productMediaAsset("ipl_face_closeup.png"),
        gallery: [
      { src: productMediaAsset("ipl_face_closeup.png"), alt: "Muuhu Ultra Pro Face Close Up" },
      { src: productMediaAsset("ipl_replacement_1.png"), alt: "Muuhu Ultra Pro Premium" },
      { src: productMediaAsset("ipl_provided_2.png"), alt: "Muuhu Ultra Pro" },
      { src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu Ultra Pro In Use" },
      { src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu Ultra Pro Close Up" },
      { src: productMediaAsset("ipl_provided_7.png"), alt: "Muuhu Ultra Pro Product Shot" },
      { src: productMediaAsset("ipl_provided_8.png"), alt: "Muuhu Ultra Pro Full View" },
      { src: productMediaAsset("ipl_replacement_2.png"), alt: "Muuhu Ultra Pro Lifestyle" },
      { src: productMediaAsset("ipl_provided_10.png"), alt: "Muuhu Ultra Pro Premium" }
    ],
  gifts: [
    {
      id: "premium-travel-box",
      name: "Premium Travel Box",
      valueCents: 3900,
      image: productMediaAsset("ChatGPT Image May 31, 2026, 11_53_13 PM.png"),
      label: "Exclusive item",
      href: "/pages/premium-travel-box",
    },
    {
      id: "red-light-torch",
      name: "Muuhu LED Torch",
      valueCents: 7000,
      image: productAsset("Muuhu-led-torch.jpg"),
      label: "Limited edition",
      href: "/products/red-light-torch",
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
    { quantity: "1x", label: "Premium Travel Box", tag: "Free gift" },
    { quantity: "1x", label: "Muuhu Ultra Pro Device" },
    { quantity: "1x", label: "Power Adapter (100–240V)" },
    { quantity: "1x", label: "Protective Goggles" },
    { quantity: "1x", label: "User Manual" },
    { quantity: "1x", label: "Muuhu LED Torch", tag: "Free gift" },
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

const torchAsset = (fileName: string) =>
  productAsset(fileName, "buudy-red-torch");

export const MuuhuRedTorch: Product = {
  id: "red-light-torch",
  sku: "1000020384558655",
  slug: "red-light-torch",
  template: "torch",
  name: "Muuhu Red Torch",
  heroTitle: "Muuhu Red",
  heroEmphasis: "Torch",
  shortDescription:
    "A compact red and near-infrared light therapy torch with 3 targeted wavelengths for skin health, body relief, and easy travel use.",
  description:
    "Red light therapy device with 3 wavelengths: 630nm, 660nm, and 850nm. Designed for localized body relief, acne care, skin health, and portable at-home wellness rituals.",
  seoTitle: "Muuhu Red Torch | 3 Wavelength Red Light Therapy Device",
  seoDescription:
    "Portable red light therapy torch with 3 wavelengths, near infrared support, rechargeable battery, and targeted body and skin relief.",
  currency: market.currency,
  priceCents: 7000,
  compareAtCents: 17500,
  rating: 4.8,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "TORCH60",
  promoLabel: "Red torch offer applied",
  cartImage: torchAsset("01-buudy-red-torch-main.png"),
    gallery: [
      { src: torchAsset("01-buudy-red-torch-main.png"), alt: "Muuhu LED Torch" },
      { src: torchAsset("02-buudy-red-torch-angle.png"), alt: "Muuhu LED Torch Lifestyle" },
      { src: torchAsset("03-buudy-red-torch-lifestyle.png"), alt: "Muuhu LED Torch Device" }
    ],
  gifts: [],
  specs: [
    { label: "Dimensions", value: "2.9cm x 12.5cm (0.95in x 4.92in)" },
    { label: "Wavelength", value: "630nm, 660nm, 850nm" },
    { label: "Intensity Level", value: "4 levels" },
    { label: "Power Source", value: "Rechargeable battery" },
    { label: "LED Count", value: "3 LEDs" },
    { label: "Light Color", value: "Red" },
    { label: "Voltage", value: "220V / 110V" },
    { label: "Power", value: "3W" },
    { label: "Irradiance", value: "Surface 281mW/cm2, 4in 71mW/cm2" },
    { label: "Battery", value: "2200mA" },
    { label: "Warranty", value: "24 months" },
    { label: "Lifespan", value: "50,000+ hours" },
    { label: "Weight", value: "0.2kg" },
  ],
  included: [
    { quantity: "1x", label: "Strap" },
    { quantity: "1x", label: "USB cable" },
    { quantity: "1x", label: "Red Light Torch" },
  ],
  highlights: [
    "Stimulate collagen production",
    "Smooths skin & fine lines",
    "Assist with anti-ageing and healing",
    "Enhances overall skin health",
    "Portable, safe, and easy to use",
    "Minimize wrinkles and lines",
  ],
  faqs: torchFaqs,
  wavelengths: torchWavelengths,
  badges: [
    "3 precision wavelengths",
    "Rechargeable battery",
    "Dual voltage",
    "24 month warranty",
  ],
};

export const products = [muuhuIpl, MuuhuRedTorch];

export const productsById = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<string, Product>;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return productsById[id];
}




