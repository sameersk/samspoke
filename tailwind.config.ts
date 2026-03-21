import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        brand: {
          DEFAULT: "#0d9488",
          dark:    "#0f766e",
          light:   "#14b8a6",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "ui-serif", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1e293b",
            a: { color: "#0d9488" },
            h1: { color: "#0f172a" },
            h2: { color: "#0f172a" },
            h3: { color: "#0f172a" },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
