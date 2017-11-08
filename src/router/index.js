import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Goods from '../pages/goods.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
      redirect: '/login',
      name: 'login',
      children: [{
        path: '/login',
        component: Login
      }]
    },
    {
      path: '/reg',
      component: Reg,
      name: 'reg'
    },
    {
      path: '/goods',
      component: Goods,
      name: 'goods'
    }
  ]
})
