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
        "primary-text": "#DAF0FF",
        "secondary-text": "#BECCE5",
        "stroke": "#42498F",
        "primary-purple": "#9747FF",
        "secondary-purple": "#BA75FE",
        "dark-purple": "#230079",
        "primary-blue": "#27CDFE",
        "secondary-blue": "#7CE2FF",
        "background-1": "#1B003F",
        "background-2": "#220050",
      },
    },
  },
  plugins: [],
};
export default config;
