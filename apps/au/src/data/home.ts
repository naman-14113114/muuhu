import { homeAsset, productAsset, productMediaAsset } from "@/lib/media";
import { muuhuIpl, MuuhuMassageKit } from "./products";

export const homeHero = {
  eyebrow: "Next-generation hair removal",
  title: "Smooth skin, simplified.",
  copy: "Professional-grade IPL hair removal from the comfort of your home. Experience long-lasting smoothness with 999,999 flashes, ice cooling technology, and 9 adjustable energy levels.",
  ctaLabel: "Shop the Muuhu Ultra Pro",
  ctaHref: `/products/${muuhuIpl.slug}`,
  images: [
    {
      src: productMediaAsset("ipl_hero_banner.png"), alt: "Muuhu Ultra Pro Hero",
    },
    {
      src: productMediaAsset("ipl_provided_homepage_1.png"), alt: "Muuhu Ultra Pro Lifestyle",
    },
    {
      src: productMediaAsset("ipl_provided_4.png"), alt: "Muuhu Ultra Pro In Use",
    },
  ],
};

export const homeMaskSpotlight = {
  eyebrow: "Professional grade",
  title: "The Muuhu Ultra Pro with ice cooling + 9 energy levels",
  copy: "Modern problems require modern solutions. The Muuhu Ultra Pro device makes at-home hair removal painless and effective. With built-in ice cooling at 8°C and 9 adjustable energy levels up to 16J, you can treat your entire body comfortably from home.",
  image: {
    src: productMediaAsset("ipl_provided_5.png"), alt: "Muuhu Ultra Pro Spotlight",
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
  copy: "The Muuhu Ultra Pro uses Intense Pulsed Light (600–1200nm) to target hair follicle melanin, disrupting the growth cycle for long-lasting reduction. Built-in ice cooling at 8°C keeps every flash painless.",
  ctaLabel: "Shop the IPL device",
  ctaHref: `/products/${muuhuIpl.slug}`,
  image: {
    src: productMediaAsset("ipl_face_closeup.png"), alt: "Muuhu Ultra Pro Face Close Up",
  },
};

export const homeFeatureCards = [
  {
    title: "999,999 flash lifespan",
    copy: "Your Muuhu Ultra Pro device is built to last for years of full-body treatments without ever needing a lamp replacement.",
    image: productMediaAsset("ipl_provided_7.png"),
  },
  {
    title: "For all skin sensitivities",
    copy: "9 adjustable energy levels let you start low and increase gradually. From sensitive areas to coarse hair, there is a setting for you.",
    image: productMediaAsset("ipl_replacement_3.png"),
  },
  {
    title: "Ice cooling at 8°C",
    copy: "The built-in ice cooling plate soothes your skin on contact, making every flash painless. No numbing creams needed.",
    image: productMediaAsset("ipl_provided_9.png"),
  },
];

export const homeLightTherapy = {
  eyebrow: "IPL technology",
  title: "What is IPL and how does it work?",
  copy: "IPL stands for Intense Pulsed Light. It targets the melanin pigment in hair follicles with broad-spectrum light energy (600–1200nm), disrupting the hair growth cycle over repeated treatments. Clinical studies have shown that consistent at-home IPL use over 6–12 weeks produces significant, long-lasting hair reduction. It is non-invasive, requires no consumables, and treats your entire body.",
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
    alt: "Muuhu Ultra Pro smooth skin results",
  },
};


export const homeMassageKitSpotlight = {
  eyebrow: "Portable and powerful",
  title: "Targeted light therapy in your hand.",
  copy: 'Simply set aside some "Me Time" for 15 minutes a day while you watch your favourite show. The Red MassageKit harnesses high-power LED technology for blood circulation support, stiffness relief, and targeted body care.',
  ctaLabel: "Buy Now",
  ctaHref: `/products/${MuuhuMassageKit.slug}`,
  image: {
    src: productMediaAsset("35-w.webp"),
    alt: "Muuhu Red MassageKit product spotlight",
  },
  product: MuuhuMassageKit,
};

export const homeWavelengthMap = {
  eyebrow: "Full-body treatment guide",
  title: "Your treatment zone map",
  copy: "The Muuhu Ultra Pro is designed for full-body use. Select any treatment zone below to see the recommended energy level and treatment tips.",
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
  title: "Why try the Muuhu Ultra Pro?",
  copy: "Thousands of happy customers and counting!",
  ctaLabel: "About Us",
  ctaHref: "/pages/about-us",
  image: productMediaAsset("banner_collage_image.jpeg")
};

