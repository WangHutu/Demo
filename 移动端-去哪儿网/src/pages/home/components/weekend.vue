<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.weekSrc" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    line-height: 2.5rem
    background: #eee
    text-indent: .625rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .3125rem
    .item-title
      line-height: 1.6875em
      font-size: 1rem
    .item-desc
      line-height: 1.25rem
      color: #8A8A8A
      font-size: .8rem
</style>
