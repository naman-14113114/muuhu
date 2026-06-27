import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { productMediaAsset } from "@/lib/media";
import { Button } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCustomerReviewsGrid, homeHairFreeSmooth, homeProductShowcase, homeReviewQuote, homeProductVideo, homeHiGorgeous, homeSmoothSkin, homeWhyItWorks, homeKeyStats, homeNoMissedSpots, homeFullyAdjustable, homeRealResults, homeMassageKitSpotlight, homeMaskSpotlight, homeSkincareGuideIntro, homeTechnologySpotlight, homeFeatureCards, homeLightTherapy, homeYoungerYou } from "@/data/home";

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

          {/* LEFT ΓÇö light therapy text + button + IPL spotlight image */}
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

          {/* RIGHT ΓÇö stats image + REVEAL A YOUNGER YOU + copy stacked */}
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
    <section className="Muuhu-section bg-[#FFF9F2] py-16 md:py-24 text-center border-b border-[#F2E8DC]">
      <div className="Muuhu-wrap">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="Muuhu-display text-4xl lg:text-5xl mb-4" style={{ color: "rgb(237, 106, 58)" }}>
            {data.title}
          </h2>
          <p className="text-lg text-[var(--muted)]">{data.subtitle}</p>
        </div>
        <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex flex-row flex-nowrap items-start justify-start md:justify-center gap-6 min-w-max px-4">
            {data.features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-3 w-24">
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-sm border border-[#F2E8DC]">
                  <Image src={feature.icon} alt={feature.text} width={30} height={30} />
                </div>
                <p className="font-medium text-[11px] text-[var(--plum)] leading-tight">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function ProductShowcase() {
  const data = homeProductShowcase;
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-20 md:py-28">
      <div className="Muuhu-wrap">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[var(--muted)] uppercase font-semibold mb-4">{data.eyebrow}</p>
          <h2 className="Muuhu-display text-4xl lg:text-5xl text-[var(--plum)]">
            {data.title}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-[30px] shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto h-auto">
            <Image
              src={data.image}
              alt="Muuhu Ultra Pro"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#FDF6EA]">
            <h3 className="text-3xl font-serif text-[var(--plum)] mb-2">Muuhu Ultra Pro</h3>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-semibold text-[var(--plum)]">$129</span>
              <span className="text-lg text-[var(--muted)] line-through">$260</span>
            </div>
            <ul className="space-y-4 mb-8">
              {data.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[rgb(237,106,58)] shrink-0" />
                  <p className="text-[var(--muted)]">{item}</p>
                </li>
              ))}
            </ul>
            <Link href={`/products/${data.product.slug}`} className="Muuhu-btn-primary w-full text-center">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


function ReviewQuote() {
  const data = homeReviewQuote;
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image src={data.image} alt="Background" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#FDF6EA]/80 backdrop-blur-sm" />
      </div>
      <div className="relative z-10 Muuhu-wrap max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-8 text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={28} />)}
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-[var(--plum)] leading-snug mb-8">
          "{data.quote}"
        </h2>
        <p className="text-lg font-semibold text-[var(--muted)]">— {data.author}</p>
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


function HiGorgeous() {
  const data = homeHiGorgeous;
  return (
    <section className="Muuhu-section bg-[#FDF6EA] py-20 md:py-28">
      <div className="Muuhu-wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[25px] shadow-md lg:order-1">
          <Image alt={data.title} className="w-full h-full object-cover" fill src={data.image} />
        </div>
        <div className="lg:order-2 flex flex-col justify-center max-w-xl">
          <h2 className="Muuhu-display text-4xl lg:text-5xl text-[var(--plum)] mb-6">{data.title}</h2>
          <div className="prose text-lg text-[var(--muted)] leading-relaxed space-y-4 whitespace-pre-wrap">{data.copy}</div>
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
          <h2 className="Muuhu-display text-4xl lg:text-5xl text-[var(--plum)] mb-6">{data.title}</h2>
          <div className="prose text-lg text-[var(--muted)] leading-relaxed space-y-4 whitespace-pre-wrap">{data.copy}</div>
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[25px] shadow-md lg:order-2">
          <Image alt={data.title} className="w-full h-full object-cover" fill src={data.image} />
        </div>
      </div>
    </section>
  );
}


function WhyItWorks() {
  const data = homeWhyItWorks;
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-20 md:py-28">
      <div className="Muuhu-wrap">
        <div className="text-center mb-16">
          <h2 className="Muuhu-display text-4xl lg:text-5xl text-[var(--plum)]">{data.title}</h2>
        </div>
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 space-y-12 order-2 md:order-1">
            {data.features.slice(0, 2).map((feature, i) => (
              <div key={i} className="text-center md:text-right">
                <div className="text-3xl font-serif text-[rgb(237,106,58)] mb-2">{feature.number}</div>
                <h4 className="text-xl font-semibold text-[var(--plum)] mb-2">{feature.title}</h4>
                <p className="text-[var(--muted)]">{feature.copy}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-1 relative aspect-[3/4] order-1 md:order-2">
            <Image src={data.image} alt={data.title} fill className="object-cover rounded-[30px]" />
          </div>
          <div className="md:col-span-1 space-y-12 order-3">
            {data.features.slice(2, 4).map((feature, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-serif text-[rgb(237,106,58)] mb-2">{feature.number}</div>
                <h4 className="text-xl font-semibold text-[var(--plum)] mb-2">{feature.title}</h4>
                <p className="text-[var(--muted)]">{feature.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function KeyStats() {
  const data = homeKeyStats;
  return (
    <section className="Muuhu-section bg-[#FDF6EA] py-16 border-y border-[#F2E8DC]">
      <div className="Muuhu-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E5D7C5]">
          {data.stats.map((stat, i) => (
            <div key={i} className="text-center flex flex-col items-center pt-8 md:pt-0 first:pt-0">
              <span className="text-6xl md:text-8xl font-serif text-[rgb(237,106,58)] mb-4">{stat.number}</span>
              <span className="text-xl font-semibold text-[var(--plum)] mb-1">{stat.label}</span>
              <span className="text-sm text-[var(--muted)]">{stat.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function TwoColumnBlock({ data, reverse = false }: { data: any, reverse?: boolean }) {
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-16 md:py-24">
      <div className="Muuhu-wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className={`relative w-full aspect-square overflow-hidden rounded-[25px] shadow-sm ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <Image alt={data.title} className="w-full h-full object-cover" fill src={data.image} />
        </div>
        <div className={`flex flex-col justify-center max-w-xl ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          <h2 className="text-3xl lg:text-4xl font-serif text-[var(--plum)] mb-6">{data.title}</h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">{data.copy}</p>
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
      <ProductShowcase />
      <ReviewQuote />
      <ProductVideo />
      <HiGorgeous />
      <SmoothSkin />
      <WhyItWorks />
      <KeyStats />
      
      <TwoColumnBlock data={homeNoMissedSpots} />
      <TwoColumnBlock data={homeFullyAdjustable} reverse />
      <TwoColumnBlock data={homeRealResults} />
      
      <CustomerReviewsGrid />
    </>
  );
}
