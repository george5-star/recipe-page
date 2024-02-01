/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primary-nutmeg": "hsl(14, 45%, 36%)",
      "primary-dark-raspberry": "hsl(332, 51%, 32%)",
      "neutral-white": "hsl(0, 0%, 100%)",
      "neutral-rose-white": "hsl(330, 100%, 98%)",
      "neutral-eggshell": "hsl(30, 54%, 90%)",
      "neutral-light-grey": "hsl(30, 18%, 87%)",
      "neutral-wenge-brown": "hsl(30, 10%, 34%)",
      "neutral-dark-charcoal": "hsl(24, 5%, 18%)",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Young Serif", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
