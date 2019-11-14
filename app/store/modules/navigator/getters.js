import { PAGE_STACK, OPTIONS, INDEX } from '@store/types/getters_types'

export default {
  [PAGE_STACK]: state => state.stack,

  [OPTIONS]: state => state.options,

  [INDEX]: state => state.index
}
