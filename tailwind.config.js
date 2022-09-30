/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sx: { min: "900px" }, //display components
    },
    extend: {},
  },
  plugins: [],
};
