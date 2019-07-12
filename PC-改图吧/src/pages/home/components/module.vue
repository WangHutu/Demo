<template>
  <div>
    <module-header :bgcolor="bgcolor" :title="title"></module-header>
    <module-content :bgcolor="bgcolor" :theme="theme"></module-content>
  </div>
</template>

<script>
import moduleHeader from './moduleHeader'
import moduleContent from './moduleContent'

export default {
  name: 'module',
  components: {
    moduleHeader,
    moduleContent
  },
  props: ['bgcolor', 'title', 'theme']
}
</script>

<style>

</style>
