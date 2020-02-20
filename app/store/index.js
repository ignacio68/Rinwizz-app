import Vue from 'vue'
import Vuex from 'vuex'

import localStorage from 'nativescript-localstorage'

// import alerts from './modules/alerts'
import auth from './modules/auth'
// import cloudStorage from './modules/cloudStorage'
import errors from './modules/errors'
// import localDb from './modules/localDb'
import userLocalDb from './modules/localDb/user'
import usersLocalDb from './modules/localDb/users'
// import alertsLocalDb from './modules/localDb/alerts'
// import location from './modules/location'
// import password from './modules/password'
import shared from './modules/shared'
import user from './modules/user'
// import userDb from './modules/userDb'

Vue.use(Vuex)

// © Gabriel Cuenca Moncín
const NSVuexPersistent = store => {
  // Init hook.
  let storageStr = localStorage.getItem('ns-vuex-persistent')
  if (storageStr) {
    store.replaceState(JSON.parse(storageStr))
  }
  store.subscribe((mutation, state) => {
    //  Subscribe hook.
    localStorage.setItem('ns-vuex-persistent', JSON.stringify(state))
  })
}

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    //   alerts,
    auth,
    //   cloudStorage,
    errors,
    //   location,
    //   localDb,
    userLocalDb,
    usersLocalDb,
    //   alertsLocalDb,
    //   password,
    shared,
    user,
    //   userDb
  },
  plugins: [NSVuexPersistent]
})
