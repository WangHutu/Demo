<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.iconSrc" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.name}}}</p>
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
  data () {
    return {
      recommendList: [
        { id: 1, name: '北京欢乐谷', iconSrc: require('assets/欢乐谷.jpg') },
        { id: 2, name: '古北水镇', iconSrc: require('assets/古北水镇.jpg') },
        { id: 3, name: '故宫', iconSrc: require('assets/故宫.jpg') },
        { id: 4, name: '八达岭长城', iconSrc: require('assets/八达岭长城.jpg') },
        { id: 5, name: '北京动物园', iconSrc: require('assets/北京动物园.jpg') },
        { id: 6, name: '金隅凤山温泉', iconSrc: require('assets/金隅凤山温泉.jpg') }
      ]
    }
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
        color: #ccc
      .item-button
        line-height: 1.375rem
        background: #ff9300
        padding: 0 .625rem
        border-radius: .1875rem
        margin-top: 0.625rem
        color: #fff
</style>
