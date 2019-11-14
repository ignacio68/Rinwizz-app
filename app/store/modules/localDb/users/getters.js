import {
  USERS_LOCAL_DB,
  GET_USER_FOLLOWINGS,
  GET_USER_FOLLOWERS
} from '@store/types/getters_types'

export default {
  [USERS_LOCAL_DB]: state => {
    return state.usersLocalDb
  },

  [GET_USER_FOLLOWINGS]: state => {
    return state.usersLocalDb.followings
  },

  [GET_USER_FOLLOWERS]: state => {
    return state.usersLocalDb.followers
  }
}
