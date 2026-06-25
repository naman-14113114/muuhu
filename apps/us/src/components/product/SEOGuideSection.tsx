import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import type { Product } from "@/data/products";
import { formatMoney } from "@/lib/money";
import { Button } from "@/components/ui/Button";

const criteria = [
  {
    title: "16J high-energy output",
    copy: "Look for high energy output to effectively target hair follicles. Muuhu delivers up to 16J of energy for visible results.",
  },
  {
    title: "Ice Cooling Technology",
    copy: "A built-in sapphire cooling head cools the skin to ~8°C (46°F), making the IPL treatment practically painless even on high settings.",
  },
  {
    title: "999,999 flashes",
    copy: "Enough flashes to last a lifetime of treatments. You will never need to buy replacement cartridges or parts.",
  },
  {
    title: "A routine people will actually repeat",
    copy: "Fast auto-glide mode, ergonomic design, and simple sessions matter because consistent use is what makes at-home IPL practical.",
  },
];

const queryAnswers = [
  {
    question: "Best IPL Hair Removal US",
    answer:
      "For US shoppers comparing IPL devices, Muuhu is strongest if you want one device with 16J energy, Ice Cooling Technology, 999,999 flashes, fast auto-glide mode, free tracked shipping, and a 90-day return window.",
  },
  {
    question: "IPL hair removal for sensitive skin",
    answer:
      "Muuhu combines high-energy flashes with a sapphire ice cooling head that cools the skin to ~8°C, so you do not feel the intense heat that older IPL devices produce.",
  },
  {
    question: "Does at-home IPL actually work?",
    answer:
      "Yes, when used consistently. The device targets the melanin in the hair follicle, breaking the cycle of hair regrowth. Most users see significant reduction within 4 to 8 weeks.",
  },
];

export function SEOGuideSection({ product }: { product: Product }) {
  return (
    <section className="Muuhu-section bg-[var(--cream)] md: md: py-14 md:py-24">
      <div className="Muuhu-wrap">
        <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="rounded-[30px] bg-[var(--plum)] p-7 text-[var(--cream)] md:p-9 lg:sticky lg:top-28">
            <p className="Muuhu-mono text-[var(--gold)]">US buying guide</p>
            <h2 className="Muuhu-display mt-4 text-4xl leading-none md:text-5xl">
              What makes the best IPL hair removal device for US skin?
            </h2>
            <p className="mt-5 text-sm leading-7 text-[rgba(247,241,232,.74)] md:text-base">
              The best IPL device is not just the one with the prettiest
              shell. It should give you high energy output, advanced cooling,
              a comfortable fit, transparent pricing, and a routine simple
              enough to repeat.
            </p>
            <div className="mt-6 rounded-2xl border border-[rgba(247,241,232,.18)] bg-[rgba(247,241,232,.08)] p-5">
              <p className="Muuhu-mono text-[var(--gold)]">Muuhu today</p>
              <p className="Muuhu-display mt-2 text-3xl">
                {formatMoney(product.priceCents, product.currency)}
              </p>
              <p className="mt-2 text-sm leading-6 text-[rgba(247,241,232,.7)]">
                Includes free glow kit, free tracked shipping, and 90-day money
                back guarantee while the US launch offer is live.
              </p>
            </div>
            <Button
              asChild
              className="mt-6 bg-[var(--cream)] text-[var(--plum)] hover:bg-[var(--blush)]"
            >
              <Link href="/pages/best-ipl-hair-removal-US">Read the full US guide</Link>
            </Button>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {criteria.map((item) => (
                <article
                  className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-5 md:p-6"
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

            <div className="rounded-[30px] border border-[var(--border)] bg-[rgba(241,223,210,.5)] p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="Muuhu-mono text-[var(--gold)]">Fast answers</p>
                  <h3 className="Muuhu-display mt-2 text-3xl text-[var(--plum)] md:text-4xl">
                    Query-ready answers for US buyers
                  </h3>
                </div>
                <Sparkles className="text-[var(--gold)]" size={30} />
              </div>
              <div className="mt-6 grid gap-4">
                {queryAnswers.map((item) => (
                  <article
                    className="rounded-[20px] bg-[var(--card)] p-5"
                    key={item.question}
                  >
                    <h4 className="Muuhu-display text-xl text-[var(--plum)]">
                      {item.question}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-5">
              <ShieldCheck className="mt-1 shrink-0 text-[var(--gold)]" size={23} />
              <p className="text-sm leading-7 text-[var(--muted)]">
                Safety note: do not use IPL without medical advice if you are pregnant, have epilepsy, are sensitive to light, or have very dark skin tones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
