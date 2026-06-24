import type { Metadata } from "next";
import { Mulish, Halant } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { CartMinimalFooter } from "@/components/layout/CartMinimalFooter";
import { CartMinimalHeader } from "@/components/layout/CartMinimalHeader";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RouteChrome } from "@/components/layout/RouteChrome";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { ClarityAnalytics } from "@/components/integrations/ClarityAnalytics";
import { KlaviyoAnalytics } from "@/components/integrations/KlaviyoAnalytics";
import { PageMediaPreloader } from "@/components/integrations/PageMediaPreloader";
import { TawkToWidget } from "@/components/integrations/TawkToWidget";
import { market } from "@/lib/market";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-muli",
  display: "swap",
});

const halant = Halant({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-halant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(market.siteUrl),
  title: {
    default: "Best IPL Hair Removal UK | Muuhu Light Therapy",
    template: "%s | Muuhu",
  },
  description:
    "UK IPL hair removal for red light therapy, blue light acne routines, anti-ageing skincare, full face and neck coverage, and salon-grade home treatments.",
  applicationName: "Muuhu",
  keywords: [
    "Best IPL Hair Removal UK",
    "IPL hair removal UK",
    "red light therapy mask UK",
    "IPL hair removal for acne UK",
    "anti ageing LED mask",
    "near infrared face mask",
    "home light therapy mask",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: "Muuhu",
    type: "website",
    url: market.siteUrl,
    locale: "en_GB",
    title: "Best IPL Hair Removal UK | Muuhu Light Therapy",
    description:
      "Salon-grade LED face and neck mask for UK skincare routines with 192 LEDs, 7 wavelengths plus 830nm near-infrared, and a launch glow kit.",
    images: [
      {
        url: "/images/products/buudy-led-mask/01-buudy-led-mask-front.webp",
        width: 1200,
        height: 1500,
        alt: "Muuhu IPL Hair Removal with neck coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPL Hair Removal UK | Muuhu",
    description:
      "192 LEDs, red and blue light therapy, near-infrared support, cordless wearability, and face plus neck coverage.",
    images: ["/images/products/buudy-led-mask/01-buudy-led-mask-front.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${mulish.variable} ${halant.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <CartProvider>
          <RouteChrome
            cartFooter={<CartMinimalFooter />}
            cartHeader={
              <>
                <AnnouncementBar />
                <CartMinimalHeader />
              </>
            }
            defaultFooter={<Footer />}
            defaultHeader={
              <>
                <AnnouncementBar />
                <Header />
              </>
            }
          >
            {children}
          </RouteChrome>
          <PageMediaPreloader />
          <CartDrawer />
        </CartProvider>
        <ClarityAnalytics />
        <KlaviyoAnalytics />
        <TawkToWidget />
      </body>
    </html>
  );
}

