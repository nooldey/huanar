import { Module,MutationTree,ActionTree } from 'vuex'
import { Spend } from '../../types'

interface State {
    fee: Spend[]
}

const state: State = {
    fee: []
}

const mutations: MutationTree<State> = {
    "PUSH_TIP": (status: State, item) => {
        status.fee.push(item)
    }
}

const actions: ActionTree<State,object> = {
    addSpend({state,commit},item) {
        return new Promise((resolve,reject) => {
            const vf = state.fee.some(f => f.name===item.name&&f.createOn===item.createOn)
            if (!vf) {
                commit("PUSH_TIP",item)
                resolve()
            } else {
                reject('exist')
            }
        })
    }
}


const spends: Module<State, object> = {
    state,
    mutations,
    actions
}

export default spends