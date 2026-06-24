import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { market } from "@/lib/market";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best IPL Hair Removal Canada | Muuhu",
  description:
    "Shop Muuhu Canada for salon-grade IPL hair removal, ice cooling routines, and free tracked shipping.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Best IPL Hair Removal Canada",
    "IPL hair removal Canada",
    "at-home IPL Canada",
    "ice cooling IPL Canada",
    "painless IPL hair removal",
  ],
  openGraph: {
    title: "Best IPL Hair Removal Canada | Muuhu",
    description:
      "Discover the Muuhu Ultra Pro device with ice cooling, 999,999 flashes, and 9 energy levels.",
    url: market.siteUrl,
    images: [
      {
        url: "/media/products/buudy-led-mask/images/reference_ipl.jpg",
        width: 1200,
        height: 900,
        alt: "Muuhu Ultra Pro at home",
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



