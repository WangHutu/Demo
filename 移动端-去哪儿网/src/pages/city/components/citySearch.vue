<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名称或拼音">
  </div>
</template>

<script>
export default {
  name: 'citySearch'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.search
  height: 2.25rem
  padding: 0 .3125rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: 1.9375rem
    line-height: 1.9375rem
    text-align: center
    border-radius: .1875rem
    outline: none
    border: none
    padding: 0 .3125rem
    color: #666
</style>
