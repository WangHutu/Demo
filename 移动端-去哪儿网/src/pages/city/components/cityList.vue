<template>
  <div class="list">
    <div class="title">
      <div class="area border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="title">
      <div class="area border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="title">
      <div class="area border-topbottom">A</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityList'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

.title
  line-height: 1.375rem
  background: #eee
  color: #666
  font-size: .8125rem
  border-bottom: 1px solid #ccc
  .area
    padding: .6rem 0 .6rem .625rem
  .button-list
    overflow: hidden
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    .button-wrapper
      height: 2.875rem
      width: 33%
      background: #fff
      margin-right: 1.2px
      margin-bottom: 1.2px
      .button
        line-height: 2.875rem
        text-align: center
        font-size: 14px
        padding: auto 0
</style>
