import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'
import Home from '../pages/home/Home'
import Modules from '../pages/modules/Modules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/modules',
      name: 'Modules',
      component: Modules
    }
  ]
})
