<template>
  <div>
    <top-bar></top-bar>
    <header-swiper></header-swiper>
    <icons></icons>
  </div>
</template>

<script>
import topBar from './components/topBar'
import headerSwiper from './components/headerSwiper'
import icons from './components/icons'

export default {
  name: 'Home',
  components: {
    topBar,
    headerSwiper,
    icons
  }
}
</script>

<style>

</style>
