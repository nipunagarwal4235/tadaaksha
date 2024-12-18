/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
