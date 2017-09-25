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
    <span class="z-btn" @click="submit">提交</span>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

interface Spend {
  name: string;
  cost: number;
  createOn: any;
}

@Component
export default class Addtip extends Vue {
  /* data */
  newTip: Spend = { name: '', cost: 0, createOn: '' }

  /* methods */
  submit(): void {
    const o = Object.assign({}, this.newTip)
    if (!o.name) {
      return alert('请填写消费项目')
    }
    if (!o.cost) {
      return alert('请填写消费金额')
    }
    if (!o.createOn) {
      return alert('请选择消费日期')
    }
    console.log(o)
  }
}
</script>