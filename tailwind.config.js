/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    // colors: {},
    extend: {},
  },
  plugins: [
    require("tailwindcss-inner-border"),
    require('@tailwindcss/typography'),
  ]
}
