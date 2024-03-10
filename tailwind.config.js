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
        "primary": 'rgb(var(--background-base) / <alpha-value>)',
      },
      textColor: {
        "primary": 'rgb(var(--color-text-primary) / <alpha-value>)',
        "secondary": 'rgb(var(--color-text-secondary) / <alpha-value>)',
      },
      flex: {
        "1/2": "0 0 50%",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
