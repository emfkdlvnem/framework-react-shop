/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
      xl2: '1360px',
    },
    extend: {
      colors: {
        'header-dark-mode': '#191D24',
        'body-dark-mode': '#2A303C',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: ['emerald', 'dark', 'forest', 'synthwave'],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  },
};
