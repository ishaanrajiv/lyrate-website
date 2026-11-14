import type { Config } from "tailwindcss";

// Colours come from CSS variables in app/globals.css so light and dark share one set of names.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-raised": "rgb(var(--paper-raised) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        lit: "rgb(var(--lit) / <alpha-value>)",
        "on-lit": "rgb(var(--on-lit) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        wordmark: ["var(--font-geist)", "sans-serif"],
        book: ["Georgia", "Iowan Old Style", "Times New Roman", "serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
