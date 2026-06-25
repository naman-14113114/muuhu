import type { Metadata } from "next";
import { FaqPage } from "@/components/faq/FaqPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Help & Support - Muuhu",
  description:
    "Find answers to shipping policies, return policies, order tracking, payment methods, and technical questions about the Muuhu IPL Hair Removal Device.",
  alternates: {
    canonical: "/pages/faqs",
  },
  openGraph: {
    title: "Muuhu Help Center | Frequently Asked Questions",
    description:
      "Find answers to shipping policies, return policies, order tracking, payment methods, and technical questions about the Muuhu IPL Hair Removal Device.",
    url: absoluteUrl("/pages/faqs"),
  },
};

export default function Page() {
  return <FaqPage />;
}

