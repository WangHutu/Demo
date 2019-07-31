<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/home/Home'
import Modules from './pages/modules/Modules'
export default {
  name: 'App',
  watch: {
    '$route': function (to, from) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  components: {
    Home,
    Modules
  }
}

</script>

<style>

</style>
