import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(90deg, rgba(43,168,74,1) 0%, rgba(102,209,108,1) 14%, rgba(152,245,137,1) 31%, rgba(88,143,80,1) 59%, rgba(0,0,0,1) 81%)",
      },
    },
  },
  plugins: [],
};

export default config;
