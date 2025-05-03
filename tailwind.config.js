/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        signature: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(#cbd5e1 0.7px, transparent 0.7px)',
      },
      backgroundSize: {
        'dot-grid': '16px 16px',
      },
    },
  },
  plugins: [],
};
