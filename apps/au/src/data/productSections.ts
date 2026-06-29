import { productAsset, productMediaAsset } from "@/lib/media";

export type Feature = {
  title: string;
  kicker: string;
  body: string;
};

export type Transformation = {
  id: string;
  concern: string;
  image: string;
  imageBefore?: string;
  imageAfter?: string;
  title: string;
  quote: string;
  name: string;
};

export type ReviewVideo = {
  id: string;
  poster: string;
  src: string;
  fallbackSrc?: string;
};

export type Wavelength = {
  nm: string;
  name: string;
  description: string;
  color: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const features: Feature[] = [
  {
    title: "999,999 Flashes",
    kicker: "Lifelong Use",
    body: "With 999,999 flashes, the Muuhu Ultra Pro device offers years of full-body treatments. You will never need to buy a replacement lamp or cartridge, making it a one-time investment for lifelong smooth skin.",
  },
  {
    title: "Ice Cooling Technology",
    kicker: "Painless Treatments",
    body: "Traditional hair removal can be painful, but Muuhu is different. Built-in ice cooling technology lowers the temperature at the treatment window to 8°C (46°F), soothing your skin on contact and making every flash comfortable.",
  },
  {
    title: "9 Energy Levels",
    kicker: "For All Skin Sensitivities",
    body: "Whether you're treating a sensitive bikini line or stubborn leg hair, you have total control. 9 adjustable energy levels up to a powerful 16J ensure you get effective results while keeping your skin safe and comfortable.",
  },
  {
    title: "Auto & Manual Modes",
    kicker: "Fast & Precise",
    body: "Use Auto-glide mode for fast, continuous flashes on large areas like legs and arms. Switch to Manual stamp mode for precision around the upper lip, underarms, and bikini line.",
  },
  {
    title: "LCD Touch Screen",
    kicker: "Smart Memory",
    body: "The intuitive LCD touch display shows your remaining flashes, current energy level, and mode. Plus, smart energy memory remembers your last used setting so you can pick up exactly where you left off.",
  },
  {
    title: "Universal Voltage",
    kicker: "Travel Ready",
    body: "Take your Muuhu Ultra Pro device anywhere in the world. It operates on AC 100-240V, meaning you just need a plug adapter to keep up with your hair removal routine while traveling.",
  },
];

export const realLifeImages = [
  {
    src: productAsset("10-buudy-led-mask-dermatologist-recommended.webp"),
    alt: "Dermatologist recommended Muuhu Ultra Pro",
  },
  {
    src: productAsset("02-buudy-led-mask-side-profile.webp"),
    alt: "Muuhu Ultra Pro side profile",
  },
  {
    src: productAsset("15-buudy-led-mask-warranty.webp"),
    alt: "Muuhu Ultra Pro warranty",
  },
  {
    src: productAsset("08-buudy-led-mask-lifestyle-use.webp"),
    alt: "Muuhu Ultra Pro lifestyle use",
  },
  {
    src: productAsset("11-buudy-led-mask-flexible-silicone.webp"),
    alt: "Flexible silicone Muuhu Ultra Pro",
  },
  {
    src: productAsset("14-buudy-led-mask-award-2026.webp"),
    alt: "Muuhu Ultra Pro award 2026",
  },
  {
    src: productAsset("03-buudy-led-mask-anti-ageing-mode.webp"),
    alt: "Muuhu Ultra Pro anti-ageing mode",
  },
  {
    src: productAsset("13-buudy-led-mask-starter-kit.webp"),
    alt: "Muuhu Ultra Pro starter kit",
  },
];

export const transformations: Transformation[] = [
  {
    id: "result-01",
    image: productMediaAsset("ba_1.png", "buudy-led-mask", "images"),
    concern: "Facial Hair",
    title: "Confidence restored",
    quote: "I was so embarrassed by my sideburns that I avoided photos. By week 4 they were completely gone. I actually cried when I looked in the mirror. Worth every single penny.",
    name: "Donna P., 34 years old",
  },
  {
    id: "result-02",
    image: productMediaAsset("ba_2.png", "buudy-led-mask", "images"),
    concern: "Dark Underarms",
    title: "IT REALLY WORKS!!",
    quote: "I had dark underarm shadow for years and nothing worked. Started using this at week 0 and by week 3, I can finally wear sleeveless tops without thinking twice. Genuinely life changing.",
    name: "Jane P., 26 years old",
  },
  {
    id: "result-03",
    image: productMediaAsset("ba_3.png", "buudy-led-mask", "images"),
    concern: "Leg Hair",
    title: "Incredible results",
    quote: "My legs went from stubbly at week 2 to silky smooth by week 4. Haven\u2019t picked up a razor since. My friends keep asking what I\u2019m using and I send them straight here.",
    name: "Sarah K., 22 years old",
  },
  {
    id: "result-04",
    image: productMediaAsset("ba_4.png", "buudy-led-mask", "images"),
    concern: "Stubborn Regrowth",
    title: "So fast to see results",
    quote: "I was sceptical but the hair was already noticeably finer from week 1 to week 2. Didn\u2019t expect results this fast. Should have bought this years ago instead of wasting money on waxing.",
    name: "Amanda L., 29 years old",
  },
  {
    id: "result-05",
    image: productMediaAsset("ba_5.png", "buudy-led-mask", "images"),
    concern: "Bikini Line",
    title: "Life changing",
    quote: "Week 0 was rough \u2014 constant ingrowns and bumps. By week 4 it\u2019s completely smooth and I\u2019m not even exaggerating. Best purchase I\u2019ve made this year, hands down.",
    name: "Rebecca H., 31 years old",
  },
  {
    id: "result-06",
    image: productMediaAsset("ba_6.png", "buudy-led-mask", "images"),
    concern: "Underarm Stubble",
    title: "Literal glow up",
    quote: "Between week 2 and week 3 the stubble just stopped coming back. No more dark dots, no more bumps. The ice cooling makes it painless too. I use it while watching TV.",
    name: "Karen W., 24 years old",
  },
  {
    id: "result-07",
    image: productMediaAsset("ba_7.png", "buudy-led-mask", "images"),
    concern: "Shaving Rash",
    title: "Best investment ever",
    quote: "I used to get horrible razor rash every single time I shaved. From week 1 to week 3 my skin is smoother than it has ever been. Wish I found this sooner honestly.",
    name: "Linda S., 27 years old",
  },
  {
    id: "result-08",
    image: productMediaAsset("ba_8.png", "buudy-led-mask", "images"),
    concern: "Ingrown Hairs",
    title: "Amazing difference",
    quote: "Ingrown hairs were my absolute nightmare. Started at week 0 and by week 2 they\u2019re completely gone. The ice cooling tip feels amazing. Already told my sister to get one.",
    name: "Emily T., 21 years old",
  }
];

export const reviewVideos: ReviewVideo[] = [
  {
    id: "review-01",
    poster: "",
    src: productMediaAsset("Muuhu v6.mov", "buudy-led-mask", "videos"),
  },
  {
    id: "review-02",
    poster: "",
    src: productMediaAsset("Muuhu v2.mov", "buudy-led-mask", "videos"),
  },
  {
    id: "review-03",
    poster: "",
    src: productMediaAsset("Muuhu v5.mov", "buudy-led-mask", "videos"),
  },
  {
    id: "review-04",
    poster: "",
    src: productMediaAsset("Muuhu v11.mov", "buudy-led-mask", "videos"),
  },
  {
    id: "review-05",
    poster: "",
    src: productMediaAsset("Muuhu v3.mov", "buudy-led-mask", "videos"),
  },
  {
    id: "review-06",
    poster: "",
    src: productMediaAsset("8.webm", "buudy-led-mask", "videos"),
  },
  {
    id: "review-07",
    poster: "",
    src: productMediaAsset("7.webm", "buudy-led-mask", "videos"),
  },
  {
    id: "review-08",
    poster: "",
    src: productMediaAsset("10.webm", "buudy-led-mask", "videos"),
  },
  {
    id: "review-09",
    poster: "",
    src: productMediaAsset("4.mp4", "buudy-led-mask", "videos"),
  },
  /*
  {
    id: "review-01",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486304350_448129a4-6d94-4e44-b8af-511f3e7999b2.webp",
    src: productMediaAsset("review-01.mp4", "buudy-led-mask", "videos"),
    fallbackSrc:
      "https://cdn2.videowise.com/converted/videos/1680194145059_06e68cf3-1a7d-4636-a05a-8c1922a066a4_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-02",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486138534_38dd960f-2287-4bfc-b1be-af40bc8ef5d6.webp",
    src: productMediaAsset("review-02.mp4", "buudy-led-mask", "videos"),
    fallbackSrc:
      "https://cdn2.videowise.com/converted/videos/1686511751028_e8ecbe6c-94ca-4754-bff1-4bdfff8aad16_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-03",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485722607_ded18359-40b7-427c-b2a9-62e48436f87c.webp",
    src: productMediaAsset("review-03.mp4", "buudy-led-mask", "videos"),
    fallbackSrc:
      "https://cdn2.videowise.com/converted/videos/1679081088110_c7eea873-a477-4a43-aafb-bcbc47f285ca_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-04",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485860443_d12fd0ec-8701-4fe7-8e68-1c801ff59f85.webp",
    src: productMediaAsset("review-04.mp4", "buudy-led-mask", "videos"),
    fallbackSrc:
      "https://cdn2.videowise.com/converted/videos/1684780828045_7e4e871c-89be-45e4-9fb5-1d4c9ac1f30f_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-05",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485816239_f9dba8d1-d096-4067-aff8-eb4a72366122.webp",
    src: productMediaAsset("review-05.mp4", "buudy-led-mask", "videos"),
    fallbackSrc:
      "https://cdn2.videowise.com/converted/videos/1679081092710_1bac0b63-1caf-46ec-8a9e-33981ec0d67c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-06",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485713943_cdd6cc24-2387-470e-b124-abd3854c444a.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679081090744_9551ac45-ed4a-43b8-b9ac-8213907377b3_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-07",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485680835_1fadaf66-e8f6-4c8b-aa7c-4396245b1faa.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679081088709_a5c725fc-6f49-4c5b-a9df-fcc86e2f961c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-08",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485637662_4fa63d64-8298-4f58-9f47-9adfa370720d.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679081087361_1db3b2cc-7be9-4715-bb3f-0fefa4d95837_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-09",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485657649_d1f364b2-99cf-46f6-96f5-e4e7c804a5d9.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679081086957_557b2d69-79d2-4cee-8ba8-63e316eff8c7_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-10",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485662907_1e32b62d-e59f-4f2e-abaf-aa9707c46121.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679080157636_4c0c5485-0c6c-476f-bcd4-086de0efc4d1_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-11",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485718861_90220ac1-9cdb-473c-8c10-b35687131177.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679081086115_9020e9ed-ef75-440f-abce-58841caacb36_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-12",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485624094_cecf6646-da77-4ac9-883e-7cf30e8e552f.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679080526334_a0e26759-7e98-43bf-a8fe-040939abf286_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-13",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485613490_a1d783da-99e3-4a91-b8d0-79bcddf4abfe.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679081085529_9c218c6e-a0e2-439b-81ff-c50a5407fda3_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-14",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486208158_29d80d75-e1ff-4e39-b80a-ab619343d7cd.webp",
    src: "https://cdn2.videowise.com/converted/videos/1680194146707_01323415-baa1-49fb-8fbe-8999c06b4f92_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-15",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485623797_ca63ba95-91e6-464b-aa69-c33b028a278e.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679080560470_ddd1fcb3-c697-4b68-97b1-5f59c1785c9f_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-16",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485614738_57d086fc-b048-4943-80ba-2e48eb216f79.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679080559256_14815e68-76c4-4f4c-8991-323dbaa4c875_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-17",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485864339_9ebd6aeb-50d4-4a65-bcf6-5e8375e300d3.webp",
    src: "https://cdn2.videowise.com/converted/videos/1680194146380_4a1dfd25-f7cb-4f36-99b3-9f347213bd09_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-18",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485607620_ce8129d0-16a2-403d-9ef6-15f2d31ca9fb.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679080553322_9cc8ec50-1e9b-4003-a64b-b7e5ead46693_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-19",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485604796_4f40348a-0122-4862-9991-381075c11974.webp",
    src: "https://cdn2.videowise.com/converted/videos/1679080003371_048b58f6-6a7b-42b9-bcdf-3497fb4566c9_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-20",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485973867_0371638d-c985-4dc3-880a-201d20ff0843.webp",
    src: "https://cdn2.videowise.com/converted/videos/1685495777020_4be03046-1648-42e3-8d35-8cc2988703fd_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-21",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485966523_e259ced8-349a-4757-8484-cbbede120591.webp",
    src: "https://cdn2.videowise.com/converted/videos/1685495788646_9c258eff-7927-476a-b762-a80b0f06d9b6_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-22",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719485968766_cf0be9a8-a1de-43df-ab1b-4e216bc5870f.webp",
    src: "https://cdn2.videowise.com/converted/videos/1685495790866_dc5a4963-5545-4605-a051-037126fa3441_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-23",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486127842_b494c98a-fffc-4212-a210-fa087c5557a5.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511754055_118a8958-9318-41c7-a32d-7274fcd00e1f_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-24",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486148762_77c98016-f2cb-4ac8-ace0-858d47fa077f.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511755900_b02e84dc-b238-4083-8adc-bf1e03031116_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-25",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486133236_7778286b-f568-4290-9e0d-dbc77c7c059b.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511743499_33e12c2d-1a10-4f64-be09-d753d4993093_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-26",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486138545_f0794e86-5c68-4520-bf50-aab136b03516.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511747618_c7adc1a0-07e9-4168-b9a6-61ec3fa055dc_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-27",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486056792_591ed0b5-bfc7-4b3a-8157-697d2f003ee1.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511742070_88202514-7c65-4c97-91ea-6df0aa4491d5_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-28",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486143433_69a5ad16-e0be-41c5-80b5-2f984b593616.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511744702_3d725a4a-1a9b-4bfc-963b-687a7e9c1681_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-29",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486030997_e6361edb-97d6-4158-985a-5c39e242e738.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511740669_a9093ce7-c7f1-434f-92a0-663217393a67_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-30",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486133504_f0995a73-a08e-465b-b9dc-b6afd05afa47.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511736936_e8e21d3f-5411-4eae-9e30-6990bccbdb74_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-31",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486042898_a3733ea2-e5a4-4063-ab48-5969ea7c25fd.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511721203_4c27669b-75b8-4d66-b4db-014b87d8e851_h264c_h264q6clip.mp4#t=0.1",
  },
  {
    id: "review-32",
    poster:
      "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486031184_db6562f9-5414-468e-ab1e-2b3d3df446a9.webp",
    src: "https://cdn2.videowise.com/converted/videos/1686511718245_136b4b13-74af-4d7f-9a5b-202728b15358_h264q6clip.mp4#t=0.1",
  },
  */
];

export const massagerWavelengths: Wavelength[] = [];

export const massagerFeatures: Feature[] = [
  {
    title: "Gua Sha Scraping Board",
    kicker: "Reduce Puffiness",
    body: "Reduce facial puffiness and promote lymphatic drainage with smooth, sweeping motions.",
  },
  {
    title: "Massage Comb",
    kicker: "Release Tension",
    body: "Relieve scalp and neck tension with the wide-toothed resin comb without tangling your hair.",
  },
  {
    title: "Beauty Pen",
    kicker: "Targeted Relief",
    body: "Provide targeted pressure and acupuncture-style relief to specific points on your body.",
  },
];

export const massagerDetailImages = [
  {
    src: productMediaAsset("massage_kit_spotlight.png", "muuhu-massage-kit", "images"),
    alt: "Muuhu Massage Kit detail image",
  },
  {
    src: productMediaAsset("massage_kit_gallery_2.png", "muuhu-massage-kit", "images"),
    alt: "Muuhu Massage Kit wellness use",
  },
  {
    src: productMediaAsset("massage_kit_gallery_3.png", "muuhu-massage-kit", "images"),
    alt: "Muuhu Massage Kit treatment application",
  },
];

export const massagerHowToUse = [
  "Apply a facial oil or serum to the area you wish to treat to ensure a smooth glide.",
  "Hold the Gua Sha scraping board at a 15-degree angle to your skin.",
  "Gently glide the tool upwards and outwards along your jawline, cheeks, and forehead.",
  "Use the massage comb to gently release tension in the scalp and neck area.",
  "Use the beauty pen to target specific tension points, pressing gently for focused relief.",
];

export const massagerFaqs: FAQItem[] = [
  {
    question: "How do I use the Gua Sha tools?",
    answer: "Apply oil, hold the board at a 15-degree angle, and glide outward.",
  },
];

export const expertVideo = {
  poster: productAsset("dermatologist-video-poster.png"),
  src: productMediaAsset(
    "Muuhu Dermatologists Video.webm",
    "buudy-led-mask",
    "videos",
  ),
};

export const comparison = {
  intro: "Here is a comparison, but really, there is no comparison.",
  columns: [
    { label: "Muuhu", price: "AU$299", featured: true },
    { label: "Brand A", price: "AU$399" },
    { label: "Brand B", price: "AU$499" },
    { label: "Brand C", price: "AU$472" },
  ],
  rows: [
    ["Portable", "Hands-free, cordless and rechargeable", "-", "-", "-"],
    ["Light Colours", "7 LED Colours + NIR", "3 total", "1 total", "3 total"],
    ["Neck Coverage", "Yes", "-", "-", "-"],
    ["Customizable treatments", "Yes", "-", "-", "Yes"],
    ["Hands-free, cordless, rechargeable", "Yes", "Yes", "-", "-"],
    ["App companion (iPhone/Android)", "Yes", "-", "-", "-"],
    [
      "Treatment Time (Full Face + Neck)",
      "3 mins",
      "10 mins",
      "10 mins",
      "3 mins",
    ],
  ],
};

export const touchTech = [
  {
    title: "Built-in Tap Tech",
    body: "Cycle through your personalised colour treatments with just a gentle tap.",
  },
  {
    title: "Lightweight & Portable",
    body: "Take spa-quality treatments anywhere with the long-lasting rechargeable battery.",
  },
  {
    title: "Effortless Consistency",
    body: "Just put it on for 3 minutes a day and let the device do the work while you watch your favourite show.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Does IPL hair removal hurt?",
    answer: "No, especially with the Muuhu Ultra Pro device. The built-in ice cooling plate maintains 8°C at the treatment window to soothe the skin. Most users describe the sensation as a gentle warmth.",
  },
  {
    question: "How long until I see results?",
    answer: "Most users notice a significant reduction in hair growth after 6-8 weeks of consistent use (1-2 sessions per week). Continued maintenance sessions will keep your skin smooth long-term.",
  },
  {
    question: "Can I use it on my face and bikini line?",
    answer: "Yes! The Muuhu Ultra Pro device is safe for the bikini line, underarms, and facial areas below the cheekbones (like the upper lip and chin). Just avoid using it near your eyes.",
  },
  {
    question: "What skin tones and hair colors does it work on?",
    answer: "IPL works best on light to medium skin tones with dark blonde, brown, or black hair. It is not effective on very light, red, or grey hair, and is not recommended for very dark skin tones (Fitzpatrick V-VI).",
  },
  {
    question: "Do I need to wear goggles?",
    answer: "Yes, we include a pair of protective goggles in every box. While the device has a skin sensor to prevent accidental flashes into the air, the goggles protect your eyes from the bright light during your session.",
  },
  {
    question: "Do I need to shave before using it?",
    answer: "Yes. Always shave the treatment area before your session. This ensures the light energy travels directly to the hair root rather than burning the hair above the skin surface.",
  },
];
