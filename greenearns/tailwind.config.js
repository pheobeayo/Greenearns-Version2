/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ["Open Sans"," sans-serif"],
        'titiliumweb': ["Titillium Web"," sans-serif"]
      },
      
    },
  },
  screens: {

    'xs': {'min' :'320', 'max' : "639"},

    'sm': {'min': '640px', 'max': '767px'},
    
    'md': {'min': '768px', 'max': '1023px'},
  
    'lg': {'min': '1024px', 'max': '1279px'},
    
    'xl': {'min': '1280px', 'max': '1535px'},
    
    '2xl': {'min': '1536px'},
    
    
  },
  plugins: [],
}

