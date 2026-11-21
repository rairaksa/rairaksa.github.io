import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
    },
    colors: {
      'dark-80': '#14191C',
      'dark-60': '#1F2528',
      oceanic: '#0095B7',
      flare: '#FF7F00',
      silk: '#F1F1F1',
    },
    extend: {},
  },
  plugins: [aspectRatio],
};
