/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'sans-serif'],
      'javanese': ['Noto Sans Javanese', 'sans-serif']
    }
  },
  plugins: []
}
