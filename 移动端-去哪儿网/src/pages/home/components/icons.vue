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
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
