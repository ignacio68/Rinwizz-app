import { USER_LOCATION, USER_ADDRESS } from '@store/types/getters_types'

export default {
  [USER_LOCATION]: state => {
    return {
      lat: state.lat,
      lng: state.lng
    }
  },
  [USER_ADDRESS]: state => state.address
}
