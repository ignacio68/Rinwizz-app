import { SET_USER_COORDS, SET_USER_ADDRESS } from '@store/types/mutations_types'

/**
 * Actualiza la información de la localización del usuario en el state
 */
export default {
  [SET_USER_COORDS]: (state, coords) => {
    console.log('Estoy en SET_USER_COORDS')
    console.log('La latitud es: ' + coords.latitude)
    state.lat = coords.latitude
    state.lng = coords.longitude
    state.acc = coords.accuracy
    state.alt = coords.altitude
    state.altAcc = coords.altitudeAccuracy
    state.head = coords.heading
    state.spd = coords.speed
    state.ts = coords.timestamp
  },
  [SET_USER_ADDRESS]: (state, address) => {
    console.log('Estoy en SET_USER_ADDRESS')
    state.address = address
  }
}
