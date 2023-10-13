/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#a888f4",
        secondary: "#f6f7ff",
        // primary: "#06abaf",
        // secondary: "#a888f4",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
