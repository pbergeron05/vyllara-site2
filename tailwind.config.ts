import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: { extend: {
    fontFamily: { serif: ["var(--font-serif)"], sans: ["var(--font-sans)"] },
    colors: { sand:"#f5f1ea", linen:"#efe7dc", charcoal:"#1c1b1a", gold:"#b8945a", deep:"#120f0d", warmWhite:"#f8f4ee" }
  }},
  plugins: []
};
export default config;
