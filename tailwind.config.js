const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: '#C6753C',
        1: '#ECAC79',
        2: '#E59051',
        3: '#AB6631',
        4: '#8D562A',
      },
      secondary: {
        DEFAULT: '#35707A',
        1: '#6F98A5',
        2: '#4A828F',
        3: '#1A5D64',
        4: '#134549',
      },
      tertiary: {
        DEFAULT: '#0C1918',
        1: '#212B2C',
        2: '#152122',
        3: '#0E181A',
        4: '#111413',
      },
      silver: {
        DEFAULT: '#B4B0B3',
        1: '#FFFFFF',
        2: '#D7D6D6',
        3: '#948C92',
        4: '#766B73',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: '#FFFFFF',
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}
