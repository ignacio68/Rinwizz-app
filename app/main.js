/**
 * @file Rinwizz is an social media app with internationalization that emits alerts
 *
 * @copyright Ignacio López-Amor Pinillos 2019
 * @author Ignacio López-Amor Pinillos <ignaciolopezamor@gmail.com>
 * @license MIT
 * @version 0.3..0
 */

import Vue from 'nativescript-vue'

const Platform = require('platform')

import { store } from './store'

// Load theme
import './assets/scss/variables.scss'
import './assets/scss/global.scss'

// Import languages
import i18n from './setup/i18n'

import VueDevtools from 'nativescript-vue-devtools'

// Add NativeScript plugin
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'

// Add view components
import AppNavigator from './AppNavigator'

//Add UI components
// import 'nativescript-ui-sidedrawer/vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import RadListView from 'nativescript-ui-listview/vue'
// import Fab from '@nstudio/nativescript-floatingactionbutton'
Vue.registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
)

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Load TNSFonticon
TNSFontIcon.debug = true
TNSFontIcon.paths = {
  fa: './assets/css/fontawesome.min.css',
  far: './assets/css/regular.min.css',
  fas: './assets/css/solid.min.css',
  fab: './assets/css/brand.min.css'
}
TNSFontIcon.loadCss()
Vue.filter('fonticon', fonticon)

Vue.use(RadSideDrawer)
Vue.use(RadListView)
// Vue.use(Fab)
// Vue.component("RadSideDrawer", RadSideDrawer)

// Vue.config.productionTip = process.env.NODE_ENV === 'production'
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

new Vue({
  i18n,
  store,
  beforeCreate() {
    // Set the platform OS global variable
    Vue.prototype.IS_ANDROID = Platform.isAndroid
    Vue.prototype.IS_IOS = Platform.isIos

    // // Set app language
    const val = Platform.device.language
    const lang = val.slice(0, 2)
    if (lang) {
      // const lang = val.replace('-', '')
      // const lang = val.slice(0, 2)
      i18n.locale = lang
      console.log('El idioma del navegador es: ' + val)
      this.$store.commit('shared/SET_LANGUAGE', lang)
    } else {
      console.log('No se encuentra el idioma del navegador')
    }
  },
  render: h => h('frame', [h(AppNavigator)])
}).$start()
/* eslint-disable no-new */
