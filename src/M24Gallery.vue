<template>
  <div class="article-gallery" ref="articleGallery">
    <div class="expand-container" :class="{ expanded: isExpanded }">
      <div class="gallery relative p-2 pt-0">
        <div class="flex justify-between items-center py-2">
          <h4 class="uppercase font-semibold text-base">{{ title }}</h4>
          <div class="flex items-center justify-center">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="images" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5">
              <path fill="currentColor" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" class=""></path>
            </svg>
            <span class="pl-2">{{ currentlySelectedImagePosition }} / {{ images.length }}</span>
            <span class="pl-2 cursor-pointer hidden" @click.prevent="closeGallery">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-5 h-5">
                <path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" class=""></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="main-image relative flex items-center justify-center group">
          <picture>
            <img class="w-full" :src="displayedImage.url | crop(mainImageWidthSize, mainImageHeightSize)" :alt="displayedImage.title">
          </picture>
          <div class="zoom w-full h-full absolute top-0 left-0 hidden items-center justify-center cursor-pointer invisible opacity-0 group-hover:visible group-hover:opacity-100 lg:flex" @click.prevent="openGallery">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-10 h-10"><path fill="currentColor" d="M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z" class=""></path></svg>
          </div>
          <div class="navigation absolute top-0 left-0 w-full h-full flex justify-between items-center">
            <button class="p-2 h-8 w-8 flex items-center justify-center mr-2" @click.prevent="previous">
              <span>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="w-4 h-4"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" class=""></path></svg>
              </span>
            </button>
            <button class="p-2 h-8 w-8 flex items-center justify-center" @click.prevent="next">
              <span>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="w-4 h-4"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg>
              </span>
            </button>
          </div>
        </div>
        <div class="thumbs flex w-full pt-2 overflow-x-hidden">
          <div class="flex w-full" :style="thumbMoveStyle">
            <div class="border-4 border-transparent cursor-pointer flex-shrink-0" :class="{ active: image.id === displayedImage.id, 'w-1/4': !isExpanded, 'w-1/6': isExpanded }" v-for="(image, index) in images" :key="image.id" @click.prevent="switchDisplayedImage(image, index)">
              <picture>
                <img class="w-full" :src="image.url | crop(thumbWidthSize, thumbHeightSize)" :alt="image.title">
              </picture>
            </div>
          </div>
        </div>
        <div class="description">
          <p class="font-normal text-sm border-4 border-transparent" v-if="displayedImage.description !== ''">{{ displayedImage.description }}</p>
          <p class="font-normal text-sm border-4 border-transparent" v-if="displayedImage.author !== ''">Foto: {{ displayedImage.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'article-gallery',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    },
    title: {
      type: String,
      required: false,
      default: 'Image Gallery',
    },
    imageSizes: {
      type: Object,
      required: false,
      default: () => {
        return {
          wMax: 1200,
          wMin: 800,
          hMax: 'X',
          hMin: 500,
        }
      }
    },
    thumbSizes: {
      type: Object,
      required: false,
      default: () => {
        return {
          wMax: 400,
          wMin: 200,
          hMax: 240,
          hMin: 120,
        }
      }
    }
  },
  filters: {
    crop: (url, width = 'X', height = 'X') => {
      if (!url) return '';
      return url.replace('##WIDTH##', width).replace('##HEIGHT##', height);
    }
  },
  data() {
    return {
      isExpanded: false,
      displayedImage: {},
      selectedImagePosition: 0,
    }
  },
  computed: {
    mainImageWidthSize() {
      return this.isExpanded ? this.imageSizes.wMax : this.imageSizes.wMin
    },
    mainImageHeightSize() {
      return this.isExpanded ? this.imageSizes.hMax : this.imageSizes.hMin
    },
    thumbWidthSize() {
      return this.isExpanded ? this.thumbSizes.wMax : this.thumbSizes.wMin
    },
    thumbHeightSize() {
      return this.isExpanded ? this.thumbSizes.hMax : this.thumbSizes.hMin
    },
    currentlySelectedImagePosition() {
      return this.selectedImagePosition + 1
    },
    thumbMoveStyle() {
      let maxThumbs = this.isExpanded ? 6 : 4
      let offset = 0
      let imageOffset = 2
      // Calculate the offset for the images
      if (this.selectedImagePosition >= (maxThumbs - 1)) {
        // Do not move on the last thumbnail - since the next spot is empty
        if (this.selectedImagePosition === this.images.length -1) {
          imageOffset = 1
        }
        offset = (this.selectedImagePosition - maxThumbs + imageOffset) * ( (1 / maxThumbs) * 100 )
      }
      return {
        transform: `translateX(-${offset}%)`
      }
    },
  },
  mounted() {
    this.showFirstImage()
  },
  methods: {
    animateGallery() {
      const articleGalleryElement = this.$refs.articleGallery
      const expandContainer = articleGalleryElement.querySelector('.expand-container')
      const gallery = expandContainer.querySelector('.gallery')
      const mainImageContainer = gallery.querySelector('.main-image')
      const mainImageTag = mainImageContainer.querySelector('img')

      // Set height to the parent container so it doesnt jump when we fix the content
      articleGalleryElement.style.height = articleGalleryElement.clientHeight + 'px'

      // Set initial sizes - needed for smooth resizing
      expandContainer.style.width = articleGalleryElement.clientWidth + 'px'
      expandContainer.style.height = articleGalleryElement.clientHeight + 'px'
      expandContainer.style.top = expandContainer.getBoundingClientRect().top + 'px'
      expandContainer.style.left = expandContainer.getBoundingClientRect().left + 'px'

      gallery.style.width = articleGalleryElement.clientWidth + 'px'
      gallery.style.height = articleGalleryElement.clientHeight + 'px'

      mainImageContainer.style.minHeight = mainImageContainer.clientHeight + 'px'
      mainImageTag.style.height = mainImageContainer.clientHeight + 'px'
      mainImageTag.style.maxHeight = mainImageContainer.clientHeight + 'px'

      // "Animate" the gallery
      setTimeout(() => {
        // Remove previously set styles, so they don't override the css
        expandContainer.style.removeProperty('height')
        expandContainer.style.removeProperty('width')
        expandContainer.style.removeProperty('top')
        expandContainer.style.removeProperty('left')
        expandContainer.classList.add('animate')

        gallery.style.removeProperty('width')
        gallery.style.removeProperty('height')

        mainImageContainer.style.removeProperty('min-height')
        mainImageTag.style.removeProperty('height')
        mainImageTag.style.removeProperty('max-height')
      }, 100)
    },
    closeGallery() {
      this.isExpanded = false

      const articleGalleryElement = this.$refs.articleGallery
      articleGalleryElement.style.removeProperty('height')
    },
    next() {
      const nextPosition = this.selectedImagePosition + 1
      if (nextPosition < this.images.length) {
        this.selectedImagePosition = nextPosition
      } else {
        this.selectedImagePosition = 0
      }
      this.displayedImage = this.images[this.selectedImagePosition]
    },
    openGallery() {
      this.animateGallery()
      this.isExpanded = true
    },
    previous() {
      const previousPosition = this.selectedImagePosition - 1
      if (previousPosition >= 0) {
        this.selectedImagePosition = previousPosition
      } else {
        this.selectedImagePosition = this.images.length - 1
      }
      this.displayedImage = this.images[this.selectedImagePosition]
    },
    showFirstImage() {
      this.displayedImage = this.images[0]
    },
    switchDisplayedImage(image, position) {
      this.displayedImage = image
      this.selectedImagePosition = position
    }
  }
}
</script>
