/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e1b4b',
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b4fc',
          '400': '#818cf8',
          '500': '#6366f1',
          '600': '#4f46e5',
          '700': '#4338ca',
          '800': '#3730a3',
          '900': '#312e81',
        },
        secondary: {
          DEFAULT: '#3b0764',
          '50': '#f5f3f9',
          '100': '#ebe8f2',
          '200': '#d0c5e0',
          '300': '#b3a0ce',
          '400': '#8e74b4',
          '500': '#6b4f99',
          '600': '#553e7d',
          '700': '#462f66',
          '800': '#38244e',
          '900': '#2f1f3f',
        }
      },
    },
  },
  plugins: [],
}

