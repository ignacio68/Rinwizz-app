// TODO: Nativescript no admite PouchDb => CouchDb
import {
  createDb,
  replyDb,
  syncDb
} from '@/services/database'

import {
  setConfig,
  setOptions
} from '@utils/database'

import {
  CREATE_ALL_USERS_LOCAL_DB,
  REPLY_USERS_DB,
  SYNC_USERS_DB,
} from '@/store/types/actions_types'

export default {
  /**
   *  Crea la base de datos de todos los usuarios
   *
   * @param {}
   */
  async [CREATE_ALL_USERS_LOCAL_DB]({ commit }) {
    console.log('estoy en CREATE_ALL_USER_LOCAL_DB')
    commit('shared/CLEAR_ERROR', null, {
      root: true
    })
    await createDb('users', { auto_compaction: true }).then(userDb => {
      // Guardamos la base de datos en caché
      commit('SET_ALL_USERS_LOCAL_DB', userDb)
    })
  },

  /**
   * Replicamos la base de datos de usuarios para tenerla siempre actualizada
   *
   * @param {}
   */
  async [REPLY_USERS_DB]({ getters, commit, dispatch, rootGetters }) {
    commit('shared/CLEAR_ERROR', null, {
      root: true
    })

    const userId = rootGetters['user/USER_ID']
    const userDb = getters.USERS_LOCAL_DB
    const config = setConfig(userId, 'users')
    const options = setOptions(userId)
    const replyData = { db: userDb, config: config, options: options }
    // Replicamos y sincronizamos la base de datos
    await replyDb(replyData)
      .then(info => {
        console.log('REPLY_USERS_DB realizada: ' + JSON.stringify(info))
        const syncData = replyData
        dispatch('SYNC_USERS_DB', { syncData })
      })
      .catch(error => {
        commit('shared/SET_ERROR', null, { root: true })
        console.log('REPLY_ALERTS_DB error: ' + error.message)
      })
  },

  /**
   * Replicamos la base de datos de usuarios para tenerla siempre actualizada
   *
   * @param {Object} syncData
   */
  async [SYNC_USERS_DB]({ commit, dispatch }, { syncData }) {
    commit('shared/CLEAR_ERROR', null, {
      root: true
    })
    console.log('SYNC_USERS_DB preparada')
    await syncDb(syncData)
      .then(() => dispatch('FETCH_USER'))
      .catch(error => {
        commit('shared/SET_ERROR', null, { root: true })
        console.log('SYNC_USERS_DB error: ' + error.message)
      })
  }
}
