/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        LogoColor:"#ADD9FF",
        LogoColor2:"#ED2F49"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}