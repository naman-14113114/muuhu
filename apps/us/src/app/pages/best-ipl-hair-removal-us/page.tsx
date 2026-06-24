import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Zap } from "lucide-react";
import { muuhuIpl } from "@/data/products";
import { iplSeoFaqs } from "@/data/seoFaqs";
import {
  breadcrumbJsonLd,
  guidePageJsonLd,
  organizationJsonLd,
  productJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { formatMoney } from "@/lib/money";
import { Button } from "@/components/ui/Button";

const pageTitle = "Best IPL Hair Removal US 2026: What to Look For";
const pageDescription =
  "A US buyer's guide to choosing the best at-home IPL hair removal device for ice cooling comfort, high flash counts, and painless full-body treatments.";

const checkpoints = [
  {
    title: "Ice cooling technology",
    copy: "A major difference between early IPLs and modern devices is built-in ice cooling. Muuhu maintains 8°C at the treatment window to soothe skin on contact.",
  },
  {
    title: "Adjustable energy levels",
    copy: "Choose a device with 9 energy levels so you can start low for sensitive areas and increase gradually as your skin adapts.",
  },
  {
    title: "High flash count",
    copy: "Muuhu offers 999,999 flashes, providing enough lifespan for years of full-body treatments without needing lamp replacements.",
  },
  {
    title: "Skin tone compatibility",
    copy: "IPL works best on light to medium skin with dark hair. It is not suitable for very dark skin tones or very light, red, grey, or white hair.",
  },
  {
    title: "Full-body coverage",
    copy: "Look for Auto (glide) mode for fast treatment on legs and arms, and Manual (stamp) mode for precision on underarms or bikini lines.",
  },
  {
    title: "Safety guidance",
    copy: "Do not use if pregnant, under 18, or taking photosensitising medication. Consult a healthcare professional if you have medical concerns.",
  },
];

const comparisonRows = [
  ["Flash count", "999,999 flashes"],
  ["Cooling", "Built-in ice cooling at 8°C"],
  ["Energy", "16J max output, 9 levels"],
  ["Modes", "Auto (glide) and Manual (stamp)"],
  ["Display", "LCD touch screen with memory"],
  ["US offer", `${formatMoney(muuhuIpl.priceCents, muuhuIpl.currency)} launch price with free kit`],
  ["Guarantee", "90-day money back guarantee"],
];

export const metadata: Metadata = {
  title: "Best IPL Hair Removal US 2026 | Ice Cooling IPL Guide",
  description: pageDescription,
  alternates: {
    canonical: "/pages/best-ipl-hair-removal-us",
  },
  keywords: [
    "Best IPL hair removal US",
    "IPL device US",
    "at-home laser hair removal US",
    "ice cooling IPL",
    "painless hair removal device",
    "Muuhu Ultra Pro",
  ],
  openGraph: {
    title: "Best IPL Hair Removal US 2026: Buyer Guide",
    description: pageDescription,
    url: absoluteUrl("/pages/best-ipl-hair-removal-us"),
    type: "article",
    images: [
      {
        url: "/images/products/buudy-led-mask/09-buudy-led-mask-home-spa.webp",
        width: 1200,
        height: 900,
        alt: "Muuhu Ultra Pro home routine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPL Hair Removal US 2026",
    description: pageDescription,
    images: ["/images/products/buudy-led-mask/09-buudy-led-mask-home-spa.webp"],
  },
};

export default function BestIplHairRemovalUsPage() {
  const jsonLd = [
    organizationJsonLd(),
    websiteJsonLd(),
    productJsonLd(muuhuIpl),
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "Best IPL Hair Removal US", url: "/pages/best-ipl-hair-removal-us" },
    ]),
    ...guidePageJsonLd({
      title: pageTitle,
      description: pageDescription,
      url: "/pages/best-ipl-hair-removal-us",
      faqs: iplSeoFaqs,
    }),
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
        />
      ))}

      <section className="Muuhu-section bg-[var(--plum)] py-16 text-[var(--cream)] md:py-24">
        <div className="Muuhu-wrap grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="Muuhu-mono text-[var(--gold)]">US IPL guide</p>
            <h1 className="Muuhu-display mt-5 text-5xl leading-none md:text-7xl">
              Best IPL Hair Removal US: how to choose one that works.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(247,241,232,.76)] md:text-lg">
              If you are comparing at-home IPL devices in the US, focus on ice cooling comfort, energy levels, flash count, and whether the device suits your skin and hair type.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-[var(--cream)] text-[var(--plum)] hover:bg-[var(--blush)]">
                <Link href="/products/muuhu-ipl-hair-removal">
                  Shop Muuhu Ultra Pro
                  <ArrowRight size={17} />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="border-[rgba(247,241,232,.36)] text-[var(--cream)] hover:bg-[rgba(247,241,232,.1)]">
                <Link href="#comparison">Compare features</Link>
              </Button>
            </div>
          </div>

          <figure className="relative min-h-[460px] overflow-hidden rounded-[34px] bg-[var(--ink)]">
            <Image
              alt="Muuhu Ultra Pro used at home in the US"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              src="/images/products/buudy-led-mask/09-buudy-led-mask-home-spa.webp"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(39,20,42,.72))]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[rgba(247,241,232,.18)] bg-[rgba(247,241,232,.11)] p-5 backdrop-blur">
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star fill="currentColor" key={index} size={17} />
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-[rgba(247,241,232,.78)]">
                4.9 rated by 16,000+ customers, with free tracked shipping and 90-day money back guarantee.
              </p>
            </div>
          </figure>
        </div>
      </section>

      <section className="Muuhu-section bg-[var(--cream)] py-16 md:py-24">
        <div className="Muuhu-wrap">
          <div className="max-w-3xl">
            <p className="Muuhu-mono text-[var(--gold)]">Quick answer</p>
            <h2 className="Muuhu-display mt-4 text-4xl leading-none text-[var(--plum)] md:text-6xl">
              For most US shoppers, the best IPL device combines ice cooling, adjustable energy, and a high flash count.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              Muuhu is designed for that exact brief: 999,999 flashes, 8°C ice cooling, 9 energy levels up to 16J, dual treatment modes, and a launch bundle at {formatMoney(muuhuIpl.priceCents, muuhuIpl.currency)}.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {checkpoints.map((item) => (
              <article
                className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6"
                key={item.title}
              >
                <CheckCircle2 className="text-[var(--gold)]" size={22} />
                <h3 className="Muuhu-display mt-5 text-2xl leading-tight text-[var(--plum)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="Muuhu-section bg-[rgba(241,223,210,.5)] py-16 md:py-24" id="comparison">
        <div className="Muuhu-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="Muuhu-mono text-[var(--gold)]">Why Muuhu</p>
            <h2 className="Muuhu-display mt-4 text-4xl leading-none text-[var(--plum)] md:text-6xl">
              Built for the US buyer comparing premium IPL devices.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              The right IPL device should remove trade-offs. Muuhu is positioned for shoppers who want strong energy, ice cooling comfort, and long-lasting hair reduction without salon prices.
            </p>
            <div className="mt-7 flex items-start gap-4 rounded-[22px] bg-[var(--plum)] p-5 text-[var(--cream)]">
              <ShieldCheck className="mt-1 shrink-0 text-[var(--gold)]" size={22} />
              <p className="text-sm leading-7 text-[rgba(247,241,232,.76)]">
                Muuhu is a personal care device, not a medical treatment. Results vary by user and skin/hair type.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card)]">
            {comparisonRows.map(([label, value]) => (
              <div
                className="grid gap-2 border-b border-[var(--border)] px-5 py-4 last:border-b-0 md:grid-cols-[190px_1fr]"
                key={label}
              >
                <p className="Muuhu-mono text-[var(--gold)]">{label}</p>
                <p className="text-sm leading-7 text-[var(--plum)] md:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="Muuhu-section bg-[var(--cream)] py-16 md:py-24">
        <div className="Muuhu-wrap grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <figure className="relative min-h-[500px] overflow-hidden rounded-[34px] bg-[var(--blush)]">
            <Image
              alt="Muuhu Ultra Pro front product view"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              src="/images/products/buudy-led-mask/01-buudy-led-mask-front.webp"
            />
          </figure>
          <div>
            <p className="Muuhu-mono text-[var(--gold)]">Ready to buy</p>
            <h2 className="Muuhu-display mt-4 text-4xl leading-none text-[var(--plum)] md:text-6xl">
              Choose the IPL device made for painless routines.
            </h2>
            <ul className="mt-7 grid gap-3">
              {[
                "999,999 flashes for years of use",
                "Ice cooling technology at 8°C",
                "9 adjustable energy levels",
                "Free glow kit while the launch offer is live",
              ].map((item) => (
                <li className="flex items-center gap-3 text-[var(--plum)]" key={item}>
                  <Zap className="text-[var(--gold)]" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link href="/products/muuhu-ipl-hair-removal">
                View product page
                <ArrowRight size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

