import {
  USERS_LOCAL_DB,
} from '@store/types/getters_types'

export default {
  [USERS_LOCAL_DB]: state => {
    return state.usersLocalDb
  },
}
