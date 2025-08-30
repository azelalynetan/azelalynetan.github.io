/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'Arial', 'sans-serif'], 
        roboto: ['Roboto', 'Helvetica', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
      },
      colors: {
        brand: {
          gray: "#e6e6e6",
          gray94: "#f0f0f0",
          darkPink: "#da9b9c",
          pink: "#e5adad",
          lightPink: "#f6c8c7"
        },
      },
      screens: {
        xs: '390px', 
        xxs: '360px', // optional: very small phones
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

