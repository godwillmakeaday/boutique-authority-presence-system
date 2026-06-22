import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0c0908",
        espresso: "#17110f",
        cocoa: "#211714",
        wine: "#311618",
        oxblood: "#481d1f",
        cream: "#f7ead3",
        pearl: "#fff8ec",
        champagne: "#d8b778",
        bronze: "#a97843",
        blush: "#d8a9a3",
        silk: "#ead9bd",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 90px rgba(216,183,120,0.20)",
        card: "0 24px 90px rgba(0,0,0,0.38)",
        editorial: "0 34px 120px rgba(0,0,0,0.46)",
        insetLux: "inset 0 1px 0 rgba(255,248,236,0.10), inset 0 -1px 0 rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        luxury:
          "radial-gradient(circle at top left, rgba(216,183,120,0.22), transparent 34%), radial-gradient(circle at 80% 10%, rgba(216,169,163,0.14), transparent 28%), linear-gradient(135deg, #0c0908 0%, #17110f 58%, #311618 100%)",
        silk:
          "linear-gradient(135deg, rgba(255,248,236,0.12), rgba(216,183,120,0.08), rgba(72,29,31,0.30))",
        runway:
          "linear-gradient(180deg, rgba(255,248,236,0.10), rgba(255,248,236,0.02) 38%, rgba(49,22,24,0.45))",
      },
      letterSpacing: {
        couture: "0.34em",
      },
      borderRadius: {
        couture: "2.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
