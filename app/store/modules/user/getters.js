import {
  USER,
  USER_ID,
  USER_PROVIDER_ID,
  USER_IS_EMAIL_VERIFIED,
  USER_FOLLOWING,
  USER_IS_NEW
} from '@store/types/getters_types'

export default {
  [USER]: state => state.user,
  [USER_ID]: state => state.user._id,
  [USER_PROVIDER_ID]: state => state.user.providerID,
  [USER_IS_EMAIL_VERIFIED]: state => state.user.isEmailVerified,
  [USER_FOLLOWING]: state => state.user.following,
  [USER_IS_NEW]: state => state.user.isNewUser
}
