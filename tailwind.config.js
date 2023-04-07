const colors = require("tailwindcss/colors");

module.exports = {
    content: [
      './public/**/*.html',
      // './src/**/*.vue',
      // "./node_modules/flowbite/**/*.js",
      // "./node_modules/tw-elements/dist/js/**/*.js",
      // './node_modules/vue-tailwind-elements/**/*.{js,ts,vue}'
      "./src/**/*.{html,js}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/tw-elements/dist/js/**/*.js"
      // "./node_modules/tw-elements/dist/js/**/*.js"
    ],

    // plugins: [require("tw-elements/dist/plugin"),require('flowbite/plugin')],
    // plugins: [require("tw-elements/dist/plugin")],
    darkMode: false, // or 'media' or 'class'
    theme: {
      // #001C54
      colors: {
        ...colors,
        menu: '#001C54',
        banner_game: '#272732',
        product: '#6f738a'
        
    },
    backgroundImage: {
      'hero-pattern': "url('https://vni.pro.vn/uploads/thumbnails/1625836415-Thumbnail_1.jpg')",
    },
      extend: {
        
        
      },
    },
    variants: {
      extend: {},
    },
    // plugins: [],
  }