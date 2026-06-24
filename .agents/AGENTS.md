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
