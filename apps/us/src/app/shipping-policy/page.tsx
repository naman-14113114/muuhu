import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Shipping Policy | Muuhu",
  description: "Detailed processing times, tracking rules, and free transit information for Muuhu LED Skincare orders.",
  alternates: {
    canonical: "/policies/shipping-policy",
  },
};

export default function Page() {
  return <PolicyPage policyType="shipping-policy" />;
}

