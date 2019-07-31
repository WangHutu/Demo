<template>
  <div class="homeHeader">
    <div class="navTop">
      <el-button-group @click.native="modulesHome">
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
    <div class="home">
      <div class="homBunner">
        <img src="../../assets/home_top.png" />
      </div>
      <div class="homeCard">
        <el-carousel :interval="4000" type="card" height="250px">
          <el-carousel-item v-for="item in homeCar" :key="item.id">
            <img :src="item.carSrc" style="width:100%;height:100%; borderRadius:20px;" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="bottom">
      <a href="javascript::" class="page">
        点击查看更多...
        <span class="el-icon-arrow-right"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
      homeCar: [
        { id: 1, carSrc: require('../../assets/img1.jpg') },
        { id: 2, carSrc: require('../../assets/img2.jpg') },
        { id: 3, carSrc: require('../../assets/img3.jpg') },
        { id: 4, carSrc: require('../../assets/img4.jpg') },
        { id: 5, carSrc: require('../../assets/img5.jpg') },
        { id: 6, carSrc: require('../../assets/img6.jpg') }
      ]
    }
  },
  methods: {
    modulesHome () {
      this.$router.push({name: 'Modules'})
    }
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
.homeHeader {
  width: 1200px;
  position: absolute;
  top: 400px;
  left: 50%;
  margin-left: -600px;
  z-index: 10;
}
.homeHeader .navTop {
  width: 1200px;
  height: 43px;
  border-radius: 30px 30px 0 0;
}
.homeHeader .navTop .item {
  width: 134px !important;
}
.homeHeader .navTop .itemlift {
  border-radius: 10px 0 0 0;
}
.homeHeader .navTop .itemright {
  border-radius: 0 10px 0 0;
}
.homeHeader .home {
  width: 1199px;
}
.homeHeader .home .homBunner {
  text-align: center;
  background-color: #3ec4f0;
}
.homeHeader .home .homeCard {
  border-radius: 15px;
  padding: auto 20px;
  background: url("../../assets/bunner_bj.jpg");
  background-size: 100% 100%;
}
.el-carousel__mask {
  border-radius: 20px;
}
.el-carousel__button {
  height: 4px !important;
  background-color: #fff !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.homeHeader .bottom {
  width: 100%;
  line-height: 70px;
  text-align: center;
  background-color: #fff;
}
.homeHeader .bottom .page {
  color: #333;
}
.homeHeader .bottom .page:hover {
  color: #f98722;
  margin-right: 4px;
}
</style>
