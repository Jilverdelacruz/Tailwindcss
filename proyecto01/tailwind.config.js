module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      kural:['kurale'],
      lob:['Lobster']
    },
    
    extend: {
      colors:{
        primary: '#fbad49',
        secundary: '#ff7573',
        night:'#27293f'
      },
      backgroundImage: theme => ({
        'img-header' : "url('/img/Grupo.png')" 
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
