import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary : {
          DEFAULT: '#f562f5',
          dark: '#cc41cc',
          light: '#f29bf2'
        }
      },
      fontFamily: {
        sans: ['RobotoSlab']
      },
      screens: {
        mobile: { 'max' : '540px' }
      }
    },
  },
  plugins: [],
});

