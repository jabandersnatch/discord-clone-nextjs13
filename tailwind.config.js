const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865F2",
        gray: {
          900: "#202225",
          800: "#2F3136",
          700: "#36393F",
          600: "#4F545C",
          400: "#D4D7DC",
          300: "#E3E5E8",
          200: "#EDEDEF",
          100: "#F2F3F5",
        },
      },
    },
  },
  plugins: [],
};
