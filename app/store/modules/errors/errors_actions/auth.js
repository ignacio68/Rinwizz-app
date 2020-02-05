import i18n from '@locales'

// TODO: revisar la importación de constantes para ser utilizadas como funciones
// TODO: por el momento no se importan -> fake const!!
// import { AUTH_ERROR } from '@store/types/actions_types'

/**
 * Manejo de los errores de autenticación
 *
 * @param {String} errorCode Código de error de Firebase
 */
// TODO: Terminar de completar e internacionalizar

export function AUTH_ERROR({ commit }, errorCode) {
  console.log('Estoy en AUTH_ERROR')
  console.log('AUTH_ERROR es: ' + errorCode)
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
  commit('shared/SET_ERROR', true, { root: true })
}
