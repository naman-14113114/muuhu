import type { QuizAnswers, QuizResult } from "@/data/skincareQuiz";

type SkinRoutine = {
  prep: string;
  protect: string;
};

function getLedRecommendation(concerns: string[]) {
  if (concerns.includes("Ingrown Hairs") || concerns.includes("Strawberry Legs")) {
    return {
      setting: "Intensity Levels 6-9 with Sapphire Ice Cooling",
      details: "Higher energy (up to 16J) specifically targets the root to eliminate ingrown hairs and clear up strawberry legs, while Ice Cooling prevents skin irritation.",
    };
  }

  if (concerns.includes("Thick / Coarse Hair") || concerns.includes("Fast Regrowth")) {
    return {
      setting: "Max Intensity (Level 9)",
      details: "Utilize the full 16J energy output to effectively disable stubborn, coarse hair follicles and significantly slow down fast regrowth.",
    };
  }

  if (concerns.includes("Shaving Rash / Razor Bumps") || concerns.includes("Very Sensitive")) {
    return {
      setting: "Intensity Levels 1-5 with Active Ice Cooling",
      details: "Start with lower intensity levels to allow your skin to adapt without triggering a rash. The 8°C Ice Cooling technology will soothe the skin on contact.",
    };
  }

  return {
    setting: "Intensity Levels 5-9 with Auto-Glide Mode",
    details: "Perfect for fast, painless treatments. Use the continuous flash Auto-Glide mode to treat large areas quickly while maintaining maximum comfort.",
  };
}

function getSkinRoutine(skinType: string): SkinRoutine {
  switch (skinType) {
    case "Very Sensitive":
      return {
        prep: "Shave the area 24 hours before treatment. Avoid using any lotions or creams.",
        protect: "Apply a gentle, fragrance-free aloe vera gel. Stay out of direct sunlight.",
      };
    case "Mildly Sensitive":
      return {
        prep: "Shave the treatment area cleanly. Ensure skin is dry and free of products.",
        protect: "Moisturize with a soothing lotion and apply SPF if exposing the area to the sun.",
      };
    default:
      return {
        prep: "Shave the area closely right before your session for maximum energy absorption.",
        protect: "Keep the skin hydrated with your favorite body lotion and apply SPF 50 if going outside.",
      };
  }
}

function getEyeTips(eyes: string[]) {
  if (eyes.includes("Face / Upper Lip")) {
    return "Since you're treating facial areas, always wear the provided protective eyewear and never flash directly near the eyes.";
  }

  return `For your ${eyes.join(" and ").toLowerCase()}, use the Auto-Glide mode for larger areas and Manual mode for precision control.`;
}

function getProfileTag(concerns: string[]) {
  return concerns.length > 2
    ? `${concerns[0]}, ${concerns[1]} +${concerns.length - 2}`
    : concerns.join(", ");
}

export function buildSkincareQuizResult(answers: QuizAnswers): QuizResult {
  const led = getLedRecommendation(answers.concern);
  const skinRoutine = getSkinRoutine(answers.skinType);
  const eyeTips = getEyeTips(answers.eyes);

  return {
    profileTag: getProfileTag(answers.concern),
    profileSummary: `Based on your profile (Age: ${answers.age}, ${answers.skinType}), we have formulated the perfect clinical home-routine for you.`,
    ledSetting: led.setting,
    pregnancyWarning:
      answers.pregnant === "Yes"
        ? "Because you are pregnant or breastfeeding, we strongly advise consulting your physician before using IPL Hair Removal or introducing new active ingredients."
        : undefined,
    routine: [
      {
        number: "01",
        title: "Prep & Shave",
        copy: `${skinRoutine.prep} Make sure your skin is completely clean and dry before IPL treatment for maximum light penetration.`,
      },
      {
        number: "02",
        title: "Muuhu IPL Treatment (10 Mins)",
        copy: `${led.details} Use 2-3 times a week for best results.`,
        highlighted: true,
      },
      {
        number: "03",
        title: "Hydrate & Protect",
        copy: `${skinRoutine.protect} Don't forget your specific areas: ${eyeTips}`,
      },
    ],
  };
}
