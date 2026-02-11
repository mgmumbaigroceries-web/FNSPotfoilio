/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0A3925",
          50: "#e6f5ee",
          100: "#c0e6d4",
          200: "#8cd4b2",
          300: "#4fb882",
          400: "#1a7a4a",
          500: "#0A3925",
          600: "#082f1f",
          700: "#062519",
          800: "#041a11",
          900: "#021009",
        },
        coral: {
          DEFAULT: "#F25C44",
          50: "#fef0ed",
          100: "#fdd8d1",
          200: "#fbb0a3",
          300: "#f88875",
          400: "#F25C44",
          500: "#e04430",
          600: "#c4311f",
          700: "#a32418",
          800: "#821a12",
          900: "#61120c",
        },
        cream: {
          DEFAULT: "#FDFCF8",
          50: "#FDFCF8",
          100: "#FAF8F0",
          200: "#F5F2E6",
          300: "#E8E3D0",
        },
        sap: {
          DEFAULT: "#6BAF48",
          50: "#f0f8eb",
          100: "#d8eece",
          200: "#b3dea0",
          300: "#8dcd72",
          400: "#6BAF48",
          500: "#589639",
          600: "#477c2e",
          700: "#366124",
          800: "#254619",
          900: "#142b0f",
        },
      },
      fontFamily: {
        heading: ["'Manrope'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "marquee2": "marquee2 25s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
}
