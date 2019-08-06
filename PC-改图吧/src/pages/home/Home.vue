<template>
  <div>
    <home-headerbar></home-headerbar>
    <home-swiper></home-swiper>
    <home-header></home-header>
    <flexbar v-if="flex"></flexbar>
    <home-main bgcolor="gray" :title="title[0]" :theme="theme.theme1"></home-main>
    <home-main bgcolor="white" :title="title[1]" :theme="theme.theme2"></home-main>
    <bottombar></bottombar>
  </div>
</template>

<script>
import homeHeaderbar from '../components/homeHeaderbar'
import homeSwiper from '../components/homeSwiper'
import homeHeader from '../components/homeHeader'
import homeMain from '../components/homeMain'
import bottombar from '../components/bottombar'
import flexbar from '../components/flexbar'

export default {
  name: 'Home',
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollY = window.scrollY
      if (scrollY >= 600) {
        this.flex = true
      } else {
        this.flex = false
      }
    }
  },
  data () {
    return {
      flex: false,
      title: [
        '节日设计',
        '党建活动',
        '电商淘宝',
        '活动海报',
        '办公文档',
        '插图配图'
      ],
      theme: {
        theme1: [
          { id: 1, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 2, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 3, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 4, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 5, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 6, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 7, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 8, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 9, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 10, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 11, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') },
          { id: 12, name: '夜景摩天轮', imgSrc: require('@/assets/theme.png') }
        ],
        theme2: [
          { id: 1, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 2, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 3, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 4, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 5, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 6, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 7, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 8, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 9, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 10, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 11, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') },
          { id: 12, name: '绿野仙踪', imgSrc: require('@/assets/theme2.png') }
        ]
      }
    }
  },
  components: {
    homeHeaderbar,
    homeSwiper,
    homeHeader,
    homeMain,
    bottombar,
    flexbar
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
html body {
  background-color: #eee;
}
.white {
  background-color: #fff;
}
.gray {
  background-color: #f5f5f5;
}
</style>
