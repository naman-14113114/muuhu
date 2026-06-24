import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Refund Policy | Muuhu",
  description: "Conditions regarding order cancellations, adjustments, and refunds for Muuhu Light Therapy purchases.",
  alternates: {
    canonical: "/policies/refund-policy",
  },
};

export default function Page() {
  return <PolicyPage policyType="refund-policy" />;
}

