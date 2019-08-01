<template>
<div>
  <modules-bar></modules-bar>
  <modules-header></modules-header>
  <flexbar></flexbar>
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
  name: 'Modules',
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
html body {
  background-color: #F4F5F5;
}
html body li {
  list-style: none;
  text-decoration: none;
}
</style>
