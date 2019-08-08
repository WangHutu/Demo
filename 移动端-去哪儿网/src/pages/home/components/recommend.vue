<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.iconSrc" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">欢乐游玩欢乐游玩欢乐游玩欢</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .625rem
    line-height: 2.5rem
    background: #eee
    text-indent: .625rem
  .item
    display: flex
    height: 6rem
    overflow: hidden
    .item-img
      width: 5.3125rem
      height: 5.3125rem
      padding: .3125rem
    .item-info
      flex: 1
      padding: .3125rem
      min-width: 0
      .item-title
        line-height: 1.6875em
        font-size: 1rem
      .item-desc
        line-height: 1.25rem
        color: #8A8A8A
        font-size: .8rem
      .item-button
        line-height: 1.375rem
        background: #ff9300
        padding: 0 .625rem
        border-radius: .1875rem
        margin-top: 0.625rem
        color: #fff
</style>
