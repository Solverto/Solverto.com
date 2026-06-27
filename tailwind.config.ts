import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#090909",
        graphite: "#070C13",
        panel: "#1B2129",
        bone: "#E2E2E2",
        muted: "#B6B6B6",
        gold: "#F69D09",
        amber: "#FFB20C",
        cyan: "#2DBFE8"
      },
      boxShadow: {
        glow: "0 0 40px rgba(246, 157, 9, 0.18)",
        cyan: "0 0 32px rgba(45, 191, 232, 0.18)"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
