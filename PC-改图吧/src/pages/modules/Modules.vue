<template>
<div>
  <modules-bar></modules-bar>
  <modules-header></modules-header>
  <flexbar v-if="flex"></flexbar>
  <modules-main></modules-main>
  <page></page>
  <bottombar></bottombar>
</div>
</template>

<script>
import modulesBar from '../components/modulesBar'
import modulesHeader from '../components/modulesHeader'
import modulesMain from '../components/modulesMain'
import flexbar from '../components/flexbar'
import bottombar from '../components/bottombar'
import page from '../components/page'

export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollY = window.scrollY
      if (scrollY >= 520) {
        this.flex = true
      } else {
        this.flex = false
      }
    }
  },
  name: 'Modules',
  data () {
    return {
      flex: false
    }
  },
  components: {
    modulesBar,
    modulesHeader,
    flexbar,
    modulesMain,
    bottombar,
    page
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
  background-color: #F4F5F5;
}
</style>
