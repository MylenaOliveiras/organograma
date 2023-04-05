/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      white: "#ffffff",
      gray: "#F7F7F7",
      purple: "#6278F7",
      green: "#57C278",
      blue: "#82CFFA",
      lime: "#A6D157",
      red: "#E06B69",
      pink: "#DB6EBF",
      yellow: "#FFBA05",
      orange: "#FF8A29",
      turquoise: "#95FFD4",
    },
    textColor: {
      white: "#ffffff",
      gray: "#F7F7F7",
      purple: "#6278F7",
      green: "#57C278",
      blue: "#82CFFA",
      lime: "#A6D157",
      red: "#E06B69",
      pink: "#DB6EBF",
      yellow: "#FFBA05",
      orange: "#FF8A29",
      turquoise: "#95FFD4",
    },
    fontFamily: {
      prata: ["Prata", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
