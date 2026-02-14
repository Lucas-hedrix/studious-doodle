/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'great-vibes': ['"Great Vibes"', 'cursive'],
          'inter': ['Inter', 'sans-serif'],
        },
        colors: {
            'romantic-red': '#E63946',
            'romantic-pink': '#FFD1DC',
            'deep-red': '#800020',
        }
      },
    },
    plugins: [],
  }
