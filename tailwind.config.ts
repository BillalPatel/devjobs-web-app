import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "rgba(var(--primary))",
      secondary: "rgba(var(--secondary))",
      textWhite: "rgba(var(--textWhite))",
      textContent: "rgba(var(--textContent))",
      textHeader: "rgba(var(--textHeader))",
      secondaryTextContent: "rgba(var(--secondaryTextContent))",
      background: "rgba(var(--background))",
      mainBackground: "rgba(var(--mainBackground))",
    },
  },
  plugins: [],
};
export default config;
