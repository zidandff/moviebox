/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        lg: '90px'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BE123C',
          dark: '#9F1239'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
