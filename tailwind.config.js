/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#f1c40f",
        black: "#2c3e50",
        white: "#ffffff",
        gry: "#ecf0f1",
        lightgray: "#bdc3c7",
        darkgray: "#7f8c8d",
        lightpurple: "#9b59b6",
        darkpurple: "#  ",
        success: "#D1FAE5",
        warning: "#FEF9C3",
        error: "#FEE2E2",
      },
    },
  },
  plugins: [],
};
