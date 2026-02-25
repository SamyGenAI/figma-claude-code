# figma-infographic — Claude Code Plugin

Generate branded LinkedIn infographics from any topic. Ingest brand tokens from Figma, design with AI, and push back to Figma — all from Claude Code.

---

## What it does

1. **Brand ingestion** — paste a Figma URL, the `brand-ingest` agent extracts your colors, fonts, and shape tokens and creates a ready-to-use theme file
2. **Infographic design** — give a topic, the `infographic-designer` agent (opus) plans the layout, writes the content, and renders it in the browser
3. **Figma export** — the `figma-export` agent captures the rendered infographic from localhost and pushes it to a new editable Figma file

---

## Quick start

### Prerequisites
- [Claude Code](https://claude.ai/claude-code) installed and authenticated
- [Node.js](https://nodejs.org) v18 or later
- A Figma account (free tier works)

### 1 — Install the plugin

In Claude Code, run:
```
/plugin marketplace add SamyGenAI/figma-claude-code
/plugin install figma-infographic@figma-infographic
```

### 2 — Open an empty folder and run the plugin

Create an empty folder, open it in Claude Code, then run:
```
/figma-infographic:infographic-plugin
```

The plugin detects the renderer isn't set up and clones + installs it automatically. This is a one-time step.

### 3 — Connect Figma (optional, for export)

Get a personal access token from **Figma → Settings → Account → Personal access tokens**, then:
```
claude mcp add figma -- npx -y figma-developer-mcp --figma-api-key YOUR_TOKEN_HERE
```
Restart Claude Code. Figma export is now available.

---

## Skills

| Command | Description |
|---|---|
| `/figma-infographic:infographic-plugin [intent]` | Main entry point — guided full workflow |
| `/figma-infographic:brand-ingest [figma-url]` | Extract brand tokens from a Figma file |
| `/figma-infographic:create-infographic <topic> [--theme id]` | Generate an infographic and optionally push to Figma |

## Agents

| Agent | Model | Role |
|---|---|---|
| `brand-ingest` | Sonnet | Reads Figma, maps tokens, writes theme file |
| `infographic-designer` | Opus | Plans layout, writes content, creates data file |
| `figma-export` | Haiku | Captures localhost, polls Figma, returns link |

---

## Theming

Themes control colors, shape tokens (border radius, card transparency), fonts, and assets. Two themes ship by default: `navy-cream` and `forest`.

Use `?theme=forest` in the preview URL to switch. Add your own by running `/figma-infographic:brand-ingest`.

---

## Project structure (for contributors)

```
.claude-plugin/         Plugin manifest and marketplace catalog
agents/                 Specialized subagents (brand-ingest, designer, figma-export)
skills/                 User-invocable skills
src/
  components/           Reusable UI primitives (Card, Badge, Checkmark, etc.)
  renderers/            Section type renderers (11 types)
  data/                 Infographic data files + registry
  themes/               Theme files + registry + CSS var bridge
  InfographicRenderer   Canvas orchestration + theme injection
  SectionRenderer       Type → renderer dispatch
```

---

## License

MIT
