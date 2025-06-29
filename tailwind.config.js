// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 20s infinite ease-in-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            borderRadius: "42% 58% 47% 53% / 60% 40% 60% 40%",
          },
          "25%": {
            transform: "translate(30px, -20px) scale(1.05)",
            borderRadius: "60% 40% 30% 70% / 60% 50% 50% 40%",
          },
          "50%": {
            transform: "translate(-20px, 30px) scale(0.95)",
            borderRadius: "55% 45% 60% 40% / 50% 60% 40% 50%",
          },
          "75%": {
            transform: "translate(20px, 10px) scale(1.1)",
            borderRadius: "50% 50% 55% 45% / 45% 55% 50% 50%",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
            borderRadius: "42% 58% 47% 53% / 60% 40% 60% 40%",
          },
        },
      },
    },
  },
  plugins: [],
};
