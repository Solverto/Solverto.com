import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#07080D",
        graphite: "#0B0F19",
        panel: "#111827",
        bone: "#F5F5F0",
        muted: "#A7ADB8",
        gold: "#D7A84F",
        amber: "#F59E0B",
        cyan: "#38BDF8"
      },
      boxShadow: {
        glow: "0 0 40px rgba(215, 168, 79, 0.18)",
        cyan: "0 0 32px rgba(56, 189, 248, 0.18)"
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
