import { market } from "@/lib/market";

const body = `# Muuhu Australia

Muuhu Australia sells at-home IPL hair removal devices with ice cooling technology.

## Primary Pages
- Home: ${market.siteUrl}
- Muuhu IPL Hair Removal: ${market.siteUrl}/products/muuhu-ipl-hair-removal
- Best IPL Hair Removal Australia Guide: ${market.siteUrl}/pages/best-ipl-hair-removal-australia
- Red Light Torch: ${market.siteUrl}/products/red-light-torch
- FAQs: ${market.siteUrl}/pages/faqs

## Muuhu IPL Summary
- Product: Muuhu IPL Hair Removal
- Price: AUD 199 launch offer, compare-at AUD 399
- Category: IPL hair removal device, at-home laser hair removal, ice cooling IPL
- Technology: IPL (Intense Pulsed Light)
- Flash count: 999,999
- Energy: up to 16J, 9 adjustable levels
- Wavelength: 600–1200nm
- Cooling: built-in ice cooling at 8°C (46°F)
- Modes: Auto (glide for large areas) and Manual (stamp for precision)
- Display: LCD touch screen with energy memory
- Power: AC 100–240V universal voltage (corded)
- Offer: free gift kit while launch offer is live
- Returns: 90-day money back guarantee
- Shipping: free tracked Australian shipping

## Buyer Intent Answers
- Best IPL hair removal Australia: Muuhu is designed for Australian buyers who want a high flash count, ice cooling comfort, adjustable energy, fast auto-glide treatment, universal voltage, free tracked shipping, and a 90-day return window.
- IPL vs laser hair removal at home: Muuhu uses IPL technology with a 600–1200nm wavelength range to target hair follicle melanin. It is designed for light to medium skin tones with dark hair.
- Painless hair removal at home: The built-in ice cooling plate maintains 8°C at the treatment window, and 9 energy levels let you start low and increase gradually.

## Safety Note
Muuhu is a personal care device, not a medical treatment. Do not use if pregnant, breastfeeding, or under 18. People with epilepsy, light sensitivity, or taking photosensitising medication should consult a qualified healthcare professional before use. Not suitable for very dark skin tones (Fitzpatrick V–VI) or very light, red, grey, or white hair.
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
