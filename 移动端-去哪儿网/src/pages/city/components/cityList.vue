<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem in item" :key="innerItem.id">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 首先引入插件
import Bscroll from 'better-scroll'
import bus from '../../../Bus/Bus'
export default {
  name: 'cityList',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    bus.$on('change', msg => {
      this.msg = msg
    })
  },
  // 监听器：监听msg的值得变化
  watch: {
    msg () {
      if (this.msg) {
        const elment = this.$refs[this.msg][0]
        this.scroll.scrollToElement(elment)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
  overflow: hidden
  position: absolute
  top: 5rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: 1.375rem
    background: #eee
    color: #666
    font-size: .8125rem
    border-bottom: 1px solid #ccc
    padding: .3rem 0 .3rem .625rem
  .button-list
    overflow: hidden
    display: flex
    flex-wrap: wrap
    background: #eee
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
  .item-list
    .item
      line-height: 1.6875rem
      color: #666
      background: #fff
      padding-left: .625rem
    .border-bottom
      border-bottom: 1px solid #ccc
</style>
