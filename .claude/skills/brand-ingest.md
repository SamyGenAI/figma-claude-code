# Brand Ingest

Extract a brand's design tokens from a Figma file and generate a ready-to-use theme file for this infographic system.

## Your goal
Convert a Figma design file into `src/themes/<brand-id>.js` and register it so it's immediately available via `?theme=<brand-id>`.

## Steps

### 1. Get the Figma URL
If the user hasn't provided a Figma URL, ask:
> "Please share the Figma file URL you want to extract the brand from."

### 2. Extract tokens from Figma
Call these two tools in parallel using the fileKey and nodeId from the URL:

- `mcp__figma__get_variable_defs` — extracts design variables (colors, radii, spacing)
- `mcp__figma__get_design_context` — extracts visual style, component appearances, fonts

### 3. Map tokens to the theme schema
Interpret the extracted data and map to these three axes:

**colors** (→ `--theme-*` CSS vars)
- Identify the dominant dark/brand color → `primary`
- Identify text-on-primary color (usually white) → `onPrimary`
- Identify the canvas/paper background → `canvasBg`, `surface`, `pageBg`
- Identify the border/separator color → `border`
- Identify 4 accent colors used for highlights, chips, badges → `accent1–4`
- Identify the success/checkmark color → `checkmark`
- Derive a light tinted highlight from accent2 for tables → `tableHighlight`
- For `gridLine`: use a very light overlay of the border color at ~7% opacity

**shape** (→ `--shape-*` CSS vars)
- Card border radius → `cardRadius` (look for prominent rounded corners)
- Card border width → `cardBorderWidth`
- Card background transparency → `cardBg` (usually rgba(255,255,255,0.X))
- Card border color → `cardBorderColor`
- Footer/CTA bar radius → `footerRadius`
- Icon chip radius → `iconChipRadius`
- Badge/tag radius → `badgeRadius`

**fonts** (→ `--font-*` CSS vars)
- Primary typeface → `heading` and `body`
- Monospace/code typeface → `mono` (default to `'Noto Sans', monospace` if not found)

**assets**
- If the brand uses circular shapes, set `checkmarkShape: 'circle'`, otherwise `'rounded-square'`

### 4. Ask for the brand name
Ask: "What should we call this theme? (e.g. 'acme-corp', 'my-brand')"
Use the answer as `<brand-id>` — lowercase, hyphen-separated, no spaces.

### 5. Write the theme file
Create `src/themes/<brand-id>.js` following exactly this structure (copy from `src/themes/navy-cream.js` and replace values):

```js
export default {
  id: '<brand-id>',
  name: '<Brand Display Name>',
  colors: { pageBg, canvasBg, gridLine, primary, onPrimary, surface, border,
            accent1, accent2, accent3, accent4, checkmark, tableHighlight },
  shape: { cardRadius, cardBorderWidth, cardBg, cardBorderColor,
           footerRadius, iconChipRadius, badgeRadius },
  fonts: { heading, body, mono },
  assets: { checkmarkShape },
  renderers: {},
};
```

### 6. Register the theme
In `src/themes/index.js`, add:
- `import <brandCamel> from './<brand-id>';`
- `'<brand-id>': <brandCamel>` to the `themes` map

### 7. Confirm
Tell the user:
> "Brand ingested. Preview your infographics with this theme at:
> `http://localhost:5173/?theme=<brand-id>`
> Run `npm run dev` if the server isn't already running."
