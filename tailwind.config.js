module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    mode: 'jit',
    extend: {
      colors:{
        primaryblack:'#121212',
        primarygray:'#242424',
        primarygreen:'#1db954',
        active:'#282828',
        link:'#b3b3b3',
        footer:'#181818'

      }
    },
  },
  plugins: [
    
  ],
}