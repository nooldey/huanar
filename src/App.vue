<template>
  <div class="main-wrap">
    <p class="logo">
      <img :src="require('@/assets/logo.png')">
      我的记账本，把握点滴消费
    </p>
    <navbar :routes='routes'></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import { routes } from '@/router'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data() {
    return {
      routes: routes
    }
  }
}
</script>


<style lang="scss">
@import '~@/style/base';
</style>

