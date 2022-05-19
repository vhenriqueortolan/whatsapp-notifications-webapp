module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif']
    },
    extend: {
      colors:{
        'orange': '#f0731b',
        'blue': '#0b1f68'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite'
      }
    },
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  },
],
}
