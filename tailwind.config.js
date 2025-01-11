/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "rgb(5, 4, 44)",
        customBlue: '#0071B9',
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [],
};
