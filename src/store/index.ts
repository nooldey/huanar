import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import auth from './modules/auth'
import spends from './modules/spends'

Vue.use(Vuex)

const store: Store<object> = new Vuex.Store({
    modules: {
        auth,
        spends
    }
})

export default store