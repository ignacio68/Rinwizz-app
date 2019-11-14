import {
  createDb,
  createDoc,
  replyDb,
  syncDb,
  changeDb,
  fetchDoc
} from '@services/database'

import {
  setConfig,
  setOptions,
  setDoc,
  setChangeOptions
} from '@utils/database'

import {
  CREATE_ALL_USERS_LOCAL_DB,
  CREATE_USER_LOCAL_DB,
  REPLY_USERS_DB,
  SYNC_USERS_DB,
  CHANGE_USER_DB,
  FETCH_USER,
  UPDATE_USER_LOCAL_DB,
  REMOVE_USER_LOCAL_DB
} from '@store/types/actions_types'

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
   * Crea la base de datos local del usuario
   *
   * @param {Object} newUser  Datos del usuario
   */
  async [CREATE_USER_LOCAL_DB]({ getters, commit }, newUser) {
    console.log('estoy en CREATE_USER_LOCAL_DB')
    commit('shared/CLEAR_ERROR', null, {
      root: true
    })
    try {
      const userDb = getters.USERS_LOCAL_DB
      const user = await setDoc(newUser)
      console.log('el user es: ' + JSON.stringify(user))
      // Creamos el documento del usuario
      await createDoc(userDb, user)
    } catch (error) {
      commit('shared/SET_ERROR', null, { root: true })
      console.log('CREATE_USER_LOCAL_DB error: ' + error.message)
    }
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
  },

  /**
   * Detecta los cambios en labase de datos local del usuario
   *
   * @param {} data
   */
  async [CHANGE_USER_DB]({ getters, commit, dispatch, rootGetters }) {
    console.log('CHANGE_USER_DB')
    try {
      const userId = rootGetters['user/USER_ID']
      const userDb = getters.USERS_LOCAL_DB
      const options = setChangeOptions(userId)
      const changeData = { db: userDb, options: options }
      await changeDb(changeData).then('change', change => {
        console.log('CHANGE_USER_DB: ' + change)
        dispatch('FETCH_USER')
      })
    } catch (error) {
      commit('shared/SET_ERROR', null, { root: true })
      console.log('CHANGE_USER_DB error: ' + error.message)
    }
  },

  /**
   * Recuperamos los datos del usuario de la base de datos local
   *
   * @param {}
   */
  async [FETCH_USER]({ getters, commit, __, rootGetters }) {
    commit('shared/CLEAR_ERROR', null, {
      root: true
    })
    try {
      const userId = rootGetters['user/USER_ID']
      const userDb = getters.USERS_LOCAL_DB
      const user = await fetchDoc(userDb, userId)
      // Guardamos los datos del usuario en caché
      commit('user/SET_USER', user, { root: true })
    } catch (error) {
      commit('shared/SET_ERROR', null, { root: true })
      console.log('FETCH_USER error: ' + error.message)
    }
  },

  /**
   *
   * @param {Object} updateUser  Actualiza el usuario de la base de datos local
   */
  // TODO: UTILIZAR USER/user - Revisar
  [UPDATE_USER_LOCAL_DB]: ({ getters }, updateUser) => {
    const usersLocalDb = getters.USERS_LOCAL_DB
    usersLocalDb.update({
      name: updateUser.name,
      location: updateUser.location
    })
  },

  /**
   * TODO: Revisarlo todo
   * Elimina el usuario de la base de datos local
   */
  [REMOVE_USER_LOCAL_DB]: ({ getters }, user) => {
    const usersLocalDb = getters.USERS_LOCAL_DB
    usersLocalDb.deleteDatabase(user)
  }
}
