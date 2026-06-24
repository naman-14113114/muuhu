# Muuhu IPL Rebrand Agent Rules

## Repository Map
This is a monorepo containing 4 storefront applications for different regions:
- `apps/us/`
- `apps/uk/`
- `apps/ca/`
- `apps/au/`

There are also shared packages (`@buudy/ui`, `@buudy/shared`) which should not be modified unless specifically requested.

## Data Ownership
Each country app owns its own data. If you modify a product, FAQ, or configuration in one app, you must consider whether the other 3 apps require the same modification.
Key data files per app:
- `src/data/products.ts`
- `src/data/navigation.ts`
- `src/lib/market.ts`
- `src/data/seoFaqs.ts`
- `src/data/freeGifts.ts`

## Next.js 16 Documentation
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Product Data Provenance
- Use `MUUHU_IPL_SOURCE_DATA.json` for factual claims about the Muuhu IPL product.
- **NEVER** invent medical, regulatory, warranty, performance, or certification claims. Stick strictly to the approved facts.

## Design Rules
- The existing layout, Navaskin color palette, typography (Mulish/Halant), and spacing are PROTECTED.
- Existing components, image/video files, and review content must not be modified or replaced unless explicitly requested by the user.
- The gift bundle logic and content are protected.

## Implementation Discipline
- Make minimal changes.
- Do not perform unrelated refactors.
- Do not remove features by inference.
- Keep the red-light torch product intact.
- ALWAYS plan before writing code.
## Session Log (Detailed Progress Tracking)

### Session 1: CSS and Suitability Swatches Setup
- **User Intent**: The user requested that the gap between circles in the Suitability Swatches (skin tone selection) be adjusted. The user noted that previously, the circles were reduced in size, but they actually wanted them to remain their original size (or match the Navaskin sizing of ~140px on desktop) while fitting all 7 circles on one line.
- **Agent Logic & Thinking**: 
  - The `SuitabilitySection.tsx` file defines the swatches. The user wanted them to fit in a single line. I modified the CSS class `.suit-swatches` to ensure it uses flexbox with `flex-wrap: nowrap` or allows horizontal scrolling `overflow-x: auto` so they don't break onto multiple lines, matching the layout requested by the user.
  - Sizing was adjusted specifically to match mobile (80px) and desktop (140px) sizes without causing the circles to shrink arbitrarily.
  - The active/selected state was modified to include a "white-gap-in-border" (using a transparent or white inner border `box-shadow`) to precisely match the reference design provided by the user.
- **User Behavior & Constraints**: The user was highly protective of the design aesthetics ("dare you not to copy the color and font") and strictly enforced the requirement to do minimal changes. Any changes made must be propagated to all 4 storefront apps (US, UK, CA, AU).
- **Actions Taken**:
  - Edited `e:\1st YEAR DTU\New folder\muuhu\apps\{us,uk,ca,au}\src\components\product\SuitabilitySection.tsx`.
  - Adjusted sizes to 80px/140px, removed text labels beneath the swatches, added proper gap spacing, and updated the selected border style.
  - Verified successful builds (`npm run build`) across all 4 apps.

### Session 2: Image Generation Prompts (Manus Preparation)
- **User Intent**: The user wanted to generate 15 brand new product/lifestyle images using Manus (an external image generation tool running GPT 5.5). The user strictly forbade the agent from generating the images directly, and only wanted highly detailed text prompts created. The images needed to align with the Navaskin aesthetic (clean, premium).
- **Agent Logic & Thinking**:
  - I evaluated the `IPL images` directory to understand the current assets. The device is white with champagne gold trim.
  - The user stated that the IPL device must have NO LOGO or text printed on it.
  - I asked a series of multiple-choice questions to define the constraints: The user selected a burnt-orange bodysuit for the model, a fair-skinned brunette model, completely clean/blank device body, warm cream/beige background matching `var(--cream)`, no UGC style (professional studio only), and usage of all facts from `MUUHU_IPL_SOURCE_DATA.json`.
- **Actions Taken**:
  - Created a comprehensive artifact (`muuhu_image_gen_prompts.md`) containing 15 distinct prompts divided into Gallery (1:1), Hero (16:9), Infographics (1:1), and Lifestyle (4:5) sections.
  - Enforced the "NO LOGO", "No watermarks", and "Burnt orange bodysuit" constraints in every prompt.

### Session 3: Global Logo Replacement
- **User Intent**: The user uploaded an image of the new "muuhu" text logo (orange, rounded font) and requested it replace the old "buudy" logo in the header and footer across all 4 country applications, then pushed to GitHub.
- **Agent Logic & Thinking**:
  - I searched for the uploaded image and found it automatically saved in `E:\1st YEAR DTU\New folder\IPL images\1778848191290363e0ea.png` exactly at the time of the user's message.
  - I copied this file to `public/media/products/buudy-led-mask/images/muuhu_logo.png` for all 4 apps.
  - Used PowerShell string replacement to update `Header.tsx`, `CartMinimalHeader.tsx`, and `Footer.tsx` paths across the monorepo to point to `muuhu_logo.png` instead of the old `ChatGPT Image...` or `buudy_footer_logo.png`.
- **Actions Taken**:
  - Executed the logo file copy and code string replacements.
  - Committed ("Update header and footer logos to Muuhu across all country apps") and pushed the changes to the `main` branch.

