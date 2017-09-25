import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

console.log('store:',store)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
