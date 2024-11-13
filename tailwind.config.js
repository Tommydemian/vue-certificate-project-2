/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wine-berry": {
          50: "#fcf3f7",
          100: "#fae9f1",
          200: "#f6d4e4",
          300: "#f0b1cd",
          400: "#e680ab",
          500: "#da5a8c",
          600: "#c83a6b",
          700: "#ac2a53",
          800: "#8f2546",
          900: "#5e1c30",
          950: "#480f20",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