### Session 4: Restoring AppPromo and Adding Ice Cooling
- **User Intent**: The user noticed the "App section" was missing and demanded it be restored between the Sustainability and Comparison sections. The user then angrily pointed out that the restored AppPromo contained text about "LED mask details" (from the old product) instead of "IPL hair removal". They also requested a new "Ice cooling" section be added directly below it using correct factual data.
- **Agent Logic & Thinking**:
  - I first located `AppPromo.tsx` and saw it was imported but not rendered in `ProductPage.tsx`. I added `<AppPromo />` back in.
  - I checked `MUUHU_IPL_SOURCE_DATA.json` to extract the correct Ice Cooling data: "~8°C / 46°F" cooling temp.
  - I updated the copy in `AppPromo.tsx` to explicitly reference "IPL Hair Removal" and "IPL treatment sessions" instead of LED wavelengths.
  - I created a new `<IceCoolingSection />` component inside `AppPromo.tsx` highlighting the Sapphire Cooling Head and the 8°C contact cooling spec.
- **Actions Taken**:
  - Injected `<AppPromo />` and `<IceCoolingSection />` into `ProductPage.tsx` across all 4 apps.
  - Copied the updated `AppPromo.tsx` code to all 4 apps.
  - Committed ("Update AppPromo to IPL details and add IceCoolingSection") and pushed the changes to GitHub.

### Session 5: Build Encoding Fix and Ice Cooling Restyling
- **User Intent**: The user pointed out that the App and Ice Cooling sections were not visible on the live AU storefront, and then angrily noticed that the Ice Cooling section had an unwanted background color and divider lines.
- **Agent Logic & Thinking**:
  - Investigated the build failure and discovered that appending the new `IceCoolingSection` via PowerShell had corrupted the file encoding, causing the Turbopack compiler to throw an "invalid utf-8 sequence" error.
  - Re-encoded `AppPromo.tsx` to strictly `UTF-8` across all 4 apps, fixing the build issue.
  - For the styling issue, removed `border-y border-[var(--border)]` and `bg-[#FDF6F0]` from `IceCoolingSection`. 
  - Changed it to match the surrounding layout (`bg-[var(--cream)]`) for a seamless scroll experience without assuming separate section divisions.
- **Actions Taken**:
  - Fixed file encoding on `AppPromo.tsx` and pushed the fix to resolve Vercel Turbopack crashes.
  - Stripped the background and border classes from `IceCoolingSection` across `us`, `uk`, `ca`, and `au` apps.
  - Committed ("Remove background color and border from IceCoolingSection to match design") and pushed the visual updates.

## Session Logging Requirement (CRITICAL)
- **MANDATORY**: After EVERY task, regardless of whether the user explicitly requests it, you MUST append a detailed session log to this `AGENTS.md` file.
- Do not summarize the context. Write everything in detail: your thinking, user intent and constraints, and all actions taken.
- This rule is permanent and non-negotiable.

### Session 6: Footer Overlap Fix
- **User Intent**: The user complained that the Sticky Add to Cart bar on the product page was overlapping the footer content (specifically the copyright and payment icons) and requested that the sticky CTA be moved further down.
- **Agent Logic & Thinking**:
  - Investigated `StickyAddToCart.tsx` and realized it adds a class `Muuhu-mask-sticky-cta` to the HTML tag to apply padding to the footer.
  - Searched `globals.css` and found that the CSS rule was still targeting `.buudy-mask-sticky-cta footer`. Due to the global string replacement of 'buudy' with 'Muuhu' in the React components, this CSS link broke, which caused the footer to lose the bottom padding needed to accommodate the sticky bar.
  - I replaced `.buudy-mask-sticky-cta` with `.Muuhu-mask-sticky-cta` in `globals.css` across all 4 apps.
  - To push the sticky bar "further down" per the user's request, I reduced its bottom spacing from `bottom-3 sm:bottom-5` to `bottom-2 sm:bottom-2`.
  - I also increased the footer padding in `globals.css` to `4rem` (mobile) and `6rem` (desktop) to ensure it perfectly clears the new sticky positioning.
- **Actions Taken**:
  - Executed a PowerShell script to globally update `globals.css` padding rules and class names.
  - Updated `StickyAddToCart.tsx` across `us`, `uk`, `ca`, and `au` to lower the CTA positioning.
  - Committed ("Fix sticky add to cart overlapping footer and adjust bottom position") and pushed the changes to GitHub.

### Session 7: Logo Transparency and Comparison Table Update
- **User Intent**: The user uploaded a new, transparent version of the Muuhu logo. They requested this new version to replace the logo in the header/footer, and also demanded that the old "BUUDY (Your Beauty, Our Light)" logo be removed from the first column of the Comparison Table and replaced with the new Muuhu logo.
- **Agent Logic & Thinking**:
  - Found the uploaded transparent logo file (`media__1782305802159.png`).
  - Copied it to overwrite `muuhu_logo.png` in the public assets directory across all 4 apps. By overwriting the file, the header, minimal cart header, and footer components automatically inherit the transparent version without needing code changes.
  - Investigated `ComparisonTable.tsx` and found a hardcoded external image URL (`img.thesitebase.net/...`) pointing to the old BUUDY logo.
  - Used PowerShell string replacement to update this `src` attribute to point to the local `/media/products/buudy-led-mask/images/muuhu_logo.png` path across all 4 apps.
- **Actions Taken**:
  - Overwrote public logo files across `apps/{us,uk,ca,au}`.
  - Replaced the comparison table image URL in `ComparisonTable.tsx` across all apps.
  - Committed ("Update logo to transparent version in header, footer, and comparison table") and pushed to GitHub.
