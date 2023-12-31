/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/background-main.png')",
        'automotive': "url('/assets/Rectangle-16.avif')",
      },
      fontFamily:{
        'primary' : ["Montserrat", "sans-serif"],
        'secondary' : ["Roboto", "sans-serif"]
      }

    },
  },
  plugins: [],
}
