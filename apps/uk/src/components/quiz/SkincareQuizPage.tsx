import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";
import { SkincareQuiz } from "./SkincareQuiz";

export function SkincareQuizPage() {
  return (
    <section className="Muuhu-section bg-[var(--cream)] py-12 md:py-18 lg:py-24">
      <div className="Muuhu-glow -left-28 top-8 h-[420px] w-[420px] bg-[#ED6A3A]" />
      <div className="Muuhu-glow -right-36 bottom-20 h-[500px] w-[500px] bg-[#a05080]" />

      <div className="Muuhu-wrap relative z-10">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="Muuhu-eyebrow">Personalised hair removal</p>
          <h1 className="Muuhu-display mt-4 text-[3rem] leading-[.98] text-[var(--plum)] md:text-[5.4rem]">
            Your skin, mapped to a{" "}
            <em className="Muuhu-italic text-[var(--gold)]">hair-free ritual</em>.
          </h1>
          <p className="Muuhu-copy mt-5 max-w-2xl">
            A 60-second assessment for a practical LED light therapy routine,
            shaped around your skin concerns and daily habits.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--plum)]">
              <Image
                alt="Muuhu Ultra Pro IPL Device"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 92vw"
                src="/media/products/buudy-led-mask/images/ipl_product_angle.png"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(23,10,24,.88))] p-6 pt-24 text-[var(--cream)]">
                <p className="Muuhu-mono text-[var(--gold)]">16J Energy + 8°C Ice Cooling</p>
                <p className="Muuhu-display mt-2 text-3xl leading-tight">
                  A hair removal routine that meets your skin where it is.
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-4">
                <Sparkles className="shrink-0 text-[var(--gold)]" size={18} />
                <span className="text-xs font-semibold leading-5 text-[var(--plum)]">
                  Targeted intensity guide
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-4">
                <ShieldCheck className="shrink-0 text-[var(--gold)]" size={18} />
                <span className="text-xs font-semibold leading-5 text-[var(--plum)]">
                  Thoughtful safety note
                </span>
              </div>
            </div>
          </aside>

          <SkincareQuiz />
        </div>
      </div>
    </section>
  );
}

