import { LOADING, ERROR, GET_LANG } from '@/store/types/getters_types'

export default {
  [LOADING]: state => state.loading,
  [ERROR]: state => state.error,
  [GET_LANG]: state => state.lang
}
