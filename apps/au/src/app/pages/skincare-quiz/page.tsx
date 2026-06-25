import type { Metadata } from "next";
import { SkincareQuizPage } from "@/components/quiz/SkincareQuizPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personalised Skincare Quiz",
  description:
    "Take the Muuhu skincare quiz to match your concerns with a personalised IPL hair removal and daily skincare routine.",
  alternates: {
    canonical: "/pages/skincare-quiz",
  },
  openGraph: {
    title: "Personalised Skincare Quiz | Muuhu",
    description:
      "Build a personalised IPL hair removal and daily skincare routine in 60 seconds.",
    url: absoluteUrl("/pages/skincare-quiz"),
  },
};

export default function Page() {
  return <SkincareQuizPage />;
}

