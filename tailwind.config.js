/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': { 'max': '1024px' },
      'mobile': { 'max': '767px' },
      'md': { 'min': '768px' }
    },
    extend: {},
  },
  plugins: [],
}