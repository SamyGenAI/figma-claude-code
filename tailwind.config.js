/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:          '#092c69',
        cream:         '#fffceb',
        'blue-light':  'rgba(180,234,255,0.7)',
        amber:         'rgba(250,202,128,0.7)',
        'green-neon':  '#d2ff9a',
        pink:          'rgba(255,178,218,0.7)',
        border:        '#b9b9b9',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Montserrat', 'sans-serif'],
        mono:    ['"Noto Sans"', 'monospace'],
      },
      borderRadius: {
        card:  '20px',
        pill:  '50px',
        tag:   '5px',
        image: '8px',
      },
      boxShadow: {
        card: '0 4px 4px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
