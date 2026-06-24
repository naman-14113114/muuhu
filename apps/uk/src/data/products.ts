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
  name: "Muuhu IPL Hair Removal",
  heroTitle: "Muuhu IPL",
  heroEmphasis: "Hair Removal",
  shortDescription:
    "At-home IPL hair removal with ice cooling, 999,999 flashes, and 9 energy levels for long-lasting smoothness.",
  description:
    "At-home IPL hair removal reimagined for UK homes. The Muuhu IPL combines 999,999 flashes, built-in ice cooling at 8°C, 9 adjustable energy levels up to 16J, Auto and Manual modes, and an LCD touch display for painless, long-lasting hair reduction across your entire body.",
  seoTitle: "Best IPL Hair Removal UK | Muuhu Ice Cooling Device",
  seoDescription:
    "Shop the Muuhu IPL Hair Removal in the UK: 999,999 flashes, ice cooling, 9 energy levels, 16J max output, Auto and Manual modes, LCD touch display, 90-day returns, and free shipping.",
  currency: market.currency,
  priceCents: 9900,
  compareAtCents: 20900,
  rating: 4.9,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "GLOWKIT",
  promoLabel: "Glow kit promo applied",
  cartImage: productAsset("01-buudy-led-mask-front.webp"),
  gallery: [
    {
      src: productMediaAsset("Cleopatra-LED-Red-Light-Mask.webp"),
      alt: "Cleopatra LED Red Light Mask",
    },
    {
      src: productAsset("02-buudy-led-mask-side-profile.webp"),
      alt: "Muuhu IPL Hair Removal side profile",
    },
    {
      src: productAsset("03-buudy-led-mask-anti-ageing-mode.webp"),
      alt: "Muuhu IPL Hair Removal anti-ageing mode",
    },
    {
      src: productAsset("04-buudy-led-mask-blue-light-acne.webp"),
      alt: "Muuhu IPL Hair Removal blue light acne mode",
    },
    {
      src: productAsset("05-buudy-led-mask-packaging.webp"),
      alt: "Muuhu IPL Hair Removal packaging",
    },
    {
      src: productAsset("06-buudy-led-mask-results.webp"),
      alt: "Muuhu IPL Hair Removal results",
    },
    {
      src: productAsset("07-buudy-led-mask-controller.webp"),
      alt: "Muuhu IPL Hair Removal tap controller",
    },
    {
      src: productAsset("08-buudy-led-mask-lifestyle-use.webp"),
      alt: "Muuhu IPL Hair Removal lifestyle use",
    },
    {
      src: productAsset("09-buudy-led-mask-home-spa.webp"),
      alt: "Muuhu IPL Hair Removal home spa",
    },
    {
      src: productAsset("10-buudy-led-mask-dermatologist-recommended.webp"),
      alt: "Muuhu IPL Hair Removal dermatologist recommended",
    },
    {
      src: productAsset("11-buudy-led-mask-flexible-silicone.webp"),
      alt: "Muuhu IPL Hair Removal flexible silicone",
    },
    {
      src: productAsset("13-buudy-led-mask-starter-kit.webp"),
      alt: "Muuhu IPL Hair Removal starter kit",
    },
    {
      src: productMediaAsset("O3-w.webp"),
      alt: "Muuhu IPL Hair Removal O3",
    },
    {
      src: productAsset("Muuhu_purple.jpeg"),
      alt: "Muuhu IPL Hair Removal Purple",
    },
    {
      src: productAsset("01-buudy-led-mask-front.webp"),
      alt: "Muuhu IPL Hair Removal front view",
    },
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
    { quantity: "1x", label: "Muuhu IPL Device" },
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
      answer: "Yes. The Muuhu IPL device is universal voltage (AC 100–240V) which means it can be used worldwide without any issues."
    },
    {
      question: "What if I am pregnant or have a medical condition?",
      answer: "Do not use if you are pregnant, breastfeeding, or under 18. Consult your physician if you have epilepsy, are sensitive to light, take photosensitising medication, or have any skin condition. Avoid use on active infections, wounds, or recently tanned skin."
    },
    {
      question: "Do you sell this anywhere else?",
      answer: "The Muuhu IPL device is exclusively sold through our official store. There are no other authorised online retailers."
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
    {
      src: torchAsset("01-buudy-red-torch-main.png"),
      alt: "Muuhu Red Torch handheld light therapy device",
    },
    {
      src: torchAsset("02-buudy-red-torch-animation.gif"),
      alt: "Muuhu Red Torch light therapy in use",
      animated: true,
    },
    {
      src: torchAsset("03-buudy-red-torch-handheld.jpeg"),
      alt: "Muuhu Red Torch compact handheld device",
    },
    {
      src: torchAsset("04-buudy-red-torch-wavelengths.jpeg"),
      alt: "Muuhu Red Torch wavelength detail",
    },
    {
      src: torchAsset("05-buudy-red-torch-kit.jpeg"),
      alt: "Muuhu Red Torch kit and accessories",
    },
    {
      src: torchAsset("06-buudy-red-torch-body-relief.jpeg"),
      alt: "Muuhu Red Torch body relief use",
    },
    {
      src: torchAsset("07-buudy-red-torch-closeup.jpeg"),
      alt: "Muuhu Red Torch LED close up",
    },
    {
      src: torchAsset("08-buudy-red-torch-travel.jpeg"),
      alt: "Muuhu Red Torch travel-ready design",
    },
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

