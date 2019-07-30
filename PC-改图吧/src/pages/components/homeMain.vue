<template>
  <div>
    <main-header :bgcolor="bgcolor" :title="title"></main-header>
    <main-content :bgcolor="bgcolor" :theme="theme"></main-content>
  </div>
</template>

<script>
import mainHeader from './mainHeader'
import mainContent from './mainContent'

export default {
  name: 'homeMain',
  components: {
    mainHeader,
    mainContent
  },
  props: ['bgcolor', 'title', 'theme']
}
</script>

<style>

</style>
