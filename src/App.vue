<template>
  <div class="main-wrap">
    <img class="logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~@/style/reset';
</style>

