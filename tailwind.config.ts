import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBFAF7",
        surface: "#FFFFFF",
        ink: "#1A1713",
        muted: "#6B6155",
        line: "#E7E1D7",
        copper: {
          DEFAULT: "#C0562A",
          dim: "#9E4520",
          bright: "#D97747",
          soft: "rgba(217,119,71,0.10)",
        },
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
