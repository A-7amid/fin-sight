// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js",

  // ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}", // <-- Required
  ],

  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
