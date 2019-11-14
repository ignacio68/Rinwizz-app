// TODO: revisar si es de utilidad
import pull from 'lodash/pull'

import {
  SET_ALL_USERS_LOCAL_DB,
  SET_USER_LOCAL_DB,
  SET_FOLLOWING,
  REMOVE_FOLLOWING,
  SET_FOLLOWER
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
  },

  /**
   * Crea la base de datos del usuario en caché
   *
   * @param {Object} localDb - base de datos del usuario
   */
  [SET_USER_LOCAL_DB]: (state, localDb) => {
    state.userLocalDb = localDb
  },

  /**
   * Añade un usuario a seguir
   *
   * @param {Array} userFollowing - nombres de los followings
   */
  [SET_FOLLOWING]: (state, userFollowing) => {
    state.userLocalDb.followings.push(userFollowing)
  },

  /**
   * Elimina un usuario que se sigue
   *
   * @param {Array} userFollowing - nombres de los followings
   */
  [REMOVE_FOLLOWING]: (state, userFollowing) => {
    state.userLocalDb.followings = pull(
      state.userLocalDb.followings,
      userFollowing
    )
  },

  /**
   * TODO: revisar
   * Añade un seguidoer del usuario
   *
   * @param {Array} userFollower - nombres de los followuers
   */
  [SET_FOLLOWER]: (state, userFollower) => {
    // Creamos la base de datos de followers
    state.userLocalDb.followers.push(userFollower)
  }
}
