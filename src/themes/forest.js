/**
 * Forest — earthy green professional theme
 * Use via: ?theme=forest
 *
 * Differences from navy-cream:
 *   colors   — green primary, muted accents
 *   shape    — tighter radii, thinner borders, more transparent cards
 *   assets   — circle checkmarks instead of rounded-square
 */
export default {
  id: 'forest',
  name: 'Forest',

  colors: {
    pageBg:   '#dceede',
    canvasBg: '#f1faf2',
    gridLine: 'rgba(0,0,0,0.05)',

    primary:   '#1b5e20',
    onPrimary: '#ffffff',

    surface: '#f1faf2',
    border:  '#a5d6a7',

    accent1: 'rgba(165,214,167,0.75)',
    accent2: 'rgba(255,213,79,0.75)',
    accent3: '#b9f6ca',
    accent4: 'rgba(161,196,253,0.75)',

    checkmark:      '#2e7d32',
    tableHighlight: 'rgba(255,213,79,0.25)',
  },

  shape: {
    cardRadius:      '12px',           // less rounded than navy-cream
    cardBorderWidth: '2px',            // thinner border
    cardBg:          'rgba(255,255,255,0.22)',  // slightly more opaque
    cardBorderColor: 'rgba(165,214,167,0.8)',   // green-tinted border
    footerRadius:    '12px',
    iconChipRadius:  '8px',
    badgeRadius:     '8px',
  },

  fonts: {
    heading: "'Montserrat', sans-serif",
    body:    "'Montserrat', sans-serif",
    mono:    "'Noto Sans', monospace",
  },

  assets: {
    checkmarkShape: 'circle',          // circular checkmarks
  },

  renderers: {},
};
