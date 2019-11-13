import Vue from 'nativescript-vue'

// Add view components
import AppNavigator from './AppNavigator'

import store from './store'
import VueDevtools from 'nativescript-vue-devtools'

//Add UI components
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

Vue.use(RadSideDrawer)
// Vue.component("RadSideDrawer", RadSideDrawer)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

new Vue({
  store,
  render: h => h('frame', [h(AppNavigator)])
}).$start()
