import Vue from 'vue'
import Vuex from 'vuex'

import alerts from '@modules/alerts'
import auth from '@modules/auth'
import cloudStorage from '@modules/cloudStorage'
import errors from '@modules/errors'
import localDb from '@modules/localDb'
import usersLocalDb from '@modules/localDb/users'
import alertsLocalDb from '@modules/localDb/alerts'
import location from '@modules/location'
import navigator from '@modules/navigator'
import password from '@modules/password'
import shared from '@modules/shared'
import social from '@modules/social'
import user from '@modules/user'
import userDb from '@modules/userDb'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    alerts,
    auth,
    cloudStorage,
    errors,
    location,
    localDb,
    usersLocalDb,
    alertsLocalDb,
    navigator,
    password,
    shared,
    social,
    user,
    userDb
  }
})
