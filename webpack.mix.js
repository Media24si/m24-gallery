const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')
const env = process.env.NODE_ENV

let minifiedExt = env === 'production' ? '.min' : ''

mix
  .js('src/index.js', 'dist/m24-gallery'+ minifiedExt +'.js')
  .sass('src/m24-gallery.scss','dist/m24-gallery'+ minifiedExt +'.css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })
  .purgeCss({
    enabled: env === "production",
    globs: [
      path.join(__dirname, 'src/*'),
    ],
    whitelist: [],
    whitelistPatterns: [],
 })

