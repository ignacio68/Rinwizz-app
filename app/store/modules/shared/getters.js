import { LOADING, ERROR } from '@store/types/getters_types'

export default {
  [LOADING]: state => state.loading,
  [ERROR]: state => state.error
}
