import AV from '@/extend/leancloud'
import { Module, MutationTree, ActionTree } from 'vuex'
import { Spend } from '../../types'

interface State {
    fee: Spend[]
}

const state: State = {
    fee: []
}

const mutations: MutationTree<State> = {
    "INIT_TIP": (status: State, list) => {
        status.fee = list
    },
    "PUSH_TIP": (status: State, item) => {
        status.fee.push(item)
    }
}

const actions: ActionTree<State, object> = {
    async initList({state,commit}) {
        const query = new AV.Query('spend')
        let list: Array<any> = []
        query.include('name')
        query.include('cost')
        query.include('createOn')
        await query.find().then((res:Array<any>) => {
            list = res.map(tip => tip.attributes)
        })
        await commit("INIT_TIP", list)
    },
    async addSpend({ state, dispatch }, item) {
        const vf = await state.fee.some(f => f.name === item.name && f.createOn === item.createOn)
        if (!vf) {
            await dispatch('uploadTip',item)
        } else {
            await Promise.reject('exist')
        }
    },
    async uploadTip({state,commit},item) {
        const TipObject = AV.Object.extend('spend')
        const tip = new TipObject()
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