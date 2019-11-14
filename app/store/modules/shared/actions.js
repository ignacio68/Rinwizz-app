import { SET_PLATFORM } from '@store/types/actions_types'

export default {
  /**
   * Establece la plataforma en la que se ejecuta la app
   */
  [SET_PLATFORM]: ({ commit }) => {
    if (this.$ons.platform.isAndroid()) {
      const platform = 'md'
      commit('SET_PLATFORM', platform)
    } else if (this.$ons.platform.isIphone()) {
      const platform = 'ios'
      commit('SET_PLATFORM', platform)
    } else {
      const platform = 'web'
      commit('SET_PLATFORM', platform)
    }
  }
}
