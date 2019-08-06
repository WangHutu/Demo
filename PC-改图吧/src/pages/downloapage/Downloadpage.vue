<template>
  <div>
    <flex-bar></flex-bar>
    <download-main></download-main>
  </div>
</template>

<script>
import flexBar from '../components/flexbar'
import downloadMain from '../components/downloadMain'
export default {
  name: 'Downloadpage',
  components: {
    flexBar,
    downloadMain
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
