/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00acb4',
        secondary: '#058187',
      },
    },
  },
  plugins: [],
}
