import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061b69",
        deep: "#031252",
        gold: "#df8b00",
        redwave: "#e80f25",
        purplewave: "#5d0fa2"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 36px rgba(4, 20, 80, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
