/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      sans: ['SofiaPro', 'sans-serif'],
      body: ['Sofia', 'sans-serif'],
      code: ['attribute-mono', 'sans-serif'],
    },
   extend: {
      cursor: {
        pointer: 'url("./assets/icons8-hand-cursor-48.cur"), pointer',
        
      },
    },
  },
  plugins: [],
};
