<template>
  <div>
    <home-headerbar></home-headerbar>
    <home-swiper></home-swiper>
    <home-header></home-header>
    <module></module>  
    
  </div>
</template>

<script>

import homeHeaderbar from "./components/homeHeaderbar"
import homeSwiper from "./components/homeSwiper"
import homeHeader from "./components/homeHeader"
import module from "./components/module"

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    homeHeaderbar,
    homeSwiper,
    homeHeader,
    module
  }
};
</script>

<style>
  #app {
  }
</style>

