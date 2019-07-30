import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'
import Home from '../pages/home/Home'
import Modules from '../pages/modules/Modules'
import modulesMain from '../pages/components/modulesMain'

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
      component: Modules,
      children: [{
        path: '/modules/:id',
        name: 'modulesMain',
        component: modulesMain
      }]
    }
  ]
})
