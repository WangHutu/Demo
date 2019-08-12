<template>
  <div class="topbar">
    <router-link :to="{name: 'Home'}">
      <div class="el-icon-arrow-left topbar-back"></div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'cityTopbar'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.topbar
  position: relative
  overflow: hidden
  height: $topBar
  line-height: $topBar
  color: #fff
  text-align: center
  background: $bgColor
  font-size: 1rem
  .topbar-back
    width: 2rem
    line-height: $topBar
    text-align: center
    font-size: 1.25rem
    position: absolute
    left: 0
    top: 0
    color: #fff
</style>
