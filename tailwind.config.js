module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'josefin': ['Josefin Sans', 'sans-serif'],
    },
    colors: {
      'dark-80' : '#14191C',
      'dark-60' : '#1F2528',
      'oceanic' : '#0095B7',
      'flare'   : '#FF7F00',
      'silk'    : '#F1F1F1',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
