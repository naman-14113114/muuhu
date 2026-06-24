import Image from "next/image";
import { Play, Smartphone } from "lucide-react";
import { touchTech } from "@/data/productSections";
import { productAsset, productMediaAsset } from "@/lib/media";
import { Button } from "@/components/ui/Button";
import { LazyAutoplayVideo } from "@/components/ui/LazyAutoplayVideo";

export function RitualSection() {
  return (
    <section className="Muuhu-section bg-[rgba(241,223,210,.42)] md: md: py-14 md:py-24">
      <div className="Muuhu-wrap grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative aspect-video overflow-hidden rounded-[18px] bg-[var(--ink)]">
          <Image
            alt="Muuhu Ultra Pro lifestyle ritual"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            src={productAsset("08-buudy-led-mask-lifestyle-use.webp")}
          />
          <div className="absolute inset-0 grid place-items-center">
            <button
              aria-label="Play how Muuhu works"
              className="relative grid h-20 w-20 place-items-center rounded-full bg-[var(--cream)] text-[var(--plum)]"
              type="button"
            >
              <span className="absolute inset-0 rounded-full bg-[var(--cream)] [animation:Muuhu-ping_1.8s_infinite]" />
              <Play className="relative ml-1" fill="currentColor" size={24} />
            </button>
          </div>
          <p className="Muuhu-mono absolute bottom-5 left-5 text-[var(--cream)]">
            How Muuhu works - 0:48
          </p>
        </div>
        <div>
          <p className="Muuhu-eyebrow">New to Muuhu?</p>
          <h2 className="Muuhu-display mt-3 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
            Discover how <em className="Muuhu-italic">10 minutes</em> become a
            ritual.
          </h2>
          <p className="Muuhu-copy mt-5">
            Discover how Muuhu&apos;s 7 wavelengths plus 830nm near-infrared,
            flexible silicone fit, and simple 10-minute routine make at-home
            light therapy feel easy, consistent, and beautifully wearable.
          </p>
          <Button className="mt-7" variant="ghost">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TouchTechSection() {
  return (
    <section className="Muuhu-section border-y border-[var(--border)] bg-[var(--plum)] text-[var(--cream)] md: md: py-14 md:py-24">
      <div className="Muuhu-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
        <div>
          <p className="Muuhu-mono text-[var(--gold)]">Intuitive Touch</p>
          <h2 className="Muuhu-display mt-3 text-[2.5rem] leading-tight text-[var(--cream)] md:text-5xl">
            Skincare should be <em className="Muuhu-italic">an escape</em>, not a
            hassle.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-[rgba(247,241,232,.72)]">
            We engineered the Muuhu Ultra Pro to be as smart as it is effective,
            replacing frustrating wires and heavy controllers with a sleek,
            wearable design.
          </p>
          <ul className="mt-10 grid gap-6">
            {touchTech.map((item) => (
              <li className="border-l border-[rgba(184,149,86,.42)] pl-6" key={item.title}>
                <p className="Muuhu-display text-2xl text-[var(--cream)]">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-[rgba(247,241,232,.72)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[var(--ink)]">
          <LazyAutoplayVideo
            ariaLabel="Muuhu Ultra Pro light modes demonstration"
            className="w-full h-full object-cover"
            rootMargin="1400px 0px"
            src={productMediaAsset("7 colors muted.mp4", "buudy-led-mask", "videos")}
          />
          <div className="absolute bottom-6 right-6 rounded-2xl bg-[rgba(247,241,232,.94)] p-4 text-[var(--plum)] backdrop-blur">
            <p className="Muuhu-mono">Tap to cycle</p>
            <p className="Muuhu-display mt-1 text-xl">7 LED Colours + NIR - 1 gesture</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppPromo() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] md: md: py-14 md:py-24" id="Muuhu-ai">
      <div className="Muuhu-wrap grid items-center gap-8 md:gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[1200/799] w-full overflow-hidden rounded-[18px] bg-[var(--blush)] lg:order-last">
          <Image
            alt="Muuhu AI companion app"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            src={productMediaAsset("ChatGPT Image May 31, 2026, 11_35_03 PM (2).png")}
          />
          <span className="Muuhu-mono absolute left-5 top-5 rounded-full bg-[rgba(247,241,232,.9)] px-4 py-2 text-[var(--plum)] backdrop-blur">
            Free with Muuhu
          </span>
        </div>
        <div>
          <p className="Muuhu-eyebrow">Companion App</p>
          <h2 className="Muuhu-display mt-2 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
            Muuhu <span className="text-[var(--gold)]">AI App</span>.
          </h2>
          <p className="Muuhu-copy mt-3 text-sm leading-6">
            Muuhu Glow Coach is the AI Skincare app for Muuhu Ultra Pro
            customers. It helps customers plan, time, and track their
            personalised IPL treatment sessions, ensuring you never miss a
            treatment on your journey to silky smooth skin.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Plan", "Time", "Track"].map((step) => (
              <div
                className="rounded-lg border border-[rgba(58,31,61,.12)] bg-[var(--card)] px-3 py-2 text-center"
                key={step}
              >
                <p className="Muuhu-mono text-[var(--plum)] font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center md:justify-start">
            <Button asChild>
              <a href="https://app.Muuhu.com" target="_blank" rel="noopener noreferrer">
                <Smartphone size={17} />
                Try the app now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IceCoolingSection() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-14 md:py-24">
      <div className="Muuhu-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
        <div className="lg:order-last">
          <p className="Muuhu-mono text-[#ED6A3A]">Advanced Comfort</p>
          <h2 className="Muuhu-display mt-3 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
            Painless <em className="Muuhu-italic">Ice Cooling</em> Technology.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
            Experience virtually painless hair removal with our built-in contact cooling. 
            The sapphire cooling head lowers the temperature to a soothing ~8°C (46°F) where it touches your skin.
          </p>
          <ul className="mt-10 grid gap-6">
            <li className="border-l-2 border-[#ED6A3A] pl-6">
              <p className="Muuhu-display text-2xl text-[var(--plum)]">~8°C / 46°F</p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                Maintains a consistent, soothing temperature to protect your epidermis while light pulses target the hair follicle.
              </p>
            </li>
            <li className="border-l-2 border-[#ED6A3A] pl-6">
              <p className="Muuhu-display text-2xl text-[var(--plum)]">Soothes instantly</p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                Reduces redness and eliminates the burning sensation typical of older, uncooled IPL devices.
              </p>
            </li>
          </ul>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[var(--ink)]">
          <Image
            alt="Muuhu Ultra Pro Ice Cooling Technology"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={productMediaAsset("ipl_provided_2.png")}
          />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-[rgba(253,246,240,.94)] p-4 text-[var(--plum)] backdrop-blur">
            <p className="Muuhu-mono text-[#ED6A3A]">Skin Protection</p>
            <p className="Muuhu-display mt-1 text-xl">Cooling Sapphire Head</p>
          </div>
        </div>
      </div>
    </section>
  );
}




