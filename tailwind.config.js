/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          'reverse-spin': 'reverse-spin 1s linear infinite'
        },
        keyframes: {
          'reverse-spin': {
            from: {
              transform: 'rotate(360deg)'
            },
          }
        },
        height: {
          '80': '20rem'
        },
        width: {
          '80': '20rem'
        }
      },
    },
    plugins: [],
  }
  