import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

import Home from '@/components/home.vue'
import Login from '@/components/login.vue'
import Chart from '@/components/chart.vue'
import Add from '@/components/add.vue'

Vue.use(Router)

// 按需加载路由组件
// const pipe = (r: any) => () => import(`@/components/${r}`)

export const routes: RouteConfig[] = [
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/login',
    name: '登录-注册',
    component: Login,
    meta: { hidden: true }
  },
  {
    path: '/chart',
    name: '清单列表',
    component: Chart
  },
  {
    path: '/add',
    name: '添加记录',
    component: Add
  },
  {
    path: '/',
    redirect: '/home',
    meta: { hidden: true }
  }
]

export default new Router({
  routes: routes,
  // mode: 'history',
  // base: '/',
  linkActiveClass: 'nav_active'
})
