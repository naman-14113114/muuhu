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
    default: "Best IPL Hair Removal Australia | Muuhu Ice Cooling Device",
    template: "%s | Muuhu",
  },
  description:
    "At-home IPL hair removal with ice cooling, 999,999 flashes, 9 energy levels, and painless full-body treatment for long-lasting smoothness.",
  applicationName: "Muuhu",
  keywords: [
    "Best IPL hair removal Australia",
    "IPL device Australia",
    "at-home laser hair removal Australia",
    "ice cooling IPL",
    "painless hair removal device",
    "Muuhu IPL",
    "IPL with ice cooling",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
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
    locale: "en_AU",
    title: "Best IPL Hair Removal Australia | Muuhu Ice Cooling Device",
    description:
      "At-home IPL hair removal with 999,999 flashes, ice cooling at 8°C, 9 energy levels up to 16J, and a free gift kit.",
    images: [
      {
        url: "/images/products/buudy-led-mask/01-buudy-led-mask-front.webp",
        width: 1200,
        height: 1500,
        alt: "Muuhu IPL device with ice cooling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPL Hair Removal Australia | Muuhu",
    description:
      "999,999 flashes, ice cooling, 9 energy levels, Auto and Manual modes, LCD touch display, and free tracked shipping.",
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
      lang="en-AU"
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

