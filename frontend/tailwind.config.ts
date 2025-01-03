import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: ["1rem", "1.188rem"],
      lg: ["1.5rem", "1.813rem"],
      xl: ["2rem", "2.375rem"],
      '2xl': ["3rem", "3.625rem"],
      '3xl': ["4rem", "4.813rem"],
      '4xl': ["6rem", "7.188rem"],
    },
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
