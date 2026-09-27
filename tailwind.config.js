/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0f172a",      // background
        accent: "#14b8a6",      // teal accent
        textlight: "#f1f5f9",   // main text
        textmuted: "#94a3b8",   // subtext
      },
    },
  },
  plugins: [],
};
