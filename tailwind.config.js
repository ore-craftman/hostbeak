module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        baseCyan: '#3DB0FF',
        baseBlue: '#081494',
        dashGray: '#F9F9F9',
      },
    },
  },
  plugins: [],
}
