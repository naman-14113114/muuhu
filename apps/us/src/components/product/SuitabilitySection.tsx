"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/data/products";


/* ── Skin tone swatches (from reference HTML) ─────────────────────── */
const skinTones = [
  { name: "Fair", img: "https://int.roseskinco.com/cdn/shop/files/fair-swatch_150x_2x_8b3a2356-3d6f-421f-9e53-b3e18b3227dc_150x.webp?v=1732040021" },
  { name: "Light", img: "https://int.roseskinco.com/cdn/shop/files/light-swatch_150x_2x_def8c93f-b9e9-4803-9ca4-446d8a55f384_150x.webp?v=1732040008" },
  { name: "Medium", img: "https://int.roseskinco.com/cdn/shop/files/medium-swatch_150x_2x_d2490191-e49b-49d9-a3cb-cd4e66fd4ad5_150x.webp?v=1732039988" },
  { name: "Tan", img: "https://int.roseskinco.com/cdn/shop/files/tan-swatch_150x_2x_1cc51a7c-7176-4c37-82e9-3b0b768d39e1_150x.webp?v=1732039975" },
  { name: "Dark Tan", img: "https://int.roseskinco.com/cdn/shop/files/dark-tan-swatch_150x_2x_b6c35ba5-3214-4655-b3e2-e89b58c2e8a9_150x.webp?v=1732039960", notSuitable: true },
  { name: "Dark", img: "https://int.roseskinco.com/cdn/shop/files/dark-swatch_150x_2x_2cf42f92-87b2-45ed-af90-f69897ce2e1c_150x.webp?v=1732039945", notSuitable: true },
];

/* ── Hair color swatches (from reference HTML) ────────────────────── */
const hairColors = [
  { name: "Light Blonde", img: "https://int.roseskinco.com/cdn/shop/files/Website_HairSwatches1_4.25.22_V1-06_9e167a52-2c00-466e-8b12-1295d8a0acd1_150x.jpg?v=1709827794", notSuitable: true },
  { name: "Medium Blonde", img: "https://int.roseskinco.com/cdn/shop/files/Website_HairSwatches1_4.25.22_V1-05_9366f728-5724-4081-9051-9947b7b24a78_150x.jpg?v=1674841364" },
  { name: "Light Brown", img: "https://int.roseskinco.com/cdn/shop/files/Website_HairSwatches1_4.25.22_V1-03_ede914b0-1a07-4239-adc8-ed7c3a3743c3_150x.jpg?v=1709827795" },
  { name: "Red", img: "https://int.roseskinco.com/cdn/shop/files/Website_HairSwatches1_4.25.22_V1-04_04d56794-3b65-4be5-8c1a-9b49038ce5f9_150x.jpg?v=1709827794", notSuitable: true },
  { name: "Dark Brown", img: "https://int.roseskinco.com/cdn/shop/files/Website_HairSwatches1_4.25.22_V1-02_cfb09e89-1ded-4ba1-b268-e74198cfd20a_150x.jpg?v=1709827794" },
  { name: "Black", img: "https://int.roseskinco.com/cdn/shop/files/Website_HairSwatches1_4.25.22_V1-01_ed7c3886-d883-48ed-a0c6-f86a0a894dcd_150x.jpg?v=1709827794" },
  { name: "White", img: "https://int.roseskinco.com/cdn/shop/files/Website_HairSwatches1_4.25.22_V1-07_f6cb925f-682e-41f8-a84f-f43968491160_150x.jpg?v=1709827795", notSuitable: true },
];

