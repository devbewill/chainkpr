/** @type {import('tailwindcss').Config} */

//added tw-colors plugin to use multiple themes
// import { createThemes } from "tw-colors";

export const darkMode = "class";
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#0CC8D4",
      secondary: "#f9f9f9",
      // primary: "#1e2121",
      // secondary: "#a888f4",
    },
  },
};

export const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  // createThemes({
  //   mangrovia: {
  //     primary: "#0cbdbd",
  //     secondary: "#f6f6f6",
  //   },
  //   datome: {
  //     primary: "#ff00dd",
  //     secondary: "#f6f6f6",
  //   },
  //   fluo: {
  //     primary: "#caff00",
  //     secondary: "#f6f6f6",
  //   },
  //   darkz: {
  //     primary: "#2808f9",
  //     secondary: "#2808f9",
  //   },
  //   defaultTheme: "datome",
  // }),
];
