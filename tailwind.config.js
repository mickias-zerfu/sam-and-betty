/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'sage-green': '#87A96B',
        'blush-pink': '#F8C8DC',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

