<template>
  <div>
    <top-bar :city='city'></top-bar>
    <header-swiper :list='list'></header-swiper>
    <icons :iconList='iconList'></icons>
    <recommend :recommendList='recommendList'></recommend>
    <weekend :weekendList='weekendList'></weekend>
  </div>
</template>

<script>
import topBar from './components/topBar'
import headerSwiper from './components/headerSwiper'
import icons from './components/icons'
import recommend from './components/recommend'
import weekend from './components/weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    topBar,
    headerSwiper,
    icons,
    recommend,
    weekend
  },
  data () {
    return {
      city: '',
      list: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfofoSucc)
    },
    getHomeInfofoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        this.city = res.data.city
        this.list = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
