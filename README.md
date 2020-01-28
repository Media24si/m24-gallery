# M24 Article Gallery

## Installation

`npm install m24-gallery`

## Usage

Inside your main vue file:

```javascript
import Vue from 'vue'

Vue.component('article-gallery', require('./../../../m24-gallery').default)
```

Inside your css or similar be sure to include the gallery css located at `node_modules/m24-gallery/dist/m24-gallery.min.css`

## Customization

You can customize the color of the arrows and borders via

```css
:root {
  --mainGalleryColor: grey; /* Color of navigation buttons and thumb borders */
  --secondaryGalleryColor: #292727; /* Color of the gallery background */
  --mainGalleryFontColor: white;
  --mainGalleryIconColor: white;
  --expandedGalleryBackground: rgba(0, 0, 0, 0.6); /* Color of the opaque background when expanding the gallery */
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
    "title": "image.jpg",
    "description": "A custom image example",
    "author": "Author name goes here",
    "url": "http://image-location.com/image-##WIDTH##x##HEIGHT##.jpeg"
  }
]
```