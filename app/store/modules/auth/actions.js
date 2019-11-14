import {
  signUp,
  sendEmailVerification,
  logIn,
  logOut,
  deleteUser,
  reauthenticateUser
} from '@services/firebase'

import {
  SIGNUP_USER,
  LOGIN_USER,
  LOGOUT_USER,
  DELETE_USER,
  REAUTHENTICATE_USER
} from '@store/types/actions_types'

export default {
  /**
   * Nuevo usuario
   *
   * @param {Object} registeredUser - datos a añadir al nuevo usuario
   */

  // FIXME: desarrollar correctamente async y el catcher de errores.
  async [SIGNUP_USER]({ state, commit, dispatch }, userData) {
    console.log('Estoy en SIGNUP_USER')
    commit('shared/LOAD_ACTION', null, { root: true })
    commit('shared/CLEAR_ERROR', null, { root: true })

    signUp(userData)
      .then(user => {
        const newUser = {
          _id: user.uid,
          email: user.email,
          name: userData.name,
          phone: '',
          isVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          // TODO: solo para producción
          avatar:
            'https://firebasestorage.googleapis.com/v0/b/rinwizz-app.appspot.com/o/pwqhMnXx8ZMN06BeobDxJOZ5kDC2%2Favatar%2FpwqhMnXx8ZMN06BeobDxJOZ5kDC2..jpg?alt=media&token=8e64b798-eb08-46ec-a794-5d658e994301',
          providerId: user.providerId,
          creationDate: user.metadata.creationTime,
          // creationDate: user.createdAt,
          // lastSignInDate: user.lastLoginAt
          lastSignInDate: user.metadata.lastSignInTime
        }
        commit('user/SET_USER', newUser, { root: true })
        return newUser
      })
      .then(
        async user => await dispatch('user/LOAD_NEW_USER', user, { root: true })
      )
      .then(async () => {
        // Enviamos el email de confirmación
        console.log('Enviamos el mensaje')
        const actionCodeSettings = state.actionCodeSettings
        await sendEmailVerification(actionCodeSettings)
      })
      .then(() => {
        commit('user/IS_NEW_USER', true, { root: true })
        commit('shared/LOAD_ACTION', true, { root: true })
      })
      .catch(error => {
        console.log('SIGNUP_USER error: ' + error.message)
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
      })
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
    commit('shared/LOAD_ACTION', null, { root: true })
    commit('shared/CLEAR_ERROR', null, { root: true })

    logIn(userData)
      .then(user => {
        commit('user/SET_USER', user, { root: true })
        commit('shared/LOAD_ACTION', true, { root: true })
      })
      .catch(error => {
        console.log('logUserIn error: ' + error.message)
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
      })
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
        commit('alerts/RESET_ALERTS', null, { root: true })
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
