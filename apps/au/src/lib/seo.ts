import type { Product } from "@/data/products";
import type { FAQItem } from "@/data/productSections";
import { absoluteUrl } from "@/lib/site";
import { market } from "@/lib/market";

const schemaCountry = (market.marketLabel as string) === "UK" ? "GB" : market.marketLabel;

export function productJsonLd(product: Product) {
  const productUrl = absoluteUrl(`/products/${product.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    image: product.gallery.map((image) => absoluteUrl(image.src)),
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Muuhu",
    },
    category:
      product.template === "mask"
        ? "IPL hair removal device"
        : "Handheld red light therapy device",
    sku: product.sku,
    mpn: product.sku,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      price: (product.priceCents / 100).toFixed(2),
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Muuhu",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0.00",
          currency: product.currency,
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: schemaCountry,
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: schemaCountry,
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 90,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };
}

export function faqJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: "Muuhu",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/media/products/buudy-led-mask/images/buudy_footer_logo.png"),
    sameAs: [
      "https://www.instagram.com/muuhu_com",
      "https://www.facebook.com/profile.php?id=61565686185222",
      "https://www.youtube.com/@muuhu-com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@muuhu.com",
      availableLanguage: [market.locale, "English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: "Muuhu Australia",
    url: absoluteUrl("/"),
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/products/muuhu-ipl-hair-removal")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function guidePageJsonLd({
  title,
  description,
  url,
  faqs,
}: {
  title: string;
  description: string;
  url: string;
  faqs: FAQItem[];
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${absoluteUrl(url)}#webpage`,
      name: title,
      description,
      url: absoluteUrl(url),
      inLanguage: market.locale,
      isPartOf: {
        "@id": `${absoluteUrl("/")}#website`,
      },
      about: [
        { "@type": "Thing", name: "Best IPL hair removal Australia" },
        { "@type": "Thing", name: "at-home laser hair removal" },
        { "@type": "Thing", name: "ice cooling IPL device" },
        { "@type": "Thing", name: "painless hair removal" },
      ],
      mainEntity: {
        "@id": `${absoluteUrl("/products/muuhu-ipl-hair-removal")}#product`,
      },
    },
    faqJsonLd(faqs),
  ];
}

