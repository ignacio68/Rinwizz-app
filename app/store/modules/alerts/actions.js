import { createDoc } from '@services/database'
import { setAlert } from '@utils/database'

import { CREATE_ALERT, LOAD_ALERTS } from '@store/types/actions_types'

export default {
  /**
   * Crea una alerta
   *
   * @param {Object} alertData - Datos de la alerta
   */
  async [CREATE_ALERT]({ _, commit, __, rootGetters }, alertData) {
    console.log('Estoy en createAlert')
    commit('shared/CLEAR_ERROR', null, { root: true })
    try {
      const userId = rootGetters['user/USER_ID']
      const alertsDb = rootGetters['alertsLocalDb/GET_ALERTS_LOCAL_DB']

      // Damos formato a la alerta
      let alert = setAlert(alertData)
      // console.log('alert: ' + JSON.stringify(alert))
      // for (let key in alert) {
      //   alert.user[key] = user[key]
      //   console.log(alert.user[key] + ':' + user[key])
      // }
      // console.log('alert user: ' + JSON.stringify(alert))

      // creamos el timeStamp
      const publishDate = Date.now()
      alert._id = userId + ':' + publishDate
      alert.creationDate = publishDate
      alert.endDate += publishDate
      // console.log('el alert completo es: ' + JSON.stringify(alert))

      // Creamos la alerta en la base de datos local
      await createDoc(alertsDb, alert)
    } catch (error) {
      commit('shared/SET_ERROR', null, { root: true })
      console.log('CREATE_ALERT error: ' + error)
    }
  },

  /**
   * Recuperamos las alertas de la base de datos
   *
   */
  async [LOAD_ALERTS]({ commit, dispatch }) {
    console.log('Estoy en LOAD_ALERTS')
    commit('shared/CLEAR_ERROR', null, { root: true })
    // Recuperamos las alertas de la base de datos
    await dispatch('alertsLocalDb/GET_ALERTS', null, {
      root: true
    })
      .then(alerts => {
        // console.log('Recuperando las alertas!!' + JSON.stringify(alerts))
        commit('SET_LOADED_ALERTS', alerts)
      })
      .catch(error => {
        commit('shared/SET_ERROR', null, { root: true })
        console.log('LOAD_ALERTS error: ' + error)
      })
  }
}
