/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        script: ['"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#1A73E8",
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
        "funnel-primary": "#1B4965",
        "funnel-accent": "#E8913A",
        "funnel-text": "#1A1A2E",
        "funnel-light": "#F7F8FA",
        "funnel-green": "#16A34A",
        "funnel-red": "#DC2626",
      },
      screens: {
        midmd: "880px",
      },
    },
  },
  plugins: [],
};
