import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'oat': '#E9E0CB',
        'black': '#000000',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'pixel': "var(--font-pixel)",
        'pixel-bold': "var(--font-pixel-bold)",
        'pixel-medium': "var(--font-pixel-medium)",
        'pixel-semibold': "var(--font-pixel-semibold)",
      },
    },
  },
  plugins: [],
} satisfies Config;
