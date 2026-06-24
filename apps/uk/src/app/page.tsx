import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { market } from "@/lib/market";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best IPL Hair Removal UK | Muuhu Red Light Therapy",
  description:
    "Shop Muuhu UK for salon-grade IPL hair removals, red light therapy, blue light acne routines, anti-ageing skincare, near-infrared support, neck coverage, and free tracked shipping.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "best IPL hair removal UK",
    "red light therapy mask UK",
    "IPL hair removal for acne UK",
    "anti ageing LED mask UK",
    "home LED light therapy",
  ],
  openGraph: {
    title: "Best IPL Hair Removal UK | Muuhu",
    description:
      "Discover the Muuhu IPL with 192 LEDs, red and blue light therapy, near-infrared support, and full face plus neck coverage.",
    url: market.siteUrl,
    images: [
      {
        url: "/images/products/buudy-led-mask/09-buudy-led-mask-home-spa.webp",
        width: 1200,
        height: 900,
        alt: "Muuhu LED light therapy mask at home",
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

