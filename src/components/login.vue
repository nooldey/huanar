<template>
    <section class="form">
        <p>
            <label>用户名：</label>
            <input type="text" v-model="username">
        </p>
        <p>
            <label>密码：</label>
            <input type="password" v-model="password">
        </p>
        <p v-show="current=='regist'">
            <label>邮箱：</label>
            <input type="text" v-model="email">
        </p>
        <p>
            <span v-show="current=='login'" class="z-btn info" @click="submit">登录</span>
            <span v-show="current=='regist'" class="z-btn info" @click="reg">注册</span>
        </p>
        <p class="register">
            <a v-show="current=='login'" href="javascript:;" @click="current = 'regist'">未注册？创建一个用户</a>
            <a v-show="current=='regist'" href="javascript:;" @click="current = 'login'">已有账户？去登陆</a>
        </p>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State } from 'vuex-class'
import { handleErr } from '../extend/utils'

@Component
export default class Auth extends Vue {
    /* data */
    username: string = ''
    password: string = ''
    email: string = ''
    current: string = 'login'

    /* store */
    @State(state => state.auth.token) token: string
    @Action('login') login: Function
    @Action('register') register: Function

    /* lifecycle */
    created() {
        // 读取Vue的扩展属性用法范例：
        /* const vm:any = Vue.prototype;
        console.log('global:',vm.$global) */

        let tk = localStorage.getItem('z-token')
        if (tk) {
            this.$router.push('/record')
        }
    }

    /* methods */
    submit(): void {
        if (!this.username || this.username.length < 6) {
            return alert('用户名格式错误')
        }
        if (!this.password || this.password.length < 6) {
            return alert('密码格式错误')
        }
        const o = {
            name: this.username,
            password: this.password
        }
        this.login(o).then(() => {
            this.$router.push('/record')
        }).catch((err: any) => {
            handleErr(err)
            // console.log('Login Error: ', JSON.stringify(err))
        })
    }
    reg(): void {
        if (!this.username || !this.password || !this.email) {
            return alert('请填写完整注册信息')
        }
        if (this.username.length < 6) {
            return alert('用户名格式错误')
        }
        if (!/\w{6,16}$/.test(this.password)) {
            return alert('密码格式错误')
        }
        if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(this.email)) {
            return alert('电子邮箱地址格式错误')
        }

        const o = {
            name: this.username,
            password: this.password,
            email: this.email
        }
        this.register(o).then(() => {
            this.$router.push('/record')
        }).catch((err: any) => {
            handleErr(err)
            // console.log('Regist Error: ', JSON.stringify(err))
        })
    }
}
</script>

<style lang="scss" scoped>
.form {
    label {
        display: inline-block;
        width: 4em;
    }
    .register {
        width: 90%;
        margin-top: 20px;
        text-align: right;
        font-size: 13px;
        color: #ccc;
    }
}
</style>

