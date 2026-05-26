/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'], 
      },
      colors: {
        'brand-black': '#121212',
        'brand-pink': '#FF90E8',     
        'brand-yellow': '#FFCE47',    
        'brand-blue-light': '#8FD3F4', 
        'brand-red': '#FF4545',       
        'brand-green-dark': '#1F2937',
        'brand-yellow-light': '#F0E68C', 
        'brand-purple': '#5D3FD3',    
        'brand-pink-light': '#F4A4C8', 
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #121212',
        'neo-sm': '2px 2px 0px 0px #121212',
      },
      borderWidth: {
        '1.5': '1.5px', // Added for the "lighter" navbar border
        '3': '3px',
      }
    },
  },
  plugins: [],
}