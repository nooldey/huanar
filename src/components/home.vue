<template>
  <div>
      <ul>
          <li>当前登录账户: {{username}}</li>
          <li>账户邮箱：{{email}}</li>
          <li>会话秘钥：{{token}}</li>
      </ul>
      <span class="z-btn" @click="clearCache">清除缓存</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'

@Component
export default class Chart extends Vue {
    /* store */
    @State(state => state.auth.name) username:string
    @State(state => state.auth.email) email:string
    @State(state => state.auth.token) token:string
    /* methods */
    clearCache() {
        localStorage.clear()
    }
}
</script>

