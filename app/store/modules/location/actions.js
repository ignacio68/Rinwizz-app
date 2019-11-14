import * as locationService from '@services/location'

import {
  GET_CURRENT_POSITION,
  CURRENT_ADDRESS
} from '@store/types/actions_types'

export default {
  // options: (state, { ...defaults, ...options }),
  async [GET_CURRENT_POSITION]({ commit, dispatch }) {
    console.log('Estoy en GET_CURRENT_POSITION')
    try {
      const coordinates = await locationService.currentCoordinates()
      console.log('Las coordenadas son: ' + coordinates)
      commit('SET_USER_COORDS', coordinates)
    } catch (error) {
      dispatch('errors/LOCATION_ERROR', error.message, { root: true })
    }
  },
  async [CURRENT_ADDRESS]({ state, commit, dispatch }) {
    console.log('Estoy en CURRENT_ADDRESS')
    try {
      const coords = {}
      coords.lat = state.lat
      coords.lng = state.lng
      const address = await locationService.currentAddress(coords)
      console.log('La dirección es: ' + address)
      commit('SET_USER_ADDRESS', address)
    } catch (error) {
      dispatch('errors/LOCATION_ERROR', error.message, { root: true })
    }
  }
}