export const homeHairFreeSmooth = {
  title: "Hair-Free Smooth Skin",
  subtitle: "Get ready to love your skin with permanent hair removal at home in just 6-12 weeks.",
  features: [
    { text: "Ice Cooling 8°C", icon: "/media/products/buudy-led-mask/images/icons/icon_1.svg" },
    { text: "Efficient & Painless", icon: "/media/products/buudy-led-mask/images/icons/icon_2.svg" },
    { text: "9 Intensity Levels", icon: "/media/products/buudy-led-mask/images/icons/icon_3.svg" },
    { text: "Ultra Fast", icon: "/media/products/buudy-led-mask/images/icons/icon_4.svg" },
    { text: "16J Energy Output", icon: "/media/products/buudy-led-mask/images/icons/icon_5.svg" },
    { text: "Auto / Manual Mode", icon: "/media/products/buudy-led-mask/images/icons/ipl_gun_icon.png" },
    { text: "999,999 Flashes", icon: "/media/products/buudy-led-mask/images/icons/icon_7.svg" },
    { text: "Cost-Effective", icon: "/media/products/buudy-led-mask/images/icons/icon_8.svg" },
    { text: "Compact Size", icon: "/media/products/buudy-led-mask/images/icons/icon_9.svg" }
  ]
};

export const homeProductShowcase = {
  eyebrow: "WHAT YOU ARE GETTING INTO",
  title: "Permanent hair removal that actually works.",
  product: muuhuIpl,
  features: [
    "Permanent hair reduction in just 6-12 weeks.",
    "Built-in ice cooling for painless treatments.",
    "999,999 flashes means it lasts a lifetime.",
    "Use on any body part including face and bikini."
  ],
  image: productMediaAsset("ipl_provided_homepage_1.png")
};

export const homeReviewQuote = {
  quote: "I have spent thousands of dollars on salon laser treatments that were painful and inconvenient. Now I use the Muuhu Ultra Pro at home and my hair is literally gone. It's painless, fast, and the best investment I've made for my skin.",
  author: "Sarah J.",
  image: productMediaAsset("reference_ipl.jpg")
};

export const homeProductVideo = {
  video: "/media/products/buudy-led-mask/videos/hero.mp4",
};

export const homeHiGorgeous = {
  title: "Hi Gorgeous!",
  copy: "Every summer has a story, and yours starts with smooth, glowing skin. You have spent countless hours and money on waxing, plucking, and shaving those pesky hairs, only for them to return.\n\nLife is too short to fight a daily battle with unwanted hair. Say hello to your ultimate confidence boost and get rid of hair safely and effectively with Muuhu.",
  image: productMediaAsset("hi_gorgeous.jpg"),
  icon: "/media/products/buudy-led-mask/images/icons/icon_4.svg",
};

export const homeSmoothSkin = {
  title: "Smooth Skin. Smarter Savings.",
  copy: "Summer-ready skin without the fuss? The Muuhu Ultra Pro IPL has you covered. Skip the expensive and painful waxing appointments or endless shaving routines.\n\nFeel completely confident and carefree in any outfit you choose. Stop wasting time and money—say hello to a lifetime of smooth, hair-free skin.",
  image: productMediaAsset("money_well_spent_edited_v2.jpg"),
  icon: "/media/products/buudy-led-mask/images/icons/bikini_icon.png",
};

export const homeWhyItWorks = {
  title: "Why Muuhu Works So Well",
  image: productMediaAsset("ipl_provided_5.png"),
  features: [
    { number: "1", title: "Sapphire Ice Cooling", copy: "Cools to 8°C on contact to protect skin and ensure a painless experience." },
    { number: "2", title: "16J High Energy Output", copy: "Reaches deep into the follicle to break the hair growth cycle effectively." },
    { number: "3", title: "Quartz Lamp", copy: "Durable and powerful, ensuring 999,999 flashes for a lifetime of use." },
    { number: "4", title: "Ergonomic Design", copy: "Fits perfectly in your hand for easy treatment of tricky areas." }
  ]
};

export const homeKeyStats = {
  stats: [
    { number: "8", label: "°C Ice Cooling", sublabel: "painless treatments" },
    { number: "9", label: "Energy Levels", sublabel: "for every skin type" },
    { number: "16", label: "Joules of Energy", sublabel: "maximum effectiveness" }
  ]
};

export const homeCombinedFeatures = {
  title: "Complete control & real results",
  copy: "The Auto-Glide mode flashes continuously as you glide the device over your skin, making it incredibly fast to treat large areas like legs and arms without missing a spot. With 9 intensity levels, you are always in control.\n\nStart low for sensitive areas like the bikini line or upper lip, and increase the power for coarser hair. Clinical studies show up to 92% hair reduction after just 6-12 weeks of consistent use. Stop managing your hair and start eliminating it.",
  image: productMediaAsset("ipl_provided_4.png"),
};
