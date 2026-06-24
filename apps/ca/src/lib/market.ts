export const market = {
  siteUrl: "https://ca.muuhu.com",
  locale: "en-CA",
  currency: "CAD",
  country: "Canada",
  marketLabel: "CA",
  flagEmoji: "🇨🇦",
  madeInLabel: "Made in Canada",
  checkoutSource: "ca_muuhu",
  checkoutUtmSource: "ca.muuhu.com",
  checkoutUtmCampaign: "ca_ipl",
  supportHours: "Monday to Friday, 9:00 AM to 5:00 PM EST",
} as const;

export type StoreCurrency = "USD" | "GBP" | "CAD" | "AUD";
