/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "green":"#051A16",
      "orange":"#ac0727",
      "black":"#000000",
      "white":"#ffffff",
      "fadedWhite":"#E8E8E8",
      "lightWhite":"#B9B9B9",
      "lightBlack":"#3A3A3A",
      "fadedBlack":"#9c9c9c",


    },
    fontFamily:{
      'poppins':["Poppins", "sans-serif"],

    },
    extend: {},
  },
  plugins: [],
}

