import { Module } from 'vuex'
import { Spend } from '../../types'

interface State {
    fee: Spend[]
}

const state: State = {
    fee: [
        {
            name: '手机话费',
            cost: 100,
            createOn: '2017-09-24'
        }
    ]
}

const spends: Module<State, object> = {
    state
}

export default spends