import AV from '../../extend/leancloud'
import { Module, MutationTree, ActionTree } from 'vuex'

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

const mutations: MutationTree<Account> = {
    'SET_ACCOUNT': (status: Account, res) => {
        status.name = res.username
        status.email = res.email
        status.token = res.sessionToken
        localStorage.setItem('z-token',res._sessionToken)
        // localStorage.setItem('z-id',res._id)
    }
}

const actions: ActionTree<Account, object> = {
    async login({ state, commit }, o) {
        const res:any = await AV.User.logIn(o.name,o.password)
        await commit('SET_ACCOUNT',res)
        if (!res.emailVerified) {
            alert('为保护您的账户安全，请尽快完成邮箱验证')
        }
    },
    async register({ state, commit }, o) {
        const user = new AV.User()
        user.setUsername(o.name)
        user.setPassword(o.password)
        user.setEmail(o.email)
        const res:any = await user.signUp()
        await commit('SET_ACCOUNT',res)
    }
}

const auth: Module<Account, object> = {
    state,
    mutations,
    actions
}

export default auth