import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { market } from "@/lib/market";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best IPL Hair Removal US | Muuhu Ice Cooling Device",
  description:
    "Shop Muuhu US for at-home IPL hair removal with ice cooling, 999,999 flashes, 9 energy levels, and painless full-body treatment for long-lasting smoothness.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Best IPL hair removal US",
    "IPL device US",
    "at-home laser hair removal US",
    "ice cooling IPL",
    "painless hair removal device",
    "Muuhu IPL",
    "IPL with ice cooling",
  ],
  openGraph: {
    title: "Best IPL Hair Removal US | Muuhu",
    description:
      "Discover the Muuhu IPL Hair Removal Device with 999,999 flashes, ice cooling at 8Â°C, and 9 energy levels.",
    url: market.siteUrl,
    images: [
      {
        url: "/media/products/buudy-led-mask/images/ipl_hero_banner.png",
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


