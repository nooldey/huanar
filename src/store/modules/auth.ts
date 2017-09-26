import AV from '../../extend/leancloud'
import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'

interface Account {
    name: string;
    password: string;
    email?: string;
    token?: string;
}

const state: Account = {
    name: '',
    password: '',
    email: '',
    token: ''
}

/* const getters: GetterTree<Account, object> = {
    name: (status: Account): string => status.name,
    password: (status: Account): string => status.password,
    email: (status: Account): any => status.email,
    token: (status: Account): any => status.token,
} */

const mutations: MutationTree<Account> = {
    'SET_ACCOUNT': (status: Account, res) => {
        status.name = res.username
        status.email = res.email
        status.token = res.sessionToken
        localStorage.setItem('z-token', res.sessionToken)
        localStorage.setItem('z-id',res.id)
    }
}

const actions: ActionTree<Account, object> = {
    async login({ state, commit }, o) {
        /* TODO:单点登录 */
        const res: any = await AV.User.logIn(o.name, o.password)
        // await commit('SET_ACCOUNT', {res.attributes,})
        await commit('SET_ACCOUNT', {
            username: res.attributes.username,
            email: res.attributes.email,
            sessionToken: res._sessionToken,
            id: res.id
        })
        if (!res.emailVerified) {
            alert('为保护您的账户安全，请尽快完成邮箱验证')
        }
    },
    async register({ state, commit }, o) {
        const user = new AV.User()
        user.setUsername(o.name)
        user.setPassword(o.password)
        user.setEmail(o.email)
        const res: any = await user.signUp()
        console.log('reg',res)
        await commit('SET_ACCOUNT', {
            username: res.attributes.username,
            email: res.attributes.email,
            sessionToken: res._sessionToken,
            id: res.id
        })
    }
}

const auth: Module<Account, object> = {
    state,
    // getters,
    mutations,
    actions
}

export default auth