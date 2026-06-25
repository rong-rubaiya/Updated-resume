/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff6b00",
          light: "#ff8c33",
          dark: "#cc5500",
          glow: "rgba(255, 107, 0, 0.4)",
        },
        secondary: "#050505",
        darkGray: {
          DEFAULT: "#121212",
          light: "#1e1e1e",
          card: "#181818",
        },
        accent: "#ffffff",
        muted: "#bdbdbd",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 107, 0, 0.25)",
        "glow-lg": "0 0 40px rgba(255, 107, 0, 0.45)",
        glass: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        "bg-gradient": "bgGradient 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        scrollDown: {
          "0%": { transform: "translateY(0) scaleY(1)", opacity: "0" },
          "20%": { transform: "translateY(0) scaleY(1)", opacity: "1" },
          "80%": { transform: "translateY(12px) scaleY(1.2)", opacity: "0.2" },
          "100%": { transform: "translateY(12px) scaleY(0.8)", opacity: "0" },
        },
        bgGradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
}
