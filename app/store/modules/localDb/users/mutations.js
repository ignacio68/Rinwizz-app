import {
  SET_ALL_USERS_LOCAL_DB,
} from '@store/types/mutations_types'

export default {
  /**
   * Crea la base de datos de usuarios en caché
   *
   * @param {Object} localDb - base de datos de usuarios
   */
  [SET_ALL_USERS_LOCAL_DB]: (state, localDb) => {
    state.usersLocalDb = localDb
    console.log('SET_ALL_USERS_LOCAL_DB: ' + JSON.stringify(state.usersLocalDb))
  }
}
