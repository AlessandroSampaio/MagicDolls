import withMT from '@material-tailwind/react/utils/withMT';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        ...colors,
        primary : {
          DEFAULT: '#f562f5',
          dark: '#cc41cc',
          light: '#f29bf2'
        }
      },
      fontFamily: {
        sans: ['RobotoSlab']
      }
    },
  },
  plugins: [],
});

