/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#fd27cb ",
        secondary: "#f8f7fe",
        accent: "#32ffb8",
        // primary: "#06abaf",
        // secondary: "#a888f4",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
