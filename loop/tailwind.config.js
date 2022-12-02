module.exports = {
  important: true,
  content: ["./*.html"],
  theme: {
    screen:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1480px',
    },
    extend: {
      fontFamily:{
        sans:['Josefin Sans','sans-serif'],
        alata:['Alata']
      },
      letterSpacing:{
        widest:'.5em'
      }
      
    },
  },
  plugins: [],
};
