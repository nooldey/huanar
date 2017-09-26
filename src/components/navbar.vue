<template>
  <nav class="navbar">
    <template v-for="(route,idx) in routes">
      <router-link v-if="!route.meta || !route.meta.hidden" :key="idx" :to="route.path">
        {{route.name}}
      </router-link>
    </template>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    routes: Array
  }
})
export default class Navbar extends Vue {
  
}
</script>