/* ── Result images per skin+hair combo (from reference HTML) ──────── */
const resultImages: Record<string, string> = {
  "Dark|Black":         "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-29_300x.jpg?v=1721938495",
  "Dark Tan|Black":     "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-27_300x.jpg?v=1721748192",
  "Dark Tan|Dark Brown":"https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-26_300x.jpg?v=1721748171",
  "Dark Tan|Light Brown":"https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-25_300x.jpg?v=1721748148",
  "Dark Tan|White":     "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-28_300x.jpg?v=1721748216",
  "Fair|Black":         "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-06_300x.jpg?v=1721747650",
  "Fair|Dark Brown":    "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-05_300x.jpg?v=1721747622",
  "Fair|Light Blonde":  "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-01_300x.jpg?v=1721747495",
  "Fair|Light Brown":   "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-03_300x.jpg?v=1721747581",
  "Fair|Medium Blonde": "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-02_300x.jpg?v=1721747559",
  "Fair|Red":           "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-04_300x.jpg?v=1721747599",
  "Fair|White":         "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-07_300x.jpg?v=1721747670",
  "Light|Black":        "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-13_300x.jpg?v=1721747802",
  "Light|Dark Brown":   "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-12_300x.jpg?v=1721747782",
  "Light|Light Blonde": "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-08_300x.jpg?v=1721747695",
  "Light|Light Brown":  "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-10_300x.jpg?v=1721747740",
  "Light|Medium Blonde":"https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-09_300x.jpg?v=1721747718",
  "Light|Red":          "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-11_300x.jpg?v=1721747761",
  "Light|White":        "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-14_300x.jpg?v=1721747827",
  "Medium|Black":       "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-19_300x.jpg?v=1721747946",
  "Medium|Dark Brown":  "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-18_300x.jpg?v=1721747923",
  "Medium|Light Blonde":"https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-15_300x.jpg?v=1721747852",
  "Medium|Light Brown": "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-16_300x.jpg?v=1721747876",
  "Medium|Medium Blonde":"https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-17_300x.jpg?v=1721747898",
  "Medium|Red":         "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-17_300x.jpg?v=1721747898",
  "Medium|White":       "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-20_300x.jpg?v=1721747968",
  "Tan|Black":          "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-25_300x.jpg?v=1721748148",
  "Tan|Dark Brown":     "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-22_300x.jpg?v=1721748054",
  "Tan|Light Brown":    "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-21_300x.jpg?v=1721748031",
  "Tan|White":          "https://int.roseskinco.com/cdn/shop/files/Skintones_For_Website_-_Artboards-24_300x.jpg?v=1721748123",
};

/* ── Result logic (exactly matching reference HTML result combinations) ── */
type ResultType = "yes" | "caution" | "no";

function getResultType(skin: string, hair: string): ResultType {
  // Dark skin → always no fit
  if (skin === "Dark") return "no";

  // Dark Tan + these hairs = no fit
  if (skin === "Dark Tan" && ["Light Blonde", "Medium Blonde", "White"].includes(hair)) return "no";
  // Dark Tan + these hairs = caution
  if (skin === "Dark Tan" && ["Black", "Dark Brown", "Light Brown", "Red"].includes(hair)) return "caution";

  // Light Blonde, White hair → always no fit (any skin)
  if (["Light Blonde", "White"].includes(hair)) return "no";

  // Red hair → varies
  if (hair === "Red") {
    if (["Fair", "Light"].includes(skin)) return "caution";
    if (skin === "Tan") return "no";
    return "no";
  }

  // Medium Blonde → caution for remaining skins
  if (hair === "Medium Blonde") return "caution";

  // Everything else = yes
  return "yes";
}

function getResultMessage(type: ResultType, skin: string, hair: string): string {
  switch (type) {
    case "yes":
      return `Yes! Based on your skin tone and hair color, Muuhu Ultra Pro should be a great fit for you. Order Muuhu Ultra Pro now and get ready to feel silky-smooth all over.`;
    case "caution":
      if (skin === "Dark Tan") {
        return `Possibly! Based on your skin tone and hair color, Muuhu Ultra Pro may work for you. But due to the darker pigmentation of your skin, we'd suggest exercising caution during treatment. Only use Muuhu Ultra Pro on its lowest intensity setting. Give Muuhu Ultra Pro a try – if it doesn't work for you, send it back within 90 days and we'll refund you in full!`;
      }
      return `Possibly! Based on your skin tone and hair color, Muuhu Ultra Pro may work for you. But due to the lightness of your body hair, Muuhu Ultra Pro may have trouble targeting the hair follicle. Give Muuhu Ultra Pro a try – if it doesn't work for you, send it back within 90 days and we'll refund you in full!`;
    case "no":
      return `Based on your skin tone, and hair color, Muuhu Ultra Pro probably won't be a good fit for you. Muuhu Ultra Pro requires more contrast between skin and hair root color to work its magic!`;
  }
}

