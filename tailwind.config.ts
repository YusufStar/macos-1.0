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
        systemRed: "var(--system-red)",
        systemPink: "var(--system-pink)",
        systemOrange: "var(--system-orange)",
        systemGray01: "var(--system-gray-01)",
        systemYellow: "var(--system-yellow)",
        systemGray02: "var(--system-gray-02)",
        systemGray03: "var(--system-gray-03)",
        systemGray04: "var(--system-gray-04)",
        systemGray05: "var(--system-gray-05)",
        systemGray06: "var(--system-gray-06)",
        systemGreen: "var(--system-green)",
        systemTeal: "var(--system-teal)",
        systemBlue: "var(--system-blue)",
        systemIndigo: "var(--system-indigo)",
        systemPurple: "var(--system-purple)",
      },
    },
  },
  plugins: [],
};
export default config;
