/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        pd: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#2A2E43',
        secondary: '#F7EFE1',
        accent: '#A32857',
        danger: '#E0245E',
        success: '#00C853',
        warning: '#F0A500',
        info: '#00B0FF',
        dark: '#3A3A3A',
        light: '#FAFAFA',
      },
    },
  },
  plugins: [forms],
}
