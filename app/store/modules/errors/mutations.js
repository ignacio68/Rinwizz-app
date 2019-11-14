import { SET_ERROR_MESSAGE } from '@store/types/mutations_types'
export default {
  /**
   * Actualiza errorMessage
   *
   * @param {void} state
   * @param {String} message
   */
  [SET_ERROR_MESSAGE]: (state, message) => {
    console.log('Estoy en SET_ERROR_MESSAGE y el error es: ' + message)
    state.errorMessage = message
  }
}
