/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        "main-color" : "#0e100f",
      },
      fontFamily : {
        Lato : ['Lato'],
      }
    },
  },
  plugins: [],
};
