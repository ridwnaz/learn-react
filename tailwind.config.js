/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont:['Montserrat', 'sans-serif'],
      },
      colors : {
        birulight:'#4385A2',
        biru: '#146C94',
        birudark:'#082B3B',
      },
      screens : {
         'mobile': '380px',
      // => @media (min-width: 380px) { ... }
      }
    },
  },
  plugins: [],
}

