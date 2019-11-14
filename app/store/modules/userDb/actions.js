// TODO: eliminar, se utiliza la base de datos de PuchDB

import { firebaseDb } from '@services/firebase'
import {
  CREATE_USER_DB,
  USER_NAME_DB,
  UPDATE_USER_DB,
  DELETE_USER_DB
} from '@store/types/actions_types'

export default {
  /**
   * Creamos la base de datos del usuario
   *
   * @param {Object} newUser - datos del usuario a almacenar en la base de datos
   */
  // TODO: Convertir en async
  async [CREATE_USER_DB]({ commit, dispatch }, newUser) {
    commit('shared/CLEAR_ERROR', null, {
      root: true
    })
    console.log('Estoy en CREATE_USER_DB')
    console.log('el id del usuario es: ' + newUser.id)
    console.log('La fecha de creación es: ' + newUser.creationDate)
    try {
      firebaseDb
        .ref('users')
        .child(newUser.id)
        .set(newUser)
        .then(() => {
          // Añade el nombre de usuario a la base de datos
          dispatch('USER_NAME_DB', newUser.name)
          // Actualizamos los datos en Local Storage (LokiJS)
          // dispatch('localDb/CREATE_USER_LOCAL_DB', user, {
          //  root: true
          // })
          console.log(newUser.email)
        })
    } catch (error) {
      commit('shared/SET_ERROR', null, { root: true })
      console.log(error)
    }
  },

  /**
   *
   * Añade el nombre la base de datos /usersNames
   * TODO: REVISAR -> crea una nueva key con el valor userName
   *
   * @param {String} userName nombre del usuario a almacenar en la base de datos
   */
  async [USER_NAME_DB]({ commit }, userName) {
    console.log('Estoy en USER_NAME_DB')
    commit('shared/CLEAR_ERROR', null, { root: true })
    try {
      firebaseDb
        .ref('usersName/names')
        .update({
          userName
        })
        .then(() => {
          console.log(
            'Añadido el nombre de usuario a la base de datos "UserNames"'
          )
          // Comprobamos que se ha añadido a Firebase
          firebaseDb
            .ref('users')
            .on('child_added', snapshot => console.log(snapshot.val()))
        })
    } catch (error) {
      console.log('USER_NAME_DB error: ' + error)
      commit('shared/SET_ERROR', null, { root: true })
    }
  },

  /**
   *
   * Actualiza la base de datos del usuario
   *
   * @param {string} userId Id del usuario
   * @param {object} userData Datos a actualizar. Debe incluir dos parámetros:
   *                            - userId: Id del usuario
   *                            - userData: los datos que deben actualizarse
   */
  async [UPDATE_USER_DB]({ commit }, userData) {
    console.log(
      'Estoy en UPDATE_USER_DB, userID: ' +
        userData.userId +
        ' ,userData: ' +
        userData.data
    )
    commit('shared/CLEAR_ERROR', null, {
      root: true
    })
    try {
      const updateUserData = userData.data
      firebaseDb
        .ref('users/')
        .child(userData.userId)
        .update(updateUserData)
        .then(() => {
          console.log('Usuario actualizado!')
        })
    } catch (error) {
      commit('shared/SET_ERROR', null, { root: true })
      console.log(error)
    }
  },

  /**
   *
   * Elimina la base de datos del usuario
   *
   * @param {string} userId Id del usuario
   */
  async [DELETE_USER_DB]({ commit }, userId) {
    commit('shared/CLEAR_ERROR', null, {
      root: true
    })
    try {
      firebaseDb
        .ref('users/')
        .child(userId)
        .remove()
        .then(() => {
          console.log('Borrada base de datos de Firebase')
        })
    } catch (error) {
      commit('shared/SET_ERROR', null, { root: true })
      console.log(error)
    }
  }
}
