import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | US LED Skincare Store - Muuhu",
  description:
    "Learn about Muuhu, our team of skincare advocates, our story of IPL hair removal innovation, and our mission to make high-quality IPL hair removal routines simple and effective.",
  alternates: {
    canonical: "/pages/about-us",
  },
  openGraph: {
    title: "About Muuhu | High-Performance LED Skincare",
    description:
      "Learn about our team of skincare advocates, our story of IPL hair removal innovation, and our mission to deliver visible results.",
    url: absoluteUrl("/pages/about-us"),
  },
};

export default function Page() {
  return <AboutPage />;
}

