<template>
  <div class="main-wrap">
    <img class="logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue { 
}
</script>

<style lang="scss">
@import '~@/style/reset';
</style>

