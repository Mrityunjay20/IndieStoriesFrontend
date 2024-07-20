/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#fcfbc1',
        customBrown:'#7c2602',
        customBlue:'#0b78bd'
      },
    },
  },
  plugins: [],
}