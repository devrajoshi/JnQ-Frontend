/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Headland One", "mono"],
      },
      keyframes: {
        write: {
          "0%, 100%": { transform: "translateX(0) rotate(-15deg)" },
          "50%": { transform: "translateX(20px) rotate(15deg)" },
        },
        "color-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        writing: "write 1s ease-in-out infinite",
        "color-float": "color-shift 5s ease infinite",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
