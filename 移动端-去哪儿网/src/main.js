// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入elment-ui框架
import ElementUI from 'element-ui'

// 引入element-ui的css文件
import 'element-ui/lib/theme-chalk/index.css'

// 引入element-ui的js文件
import 'element-ui/lib/index'

// 样式重置，引入reset。css文件
import 'reset-css/reset.css'

// 引入fastclick库
import fastClick from 'fastclick'

// 安装element-ui插件
Vue.use(ElementUI)

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
