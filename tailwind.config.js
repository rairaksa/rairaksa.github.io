import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
    },
    colors: {
      'dark-80': 'rgb(var(--color-dark-80) / <alpha-value>)',
      'dark-60': 'rgb(var(--color-dark-60) / <alpha-value>)',
      oceanic: 'rgb(var(--color-oceanic) / <alpha-value>)',
      flare: 'rgb(var(--color-flare) / <alpha-value>)',
      silk: 'rgb(var(--color-silk) / <alpha-value>)',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [aspectRatio],
};
