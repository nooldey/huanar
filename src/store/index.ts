import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import spends from './modules/spends'

Vue.use(Vuex)

const store: Store<object> = new Vuex.Store({
    modules: {
        spends
    }
})

export default store