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
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleX: {
          from: {
            transform: "scaleX(0)",
          },
          to: {
            transform: "scaleX(1)",
          },
        },
        swipe: {
          "0%, 100%": { transform: "translateX(-18px)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
        scaleX: "scaleX 0.5s ease-in-out",
        swipe: "swipe 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
