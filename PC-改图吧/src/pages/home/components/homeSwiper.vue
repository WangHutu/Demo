<template>
  <div class="homeSwiper">
    <div class="headerSearch">
      <div class="imgs">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in imgs" :key="item.id">
            <img class="swiperImg" :src="item.imgSrc" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="Search">
        <input class="headerSearchInput" v-model="input" placeholder="请输入标题、关键字、作品编号搜索" />
        <button type="button"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      input: '',
      imgs: [
        { id: 1, imgSrc: require('../../../assets/header_bj.jpg') },
        { id: 2, imgSrc: require('../../../assets/swiper2.jpg') },
        { id: 3, imgSrc: require('../../../assets/swiper3.jpg') }
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 2500
      }
    }
  },
  components: {}
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
}
.homeSwiper {
  height: 512px;
  width: 1500px;
  margin: 0 auto 300px auto;
}
.homeSwiper .headerSearch {
  width: 1500px;
  height: 512px;
  text-align: center;
  position: relative;
}
.homeSwiper .headerSearch .imgs .swiper-pagination {
  position: absolute;
  top: 280px;
}
.homeSwiper .headerSearch .imgs .swiper-pagination-bullet {
  background: #fff;
}
.homeSwiper .headerSearch .Search {
  width: 500px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -50px;
  text-align: center;
  line-height: 50px;
  z-index: 10;
}
.homeSwiper .headerSearch .Search .headerSearchInput {
  position: absolute;
  top: 20px;
  left: 0;
  margin-top: -20px;
  display: inline-block;
  width: 400px;
  height: 50px;
  border: none;
  padding-left: 10px;
}
.homeSwiper .headerSearch .Search button {
  display: inline-block;
  position: absolute;
  right: 0;
  height: 50px;
  background: url("../../../assets/search.png") no-repeat;
  background-size: 100% 100%;
  width: 100px;
  border: none;
  cursor: pointer;
}
</style>
