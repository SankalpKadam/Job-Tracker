/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      dropShadow:{
        'md':'0 4px 4px rgba(0,0,0,100%)',
      },
    },
    colors:{
      'darkbg':'#090808',
      'darktext':'#ffffff',
      'darksubtext':'#a4a4a4',
      'darkdashboardaccent':'#EE7F7F',
      'darkapplicationaccent':'#3b8f52',
      'darkleetcodeaccent':'#e5bc28',
      'darknetworkingaccent':'#1b9de5',
      'darkaccentbg':'#171717',
      'darkcirclebg':'#2c2a2a',
    },
    screens:{
      'xs':'300px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
  },
  plugins: [],
}

