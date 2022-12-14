/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",
        dark: "#F1FAEE",
        light: "#A8DADC",
        accent: "#457B9D",
        secondary: "#1D3557",
      },
      minWidth: {
        '1/2': '50%',
        '1/4': '25%',

      }
    },
  },
  plugins: [],
};
