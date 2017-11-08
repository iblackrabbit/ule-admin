Vue.config.productionTip = false

import Vue from 'vue'

import VueRouter from 'vue-router'
import router from './router/'
import login from './pages/login.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  router
}).$mount('#app')
