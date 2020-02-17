import { LOAD_NEW_USER, LOAD_USER } from '@store/types/actions_types'
// import { onAuthStateChange } from '@services/auth'
export default {
  /**
   * Create the database of the new user
   *
   * @param {object} user - new user data
   */
  async [LOAD_NEW_USER]({ commit, dispatch }, user) {
    console.log('LOAD_NEW_USER')
    commit('shared/CLEAR_ERROR', null, { root: true })
    // Create the users local database
    await dispatch('usersLocalDb/CREATE_ALL_USERS_LOCAL_DB', null, {
      root: true
    })
    // Create the user local database
    .then(async () => {
      await dispatch('userLocalDb/CREATE_USER_LOCAL_DB', user, { root: true })
    })
    // Reply the users local database wuith remote database
    .then(async () => {
      await dispatch('userLocalDb/REPLY_USERS_DB', null, { root: true })
    })
  },

  /**
   * Autoautenticación, el usuario ya está registrado
   *
   * @param {String} user - id y email del usuario
   */
  async [LOAD_USER]({ commit, dispatch }) {
    console.log('LOAD_USER')
    commit('shared/CLEAR_ERROR', null, { root: true })
    // await onAuthStateChange()
    //   .then(async user => {
    //     // console.log('user: ' + JSON.stringify(user))
    //     commit('SET_USER', user)
    // Recuperamos la base de datos de los usuarios
    await dispatch('userLocalDb/CREATE_ALL_USERS_LOCAL_DB', null, {
      root: true
    })
      // })
      .then(async () => {
        await dispatch('userLocalDb/FETCH_USER', null, { root: true })
        // dispatch('userLocalDb/CHANGE_USER_DB', null, {
        //   root: true
        // })
      })
      .then(async () => {
        await dispatch('userLocalDb/REPLY_USERS_DB', null, { root: true })
      })
      .catch(error => {
        console.log('LOAD_USER error: ' + error.message)
      })
  }
  // await onAuthStateChange()
  // .then(async user => {
  //   commit('user/SET_USER', user)
  //   // Recuperamos la base de datos de los usuarios
  //   await dispatch('userLocalDb/CREATE_ALL_USERS_LOCAL_DB', null, {
  //     root: true
  //   })
  //   dispatch('userLocalDb/FETCH_USER', null, { root: true })
  //   // dispatch('userLocalDb/CHANGE_USER_DB', null, {
  //   //   root: true
  //   // })
  //   await dispatch('userLocalDb/REPLY_USERS_DB', null, { root: true })
  //   // Recuperamos los datos del usuario
  //   // await dispatch('userLocalDb/FETCH_USER', null, { root: true })
  // })
  // .catch(error => {
  //   console.log('LOAD_USER error: ' + error)
  // })
}