/* ══════════════════════════════════════════════════════════════════════
   Component
   ══════════════════════════════════════════════════════════════════════ */
export function SuitabilitySection({ product }: { product?: Product }) {
  const { addProduct } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedSkin, setSelectedSkin] = useState<string | null>(null);
  const [selectedHair, setSelectedHair] = useState<string | null>(null);

  const handleSkinSelect = (name: string) => {
    setSelectedSkin(name);
    setStep(2);
  };

  const handleHairSelect = (name: string) => {
    setSelectedHair(name);
    setStep(3);
  };

  const reset = () => {
    setSelectedSkin(null);
    setSelectedHair(null);
    setStep(1);
  };

  const resultType = selectedSkin && selectedHair ? getResultType(selectedSkin, selectedHair) : null;
  const resultMsg = selectedSkin && selectedHair ? getResultMessage(resultType!, selectedSkin, selectedHair) : "";
  const comboKey = selectedSkin && selectedHair ? `${selectedSkin}|${selectedHair}` : "";
  const resultImg = selectedSkin && selectedHair ? "/media/products/buudy-led-mask/images/ipl_face_closeup.png" : null;

  return (
    <section className="Muuhu-section bg-[var(--cream)] py-14 md:py-24" id="suitability">
      <style>{`
        .suit-steps-wrapper {
          position: relative;
          min-height: 260px;
        }

        .suit-step {
          display: none;
          animation: suitFadeIn 0.4s ease;
        }
        .suit-step.is-active { display: block; }

        @keyframes suitFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .suit-swatches {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 16px;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-top: 16px;
          padding-bottom: 16px;
          scrollbar-width: none;
        }
        .suit-swatches::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 768px) {
          .suit-swatches { gap: 32px; }
        }

        .suit-swatch {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          width: 80px;
          min-width: 80px;
          transition: transform 0.2s ease;
        }
        @media (min-width: 768px) {
          .suit-swatch { 
            width: 140px; 
            min-width: 140px;
          }
        }
        .suit-swatch:hover {
          transform: translateY(-4px);
        }

        .suit-swatch-img-wrap {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid transparent;
          transition: all 0.2s ease;
          padding: 4px; /* Space between border and image when selected */
        }
        @media (min-width: 768px) {
          .suit-swatch-img-wrap {
            width: 140px;
            height: 140px;
            padding: 6px;
          }
        }

        .suit-swatch:hover .suit-swatch-img-wrap {
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .suit-swatch.is-selected .suit-swatch-img-wrap {
          border-color: #1f1d24; /* Match original dark border color */
          box-shadow: none; /* Original didn't have heavy shadow on select, just the border */
        }

        .suit-swatch-img {
          width: 100%;
          height: 100%;
          border-radius: 50%; /* Image itself needs to be round inside the padded wrapper */
          object-fit: cover;
          display: block;
        }

        .suit-swatch-label {
          display: none; /* Original reference does NOT have labels under the circles */
        }

        /* ── Result step ── */
        .suit-result-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        .suit-result-img-wrap {
          width: 160px;
          height: 160px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--cream);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .suit-result-img-wrap {
            width: 200px;
            height: 200px;
          }
        }
        .suit-result-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .suit-result-content {
          width: 100%;
        }

        .suit-result-text {
          font-size: 16px;
          line-height: 1.6;
          color: var(--plum);
          margin: 0 0 24px 0;
        }
        @media (min-width: 768px) {
          .suit-result-text { font-size: 20px; }
        }

        .suit-btn-wrapper {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .suit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 2px solid var(--gold);
          text-decoration: none;
        }

        .suit-btn--primary {
          background: var(--gold);
          color: #fff;
        }
        .suit-btn--primary:hover {
          background: var(--gold);
          opacity: 0.9;
        }

        .suit-btn--secondary {
          background: transparent;
          color: var(--gold);
        }
        .suit-btn--secondary:hover {
          background: rgba(237, 106, 58, 0.06);
        }

        .suit-progress {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-top: 40px;
          position: relative;
        }

        .suit-progress-line {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 2px;
          background: rgba(0,0,0,0.15);
          z-index: 0;
        }

        .suit-progress-step {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--cream);
          border: 2px solid rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: var(--muted);
          z-index: 1;
          transition: all 0.3s ease;
        }
        .suit-progress-step.is-active {
          color: var(--plum);
          border-color: var(--plum);
        }
        .suit-progress-step.is-done {
          color: #fff;
          background: var(--plum);
          border-color: var(--plum);
        }

        .suit-progress-gap {
          width: 32px;
          height: 2px;
          background: rgba(0,0,0,0.15);
        }
        .suit-progress-gap.is-done {
          background: var(--plum);
        }
      `}</style>

      <div className="suit-inner text-center">
        <p className="Muuhu-eyebrow mb-2">No more guesswork</p>
        <h2 className="Muuhu-heading mb-10">Will Muuhu Ultra Pro work for me?</h2>

        <div className="suit-steps-wrapper">
          {/* ── Step 1: Skin Tone ── */}
          <div className={`suit-step ${step === 1 ? "is-active" : ""}`}>
            <h3 className="Muuhu-display text-xl md:text-2xl text-[var(--plum)] mb-7">Select your skin tone</h3>
            <div className="suit-swatches">
              {skinTones.map((tone) => (
                <button
                  key={tone.name}
                  className={`suit-swatch ${selectedSkin === tone.name ? "is-selected" : ""}`}
                  onClick={() => handleSkinSelect(tone.name)}
                  type="button"
                >
                  <div className="suit-swatch-img-wrap">
                    <img src={tone.img} alt={tone.name} className="suit-swatch-img" />
                  </div>
                  <span className="suit-swatch-label">{tone.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Step 2: Hair Root Color ── */}
          <div className={`suit-step ${step === 2 ? "is-active" : ""}`}>
            <h3 className="Muuhu-display text-xl md:text-2xl text-[var(--plum)] mb-7">Select your hair root color</h3>
            <div className="suit-swatches">
              {hairColors.map((color) => (
                <button
                  key={color.name}
                  className={`suit-swatch ${selectedHair === color.name ? "is-selected" : ""}`}
                  onClick={() => handleHairSelect(color.name)}
                  type="button"
                >
                  <div className="suit-swatch-img-wrap">
                    <img src={color.img} alt={color.name} className="suit-swatch-img" />
                  </div>
                  <span className="suit-swatch-label">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Step 3: Result ── */}
          <div className={`suit-step ${step === 3 ? "is-active" : ""}`}>
            <div className="suit-result-wrapper">
              {resultImg && (
                <div className="suit-result-img-wrap">
                  <img src={resultImg} alt={`${selectedSkin} / ${selectedHair}`} className="suit-result-img" />
                </div>
              )}
              <div className="suit-result-content">
                <p className="suit-result-text">{resultMsg}</p>
                <div className="suit-btn-wrapper">
                  <button className="suit-btn suit-btn--secondary" onClick={reset} type="button">
                    Start again
                  </button>
                  {resultType !== "no" && (
                    <a
                      className="suit-btn suit-btn--primary"
                      href="#product-form"
                      onClick={(e) => {
                        e.preventDefault();
                        if (product) { addProduct(product); router.push("/cart"); }
                      }}
                    >
                      Add to Cart
                    </a>
                  )}
                  {resultType === "no" && (
                    <a className="suit-btn suit-btn--primary" href="/">
                      Explore Others
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Progress indicator ── */}
        <div className="suit-progress">
          <span className={`suit-progress-step ${step === 1 ? "is-active" : step > 1 ? "is-done" : ""}`}>1</span>
          <span className={`suit-progress-gap ${step > 1 ? "is-done" : ""}`} />
          <span className={`suit-progress-step ${step === 2 ? "is-active" : step > 2 ? "is-done" : ""}`}>2</span>
          <span className={`suit-progress-gap ${step > 2 ? "is-done" : ""}`} />
          <span className={`suit-progress-step ${step === 3 ? "is-active" : ""}`}>3</span>
        </div>
      </div>
    </section>
  );
}
