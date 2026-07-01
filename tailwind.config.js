/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        martufi: {
          green: "#0d3f36",
          gold: "#c99a4a",
          paper: "#fffdf8",
        },
      },
    },
  },
  plugins: [],
};
