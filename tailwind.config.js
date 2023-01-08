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
          DEFAULT: '#BE123C'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
