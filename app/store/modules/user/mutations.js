import {
  SET_USER,
  RESET_USER,
  UPDATE_USER,
  IS_NEW_USER
} from '@store/types/mutations_types'

export default {
  /**
   * Crea un nuevo usuario
   *
   * @param {*} state
   * @param {object} newUser - Datos del nuevo usuario
   */
  [SET_USER]: (state, newUser) => {
    // Si el usuario proviene de Firebase cambiamos uid por _id
    if (newUser.uid) {
      newUser._id = newUser.uid
      state.user = newUser
      // console.log('mutation SET_USER' + JSON.stringify(state.user))
      // state.user = { ...state.user, newUser }
    } else {
      state.user = newUser
      // console.log('mutation SET_USER' + JSON.stringify(state.user))
      // state.user = { ...state.user, newUser }
    }
  },
  /**
   * Resetea el usuario
   *
   * @param {*} state
   */
  [RESET_USER]: state => {
    state.user = null
  },
  /**
   * Actualiza los datos del usuario
   *
   * @param {*} state
   * @param {object} userData - Datos a añadir a los del usuario
   */
  [UPDATE_USER]: (state, userData) => {
    console.log('Estoy UPDATE_USER')
    const user = state.user
    const updatedUser = { ...user, ...userData }
    state.user = updatedUser
  },
  /**
   * Logged the user
   *
   * @param {boolean} isNewUser
   */
  [IS_NEW_USER]: (state, isNewUser) => {
    state.isNewUser = isNewUser
  }
}
