import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        swipe: {
          "0%, 100%": { transform: "translateX(-18px)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        swipe: "swipe 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
