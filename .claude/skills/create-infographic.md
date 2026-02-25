# Create Infographic

Generate a complete branded infographic from a topic, render it in the browser, and push it to Figma.

## Your goal
Take a topic + theme → produce a polished `src/data/<slug>.js` file → render it → push to Figma.

## Steps

### 1. Gather inputs
If not provided by the user, ask:
- **Topic**: "What is the infographic about?" (e.g. "prompt engineering tips", "Claude vs GPT comparison")
- **Theme**: "Which theme to use? Available: run `listThemes()` or check `src/themes/index.js`" (default: `navy-cream`)
- **Author**: "Your name for the footer?" (optional)

### 2. Plan the layout
Design a 1080×1350px infographic. Rules:
- Always start with `hero`, always end with `footer`
- Use 4–6 content sections between them (canvas is fixed height — don't overfill)
- Use a `row` to place two cards side by side when content is compact
- Vary section types for visual rhythm — avoid using the same type twice in a row
- Match section type to content nature:
  - Lists of features/benefits → `card-checklist` or `card-badge-list`
  - Step-by-step processes → `card-steps`
  - Comparisons → `comparison-table`
  - Tool/integration logos → `card-logo-grid`
  - Feature tags/categories → `card-badge-grid`
  - Icon-labeled rows of info → `card-icon-rows`
  - Use cases / when to use → `card-when-list`
  - Code examples → `card-code-block`

### 3. Write the data file
Create `src/data/<topic-slug>.js`. Use the full schema from `src/data/schema.js`.

Key rules:
- `id` must match the filename slug exactly
- Text supports `**bold**` and `__underline__` markup
- Use semantic color keys for `iconBgColor`, `bgColor`, `badgeVariant`: `accent1`, `accent2`, `accent3`, `accent4`
- Alternate accent colors across sections for variety
- `contentPadding`, `sectionGap`, `footerMargin` default values: `59`, `25`, `12`
- Keep text concise — cards are small, around 14px body text
- All `height` values on cards should be set explicitly to keep layout tight

Hero title sizing guide (fit within ~960px at the given size):
- Short titles (1–3 words) → `72px`
- Medium titles (4–6 words) → `60px`
- Long titles (7+ words) → `48px`

### 4. Register the infographic
In `src/data/index.js`:
- Add `import <camelCaseId> from './<slug>';`
- Add `'<slug>': <camelCaseId>` to the map

### 5. Start the dev server
Check if `npm run dev` is already running. If not, start it in the background with:
```
npm run dev
```
Wait 2 seconds, then confirm it's running at `http://localhost:5173`.

### 6. Preview URL
Tell the user:
> "Your infographic is ready. Preview at:
> `http://localhost:5173/?infographic=<slug>&theme=<theme-id>`"

### 7. Offer Figma export
Ask the user:
> "Would you like to push this directly to Figma? (requires Figma MCP connected)"

If yes → proceed to **Figma Export** below.

---

## Figma Export

### A. Get capture instructions
Call `mcp__figma__generate_figma_design` with NO `outputMode` to receive capture options and instructions. Read them carefully.

### B. Capture the infographic
Call `mcp__figma__generate_figma_design` with:
- The localhost URL: `http://localhost:5173/?infographic=<slug>&theme=<theme-id>`
- `outputMode: 'newFile'`
- `fileName`: a clean display name for the Figma file

### C. Poll until complete
Every 5 seconds, call `mcp__figma__generate_figma_design` with the returned `captureId` until status is `'completed'`. Max 10 retries.

### D. Return the Figma link
Once complete, give the user the Figma file URL:
> "Your infographic is live on Figma: [View in Figma](<figma-url>)"
