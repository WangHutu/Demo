<template>
<div>
  <modules-bar></modules-bar>
  <modules-header></modules-header>
</div>
</template>

<script>
import modulesBar from '../components/modulesBar'
import modulesHeader from '../components/modulesHeader'

export default {
  name: 'Modules',
  components: {
    modulesBar,
    modulesHeader
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
