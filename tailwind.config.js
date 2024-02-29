/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#1F9D00"
      },
      backgroundColor: {
        "green": "#1F9D00",
        "white": "#F5F5F5 "
      }
    },
  },
  plugins: [],
}

