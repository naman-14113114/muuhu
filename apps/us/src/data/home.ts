import { homeAsset, productAsset, productMediaAsset } from "@/lib/media";
import { muuhuIpl, MuuhuRedTorch } from "./products";

export const homeHero = {
  eyebrow: "Next-generation hair removal",
  title: "Smooth skin, simplified.",
  copy: "Professional-grade IPL hair removal from the comfort of your home. Experience long-lasting smoothness with 999,999 flashes, ice cooling technology, and 9 adjustable energy levels.",
  ctaLabel: "Shop the Muuhu IPL",
  ctaHref: `/products/${muuhuIpl.slug}`,
  images: [
    {
      src: productMediaAsset("ipl_provided_2.png"), alt: "Muuhu IPL Hero",
    },
    {
      src: productMediaAsset("ipl_provided_11.png"), alt: "Muuhu IPL Lifestyle",
    },
    {
      src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu IPL In Use",
    },
  ],
};

export const homeMaskSpotlight = {
  eyebrow: "Professional grade",
  title: "The Muuhu IPL with ice cooling + 9 energy levels",
  copy: "Modern problems require modern solutions. The Muuhu IPL Hair Removal device makes at-home hair removal painless and effective. With built-in ice cooling at 8Ã‚Â°C and 9 adjustable energy levels up to 16J, you can treat your entire body comfortably from home.",
  image: {
    src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu IPL Spotlight",
  },
  product: muuhuIpl,
};

export const homeSkincareGuideIntro = {
  eyebrow: "Treatment planner",
  title: "Start with a routine that works for your skin.",
  copy: "Use the Muuhu treatment planner to understand your skin type, choose the right energy level, and feel confident from your first session. It is simple, supportive, and made for real at-home consistency.",
  ctaLabel: "Start Quiz",
  ctaHref: "/pages/skincare-quiz",
};

export const homeTechnologySpotlight = {
  eyebrow: "IPL ice cooling technology",
  title: "A smarter way to remove hair.",
  copy: "The Muuhu IPL uses Intense Pulsed Light (600Ã¢â‚¬â€œ1200nm) to target hair follicle melanin, disrupting the growth cycle for long-lasting reduction. Built-in ice cooling at 8Ã‚Â°C keeps every flash painless.",
  ctaLabel: "Shop the IPL device",
  ctaHref: `/products/${muuhuIpl.slug}`,
  image: {
    src: productMediaAsset("ipl_face_closeup.jpg"), alt: "Muuhu IPL Face Close Up",
  },
};

export const homeFeatureCards = [
  {
    title: "999,999 flash lifespan",
    copy: "Your Muuhu IPL device is built to last for years of full-body treatments without ever needing a lamp replacement.",
    image: productMediaAsset("ipl_provided_7.png"),
  },
  {
    title: "For all skin sensitivities",
    copy: "9 adjustable energy levels let you start low and increase gradually. From sensitive areas to coarse hair, there is a setting for you.",
    image: productMediaAsset("ipl_provided_8.png"),
  },
  {
    title: "Ice cooling at 8Ã‚Â°C",
    copy: "The built-in ice cooling plate soothes your skin on contact, making every flash painless. No numbing creams needed.",
    image: productMediaAsset("ipl_provided_9.png"),
  },
];

export const homeLightTherapy = {
  eyebrow: "IPL technology",
  title: "What is IPL and how does it work?",
  copy: "IPL stands for Intense Pulsed Light. It targets the melanin pigment in hair follicles with broad-spectrum light energy (600Ã¢â‚¬â€œ1200nm), disrupting the hair growth cycle over repeated treatments. Clinical studies have shown that consistent at-home IPL use over 6Ã¢â‚¬â€œ12 weeks produces significant, long-lasting hair reduction. It is non-invasive, requires no consumables, and treats your entire body.",
  image: {
    src: productMediaAsset("ipl_provided_10.png"),
    alt: "IPL technology editorial image",
  },
};

export const homeYoungerYou = {
  title: "Reveal smoother skin",
  copy: "With 999,999 flashes, ice cooling technology, and Auto-glide mode for fast treatment on large areas, you can achieve salon-quality hair removal from the comfort of your home.",
  image: {
    src: productMediaAsset("reference_ipl.jpg"),
    alt: "Muuhu IPL Hair Removal smooth skin results",
  },
};


export const homeTorchSpotlight = {
  eyebrow: "Portable and powerful",
  title: "Targeted light therapy in your hand.",
  copy: 'Simply set aside some "Me Time" for 15 minutes a day while you watch your favourite show. The Red Torch harnesses high-power LED technology for blood circulation support, stiffness relief, and targeted body care.',
  ctaLabel: "Buy Now",
  ctaHref: `/products/${MuuhuRedTorch.slug}`,
  image: {
    src: productMediaAsset("35-w.webp"),
    alt: "Muuhu Red Torch product spotlight",
  },
  product: MuuhuRedTorch,
};

export const homeWavelengthMap = {
  eyebrow: "Full-body treatment guide",
  title: "Your treatment zone map",
  copy: "The Muuhu IPL is designed for full-body use. Select any treatment zone below to see the recommended energy level and treatment tips.",
  zones: [
    "Legs",
    "Arms",
    "Underarms",
    "Bikini line",
    "Chest & back",
    "Face (below cheekbones)",
  ],
};

export const homeCustomerReviewsGrid = {
  title: "Why try the Muuhu IPL Hair Removal?",
  copy: "Thousands of happy customers and counting!",
  ctaLabel: "About Us",
  ctaHref: "/pages/about-us",
  image: productMediaAsset("banner_collage_image.jpeg")
};




