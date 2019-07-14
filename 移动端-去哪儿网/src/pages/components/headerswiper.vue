<template>
  <div class="headerswiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperimgs" :key="item.id">
        <img class="swiper-img" :src="item.imgSrc" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'headerswiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 2500
      },
      swiperimgs: [
        {id: 1, imgSrc: require('assets/swiper1.jpg')},
        {id: 2, imgSrc: require('assets/swiper2.jpg')},
        {id: 3, imgSrc: require('assets/swiper3.jpg')},
        {id: 4, imgSrc: require('assets/swiper4.jpg')},
        {id: 5, imgSrc: require('assets/swiper5.jpg')}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
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
