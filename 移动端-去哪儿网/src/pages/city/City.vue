<template>
  <div>
    <city-topbar></city-topbar>
    <citySearch></citySearch>
    <cityList></cityList>
  </div>
</template>

<script>
import cityTopbar from './components/cityTopbar'
import citySearch from './components/citySearch'
import cityList from './components/cityList'

export default {
  name: 'City',
  components: {
    cityTopbar,
    citySearch,
    cityList
  }
}
</script>

<style lang="stylus" scoped>

</style>
