<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="page in pages" :key="pages.indexOf(page)">
        <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
                <img :src="item.iconSrc" class="icon-content">
            </div>
            <p class="icon-text">{{item.name}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'icons',
  data () {
    return {
      iconsimg: [
        { id: 1, name: '景点门票', iconSrc: require('assets/icon1.png') },
        { id: 2, name: '故宫', iconSrc: require('assets/icon2.png') },
        { id: 3, name: '北京必游', iconSrc: require('assets/icon3.png') },
        { id: 4, name: '水上乐园', iconSrc: require('assets/icon4.png') },
        { id: 5, name: '爬长城', iconSrc: require('assets/icon5.png') },
        { id: 6, name: '北京欢乐谷', iconSrc: require('assets/icon6.png') },
        { id: 7, name: '动植物园', iconSrc: require('assets/icon7.png') },
        { id: 8, name: '北京野生动物园', iconSrc: require('assets/icon8.png') },
        { id: 9, name: '北京世园会', iconSrc: require('assets/icon9.png') },
        { id: 10, name: '考生专享', iconSrc: require('assets/icon10.png') }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsimg.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    // overflow: hidden;
    height: 0;
    // padding 的百分比指的是占的最大宽度的百分比
    padding-bottom: 50%;
    .icon
      float: left
      height: 0
      width: 25%;
      // padding 的百分比指的是占的最大宽度的百分比
      padding-bottom: 25%
      position: relative
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 1.375rem
        padding: .3125rem
        .icon-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-text
        position: absolute
        left: 0
        bottom: 0
        right: 0
        height: 1.375rem
        color: #333
        line-height: 1.375rem
        text-align: center
        overflow: hidden
        white-sapce: nowrap
        text-overflow: ellipsis
</style>
