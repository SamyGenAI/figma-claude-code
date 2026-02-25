/**
 * Navy & Cream — default theme (matches original Figma design)
 *
 * Three axes you can customise per theme:
 *   colors  — paint (backgrounds, accents, text)
 *   shape   — geometry (radii, border widths, card transparency)
 *   assets  — icon variants and other per-theme visual overrides
 *
 * renderers — optional map of { 'section-type': Component } that overrides
 *             the global SectionRenderer registry for this theme only.
 *             Leave empty to use the defaults.
 */
export default {
  id: 'navy-cream',
  name: 'Navy & Cream',

  // ── Colors ───────────────────────────────────────────────────────────────
  // → injected as  var(--theme-*)  CSS custom properties on the canvas
  colors: {
    pageBg:   '#f0f0f0',
    canvasBg: '#fffceb',
    gridLine: 'rgba(0,0,0,0.07)',

    primary:   '#092c69',
    onPrimary: '#ffffff',

    surface: '#fffceb',
    border:  '#b9b9b9',

    accent1: 'rgba(180,234,255,0.7)',
    accent2: 'rgba(250,202,128,0.7)',
    accent3: '#d2ff9a',
    accent4: 'rgba(255,178,218,0.7)',

    checkmark:      '#3EB972',
    tableHighlight: 'rgba(250,202,128,0.29)',
  },

  // ── Shape ────────────────────────────────────────────────────────────────
  // → injected as  var(--shape-*)  CSS custom properties on the canvas
  shape: {
    cardRadius:       '20px',
    cardBorderWidth:  '3px',
    cardBg:           'rgba(255,255,255,0.1)',
    cardBorderColor:  'rgba(255,255,255,1)',
    footerRadius:     '25px',
    iconChipRadius:   '5px',
    badgeRadius:      '5px',
  },

  // ── Fonts ────────────────────────────────────────────────────────────────
  // → injected as  var(--font-*)  CSS custom properties on the canvas
  fonts: {
    heading: "'Montserrat', sans-serif",
    body:    "'Montserrat', sans-serif",
    mono:    "'Noto Sans', monospace",
  },

  // ── Assets ───────────────────────────────────────────────────────────────
  // Consumed directly by components via useTheme().
  // Override specific visual elements without touching shared components.
  assets: {
    checkmarkShape: 'rounded-square',  // 'rounded-square' | 'circle'
    // icons: { myKey: 'https://...' }  // optional icon overrides by key
  },

  // ── Renderer overrides ───────────────────────────────────────────────────
  // Map of { 'section-type': Component } — replaces the global renderer
  // for that type when this theme is active. Empty = use global defaults.
  // Example:
  //   import MyHero from '../renderers/MyHero';
  //   renderers: { hero: MyHero }
  renderers: {},
};
