module.exports = {
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',

        'black-lightest': 'rgba(0, 0, 0, .6)',
        'black-lighter': 'rgba(0, 0, 0, .87)',
        'black-light': '#292727',
        'black': '#000000',
        'white': '#ffffff',

        'grey-light': '#EDEDED',
        'grey': '#292727',
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    visibility: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    margin: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'odd', 'even'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: []
}
