import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import spends from './modules/spends'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store: Store<object> = new Vuex.Store({
    strict: debug,
    modules: {
        spends
    }
})

if (module.hot) {
    /* 使actions和mutations 成为热重载模块 */
    module.hot.accept(['./modules/spends'], () => {
        const spendsHot = require('./modules/spends').default

        store.hotUpdate({
            modules: {
                spends: spendsHot
            }
        })
    })
}

export default store