import Image from "next/image";
import type { Product } from "@/data/products";
import {
  massagerDetailImages,
  massagerFeatures,
  massagerHowToUse,
} from "@/data/productSections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductHero } from "./ProductHero";
import { SpecsPanel } from "./SpecsPanel";
import { FAQSection } from "./FAQSection";
import { GuaranteeSection } from "./GuaranteeSection";
import { StickyAddToCart } from "./StickyAddToCart";

function MassageKitFeatureGrid({ product }: { product: Product }) {
  return (
    <section className="Muuhu-section bg-[var(--plum)] text-[var(--cream)] md: py-14 md:py-24">
      <div className="Muuhu-wrap">
        <SectionHeading
          eyebrow="Portable therapy"
          title={
            <>
              Take your wellness <em className="Muuhu-italic">anywhere</em>.
            </>
          }
          copy="The lightweight resin gua sha kit works at home, the office, or during travel. Premium smooth resin keeps each targeted session simple."
          invert
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {massagerFeatures.map((feature) => (
            <article
              className="rounded-2xl border border-[rgba(247,241,232,.18)] bg-[rgba(247,241,232,.08)] p-5"
              key={feature.title}
            >
              <p className="Muuhu-mono text-[var(--gold)]">{feature.kicker}</p>
              <h2 className="Muuhu-display mt-4 text-2xl">{feature.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[rgba(247,241,232,.76)]">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MassageKitStorySection() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] md: py-14 md:py-24">
      <div className="Muuhu-wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Portable and powerful"
            title={
              <>
                On-the-go <em className="Muuhu-italic">relief</em>.
              </>
            }
            copy='Simply set aside some "Me Time" for 15 minutes a day while you watch your favourite show.'
          />
          <p className="mt-6 leading-8 text-[var(--muted)]">
            Experience the synergy of tension relief and lymphatic drainage with a handheld
            resin massage kit. The compact design offers targeted relief for
            muscle discomfort, wherever you are and whenever you need it.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {massagerDetailImages.map((image, index) => (
            <div
              className={`relative overflow-hidden rounded-2xl bg-[var(--cream)] ${
                index === 0 ? "aspect-[4/5] sm:col-span-2 sm:row-span-2" : "aspect-square"
              }`}
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 32vw, 90vw"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MassageKitDetailSection() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] md: py-14 md:py-24">
      <div className="Muuhu-wrap grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Product detail"
            title="Tension relief, focused."
            copy="A 3-piece resin massage tool kit for body relief, skin health, and targeted face or body application."
          />
          <div className="mt-8 space-y-5 leading-8 text-[var(--muted)]">
            <p>
              Gua Sha therapy uses smooth resin edges for
              non-invasive wellness routines, including skin concerns,
              inflammation, localized discomfort, and
              sleep-quality support.
            </p>
            <p>
              Muuhu Massage Kit combines a Gua Sha board, wide-toothed comb,
              and acupuncture pen.
            </p>
          </div>
        </div>
        <div className="rounded-[18px] border border-[var(--border)] bg-[var(--card)] p-6">
          <p className="Muuhu-eyebrow">Feature</p>
          <ul className="mt-6 grid gap-5">
            {[
              "Natural pain relief: safe, painless, and designed to help reduce body aches while supporting smoother-looking skin.",
              "Powerful combination: Gua Sha board, massage comb, and beauty pen reach different target depths for a flexible routine.",
              "Portable and easy to use: includes a storage bag so it can travel with you.",
              "Humans and pets: pet owners may use it for animal joint-care routines when appropriate.",
              "Excellent material: 303 stainless steel outer shell with a 50,000+ hour service life.",
            ].map((item) => (
              <li className="flex gap-3 text-sm leading-6 text-[var(--plum)]" key={item}>
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--gold)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MassageKitUseGuide() {
  return (
    <section className="Muuhu-section bg-[var(--plum)] text-[var(--cream)] md: py-14 md:py-24">
      <div className="Muuhu-wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading
          eyebrow="How to use"
          title={
            <>
              Build a consistent <em className="Muuhu-italic">routine</em>.
            </>
          }
          copy="Start gradually, keep the Gua Sha positioned correctly, and focus on the areas that need attention."
          invert
        />
        <ol className="grid gap-4">
          {massagerHowToUse.map((step, index) => (
            <li
              className="flex gap-5 rounded-2xl border border-[rgba(247,241,232,.16)] bg-[rgba(247,241,232,.07)] p-5"
              key={step}
            >
              <span className="Muuhu-display text-3xl text-[var(--gold)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-7 text-[rgba(247,241,232,.78)]">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { MassageKitFeatureTabs } from "./MassageKitFeatureTabs";
import { ProductReviewsSection } from "./ProductReviewsSection";

export function MassageKitProductPage({ product }: { product: Product }) {
  return (
    <>
      <ProductHero product={product} />
      <MassageKitFeatureTabs />
      <MassageKitStorySection />
      {/* <MassageKitDetailSection /> */}
      <MassageKitUseGuide />
      <ProductReviewsSection productHandle={product.id} />
      <FAQSection faqs={product.faqs} />
      {/* <GuaranteeSection showVideo={false} /> */}
      <StickyAddToCart product={product} />
    </>
  );
}

