import { GET_ALERTS } from '@store/types/getters_types'

export default {
  [GET_ALERTS]: state => {
    console.log('Estoy en GET_ALERTS')
    // console.log(state.loadedAlerts)
    // Ordenamos las alertas por la fecha de finde alerta mas cercana en el tiempo
    // return state.loadedAlerts.sort((alertA, alertB) => {
    //   return alertA.endDate < alertB.endDate
    // })
    return state.loadedAlerts
  }
}
