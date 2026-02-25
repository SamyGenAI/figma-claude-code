# Infographic Plugin

Full end-to-end workflow: brand setup → infographic generation → Figma export.

This is the main entry point for new users. It guides through the complete pipeline in one session.

---

## Welcome message
Say:
> "Welcome to the Infographic Plugin. I'll help you:
> 1. Set up your brand (from Figma or manually)
> 2. Generate a branded infographic about any topic
> 3. Push it directly to Figma
>
> Let's start — do you already have a brand theme set up, or do you want to create one now?"

---

## Route A — New brand setup + infographic

### Step 1: Brand setup
Ask:
> "Do you have a Figma design file with your brand? If yes, share the URL and I'll extract the tokens automatically. If not, I'll ask you a few questions to set up the theme manually."

**If Figma URL provided:**
→ Follow the full `/brand-ingest` workflow to generate the theme file.

**If no Figma URL (manual setup):**
Ask sequentially:
1. "What's your primary brand color?" (hex)
2. "What's your background/canvas color?" (hex, default `#fffceb`)
3. "Pick 4 accent colors for chips and badges:" (hex × 4, or suggest defaults)
4. "What font family? (default: Montserrat)"
5. "Card style — rounded (20px) or sharp (8px) corners?"
6. "Brand name for the theme ID?" (lowercase, hyphen-separated)

Then generate the theme file at `src/themes/<brand-id>.js` manually from those answers, following the schema in `src/themes/navy-cream.js`. Register it in `src/themes/index.js`.

### Step 2: Infographic generation
Say:
> "Brand is ready. Now, what should the infographic be about?"

→ Follow the full `/create-infographic` workflow using the newly created theme.

### Step 3: Figma export (if MCP connected)
After generation, ask:
> "Push to Figma?"

→ Follow the Figma Export section from `/create-infographic`.

---

## Route B — Existing brand, new infographic

If the user says they already have a theme:
1. List available themes from `src/themes/index.js`
2. Ask which one to use
3. Ask for the topic
4. Follow `/create-infographic` directly

---

## Route C — Add a new theme to an existing project

If the user only wants to add a new brand without generating an infographic:
→ Follow `/brand-ingest` and stop after step 7.

---

## Tips for the agent
- Keep the conversation short — don't ask for information you can infer
- Always show preview URLs so the user can see results immediately
- If the dev server isn't running, start it quietly in the background
- After Figma export, always return a clickable link
- If the Figma MCP isn't connected, skip step 3 gracefully and tell the user how to connect it (`claude mcp add figma -- npx -y figma-developer-mcp --figma-api-key YOUR_TOKEN`)
