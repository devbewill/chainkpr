/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        datome: {
          primary: "#f208b8",
          secondary: "#f8f8f8",
          accent: "#37cdbe",
          neutral: "#111111",
          "base-100": "#ffffff",
          "base-content": "#111111",
        },
        mangrovia: {
          primary: "#05a9bd",
          secondary: "#f8f8f8",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-content": "#111",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
    base: true,
    darkTheme: "mangrovia",
  },
};
