<template>
  <div>
    <top-bar></top-bar>
    <header-swiper></header-swiper>
    <icons></icons>
    <recommend></recommend>
  </div>
</template>

<script>
import topBar from './components/topBar'
import headerSwiper from './components/headerSwiper'
import icons from './components/icons'
import recommend from './components/recommend'

export default {
  name: 'Home',
  components: {
    topBar,
    headerSwiper,
    icons,
    recommend
  }
}
</script>

<style>

</style>
