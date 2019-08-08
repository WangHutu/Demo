<template>
  <div class="topBar">
      <div class="topBar-left">
        <a href="javascript::">
          <span class="el-icon-arrow-left topleft-icon"></span>
        </a>
      </div>
      <div class="topBar-input">
        <span class="el-icon-search"></span>
        输入城市/景点/游玩主题
      </div>
      <router-link :to='{name: "City"}'>
        <div class="topBar-right">{{city}}
          <span class="el-icon-caret-bottom topright-icon"></span>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'topBar',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
// 引入变量文件，可以直接使用里面定义好的变量
  @import '~@/assets/styles/varibles.styl';
// 由于reset.css文件中：1rem = html font-size = 16px;
  .topBar
    height: $topBar
    display: flex
    background: $bgColor
    color: #fff
    .topBar-left
      width: 2rem
      float: left
      line-height: $topBar
      text-align: center
      .topleft-icon
        font-size: 1.25rem
        color: #fff
    .topBar-input
      flex: 1
      background: #ffffff
      border-radius: .31rem
      border: 1px
      padding: 0 0 0 10px
      margin: .375rem .625rem
      height: 2rem
      line-height: 2rem
      color: #ccc;
    .topBar-right
      width: 3rem
      float: right
      text-align: center
      font-size: 14px
      line-height: $topBar
      color: #fff
      .topright-icon
        margin-left: -.25rem
</style>
