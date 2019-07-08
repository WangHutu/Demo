<template>
  <div>
    <home-headerbar></home-headerbar>
    <home-swiper></home-swiper>
    <home-header></home-header>
    <module></module>
    <module2></module2>
    <bottombar></bottombar>
  </div>
</template>

<script>

import homeHeaderbar from "./components/homeHeaderbar"
import homeSwiper from "./components/homeSwiper"
import homeHeader from "./components/homeHeader"
import module from "./components/module"
import module2 from "./components/module2"
import bottombar from "./components/bottombar"

export default {
  name: "Home",
  data() {
    return {
      bgcolor:{
        white:'#fff',
        gray:'#f4f4f5'
      },
      title:[
              "节日设计",
              "党建活动",
              "电商淘宝",
              "活动海报",
              "办公文档",
              "插图配图",
            ]
    };
  },
  components: {
    homeHeaderbar,
    homeSwiper,
    homeHeader,
    module,
    module2,
    bottombar
  }
};
</script>

<style>
  .white {
    background-color:#fff;
  }
  .gtay {
    background-color:#f4f4f5;
  }
</style>

