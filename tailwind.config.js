/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#b9ddcb',
          300: '#8dc5aa',
          400: '#5fa685',
          500: '#3f8a66',
          600: '#2d6e51',
          700: '#245842',
          800: '#1f4636',
          900: '#1a3a2d',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#ebe7dd',
          300: '#ddd6c7',
          400: '#ccc1ad',
          500: '#baab93',
          600: '#a8947a',
          700: '#8a7560',
          800: '#6f5e4d',
          900: '#5a4d3f',
        },
      },
    },
  },
  plugins: [],
};
