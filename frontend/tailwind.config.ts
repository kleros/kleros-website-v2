import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ["0.9rem", "1.063rem"],
      base: ["1rem", "1.188rem"],
      lg: ["1.5rem", "1.813rem"],
      xl: ["2rem", "2.375rem"],
      "2xl": ["3rem", "3.625rem"],
      "3xl": ["3.75rem", "4.813rem"],
      "4xl": ["6rem", "7.188rem"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-text": "#DAF0FF",
        "secondary-text": "#BECCE5",
        stroke: "#42498F",
        "primary-purple": "#9747FF",
        "secondary-purple": "#BA75FE",
        "dark-purple": "#230079",
        "primary-blue": "#27CDFE",
        "secondary-blue": "#7CE2FF",
        "background-1": "#1B003F",
        "background-2": "#220050",
        "background-dark": "#13002D",
        "background-translucent": "rgba(34, 0, 80, 0.24)",
        success: "#00F068",
        "background-1-alpha": "rgba(27, 0, 63, 0.4)",
        "background-2-alpha": "rgba(34, 0, 80, 0.4)",
        "background-dark-alpha": "rgba(19, 0, 45, 0.4)",
      },
      keyframes: {
        "h-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        'slow-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'glitch-shift': {
          '0%, 100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
          '33%': { 
            transform: 'translate(-2px, 1px)',
            filter: 'hue-rotate(-10deg)',
          },
          '66%': { 
            transform: 'translate(2px, -1px)',
            filter: 'hue-rotate(10deg)',
          },
        },
      },
      animation: {
        "h-scroll": "h-scroll 45s linear infinite",
        'slow-bounce': 'slow-bounce 2s infinite',
        'glitch-shift': 'glitch-shift 0.15s ease-in-out infinite',
      },
      textShadow: {
        'cyberpunk': '0 0 2px #fff, 0 0 4px #fff, 0 0 8px #6C1FD9',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow-neon': {
          'text-shadow': `
            0 0 1px #DAF0FF,
            0 0 2px #230079,
            0 0 4px #230079,
            0 0 6px #9747FF,
            0 0 8px #27CDFE
          `,
        },
      });
    }),
  ],
};
export default config;
