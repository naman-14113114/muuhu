"use client";

import { useState } from "react";
import Image from "next/image";
import { productAsset } from "@/lib/media";

const tabs = [
  {
    id: "compact-build",
    tabLabel: "Compact Build",
    title: "Take your Wellness Anywhere",
    body: "Lightweight and portable design works at home, the office, or during travel. Premium smooth resin.",
    image: productAsset("tab-1-compact.jpeg", "muuhu-massage-kit"),
  },
  {
    id: "clinical-strength",
    tabLabel: "Premium Resin",
    title: "Premium Resin",
    body: "The resin kit combines a Gua Sha scraping board, massage comb, and beauty pen for a focused skin and body care routine.",
    image: productAsset("tab-2-clinical.jpeg", "muuhu-massage-kit"),
  },
  {
    id: "precision-wavelengths",
    tabLabel: "Precision Tools",
    title: "Precision Tools",
    body: "Use the specific tools for localized application on the face, back, knees, shoulders, hands, feet, or other target areas.",
    image: productAsset("tab-3-precision.jpeg", "muuhu-massage-kit"),
  },
  {
    id: "rapid-treatment",
    tabLabel: "Rapid Treatment",
    title: "Rapid Treatment",
    body: "Glide the Gua Sha over the target area for quick sessions, building gradually as your body gets used to the massage therapy.",
    image: productAsset(
      "tab-4-rapid.jpeg",
      "muuhu-massage-kit",
    ),
  },
];

export function MassageKitFeatureTabs() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="Muuhu-section bg-[var(--cream)] text-[var(--plum)] md: py-14 md:py-24">
      <div className="Muuhu-wrap">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[var(--ink)] text-[var(--cream)]"
                    : "bg-[rgba(58,31,61,.04)] text-[var(--plum)] hover:bg-[rgba(58,31,61,.08)]"
                }`}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-5xl mx-auto">
          <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-3xl">
            <Image
              src={activeTab.image}
              alt={activeTab.tabLabel}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="Muuhu-display text-4xl sm:text-5xl text-[var(--plum)] mb-6">
              {activeTab.title}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed text-lg max-w-lg mx-auto md:mx-0">
              {activeTab.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

