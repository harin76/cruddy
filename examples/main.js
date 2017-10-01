import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Cruddy from '../src/index'
import locale from '../src/locale/lang/en-US'
import Home from './components/Home'
import store from './store'

Vue.use(VueRouter)
Vue.use(Cruddy, { locale,  store})

Vue.config.debug = true

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
