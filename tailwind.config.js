/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors:{
        "primary":"#1D183A",
        "secendary":"#16A8AA",
        "fontColor":"#33333"
      }
    },
  },
  plugins: [],
}

