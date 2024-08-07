/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'library-background': "url('/imgs/library-background.jpg')"
      },
      fontFamily: {
        'hind': ['Hind', 'sans-serif']
      }
    },
  },
  plugins: [],
};