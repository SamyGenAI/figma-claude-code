/**
 * Theme Registry
 * ─────────────────────────────────────────────────────────────────────────────
 * To add a new theme:
 *   1. Create  src/themes/my-theme.js  (copy navy-cream.js as a starter)
 *   2. Import it below and add it to the `themes` map
 *   3. Use it via ?theme=my-theme in the URL
 */

import navyCream from './navy-cream';
import forest    from './forest';

const themes = {
  'navy-cream': navyCream,
  'forest':     forest,
};

export const defaultTheme = navyCream;

/** Returns a theme object by id, falling back to the default. */
export function getTheme(id) {
  return themes[id] ?? defaultTheme;
}

/** All registered themes — useful for building a theme-picker UI. */
export function listThemes() {
  return Object.values(themes);
}

// Re-export useTheme so components import from one place: '../themes'
export { useTheme } from './ThemeContext';

// ─── CSS variable bridge ──────────────────────────────────────────────────────
// Converts a theme object into CSS custom properties injected on the canvas.
// Three namespaces:
//   --theme-*   colors
//   --shape-*   geometry (radius, border width, card bg)
//   --font-*    typography

export function themeToVars(theme) {
  const c = theme.colors;
  const s = theme.shape;
  const f = theme.fonts;
  return {
    // colors
    '--theme-page-bg':         c.pageBg,
    '--theme-canvas-bg':       c.canvasBg,
    '--theme-grid-line':       c.gridLine,
    '--theme-primary':         c.primary,
    '--theme-on-primary':      c.onPrimary,
    '--theme-surface':         c.surface,
    '--theme-border':          c.border,
    '--theme-accent1':         c.accent1,
    '--theme-accent2':         c.accent2,
    '--theme-accent3':         c.accent3,
    '--theme-accent4':         c.accent4,
    '--theme-checkmark':       c.checkmark,
    '--theme-table-highlight': c.tableHighlight,
    // shape
    '--shape-card-radius':       s.cardRadius,
    '--shape-card-border-width': s.cardBorderWidth,
    '--shape-card-bg':           s.cardBg,
    '--shape-card-border-color': s.cardBorderColor,
    '--shape-footer-radius':     s.footerRadius,
    '--shape-icon-chip-radius':  s.iconChipRadius,
    '--shape-badge-radius':      s.badgeRadius,
    // fonts
    '--font-heading': f.heading,
    '--font-body':    f.body,
    '--font-mono':    f.mono,
  };
}

// ─── Color resolver ───────────────────────────────────────────────────────────
// Accepts three formats and always returns a valid CSS color value:
//
//   Semantic key   'accent1'              →  var(--theme-accent1)
//   Legacy class   'bg-blue-light'        →  var(--theme-accent1)   (backward compat)
//   Raw value      '#ff0000' / 'rgba(…)'  →  passed through as-is

const TAILWIND_TO_VAR = {
  'bg-navy':                         'primary',
  'bg-cream':                        'surface',
  'bg-blue-light':                   'accent1',
  'bg-amber':                        'accent2',
  'bg-green-neon':                   'accent3',
  'bg-pink':                         'accent4',
  'bg-[rgba(250,202,128,0.29)]':     'table-highlight',
};

const SEMANTIC_KEYS = new Set([
  'primary', 'on-primary', 'surface', 'border',
  'accent1', 'accent2', 'accent3', 'accent4',
  'checkmark', 'table-highlight',
]);

export function resolveColor(value) {
  if (!value) return undefined;
  if (SEMANTIC_KEYS.has(value))      return `var(--theme-${value})`;
  const mapped = TAILWIND_TO_VAR[value];
  if (mapped)                        return `var(--theme-${mapped})`;
  return value;
}
