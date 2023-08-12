/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'grey': '#eff2f1',
      'lightblue': '#89c6ff',
      'darkblue': '#60a6cc',
      'customblack': '#283136',
      'greyishblack': '#698797'
      },
    },
  },
  plugins: [],
}

