import Vue from 'vue'
import Router from 'vue-router'
// import Chart from '@/components/Chart'

Vue.use(Router)

// 按需加载路由组件
const pipe = r => () => import(`@/components/${r}`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: pipe('chart')
    },
    {
      path: '/add',
      name: 'New',
      component: pipe('add')
    }
  ]
})
