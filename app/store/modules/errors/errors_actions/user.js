import i18n from '@locales'

// TODO: revisar la importación de constantes para ser utilizadas como funciones
// TODO: FAKE CONST!!!
// import { USER_ERROR } from '@store/types/actions_types'

// export default {
/**
 * Manejo de los errores de usuario
 *
 * @param {String} errorCode Código de error de Firebase
 */

// TODO: solo sirve para comprobar el manejo de errores
// TODO: completar e internacionalizar con los errores de usuario

export function USER_ERROR({ commit }, errorCode) {
  console.log('Estoy en USER_ERROR')
  console.log('USER_ERROR es: ' + errorCode)
  switch (errorCode) {
    case 'auth/email-already-in-use': {
      const message = i18n.t('lang.errors.auth.emailAlreadyInUse')
      commit('SET_ERROR_MESSAGE', message)
      break
    }
    case 'auth/invalid-email': {
      const message = i18n.t('lang.errors.auth.invalidEmail')
      commit('SET_ERROR_MESSAGE', message)
      break
    }
    case 'auth/weak-password': {
      const message = i18n.t('lang.errors.auth.weakPassword')
      // const message = 'email no válido'
      commit('SET_ERROR_MESSAGE', message)
      break
    }
    case 'auth/user-empty': {
      const message = i18n.t('lang.errors.auth.userEmpty')
      commit('SET_ERROR_MESSAGE', message)
      break
    }
    case 'auth/user-disabled': {
      const message = i18n.t('lang.errors.auth.userDisabled')
      commit('SET_ERROR_MESSAGE', message)
      break
    }
    case 'auth/user-not-found': {
      const message = i18n.t('lang.errors.auth.userNotFound')
      commit('SET_ERROR_MESSAGE', message)
      break
    }
    case 'auth/wrong-password': {
      const message = i18n.t('lang.errors.auth.wrongPassword')
      commit('SET_ERROR_MESSAGE', message)
      break
    }
    default: {
      const message = i18n.t('lang.errors.auth.internalError')
      commit('SET_ERROR_MESSAGE', message)
    }
  }
  commit('shared/setError', true, { root: true })
}
