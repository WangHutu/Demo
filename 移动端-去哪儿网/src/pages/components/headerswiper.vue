<template>
  <div class="headerswiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgSrc" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'headerSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true,
        speed: 1000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .headerswiper>>> .swiper-pagination-bullet-active
  .headerswiper
    // 这样定宽高比例，在加载速度慢的时候，不会出现屏幕图片抖动
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
      height: 31.25vw
</style>
