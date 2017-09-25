import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

import Chart from '@/components/chart.vue'
import Add from '@/components/add.vue'

Vue.use(Router)

// 按需加载路由组件
// const pipe = (r: any) => () => import(`@/components/${r}`)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Chart
  },
  {
    path: '/add',
    name: 'New',
    component: Add
  }
]


export default new Router({
  routes: routes
})
