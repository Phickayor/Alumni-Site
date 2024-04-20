import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
        petrona: ["var(--font-petrona)"],
        cabin: ["var(--font-cabin)"]
      },
      colors: {
        lightBlue: "#193AAE",
        darkBlue: "#03134B",
        primaryHeader: "#212121",
        secHeader: "#202020",
        offWhite: "#E3E3E3",
        primaryText: "#787878",
        secText: "#565656"
      }
    }
  },
  plugins: []
};
export default config;
