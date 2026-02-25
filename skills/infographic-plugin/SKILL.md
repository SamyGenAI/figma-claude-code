---
description: Full end-to-end infographic workflow — brand setup, design, and Figma export. The main entry point for new users of the figma-infographic plugin.
---

Welcome to the **figma-infographic** plugin. I'll guide you through the full workflow using specialized agents.

The user's input (if any): "$ARGUMENTS"

## Step 0 — Environment check (always run first)

Before doing anything else, verify the environment is ready:

1. Check if `src/themes/` exists in the current directory:
   - If yes → project is ready, continue to routing below
   - If no → the renderer project isn't set up here. Run the setup below.

**If setup is needed**, tell the user:
> "I need to set up the infographic renderer first. This is a one-time step."

Then run:
```bash
git clone https://github.com/SamyGenAI/figma-claude-code .
npm install
```

If the directory is not empty (clone would fail), tell the user:
> "Please open an empty folder in Claude Code, then run this skill again."

2. Check if Node.js is available: `node --version`
   - If missing, tell the user to install Node.js from nodejs.org first.

3. Check Figma MCP by attempting to use a Figma tool. If unavailable, note it but don't block — Figma export is optional and can be done later.

---

## Route the user based on their intent

**If they want to set up a brand** (keywords: brand, theme, figma url, colors, identity):
→ Use the **brand-ingest** agent

**If they want to create an infographic** (keywords: infographic, topic, about, create, make, generate):
→ Use the **infographic-designer** agent, then offer Figma export via the **figma-export** agent

**If they said both** (e.g. "set up my brand and create an infographic about X"):
→ Run brand-ingest first, then infographic-designer with the new theme, then offer figma-export

**If the input is empty or unclear**, say:
> "I can help you:
> 1. **Set up your brand** — paste a Figma URL or give me your brand colors
> 2. **Create an infographic** — tell me a topic (e.g. 'prompt engineering tips')
> 3. **Both** — brand setup + infographic in one session
>
> What would you like to do?"

## After every agent completes
- Always show the preview URL from the designer
- Always offer to push to Figma if the designer just ran
- If Figma MCP isn't connected, tell the user how to add it:
  ```
  claude mcp add figma -- npx -y figma-developer-mcp --figma-api-key YOUR_TOKEN
  ```
  Then restart Claude Code and run this skill again.
