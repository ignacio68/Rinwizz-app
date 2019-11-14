/**
 * @file Rinwizz is an social media app with internationalization that emits alerts
 *
 * @copyright Ignacio López-Amor Pinillos 2019
 * @author Ignacio López-Amor Pinillos <ignaciolopezamor@gmail.com>
 * @license MIT
 * @version 0.1.1
 */

import Vue from 'nativescript-vue'

const Platform = require('platform')

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

// Vue.config.productionTip = process.env.NODE_ENV === 'production'
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

new Vue({
  i18n,
  store,
  beforeCreate() {
    // // Set app language
    const val = Platform.device.language
    const lang = val.slice(0, 2)
    if (lang) {
      // const lang = val.replace('-', '')
      // const lang = val.slice(0, 2)
      i18n.locale = lang
      console.log('El idioma del navegador es: ' + val)
      // this.$store.commit('shared/SET_LANGUAGE', lang)
    } else {
      console.log('No se encuentra el idioma del navegador')
    }
  },
  render: h => h('frame', [h(AppNavigator)])
}).$start()
/* eslint-disable no-new */
