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
  components: {
    Home,
    Modules
  }
}

</script>

<style>

</style>
