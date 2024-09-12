/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center: true,
      padding: '16px'
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 5s linear infinite',
      },
      colors:{
        primary:'#2B3E75',
        secondary:'#8071F2',
        blue:'#6287F2',
        hover:'#EAE5FF',
        textfooter:'#667DBF'
      },
      strokeWidth: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        // Tambahkan ketebalan stroke lainnya sesuai kebutuhan
      },
      boxShadow: {
        'svg': '4px 4px 8px rgba(0, 0, 0, 0.3)',
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

