# M24 Article Gallery

## Requirements

Laravel-mix, Webpack or similar, since it is not pre-built or pre-compiled.

## Installation

`npm install m24-gallery`

## Usage

Inside your main vue file:

```javascript
import { ArticleGallery } from 'm24-gallery'
import Vue from 'vue'

Vue.component('article-gallery', ArticleGallery)
```

Inside your css or similar be sure to include the gallery css located at `node_modules/m24-gallery/dist/m24-gallery.min.css`

## Customization

You can customize the color of the arrows and borders via

```css
:root {
  --mainGalleryColor: grey; /* Color of navigation buttons and thumb borders */
  --secondaryGalleryColor: #292727; /* Color of the gallery background */
  --mainGalleryFontColor: white; /* Font color */
}
```

## Props

| Prop | Required | Default |
| ---- | ----: | ----: |
| images | true | [] |
| title | false | 'Image Gallery' |
| imageSizes | false | `{ wMax: 1200, wMin: 800, hMax: 'X', hMin: 500 }` |
| thumbSizes | false | `{ wMax: 400, wMin: 200, hMax: 240, hMin: 120 }` |

The imageSizes and thumbSizes are only valid when your URL strings contain dynamic size values (`##WIDTH##` and `##HEIGHT##`)

### Images values

The images array should contain items with the following properties...

```json
[
  {
    "id": 123213,
    "title" => "image.jpg",
    "description" => "A custom image example",
    "author" => "Author name goes here",
    "url" => "http://image-location.com/public/images-cache/##WIDTH##x##HEIGHT##/2019/11/20/caee7c0e9c8cdf002a924d508044571a/5ddae71a1377e/caee7c0e9c8cdf002a924d508044571a.jpeg"
  }
]
```