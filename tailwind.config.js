/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        // Grounded Organic Palette (High Contrast Refinement)
        background: '#FDFBF7',
        surface: '#F4EFE6',
        'surface-dark': '#EBE4D5',
        primary: {
          500: '#1B4332', 
          600: '#143024',
          900: '#08130E', // Deepest forest for overlays
        },
        accent: {
          500: '#A88944', 
          600: '#8E7339',
          700: '#755F2D', // Higher contrast gold for small text
        },
        text: {
          primary: '#121212',
          secondary: '#333333',
          muted: '#555555',
          inverse: '#FDFBF7', // Use background color as inverse text
        },
        border: 'rgba(27, 67, 50, 0.15)',
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
        md: '0 2px 4px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
