/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RS: ['Russo One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

