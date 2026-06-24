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

const pageTitle = "Best IPL Hair Removal UK 2026: What to Look For";
const pageDescription =
  "A UK buyer's guide to choosing the best IPL hair removal device for ice cooling comfort, long-lasting reduction, full-body coverage, and value.";

const checkpoints = [
  {
    title: "Ice cooling technology",
    copy: "The best IPL devices include built-in ice cooling to soothe the skin on contact and make the treatment virtually painless.",
  },
  {
    title: "Adjustable energy levels",
    copy: "Look for multiple energy levels so you can start low for sensitive areas and increase the intensity for coarser hair.",
  },
  {
    title: "High flash count",
    copy: "A device with 999,999 flashes means you won't need replacement lamps, giving you enough flashes for years of maintenance.",
  },
  {
    title: "Skin tone compatibility",
    copy: "IPL targets melanin, so it works best on light to medium skin with dark hair. It is not effective on very light hair or safe for very dark skin.",
  },
  {
    title: "Full-body treatment modes",
    copy: "An Auto-glide mode makes large areas like legs fast, while a Manual stamp mode gives you precision for the bikini line or underarms.",
  },
  {
    title: "Safety guidance",
    copy: "Avoid IPL if you are pregnant, under 18, take photosensitising medication, or have certain skin conditions.",
  },
];

const comparisonRows = [
  ["Flash count", "999,999 flashes"],
  ["Max Energy", "16J output"],
  ["Energy levels", "9 adjustable intensity settings"],
  ["Cooling", "Built-in ice cooling at 8°C"],
  ["Treatment modes", "Auto (glide) and Manual (stamp)"],
  ["UK offer", `${formatMoney(muuhuIpl.priceCents, muuhuIpl.currency)} launch price with free gift kit`],
  ["Guarantee", "90-day money back guarantee"],
];

export const metadata: Metadata = {
  title: "Best IPL Hair Removal UK 2026 | Buyer Guide",
  description: pageDescription,
  alternates: {
    canonical: "/pages/best-ipl-hair-removal-uk",
  },
  keywords: [
    "best IPL hair removal UK",
    "IPL device UK",
    "at-home laser hair removal UK",
    "ice cooling IPL UK",
    "painless hair removal device",
    "IPL with ice cooling",
    "Muuhu Ultra Pro",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/pages/best-ipl-hair-removal-uk"),
    type: "article",
    images: [
      {
        url: "/images/products/buudy-led-mask/09-buudy-led-mask-home-spa.webp",
        width: 1200,
        height: 900,
        alt: "Muuhu Ultra Pro home treatment routine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/products/buudy-led-mask/09-buudy-led-mask-home-spa.webp"],
  },
};

export default function BestIplHairRemovalUkPage() {
  const jsonLd = [
    organizationJsonLd(),
    websiteJsonLd(),
    productJsonLd(muuhuIpl),
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "Best IPL Hair Removal UK", url: "/pages/best-ipl-hair-removal-uk" },
    ]),
    ...guidePageJsonLd({
      title: pageTitle,
      description: pageDescription,
      url: "/pages/best-ipl-hair-removal-uk",
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
            <p className="Muuhu-mono text-[var(--gold)]">UK IPL guide</p>
            <h1 className="Muuhu-display mt-5 text-5xl leading-none md:text-7xl">
              Best IPL hair removal UK: how to choose one that works for you.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(247,241,232,.76)] md:text-lg">
              If you are comparing IPL devices in the UK, focus on
              flash count, ice cooling comfort, energy levels, return policy, and
              whether the device fits your hair and skin type.
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
              alt="Muuhu Ultra Pro used at home in the UK"
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
                4.9 rated by 16,000+ customers, with free tracked shipping and
                90-day money back guarantee.
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
              For most UK shoppers, the best IPL device is one with
              ice cooling, high flash count, and full-body versatility.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              Muuhu is designed for that exact brief: 999,999 flashes, ice cooling
              at 8°C, 9 energy levels up to 16J, auto-glide mode, and a launch bundle at{" "}
              {formatMoney(muuhuIpl.priceCents, muuhuIpl.currency)}.
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
              Built for the UK buyer comparing premium IPL devices.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              The right IPL device should remove pain and trade-offs. Muuhu is positioned
              for shoppers who want a high flash count, comfortable ice cooling, and
              a complete at-home routine without paying salon prices.
            </p>
            <div className="mt-7 flex items-start gap-4 rounded-[22px] bg-[var(--plum)] p-5 text-[var(--cream)]">
              <ShieldCheck className="mt-1 shrink-0 text-[var(--gold)]" size={22} />
              <p className="text-sm leading-7 text-[rgba(247,241,232,.76)]">
                Muuhu is a personal care device, not a medical treatment.
                Results vary by user, hair colour, and skin tone.
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
              Choose the IPL device made for painless treatments.
            </h2>
            <ul className="mt-7 grid gap-3">
              {[
                "999,999 flashes",
                "Ice cooling technology at 8°C",
                "9 adjustable energy levels",
                "Free gift kit while the launch offer is live",
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

