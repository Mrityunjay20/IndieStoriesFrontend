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
}