<template>
  <div class="modulesheader">
    <div class="wrapper">
      <div class="navTop">
        <el-button-group class="items" @click.native="tabSY">
          <el-button class="item itemlift">首页</el-button>
          <el-button class="item">地产海报</el-button>
          <el-button class="item">党建活动</el-button>
          <el-button class="item">电商淘宝</el-button>
          <el-button class="item">活动海报</el-button>
          <el-button class="item">办公文档</el-button>
          <el-button class="item">插图配图</el-button>
          <el-button class="item">广告设计</el-button>
          <el-button class="item itemright">更多....</el-button>
        </el-button-group>
      </div>
      <div class="bunner">
        <img :src="modulesdata.bunner" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../../assets/Bus'

export default {
  name: 'modulesHeader',
  methods: {
    tabSY (e) {
      let bunnertext = e.target.innerText
      this.modulesdata.bunner = this.message[bunnertext].bunner
      bus.$emit('themes', this.message[bunnertext].theme)
    }
  },
  data () {
    return {
      modulesdata: {
        bunner: 'static/bunner_bj.jpg'
      },
      message: {
        '首页': {
          bunner: 'static/bunner_bj.jpg',
          theme: [
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
          ]},
        '地产海报': {
          bunner: 'static/bunner_dichan.png',
          theme: [
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
          ]},
        '党建活动': {
          bunner: 'static/bunner_bj.jpg',
          theme: [
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
          ]},
        '电商淘宝': {
          bunner: 'static/bunner_dichan.png',
          theme: [
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
          ]},
        '活动海报': {
          bunner: 'static/bunner_bj.jpg',
          theme: [
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
          ]},
        '办公文档': {
          bunner: 'static/bunner_dichan.png',
          theme: [
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
          ]},
        '插图配图': {
          bunner: 'static/bunner_bj.jpg',
          theme: [
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
          ]},
        '广告设计': {
          bunner: 'static/bunner_dichan.png',
          theme: [
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
          ]},
        '更多....': {
          bunner: 'static/bunner_bj.jpg',
          theme: [
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
          ]}
      }
    }
  }
}
</script>

<style>
.modulesheader .wrapper {
  width: 1200px;
  margin: 0 auto;
}
.modulesheader .wrapper .navTop {
  width: 1200px;
  height: 40px;
  margin-bottom: 3px;
}
.modulesheader .wrapper .navTop .item {
  width: 134px;
}
.modulesheader .wrapper .navTop .itemlift {
  border-radius: 10px 0 0 0;
}
.modulesheader .wrapper .navTop .itemright {
  border-radius: 0 10px 0 0;
}
.modulesheader .wrapper .bunner img{
  width: 1197px;
  height: 200px;
}
</style>
