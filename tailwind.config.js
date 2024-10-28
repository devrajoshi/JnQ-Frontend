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
      },
      animation: {
        writing: "write 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
