import {
  GET_USER_FOLLOWINGS,
  GET_USER_FOLLOWERS
} from '@/store/types/getters_types'

export default {
  [GET_USER_FOLLOWINGS]: state => {
    return state.usersLocalDb.followings
  },

  [GET_USER_FOLLOWERS]: state => {
    return state.usersLocalDb.followers
  }
}
