import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071624",
        evergreen: "#0B3A33",
        gold: "#C9A45C",
        mist: "#F3F5F7",
      },
      boxShadow: {
        premium: "0 20px 60px rgba(7, 22, 36, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
