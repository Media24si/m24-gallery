const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')
const env = process.env.NODE_ENV

let cssPath = env === 'production' ? 'dist/m24-gallery.min.css' : 'dist/m24-gallery.css'

mix.sass('src/m24-gallery.scss', cssPath)
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })
  .purgeCss({
    enabled: env === "production",
    globs: [
      path.join(__dirname, 'src/*'),
    ],
    whitelist: [
    ],
    whitelistPatterns: [
    ],
 })

