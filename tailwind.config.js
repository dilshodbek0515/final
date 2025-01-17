import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    plugins: [],
    colors: {
      ...colors,
      primary: '#000'
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px'
      }
    }
  },
  plugins: []
}
