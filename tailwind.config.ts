import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cMainBgBlack: "#232732",
        cTextPrimary: "#ffffff",
        cTextSecondary: "#b9b9b9",
      },
    },
  },
  plugins: [],
};
export default config;
