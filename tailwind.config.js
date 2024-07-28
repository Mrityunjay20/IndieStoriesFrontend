const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        body: ["Roboto", "sans-serif"],
      },

      colors: {
        customYellow: '#fcfbc1',
        customBrown:'#7c2602',
        customBlue:'#0b78bd'
      },
      animation: {
        'spin-slow-reverse': 'spin-reverse 5s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(-360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      
    },
  },
  plugins: [],
})