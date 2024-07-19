/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{html,js,jsx,ts,tsx,css}',
    './node_modules/flowbite/**/*.js',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

