export const market = {
  siteUrl: "https://au.muuhu.com",
  locale: "en-AU",
  currency: "AUD",
  country: "Australia",
  marketLabel: "AU",
  flagEmoji: "🇦🇺",
  madeInLabel: "Made in Australia",
  checkoutSource: "au_buudy",
  checkoutUtmSource: "au.muuhu.com",
  checkoutUtmCampaign: "au_ipl",
  supportHours: "Monday to Friday, 9:00 AM to 5:00 PM AEST",
} as const;

export type StoreCurrency = "USD" | "GBP" | "CAD" | "AUD";
