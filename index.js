import ArticleGallery from './src/M24Gallery.vue'

export default {
  install: function (Vue, options) {
    Vue.component(ArticleGallery.name, ArticleGallery)
  }
}

export { ArticleGallery }