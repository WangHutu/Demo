<template>
  <div>
    <city-topbar></city-topbar>
    <city-search></city-search>
    <city-list :cities='cities' :hot='hotCities'></city-list>
    <city-alphabet :cities='cities'></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import cityTopbar from './components/cityTopbar'
import citySearch from './components/citySearch'
import cityList from './components/cityList'
import cityAlphabet from './components/cityAlphabet'

export default {
  name: 'City',
  components: {
    cityTopbar,
    citySearch,
    cityList,
    cityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
