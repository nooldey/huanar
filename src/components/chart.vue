<template>
  <div class="hello">
    <h1>
      <span>消费总览</span>
      <router-link class="go" to="/add">添加记录</router-link>
    </h1>
    <!-- 昨日消费总览 -->
    <ul>
      <li class="title grid">
        <span v-for="(tab,idx) in tabs" :key="idx">
          {{ tab }}
        </span>
      </li>
      <li class="grid" v-for="(item,idx) in list" :key="idx">
        <span>{{item.name}}</span>
        <span>{{item.cost | money}}</span>
        <span>{{item.createOn | date}}</span>
      </li>
      <li v-if="list.length<1">暂无消费记录</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.hello {
  margin-top: 25px;
  padding: 20px;
}

h1 {
  display: flex;
  align-items: center;
  span {
    flex: 1;
    text-align: center;
  }
  a {
    flex: none;
    font-size: 14px;
  }
}

ul {
  padding: 15px 0;
  .title {
    font-size: 15px;
    font-weight: 600;
    color: #0088dd;
  }
  /* border */
  li {
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: #aaa;
    &:first-child {
      border-top: 1px solid #aaa;
    }
    span {
      border-right: 1px solid #aaa;
      &:last-child {
        border: none;
      }
    }
  }
}

.grid {
  span {
    flex: 1;
    height: 100%;
    padding: 8px 5px;
    display: block;
    text-align: left;
  }
}
</style>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'
import { Spend } from '../types'

@Component
export default class Chart extends Vue {
  /* data */
  tabs: Array<string> = ['花费', '金额', '时间']
  /* store */
  @State(state => state.spends.fee) list: Spend[]
  @Action('initList') getList: Function
  /* lifecycle */
  created() {
    this.getList()
  }
}
</script>

