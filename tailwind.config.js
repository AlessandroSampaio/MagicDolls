/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    screens: {
      'normal': {'min': '541px'},
      'mobile': { 'max' : '540px' }
    },
    colors: {
      'mirage': {
        '50': '#f4f6fb',
        '100': '#e8ecf6',
        '200': '#cbd8ec',
        '300': '#9db6dc',
        '400': '#6990c7',
        '500': '#4672b1',
        '600': '#345995',
        '700': '#2b4779',
        '800': '#273e65',
        '900': '#253555',
        '950': '#111827',
      },
      'pink-flamingo': {
        '50': '#fef4ff',
        '100': '#fde8ff',
        '200': '#fad1fd',
        '300': '#f9adfa',
        '400': '#f562f5',
        '500': '#ec49eb',
        '600': '#d029cd',
        '700': '#ac1fa5',
        '800': '#8d1b87',
        '900': '#731c6c',
        '950': '#4d0547',
        'DEFAULT' : '#f562f5'
      },
      'iron': {
        '50': '#f7f7f7',
        '100': '#ededed',
        '200': '#dfdfdf',
        '300': '#cdcdcd',
        '400': '#adadad',
        '500': '#999999',
        '600': '#888888',
        '700': '#7b7b7b',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
      },
      'black': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#000000',
      },
      'white': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
      },
      fontFamily: {
        sans: ['RobotoSlab']
      },
    },
  },
  plugins: [],
};

