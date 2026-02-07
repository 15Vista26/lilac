/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        cream: "#f6f3ed",
        "green-900": "#1c2e1c",
        "green-800": "#2d4a2d",
        sage: "#d8dcd6",
        "maya-bg": "#FAFAF5",
        "maya-text": "#3E3E3E",
        "maya-primary": "#6D5D4B",
        "maya-accent": "#B5A89C",
        "maya-muted": "#E5E0D8",
        // Dark mode specific colors
        "dark-bg": "#121212",
        "dark-surface": "#1E1E1E",
        "dark-text": "#E0E0E0",
        "dark-accent": "#81C784",
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};