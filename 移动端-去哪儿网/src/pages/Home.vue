<template>
  <div>
    <top-bar></top-bar>
    <swiper></swiper>
  </div>
</template>

<script>
import topBar from './components/topBar'
import swiper from './components/headerswiper'

export default {
  name: 'Home',
  components: {
    topBar,
    swiper
  }
}
</script>

<style>

</style>
