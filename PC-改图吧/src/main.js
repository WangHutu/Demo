// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import axios from 'axios'

// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'

// 引入组件
import 'element-ui/lib/index'

// Vue.prototype.$axios = 'axios'
Vue.config.productionTip = false

// 安装element-ui插件
Vue.use(ElementUI)
// 安装 VueAwesomeSwiper
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
