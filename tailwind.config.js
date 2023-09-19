/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
