/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 1s steps(40) infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },

    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      abu: "#bfcbde",
      bule: "#fbd59b",
      negro: "#02343F",
      // ...
    },
  },
  plugins: [],
};
