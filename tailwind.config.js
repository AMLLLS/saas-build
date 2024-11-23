/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFB800',
          hover: '#FFA500',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          light: '#666666',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Aeonik', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        aeonik: ['Aeonik', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      background: '#F9F9F9',
    },
  },
  plugins: [],
} 