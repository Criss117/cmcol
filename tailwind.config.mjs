/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/hero-pattern.jpg')",
      },
      colors: {
        lightPrimary100: "#223d6d",
        lightPrimary200: "#757de8",
        lightPrimary300: "#dedeff",
        lightAccent100: "#2196F3",
        lightAccent200: "#003f8f",
        lightText100: "#333333",
        lightText200: "#5c5c5c",
        lightBg100: "#FFFFFF",
        lightBg200: "#f5f5f5",
        lightBg300: "#cccccc",
        darkPrimary100: "#0085ff",
        darkPrimary200: "#69b4ff",
        darkPrimary300: "#e0ffff",
        darkAccent100: "#006fff",
        darkAccent200: "#e1ffff",
        darkText100: "#FFFFFF",
        darkText200: "#9e9e9e",
        darkBg100: "#1E1E1E",
        darkBg200: "#2d2d2d",
        darkBg300: "#454545",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
