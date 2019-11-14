import { firebaseAuth } from '@services/firebase'
import {
  RESET_PASSWORD,
  CONFIRM_RESET_PASSWORD,
  VERIFY_RESET_PASSWORD_CODE
} from '@store/types/actions_types'

export default {
  /**
   * Resetea el password del usuario
   *
   * @param {String} email - email del usuario
   */
  [RESET_PASSWORD]: ({ commit, dispatch }, email) => {
    console.log('Estoy en RESET_PASSWORD')
    commit('shared/CLEAR_ERROR', null, { root: true })
    firebaseAuth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('enviado password al email: ' + email)
      })
      .catch(error => {
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
        console.log('error en RESET_PASSWORD: ' + error)
      })
  },

  /**
   * Confirmación del reseteo del password
   *
   * @param {String} code - codigo para poder resetear
   * @param {String} password - nuevo password
   */
  // TODO: Añadir los código de errores en locales
  [CONFIRM_RESET_PASSWORD]: ({ commit, dispatch }, { code, password }) => {
    console.log('Estoy en CONFIRM_RESET_PASSWORD')
    commit('shared/CLEAR_ERROR', null, { root: true })
    firebaseAuth()
      .confirmPasswordReset(code, password)
      .then(() => {
        console.log('Confirmado el reseteo del password')
      })
      .catch(error => {
        console.log('CONFIRM_RESET_PASSWORD error: ' + error.message)
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
      })
  },

  /**
   * Verifica que el código de reseteo es válido
   *
   * @param {String} code Código de verificación
   */
  // TODO: Añadir los código de errores en locales
  [VERIFY_RESET_PASSWORD_CODE]: ({ commit, dispatch }, code) => {
    console.log('Estoy en VERIFY_RESET_PASSWORD_CODE')
    commit('shared/CLEAR_ERROR', null, { root: true })
    firebaseAuth()
      .verifyPasswordResetCode(code)
      .then(() => {
        console.log('verificado el código de reseteo del password')
      })
      .catch(error => {
        console.log('VERIFY_RESET_PASSWORD_CODE error: ' + error.message)
        commit('shared/SET_ERROR', null, { root: true })
        dispatch('errors/AUTH_ERROR', error.code, { root: true })
      })
  }
}
