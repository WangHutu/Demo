<template>
  <div class="modulesmain">
    <div class="mainheader">
      <div class="headerleft">
        <span class="tabtext">智能排序</span>
        <span>热门下载</span>
        <span>最新作品</span>
      </div>
      <div class="headerright">
        <span>网站首页</span>
        <i class="el-icon-arrow-right"></i>
        <span>地产广告</span>
      </div>
    </div>
    <div class="maincontent">
      <div class="contentmain">
        <div class="pic" v-for="item in theme" :key="item.id">
          <img class="img" :src="item.imgSrc" alt />
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../../assets/Bus'

export default {
  name: 'modulesMain',
  mounted () {
    bus.$on('themes', msg => {
      console.log(msg)
      this.theme = msg
    })
  },
  data () {
    return {
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
      ]
    }
  }
}
</script>

<style>
.modulesmain {
  width: 1200px;
  margin: 10px auto 0;
}
.tabtext {
  color: #F9914F;
}
.modulesmain .mainheader {
  width: 100%;
  height: 50px;
  background: #fff;
}
.modulesmain .mainheader .headerleft {
  float: left;
  margin-left: 30px;
}
.modulesmain .mainheader .headerright {
  float: right;
  margin-right: 30px;
}
.modulesmain .mainheader .headerleft,
.modulesmain .mainheader .headerright {
  line-height: 50px;
  color: #333;
  cursor: pointer;
}
.modulesmain .maincontent {
  width:1200px;
  background: #fff;
}
.modulesmain .maincontent .contentmain{
  width: 1200px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
.modulesmain .maincontent .contentmain .pic {
  display: inline-block;
  width: 280px;
  text-align: center;
  background-color: #e9e9e9;
  border-radius: 20px;
  margin: 10px;
}
.modulesmain .maincontent .contentmain .pic .img {
  width: 85%;
  margin: 20px 0;
}
.modulesmain .maincontent .contentmain .pic p {
  line-height: 5px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
}
</style>
