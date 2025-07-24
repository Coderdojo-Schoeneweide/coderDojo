/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  safelist: [
    // Button classes
    'btn-primary',
    'btn-secondary',
    'btn-outline',
    'btn-sm',
    'btn-md',
    'btn-lg',
    // Animation classes
    'animate-slideUp',
    'animate-slideDown',
    'animate-slideLeft',
    'animate-slideRight',
    'animate-zoomIn',
    'animate-fadeIn',
  ],
  theme: {
    extend: {
      colors: {
        darkmode: {
          "theme-light": "#1D1D1D",
          "theme-dark": "#121212",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
    },
  },
  plugins: [],
} 