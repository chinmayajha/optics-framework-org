import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#060A13",
          900: "#0B1220",
          800: "#111A2E",
          700: "#1B2740",
        },
        phosphor: {
          DEFAULT: "#C6FF4A",
          dim: "#A8E02E",
          muted: "#E8FFB0",
        },
        signal: {
          DEFAULT: "#22D3EE",
        },
      },
      boxShadow: {
        "glow-lime": "0 0 40px rgba(198,255,74,0.35), 0 0 80px rgba(198,255,74,0.12)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.25)",
        card: "0 20px 60px rgba(0,0,0,0.5)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.4,0,0.2,1) both",
        blink: "blink 1.1s step-end infinite",
        scan: "scan 4s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
