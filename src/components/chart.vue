<template>
  <div class="hello">
    <h1>消费总览</h1>
    <!-- 昨日消费总览 -->
    <ul>
      <li v-for="(item,idx) in list" :key="idx">{{item.name}}：{{item.cost}}</li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
.hello {
  h1 {
    color: #0088bb;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'
import { Spend } from '../types'

@Component
export default class Chart extends Vue {
   @State(state => state.fee) list: Spend[]
}
</script>

