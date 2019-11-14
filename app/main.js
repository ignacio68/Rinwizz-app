import Vue from 'nativescript-vue'

import store from './store'

// Import languages
import i18n from './setup/i18n'

import VueDevtools from 'nativescript-vue-devtools'

// Add view components
import AppNavigator from './AppNavigator'

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
  i18n,
  store,
  render: h => h('frame', [h(AppNavigator)]),
}).$start()
