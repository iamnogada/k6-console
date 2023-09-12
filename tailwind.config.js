/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#800080',        // Primary purple
        'light': '#A94CA9',          // Lighter shade
        'dark': '#660066',           // Darker shade
        'pale': '#D8BFD8',           // Pale shade
        'deep': '#4B0082',           // Deep shade
      },
    },
  },
  plugins: [],
}

