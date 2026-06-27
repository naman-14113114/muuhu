import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  homeCustomerReviewsGrid,
  homeFeatureCards,
  homeLightTherapy,
  homeMaskSpotlight,
  homeSkincareGuideIntro,
  homeTechnologySpotlight,
  homeMassageKitSpotlight,
  homeYoungerYou,
  homeHairFreeSmooth,
  homeProductVideo,
  homeSmoothSkin,
  homeHiGorgeous,
} from "@/data/home";
import { productMediaAsset } from "@/lib/media";
import { Button } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { SectionHeading } from "@/components/ui/SectionHeading";

function MassageKitSpotlight() {
  const data = homeMassageKitSpotlight;
  return (
    <section className="Muuhu-section bg-[var(--plum)] py-12 md:py-16 text-[var(--cream)]">
      <div className="Muuhu-wrap grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
        <div className="lg:order-2">
          <SectionHeading
            eyebrow={data.eyebrow}
            title={
              <>
                {data.title.split(" ").slice(0, -2).join(" ")}{" "}
                <em className="Muuhu-italic">
                  {data.title.split(" ").slice(-2).join(" ")}
                </em>
              </>
            }
            copy={data.copy}
            invert
          />
          <Button
            asChild
            className="mt-8 !border-[var(--cream)] !text-[var(--cream)] hover:!bg-[var(--blush)] hover:!text-[var(--plum)]"
          >
            <Link href={`/products/${data.product.slug}`}>
              {homeMassageKitSpotlight.ctaLabel}
              <ArrowRight size={17} />
            </Link>
          </Button>
        </div>
        <div className="relative w-full aspect-square overflow-hidden rounded-[18px] bg-[var(--cream)]">
          <Image
            alt={data.image.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            src={data.image.src}
          />
        </div>
      </div>
    </section>
  );
}

function SkincareGuideIntro() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-20 md:py-24">
      <div className="Muuhu-wrap flex flex-col items-center text-center">
        <SectionHeading
          eyebrow={homeSkincareGuideIntro.eyebrow}
          title={homeSkincareGuideIntro.title}
          copy={homeSkincareGuideIntro.copy}
          align="center"
        />
        <Button asChild className="mt-8">
          <Link href={homeSkincareGuideIntro.ctaHref}>
            {homeSkincareGuideIntro.ctaLabel}
            <ArrowRight size={17} />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function TechnologySpotlight() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-20 md:py-28">
      <div className="Muuhu-wrap">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT — light therapy text + button + IPL spotlight image */}
          <div className="flex flex-col h-full">
            <div className="flex flex-col items-center text-center gap-2 mb-8">
              <SectionHeading
                eyebrow=""
                title={homeLightTherapy.title}
                copy={homeLightTherapy.copy}
                align="center"
              />
              <div className="py-6">
                <Button asChild>
                  <Link href={`/products/${homeTechnologySpotlight.ctaHref.split("/").pop()}`}>
                    Buy Now
                    <ArrowRight size={17} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full mt-auto">
              <Image
                alt={homeMaskSpotlight.image.alt}
                className="block h-auto w-full object-cover rounded-[25px] shadow-sm"
                width={544}
                height={544}
                sizes="(min-width: 1024px) 45vw, 90vw"
                src={homeMaskSpotlight.image.src}
              />
            </div>
          </div>

          {/* RIGHT — stats image + REVEAL A YOUNGER YOU + copy stacked */}
          <div className="flex flex-col h-full">
            <div className="w-full mb-8">
              <Image
                alt={homeTechnologySpotlight.image.alt}
                className="block h-auto w-full object-cover rounded-[25px] shadow-sm"
                width={544}
                height={544}
                sizes="(min-width: 1024px) 45vw, 90vw"
                src={homeTechnologySpotlight.image.src}
              />
            </div>
            <div className="flex flex-col items-center text-center mt-auto">
              <SectionHeading
                eyebrow=""
                title={homeYoungerYou.title}
                copy={homeYoungerYou.copy}
                align="center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HomeFeatureGrid() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-24">
      <div className="Muuhu-wrap">
        <SectionHeading
          eyebrow="Why Muuhu"
          title={
            <>
              Light therapy that covers the <em className="Muuhu-italic">details</em>.
            </>
          }
          copy="Dense LED coverage, flexible treatments, and built-in neck care help the daily ritual feel simple while still feeling complete."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {homeFeatureCards.map((feature) => (
            <article
              className="overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--card)]"
              key={feature.title}
            >
              <img
                alt={feature.title}
                className="block h-auto w-full bg-[var(--blush)]"
                src={feature.image}
              />
              <div className="p-5">
                <h2 className="Muuhu-display text-2xl text-[var(--plum)]">
                  {feature.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {feature.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LightTherapyStory() {
  return (
    <section
      className="Muuhu-section bg-[var(--plum)] py-24 text-[var(--cream)]"
      id="light-therapy"
    >
      <div className="Muuhu-wrap grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[rgba(247,241,232,.08)]">
          <Image
            alt={homeLightTherapy.image.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 42vw, 90vw"
            src={homeLightTherapy.image.src}
          />
        </div>
        <SectionHeading
          eyebrow={homeLightTherapy.eyebrow}
          title={
            <>
              What is IPL and{" "}
              <em className="Muuhu-italic">where did it come from?</em>
            </>
          }
          copy={homeLightTherapy.copy}
          invert
        />
      </div>
    </section>
  );
}

function RevealYoungerYou() {
  return null;
}

function CustomerReviewsGrid() {
  return (
    <section className="hidden md:block relative w-full overflow-hidden bg-[var(--plum)]">
      <div className="relative w-full">
        <Image
          src={homeCustomerReviewsGrid.image}
          alt={homeCustomerReviewsGrid.title}
          width={1800}
          height={1000}
          className="w-full h-auto block"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <SectionHeading
          eyebrow=""
          title={homeCustomerReviewsGrid.title}
          copy={homeCustomerReviewsGrid.copy}
          align="center"
          invert
        />
        <Button asChild className="mt-8 !border-[var(--cream)] !text-[var(--cream)] hover:!bg-[var(--blush)] hover:!text-[var(--plum)]">
          <Link href={homeCustomerReviewsGrid.ctaHref}>
            {homeCustomerReviewsGrid.ctaLabel}
          </Link>
        </Button>
      </div>
    </section>
  );
}

function HomeVideoHero() {
  return (
    <section className="buudy-section relative w-full overflow-hidden bg-[var(--plum)]">
      <Image
        alt="Muuhu Ultra Pro Hero Banner"
        src={productMediaAsset("ipl_hero_banner.png")}
        width={2560}
        height={1080}
        className="block h-auto w-full"
        sizes="100vw"
        priority
      />
    </section>
  );
}

function HairFreeSmooth() {
  const data = homeHairFreeSmooth;
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-20 md:py-28 text-center">
      <div className="Muuhu-wrap">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="Muuhu-display text-4xl lg:text-5xl mb-6 text-custom" style={{ color: "rgb(237, 106, 58)" }}>
            {data.title}
          </h2>
          <p className="text-lg text-[var(--muted)]">{data.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {data.features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[var(--plum)] shadow-sm">
                <CheckCircle size={32} strokeWidth={1.5} />
              </div>
              <p className="font-medium text-sm text-[var(--plum)]">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HiGorgeous() {
  const data = homeHiGorgeous;
  return (
    <section className="Muuhu-section bg-[#FDF6EA] py-20 md:py-28">
      <div className="Muuhu-wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[25px] shadow-md lg:order-1">
          <Image
            alt={data.title}
            className="w-full h-full object-cover"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            src={data.image}
          />
        </div>
        <div className="lg:order-2 flex flex-col justify-center max-w-xl">
          <h2 className="Muuhu-display text-4xl lg:text-5xl text-[var(--plum)] mb-6">
            {data.title}
          </h2>
          <div className="prose text-lg text-[var(--muted)] leading-relaxed space-y-4 whitespace-pre-wrap">
            {data.copy}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductVideo() {
  const data = homeProductVideo;
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-12 md:py-24">
      <div className="Muuhu-wrap max-w-[1200px]">
        <div className="relative w-full aspect-video overflow-hidden rounded-[30px] bg-black shadow-2xl">
          <video
            src={data.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function SmoothSkin() {
  const data = homeSmoothSkin;
  return (
    <section className="Muuhu-section bg-[#FDF6EA] py-20 md:py-28">
      <div className="Muuhu-wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="lg:order-1 flex flex-col justify-center max-w-xl">
          <h2 className="Muuhu-display text-4xl lg:text-5xl text-[var(--plum)] mb-6">
            {data.title}
          </h2>
          <div className="prose text-lg text-[var(--muted)] leading-relaxed space-y-4">
            {data.copy}
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] lg:aspect-square overflow-hidden rounded-[25px] shadow-md lg:order-2">
          <Image
            alt={data.title}
            className="w-full h-full object-cover"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            src={data.image}
          />
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HomeVideoHero />
      <HairFreeSmooth />
      <HiGorgeous />
      <ProductVideo />
      <SmoothSkin />
      <CustomerReviewsGrid />
    </>
  );
}
