<template>
  <section class="form">
    <p>
      <label>名称：</label>
      <input type="text" v-model="newTip.name">
    </p>
    <p>
      <label>费用：</label>
      <input type="number" v-model="newTip.cost">
    </p>
    <p>
      <label>时间：</label>
      <input type="date" v-model="newTip.createOn">
    </p>
    <p>
      <span class="z-btn info" @click="submit">提交</span>
      <router-link class="z-btn" to="/">返回列表</router-link>
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action } from 'vuex-class'
import { Spend } from '../types'

@Component
export default class Addtip extends Vue {
  /* data */
  newTip: Spend = { name: '', cost: 0, createOn: '' }

  /* store-actions */
  @Action('addSpend') pushTip:Function
  /* methods */
  submit(): void {
    const o = Object.assign({}, this.newTip)
    if (!o.name) {
      return alert('请填写消费内容')
    }
    if (!o.cost) {
      return alert('请填写消费金额')
    }
    if (!o.createOn) {
      return alert('请选择消费日期')
    }
    this.pushTip(o).then(() => {
      this.newTip = { name: '', cost: 0, createOn: '' }
    }).catch(() => {
      alert("添加失败，该条目已存在")
    })
  }
}
</script>