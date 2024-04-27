/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-light': '#F1F4FF',
        'primary-placeholder': '#889BDD',
        "base-100": "#ffffff",
        "base-200":"#A5A5A5"
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1F41BB",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
        },
      },
    ],
  },
}