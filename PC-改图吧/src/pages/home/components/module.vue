<template>
  <div>
    <module-header :typec="type" :title="title"></module-header>
    <module-content :typec="type" :theme="theme"></module-content>
  </div>
</template>

<script>
import moduleHeader from "./moduleHeader";
import moduleContent from "./moduleContent";

export default {
  name: "module",
  components: {
    moduleHeader,
    moduleContent
  },
  props:['type','title','theme']
};
</script>

<style>

</style>

