/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      extend: {
        fontFamily : {
          roboto : "'Roboto', sans-serif"
        }
      },
    },
  },
  plugins: [require("daisyui")],
}