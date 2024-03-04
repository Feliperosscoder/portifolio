/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10rem": "10rem",
      },
      colors: {
        red: "#ff1744",
      },
      backgroundColor: {
        red: "#ff1744",
        white: "#F5F5F5 ",
      },
      flex: {
        "1/2": "0 0 50%"
      },
      maxWidth: {
        "1/2": "50%"
      }
    },
  },
  plugins: [],
};
