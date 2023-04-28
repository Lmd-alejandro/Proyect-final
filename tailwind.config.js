/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '380px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        primary: ['Valencia-Serial-Regular', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        tertiary: ['utopia-std-subhead' , 'sans-serif'],
        quaternary: ['Magdelin Alt Regular' , 'sans-serif']
      },
      colors:{
      black: '#17202A',
      beige: '#FDEDEC',
      grayblue: '#34495E',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
