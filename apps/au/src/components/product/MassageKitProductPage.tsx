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
    <section className="buudy-section bg-[var(--plum)] text-[var(--cream)] md: py-14 md:py-24">
      <div className="buudy-wrap">
        <SectionHeading
          eyebrow="Portable therapy"
          title={
            <>
              Take your wellness <em className="buudy-italic">anywhere</em>.
            </>
          }
          copy="Take this portable resin gua sha kit anywhere for natural tension relief and lymphatic drainage on the go. Premium smooth resin keeps each targeted session simple."
          invert
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {massagerFeatures.map((feature) => (
            <article
              className="rounded-2xl border border-[rgba(247,241,232,.18)] bg-[rgba(247,241,232,.08)] p-5"
              key={feature.title}
            >
              <p className="buudy-mono text-[var(--gold)]">{feature.kicker}</p>
              <h2 className="buudy-display mt-4 text-2xl">{feature.title}</h2>
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
    <section className="buudy-section bg-[var(--cream)] md: py-14 md:py-24">
      <div className="buudy-wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Portable and powerful"
            title={
              <>
                On-the-go <em className="buudy-italic">relief</em>.
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
    <section className="buudy-section bg-[var(--cream)] md: py-14 md:py-24">
      <div className="buudy-wrap grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Product detail"
            title="Blue and red light therapy, focused."
            copy="A 5-wavelength near-infrared flashlight wand for body relief, acne-focused care, skin health, and targeted face or body application."
          />
          <div className="mt-8 space-y-5 leading-8 text-[var(--muted)]">
            <p>
              Red light therapy uses low-level wavelengths of light for
              non-invasive wellness routines, including skin concerns,
              inflammation, localized discomfort, hair-growth routines, and
              sleep-quality support.
            </p>
            <p>
              Muuhu Red MassageKit combines blue 460nm, red 630nm and 660nm, plus
              near-infrared 850nm and 900nm light. Three LEDs are visible, while
              two infrared LEDs are invisible to the naked eye.
            </p>
          </div>
        </div>
        <div className="rounded-[18px] border border-[var(--border)] bg-[var(--card)] p-6">
          <p className="buudy-eyebrow">Feature</p>
          <ul className="mt-6 grid gap-5">
            {[
              "Natural pain relief: safe, painless, and designed to help reduce body aches while supporting smoother-looking skin.",
              "Powerful combination: blue, red, and infrared lights reach different target depths for a flexible routine.",
              "Portable and easy to use: includes a storage bag and hanging strip so it can travel with you.",
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
    <section className="buudy-section bg-[var(--plum)] text-[var(--cream)] md: py-14 md:py-24">
      <div className="buudy-wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading
          eyebrow="How to use"
          title={
            <>
              Build a consistent <em className="buudy-italic">routine</em>.
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
              <span className="buudy-display text-3xl text-[var(--gold)]">
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
      {/* <MassageKitFeatureTabs /> */}
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

