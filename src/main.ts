import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import * as filters from './extend/filters'

Vue.config.productionTip = false

/* register filters */
for (let k in filters) {
  let value: any = (<any>filters)[k]
  Vue.filter(k, value)
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
