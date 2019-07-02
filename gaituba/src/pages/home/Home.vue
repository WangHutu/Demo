<template>
  <div>
    <home-navbar></home-navbar>
    <page-header></page-header>
    <page-home></page-home>
  </div>
</template>

<script>

import homeNavbar from "./components/homeNavbar";
import pageHeader from "./components/pageHeader";
import pageHome from "./components/pageHome"
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    homeNavbar,
    pageHeader,
    pageHome
  }
};
</script>

<style>
  #app {
  }
</style>

