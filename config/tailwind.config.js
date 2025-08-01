/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // CoderDojo Orange Brand Colors
        primary: {
          50: '#fff7ed',   // Very light orange
          100: '#ffedd5',  // Light orange
          200: '#fed7aa',  // Lighter orange
          300: '#fdba74',  // Medium light orange
          400: '#fb923c',  // Medium orange
          500: '#f97316',  // Primary orange
          600: '#ea580c',  // Darker orange
          700: '#c2410c',  // Dark orange
          800: '#9a3412',  // Very dark orange
          900: '#7c2d12',  // Darkest orange
        },
        secondary: {
          50: '#f8fafc',   // Very light slate
          100: '#f1f5f9',  // Light slate
          200: '#e2e8f0',  // Lighter slate
          300: '#cbd5e1',  // Medium light slate
          400: '#94a3b8',  // Medium slate
          500: '#64748b',  // Primary slate
          600: '#475569',  // Darker slate
          700: '#334155',  // Dark slate
          800: '#1e293b',  // Very dark slate
          900: '#0f172a',  // Darkest slate
        },
        accent: {
          50: '#ecfdf5',   // Very light green
          100: '#d1fae5',  // Light green
          200: '#a7f3d0',  // Lighter green
          300: '#6ee7b7',  // Medium light green
          400: '#34d399',  // Medium green
          500: '#10b981',  // Primary green
          600: '#059669',  // Darker green
          700: '#047857',  // Dark green
          800: '#065f46',  // Very dark green
          900: '#064e3b',  // Darkest green
        },
        // Custom background colors from your design
        background: {
          light: '#a5c7c0',    // Light background
          dark: '#463d5c',     // Dark background
          'dark-mode': '#23212b',  // Dark mode background
          'light-mode': '#2d2a38', // Light mode alternative
        },
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