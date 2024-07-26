/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#E0BBE4",
          DEFAULT: "#957DAD",
          dark: "#D291BC",
        },
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
