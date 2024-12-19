/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem", // Larger than 9xl
        "11xl": "12rem", // Even larger
      },
      fontFamily: {
        lunar: ['"LunarWorld"', "sans-serif"], // Custom font family
      },
      keyframes: {
        shrink: {
          "0%": { fontSize: "8rem", opacity: 1, transform: "translateY(0)" },
          "100%": {
            fontSize: "2rem",
            opacity: 0,
            transform: "translateY(-2rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
