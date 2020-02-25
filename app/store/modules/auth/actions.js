import {
  signUp,
  sendEmailVerification,
  logIn,
  logOut,
  deleteUser,
  reauthenticateUser,
  facebookLogIn,
  googleLogIn,
  twitterLogIn
} from '@services/auth'

import { actionCodeSettings } from '@utils/auth'

import {
  SIGNUP_USER,
  LOGIN_USER,
  LOGOUT_USER,
  DELETE_USER,
  REAUTHENTICATE_USER,
  SIGNUP_SOCIAL
} from '@store/types/actions_types'

export default {
  /**
   * Nuevo usuario
   *
   * @param {Object} registeredUser - datos a añadir al nuevo usuario
   */

  // FIXME: desarrollar correctamente async y el catcher de errores.
  async [SIGNUP_USER]({ commit, dispatch }, newUserData) {
    console.log('Estoy en SIGNUP_USER')
    commit('shared/LOAD_ACTION', null, { root: true })
    commit('shared/CLEAR_ERROR', null, { root: true })

    const userSignUpData = newUserData

    await signUp(userSignUpData)
      // .then(async result => {
      //   console.log(`user: ${JSON.stringify(result)}`)
      //   // const newUser = await setUser(result)
      //   // Set the new user at the userStore
      //   // commit('user/SET_USER', result, { root: true })
      //   const user = result
      //   await dispatch('user/LOAD_NEW_USER', user, { root: true })
      //   // return result
      // })
      // // TODO: implementar CouchDb
      // // .then(
      // //   async  newUser => await dispatch('user/LOAD_NEW_USER',  result, { root: true })
      // // )
      // .then(async () => {
      //   // Enviamos el email de confirmación
      //   console.log('Enviamos el mensaje')
      //   // const actionCodeSettings = actionCodeSettings
      //   await sendEmailVerification(actionCodeSettings)
      //   commit('shared/LOAD_ACTION', true, { root: true })
      // })
      // .catch(error => {
      //   console.log('SIGNUP_USER error: ' + error.message)
      //   commit('shared/SET_ERROR', null, { root: true })
      //   dispatch('errors/AUTH_ERROR', error.code, { root: true })
      // })
    //   commit('shared/SET_ERROR', null, { root: true })
    //   dispatch('errors/AUTH_ERROR', 'auth/user-empty', { root: true })
    // }
  },

  /**
   * Log In de usuario existente
   *
   * @param {*} commit
   * @param {String} user
   */
  async [LOGIN_USER]({ commit, dispatch }, userData) {
    console.log('LOGIN_USER')
    commit('shared/CLEAR_ERROR', null, { root: true })

    logIn(userData)
      .then(user => {
        commit('user/SET_USER', user, { root: true })
        commit('shared/LOAD_ACTION', null, { root: true })
      })
      .catch(error => {
        console.log('logUserIn error: ' + error.message)
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
      })
  },

  /**
   * Log In con la red social elegida
   *
   * @param {*} providerName - social provider name
   */
  async [SIGNUP_SOCIAL] ({ commit, dispatch }, providerName) {
    commit('shared/CLEAR_ERROR', null, { root: true })
    const provider = providerName
    switch (provider) {
      case 'Facebook': {
        const newUser = await facebookLogIn()
        dispatch('user/LOAD_NEW_USER', newUser, { root: true })
        break
      }
      case 'Google': {
        const newUser = await googleLogIn()
        dispatch('user/LOAD_NEW_USER', newUser, { root: true })
        break
      }
      case 'Twitter': {
        const newUser = await twitterLogIn()
        dispatch('user/LOAD_NEW_USER', newUser, { root: true })
        break
      }
    }
  },

  /**
   * Log Out de Usuario
   *
   * @param {*} commit
   */
  async [LOGOUT_USER]({ commit, dispatch }) {
    commit('shared/LOAD_ACTION', null, { root: true })
    commit('shared/CLEAR_ERROR', null, { root: true })

    await logOut()
      .then(() => {
        commit('user/RESET_USER', null, { root: true })
        // commit('alerts/RESET_ALERTS', null, { root: true })
        console.log('LOGOUT_USER')
      })
      .then(commit('shared/LOAD_ACTION', true, { root: true }))
      .catch(error => {
        console.log('LOGOUT_USER error: ' + error.message)
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
      })
  },

  /**
   * Elimina el usuario
   */
  [DELETE_USER]: ({ _, commit, dispatch, rootGetters }) => {
    console.log('Estoy en deleteUser')
    commit('shared/LOAD_ACTION', null, { root: true })
    commit('shared/CLEAR_ERROR', null, { root: true })
    // const providerId = rootGetters.USER_PROVIDER_ID
    deleteUser()
      .then(() => {
        commit('user/RESET_USER', null, { root: true })
      })
      .catch(error => {
        console.log('DELETE_USER error: ' + error.message)
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
      })
  },

  /**
   * Reautenticación automática del usuario
   * Se utiliza para poder elimnar la cuenta de usuario
   */
  [REAUTHENTICATE_USER]: ({ commit, dispatch }) => {
    console.log('Estoy en reauthenticateUser')
    commit('shared/CLEAR_ERROR', null, { root: true })
    reauthenticateUser()
      .then(() => {
        dispatch('DELETE_FIREBASE_USER_ACCOUNT')
      })
      .catch(error => {
        console.log('REAUTHENTICATE_USER error: ' + error)
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
      })
  }
}
