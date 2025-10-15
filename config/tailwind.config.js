/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary: Orange (#ffa764) - For buttons, highlights, and accents
        primary: {
          50: '#fff4ed',   // Very light orange tint
          100: '#ffe6d1',  // Light orange tint
          200: '#ffcc9f',  // Lighter orange
          300: '#ffb370',  // Medium light orange
          400: '#ffa764',  // Main orange color
          500: '#ffa764',  // Main orange color
          600: '#e6956a',  // Slightly darker orange
          700: '#cc8560',  // Darker orange
          800: '#b37556',  // Much darker orange
          900: '#99654c',  // Darkest orange
        },
        // Secondary: Sage green (#99c3bb) in light mode, dark orange in dark mode
        secondary: {
          50: '#f7faf9',   // Very light sage tint
          100: '#e8f2f0',  // Light sage tint  
          200: '#d1e5e1',  // Lighter sage
          300: '#bad8d2',  // Medium light sage
          400: '#a3cbc3',  // Light sage
          500: '#99c3bb',  // Main sage color (light mode)
          600: '#8ab0a9',  // Slightly darker sage
          700: '#cc6b2c',  // Dark orange for dark mode
          800: '#b8541f',  // Darker orange for dark mode  
          900: '#a43f12',  // Darkest orange for dark mode
        },
        // Add a specific dark orange palette for better control
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Standard orange
          600: '#ea580c',
          700: '#cc6b2c',  // Dark orange for dark mode secondary
          800: '#b8541f',  // Darker orange
          900: '#a43f12',  // Darkest orange
        },
        // Accent: Dark purple (#453e55) - For dark sections and text
        accent: {
          50: '#f8f7f8',   // Very light dark tint
          100: '#e9e7ea',  // Light dark tint
          200: '#d3cfd5',  // Lighter dark
          300: '#bdb7c0',  // Medium light dark
          400: '#a79fab',  // Light dark
          500: '#918796',  // Medium dark
          600: '#7b6f81',  // Darker version
          700: '#65576c',  // Much darker
          800: '#4f3f57',  // Very dark
          900: '#453e55',  // Main dark color
        },
        // Darker greys for better contrast
        white: '#ffffff',
        black: '#000000',
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        // Semantic mappings for light/dark mode
        background: {
          light: '#ffffff',
          dark: '#18181b',
        },
        surface: {
          light: '#f4f4f5',
          dark: '#27272a',
        },
        text: {
          primary: {
            light: '#453e55',
            dark: '#f4f4f5',
          },
          secondary: {
            light: '#71717a',
            dark: '#a1a1aa',
          }
        },
        // For backward compatibility, map slate to our darker greys
        slate: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 