<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


### Session 15: Global IPL Rebrand, Image Correction, and Before/After Cards
- **User Intent**: The user was highly upset that "LED mask" and "light therapy" terms were still lingering on the website and demanded a total scrub. They also provided a perfectly formatted infographic image to be used on the Quiz Page and Product Gallery, and provided 8 distinct Before/After images to replace the existing cards. Accuracy was strictly demanded over speed.
- **Agent Logic & Thinking**:
  - Wrote an implementation plan to clarify requirements (including the Torch product exclusion) since accuracy was the top priority.
  - Used a Node script to execute a 100% accurate global search-and-replace across 4 apps (US, UK, CA, AU) to change "LED light therapy" to "IPL hair removal" in the Quiz, Contact, About, Footer, Home, and Klaviyo components.
  - Excluded the Red Light Torch components from this replacement to maintain its correct branding.
  - Copied the latest attached user image (media__1782384415240.png) into the public assets as `ipl_price_comparison.png`.
  - Updated `SkincareQuizPage.tsx` and `products.ts` (replacing the 2nd gallery image) to properly reference the new infographic image.
  - Found that the Before/After cards had been reduced to 2. Rebuilt `productSections.ts` to contain exactly 8 Transformation cards.
  - Copied the 8 provided before/after images into the public assets directory and mapped them 1-to-1 to each card.
  - Validated changes via a Next.js `npm run build` on the AU application, which completed successfully in ~7 seconds without errors.
- **Actions Taken**:
  - Global text replacement via Node script.
  - Replaced the generated infographic with the user's explicit upload.
  - Rebuilt the Before/After section with 8 individual images mapped to 8 distinct cards.
  - Passed Next.js build verification and updated task tracking.


### Session 16: Review Images Injection
- **User Intent**: The user was very frustrated that their morning work on review images had been overwritten in the previous session. They provided a new folder containing exactly 22 review images and strictly commanded to insert them exactly once, one per review, into the top latest reviews, with a 1-2 review gap between them, without altering ANY existing text, ratings, or data.
- **Agent Logic & Thinking**:
  - Immediately wrote an Implementation Plan and waited for user approval, knowing the sensitivity of the 51,000+ line JSON file.
  - Wrote a precise Node script to iterate through the 22 images.
  - Cleared out all old/incorrect images from the reviews array to ensure a completely clean slate and no hidden repetitions.
  - Applied the images starting at index 0, dynamically skipping 1 or 2 review indices per iteration to create the natural gap the user requested.
  - Saved the JSON file while rigorously preserving all UTF-8 encoding and data integrity.
  - Ran `npm run build` for validation, confirming Next.js successfully compiled the massive JSON file without issue.
- **Actions Taken**:
  - Copied 22 images to public assets across US, UK, CA, and AU apps.
  - Executed `inject_reviews.js` across all apps.
  - Created a walkthrough artifact and updated task logs.
