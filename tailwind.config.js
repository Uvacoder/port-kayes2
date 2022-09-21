/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#fef3c7",

      "secondary": "#fae8ff",

      "accent": "#5eead4",

      "neutral": "#a78bfa",

      "base-100": "#f5f5f4",

      "info": "#1f2937",

      "success": "#16a34a",

      "warning": "#facc15",

      "error": "#e11d48",
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}