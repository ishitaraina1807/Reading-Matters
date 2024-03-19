/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      fontFamily: {
        nunito: ['Nunito', "sans-serif"],
      },
    },
  },
  plugins: [],
}

