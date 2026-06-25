export type QuizQuestionId =
  | "concern"
  | "eyes"
  | "skinType"
  | "pregnant"
  | "age";

export type QuizOption = {
  value: string;
  label: string;
  description?: string;
  exclusive?: boolean;
};

export type QuizQuestion = {
  id: QuizQuestionId;
  title: string;
  subtitle: string;
  selection: "single" | "multiple";
  options: QuizOption[];
};

export type QuizAnswers = {
  concern: string[];
  eyes: string[];
  skinType: string;
  pregnant: string;
  age: string;
};

export type QuizRoutineStep = {
  number: string;
  title: string;
  copy: string;
  highlighted?: boolean;
};

export type QuizResult = {
  profileTag: string;
  profileSummary: string;
  ledSetting: string;
  pregnancyWarning?: string;
  routine: QuizRoutineStep[];
};

export const emptyQuizAnswers: QuizAnswers = {
  concern: [],
  eyes: [],
  skinType: "",
  pregnant: "",
  age: "",
};

export const skincareQuizQuestions: QuizQuestion[] = [
  {
    id: "concern",
    title: "What are your main hair removal struggles?",
    subtitle: "Select all that apply.",
    selection: "multiple",
    options: [
      { value: "Fast Regrowth", label: "Fast Regrowth" },
      { value: "Ingrown Hairs", label: "Ingrown Hairs" },
      { value: "Strawberry Legs", label: "Strawberry Legs" },
      { value: "Shaving Rash / Razor Bumps", label: "Shaving Rash / Razor Bumps" },
      { value: "Thick / Coarse Hair", label: "Thick / Coarse Hair" },
      { value: "Painful Waxing", label: "Painful Waxing" },
      { value: "Time Consuming", label: "Time Consuming" },
      { value: "Dark Shadows", label: "Dark Shadows" },
    ],
  },
  {
    id: "eyes",
    title: "Which areas do you want to treat the most?",
    subtitle: "Select any that apply.",
    selection: "multiple",
    options: [
      { value: "Legs", label: "Legs" },
      { value: "Underarms", label: "Underarms" },
      { value: "Bikini Line / Brazilian", label: "Bikini Line / Brazilian" },
      { value: "Face / Upper Lip", label: "Face / Upper Lip" },
      { value: "Arms & Body", label: "Arms & Body" },
    ],
  },
  {
    id: "skinType",
    title: "How would you describe your skin sensitivity?",
    subtitle: "Select one option.",
    selection: "single",
    options: [
      {
        value: "Very Sensitive",
        label: "Very Sensitive",
        description: "Skin gets red easily after shaving, waxing, or using new products.",
      },
      {
        value: "Mildly Sensitive",
        label: "Mildly Sensitive",
        description: "Occasional irritation, but generally handles hair removal well.",
      },
      {
        value: "Normal",
        label: "Normal",
        description: "Resilient skin. Rarely experiences redness or irritation from hair removal.",
      },
      {
        value: "Tough",
        label: "Tough",
        description: "Never experiences irritation. Can handle any hair removal method easily.",
      },
    ],
  },
  {
    id: "pregnant",
    title: "Are you pregnant or breastfeeding?",
    subtitle: "We ask to ensure our recommendations are completely safe.",
    selection: "single",
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
  },
  {
    id: "age",
    title: "Knowing your age helps us tailor your routine.",
    subtitle: "Select your age range.",
    selection: "single",
    options: [
      { value: "18 - 24", label: "18 - 24" },
      { value: "25 - 34", label: "25 - 34" },
      { value: "35 - 44", label: "35 - 44" },
      { value: "45 - 54", label: "45 - 54" },
      { value: "55 - 64", label: "55 - 64" },
      { value: "65 - 74", label: "65 - 74" },
      { value: "75+", label: "75+" },
    ],
  },
];