/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {},
    colors: {
      white: '#fff',
      primary : {
        DEFAULT: '#f562f5',
        dark: '#cc41cc',
        light: '#f29bf2'
      }
    }
  },
  plugins: [],
};

