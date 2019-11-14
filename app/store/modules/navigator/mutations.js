import {
  PUSH,
  POP,
  REPLACE,
  RESET,
  OPTIONS,
  SET
} from '@store/types/mutations_types'

export default {
  /**
   * Añade la página al final de la  pila
   *
   * @param {String} page
   */
  [PUSH]: (state, page) => {
    state.stack.push(page)
  },

  /**
   * Elimina la última página añadida a la pila y la devuelve
   *
   * @param {String} state
   */
  [POP]: state => {
    if (state.stack.length > 1) {
      state.stack.pop()
    }
  },

  /**
   * remplaza una página por otra
   * evitamos que vuelva a cargar
   * las páginas según vamos navegando
   * hacia adelante y hacia atrás
   *
   * @param {String} page
   */
  [REPLACE]: (state, page) => {
    state.stack.pop()
    state.stack.push(page)
  },

  /**
   * Resetea la página
   *
   * @param {String} page
   */
  [RESET]: (state, page) => {
    state.stack = [page || state.stack[0]]
  },

  [OPTIONS]: (state, newOptions = {}) => {
    state.options = newOptions
  },

  /**
   * Tabbar
   *
   * @param {Number} index
   */
  [SET]: (state, index) => {
    state.index = index
  }
}
