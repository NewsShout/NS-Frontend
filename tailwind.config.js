/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#16a541',

          secondary: '#00b7d1',

          accent: '#00ffff',

          neutral: '#392027',

          'base-100': '#fafafa',

          info: '#00c2e3',

          success: '#00efc4',

          warning: '#f2a400',

          error: '#ff7b85'
        }
      }
    ]
  }
}
