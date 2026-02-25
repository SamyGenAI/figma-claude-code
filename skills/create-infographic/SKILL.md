---
description: Generate a complete branded infographic from a topic. Optionally push it to Figma at the end. Usage: /figma-infographic:create-infographic <topic> [--theme <theme-id>]
---

Use the **infographic-designer** agent to create a new infographic.

The user's request: "$ARGUMENTS"

Parse `$ARGUMENTS` for:
- The **topic** (required — ask if missing)
- A `--theme <id>` flag if present (default: `navy-cream`)

Pass both to the infographic-designer agent. Once it returns the preview URL, ask the user:
> "Would you like me to push this to Figma?"

If yes, use the **figma-export** agent with the slug and theme id from the designer's output.
