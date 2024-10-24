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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-2": "#220050",
        "stroke": "#42498F",
        "secondary-text": "#BECCE5",
        "kleros-purple": "#9747FF",
        "light-blue": "#7CE2FF",
        "primary-blue": "#27CDFE",
        "secondary-purple": "#BA75FE",
      },
    },
  },
  plugins: [],
};
export default config;
