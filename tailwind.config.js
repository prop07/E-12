/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0000ff",
        "danger": "#ff0000",
        "success": "#00ff00",
        "warning": "#ffff00",
        "info": "#00ffff",
        "secondary": "#ff00ff",
      }
    },
  },
  plugins: [],
}

