import { facebookLogIn, googleLogIn, twitterLogIn } from '@services/auth'

import { SOCIAL_SIGNUP } from '@store/types/actions_types'


export default {
  /**
   * Acciones para autenticar segun la red social elegida
   * Posibilidad de separarlo en módulos para mejorar la claridad
   * del software
   *
   * @param {*} index - Índice del array correspondiente a la red social
   */
  async [SOCIAL_SIGNUP] ({ commit, dispatch }, provider) {
    commit('shared/CLEAR_ERROR', null, { root: true })
    // const socialButtons = state.socialButtons
    let nameProvider = provider
    console.log('la red social elegida es: ' + nameProvider)
    switch (nameProvider) {
      case 'Facebook': {
        const newUser = await facebookLogIn()
        dispatch('USER/LOAD_NEW_USER', newUser)
        break
      }
      case 'Google': {
        const newUser = await googleLogIn()
        dispatch('USER/LOAD_NEW_USER', newUser)
        break
      }
      case 'Twitter': {
        const newUser = await twitterLogIn()
        dispatch('USER/LOAD_NEW_USER', newUser)
        break
      }
    }
  }
}
