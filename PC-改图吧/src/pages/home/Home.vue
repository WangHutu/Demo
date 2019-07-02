<template>
  <div>
    <home-headerbar></home-headerbar>
    <home-swiper></home-swiper>
    <home-header></home-header>
  </div>
</template>

<script>

import homeHeaderbar from "./components/homeHeaderbar";
import homeSwiper from "./components/homeSwiper";
import homeHeader from "./components/homeHeader"
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    homeHeaderbar,
    homeSwiper,
    homeHeader
  }
};
</script>

<style>
  #app {
  }
</style>

