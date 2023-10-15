/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#b265fe ",
        secondary: "#f9f9f9",
        // primary: "#06abaf",
        // secondary: "#a888f4",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
