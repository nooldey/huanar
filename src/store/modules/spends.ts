import AV from '../../extend/leancloud'
import { Module, MutationTree, ActionTree } from 'vuex'
import { Spend } from '../../types'

interface State {
    fee: Spend[]
}

const state: State = {
    fee: []
}

const database: string = 'spend'

const mutations: MutationTree<State> = {
    "INIT_TIP": (status: State, list) => {
        status.fee = list
    },
    "PUSH_TIP": (status: State, item) => {
        status.fee.push(item)
    }
}

const actions: ActionTree<State, object> = {
    async initList({ state, commit }) {
        const query = new AV.Query(database)
        let list: Array<any> = []
        query.include('name')
        query.include('cost')
        query.include('createOn')
        await query.find().then((res: Array<any>) => {
            list = res.map(tip => tip.attributes)
        })
        await commit("INIT_TIP", list)
    },
    async addSpend({ state, dispatch }, item) {
        const vf = await state.fee.some(f => f.name === item.name && f.createOn === item.createOn)
        if (!vf) {
            await dispatch('uploadTip', item)
        } else {
            await Promise.reject('exist')
        }
    },
    async uploadTip({ state, commit }, item) {
        const SpendTip = AV.Object.extend(database)
        const tip = new SpendTip()
        // const owner = localStorage.getItem('z-id') || AV.User.current()
        const owner = AV.User.current()
        tip.set('owner', owner)
        await tip.save(item)
        await commit("PUSH_TIP", item)
    }
}


const spends: Module<State, object> = {
    state,
    mutations,
    actions
}

export default spends