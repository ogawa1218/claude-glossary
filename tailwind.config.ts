import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#1e1f22",
          secondary: "#2b2d31",
          card: "#313338",
          hover: "#383a40",
        },
        orange: {
          500: "#f97316",
          400: "#fb923c",
          600: "#ea6c00",
        },
        sky: {
          400: "#38bdf8",
          300: "#7dd3fc",
        },
        text: {
          primary: "#f2f3f5",
          secondary: "#b5bac1",
          muted: "#80848e",
        },
      },
      fontFamily: {
        sans: ["'Noto Sans JP'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
