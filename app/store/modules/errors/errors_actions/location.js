import i18n from '@locales'

/**
 * Manejo de los errores de geolocalización
 *
 * @param {String} errorCode Código de error de geolocalización
 */
// TODO: Terminar de completar e internacionalizar
export function LOCATION_ERROR({ commit }, errorCode) {
  console.log('Estoy en LOCATION_ERROR')
  console.log('LOCATION_ERROR es: ' + errorCode)
  switch (errorCode) {
    case 'auth/email-already-in-use': {
      const message = i18n.t('lang.errors.auth.emailAlreadyInUse')
      commit('SET_ERROR_MESSAGE', message)
      break
    }
  }
}
