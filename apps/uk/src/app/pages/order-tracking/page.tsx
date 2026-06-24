import type { Metadata } from "next";
import { OrderTrackingPage } from "@/components/policies/OrderTrackingPage";

export const metadata: Metadata = {
  title: "Order Tracking | Muuhu",
  description: "Locate your Muuhu Ultra Pro order status, shipment timeline, and official carrier tracking updates.",
  alternates: {
    canonical: "/policies/order-tracking",
  },
};

export default function Page() {
  return <OrderTrackingPage />;
}

