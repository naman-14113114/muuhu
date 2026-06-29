import type { Product } from "@/data/products";
import { AppPromo, IceCoolingSection } from "./AppPromo";
import { IPLVideo } from "./IPLVideo";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { ComparisonTable } from "./ComparisonTable";
import { ExpertSection } from "./ExpertSection";
import { FAQSection } from "./FAQSection";
import { GuaranteeSection } from "./GuaranteeSection";
import { ProductHero } from "./ProductHero";
import { ProductReviewsSection } from "./ProductReviewsSection";
import { StickyAddToCart } from "./StickyAddToCart";
import { MassageKitProductPage } from "./MassageKitProductPage";
import { VideoReviews } from "./VideoReviews";
import { SuitabilitySection } from "./SuitabilitySection";

export function ProductPage({ product }: { product: Product }) {
  if (product.template === "massage-kit") {
    return <MassageKitProductPage product={product} />;
  }

  return (
    <>
      <ProductHero product={product} />
      <VideoReviews />
      <IPLVideo />
      <BeforeAfterGrid />

      <AppPromo />
      <IceCoolingSection />
      <ProductReviewsSection />
      {/* <SuitabilitySection product={product} /> */}
      <ComparisonTable />
      <FAQSection faqs={product.faqs} />
      <GuaranteeSection />
      <StickyAddToCart product={product} />
    </>
  );
}




