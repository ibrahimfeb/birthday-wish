/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          500: "#C5BDAF",
          600: "#B8B1A3",
          700:"#CBC8BE"
        },
      },
    },
  },
  plugins: [],
};
