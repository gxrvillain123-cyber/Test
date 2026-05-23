import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deep: "#0f1410",
        forest: "#17241b",
        moss: "#203328",
        mint: "#45f0b7",
        amber: "#f0c35a",
        coral: "#ff6b6b",
        cyan: "#70d6ff",
        cream: "#f7f3e8",
        muted: "#aebdaf",
        line: "rgba(247, 243, 232, 0.14)",
      },
      boxShadow: {
        soft: "0 22px 70px rgba(0, 0, 0, 0.28)",
        lift: "0 18px 44px rgba(69, 240, 183, 0.16)",
      },
      animation: {
        reveal: "reveal 0.8s ease both",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
