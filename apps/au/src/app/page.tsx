import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { market } from "@/lib/market";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best IPL Hair Removal Australia | Muuhu Ice Cooling Device",
  description:
    "Shop Muuhu Australia for at-home IPL hair removal, ice cooling technology, painless full-body treatment, and free tracked shipping.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Best IPL Hair Removal Australia",
    "IPL device Australia",
    "at-home laser hair removal Australia",
    "ice cooling IPL",
    "painless hair removal device",
  ],
  openGraph: {
    title: "Best IPL Hair Removal Australia | Muuhu",
    description:
      "Discover the Muuhu IPL Hair Removal device with 999,999 flashes, ice cooling at 8°C, and 9 energy levels for full body treatment.",
    url: market.siteUrl,
    images: [
      {
        url: "/images/products/buudy-led-mask/09-buudy-led-mask-home-spa.webp",
        width: 1200,
        height: 900,
        alt: "Muuhu IPL hair removal device at home",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {[organizationJsonLd(), websiteJsonLd()].map((schema, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <HomePage />
    </>
  );
}

