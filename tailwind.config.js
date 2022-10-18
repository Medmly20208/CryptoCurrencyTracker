/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sx: { min: "900px" }, //display components
      sf: { max: "900px" },
    },
    extend: {},
  },
  plugins: [],
};
