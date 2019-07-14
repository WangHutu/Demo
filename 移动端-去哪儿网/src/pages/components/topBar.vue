<template>
  <div class="topBar">
      <div class="topBar-left">返回</div>
      <div class="topBar-input"></div>
      <div class="topBar-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'topBar'
}
</script>

<style lang="stylus" scoped>
// 由于reset.css文件中：1rem = html font-size = 32px;
  .topBar
    height: 1rem
    display: flex
    background: #00bcd4
    .topBar-left
      width: 1rem
      float: left
    .topBar-input
      flex: 1
    .topBar-right
      width: 1.94rem
      float: right
      text-align: center
      font-size: 14px
</style>
