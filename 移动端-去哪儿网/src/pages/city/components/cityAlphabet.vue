<template>
  <ul class="list">
    <li class="item" :ref="item" v-for="item in letters" :key="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      {{item}}
    </li>
  </ul>
</template>

<script>
import bus from '../../../Bus/Bus'
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      bus.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 86
        const index = Math.floor((touchY - startY) / 16)
        if (index >= 0 && index < this.letters.length) {
          bus.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
  position: absolute
  right: 0
  top: 5rem
  bottom: 0
  width: 1.25rem
  display: flex
  flex-direction: column
  justify-content: center
  .item
    lint-height: 1.375rem
    text-align: center
    color: $bgColor
</style>
