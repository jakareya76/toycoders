/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "short-bounce": {
          "0%, 100%": { transform: "translateY(0)" }, // Default position
          "50%": { transform: "translateY(-3%)" }, // Bounce up by 10% of the element's height
        },
      },
      animation: {
        "slow-short-bounce": "short-bounce 3s infinite", // Slower animation (3s)
      },
    },
  },
  plugins: [],
};
