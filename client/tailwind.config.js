/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A7EBB",
        secondary: "#8cc4e5",
        accent: "#FACC15",
        white: "#faf9f6",
        black: "#111315",
        grey: "#AAB9C5",
        warning: "#ec654d",
        success: "#4DEC6F",
        accent800: "#695402",
      },
      spacing: {
        96: "24rem",
      },
      backgroundImage: {
        gradientPrimary: "linear-gradient(to bottom, #3A7EBB 0%, #1A3955 100%)",
        logo: "url('./src/assets/img/logo.png')",
        logo2: "url('./src/assets/img/logo2.png')",
      },
      fontFamily: {
        body: ["Poppins"],
        logo: ["Patula One"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
