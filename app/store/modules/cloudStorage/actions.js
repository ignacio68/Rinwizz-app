// TODO: convertirlo en servicio
import { storage } from '@services/firebase'

import { PUT_FILE } from '@store/types/actions_types'

export default {
  /**
   * Sube al la nube la imágen del usuario
   *
   * @param {string} userId - id del usuario
   * @param {string} file - archivo a almacenar
   * @param {string} metadata - metadatos del archivo
   *
   */
  [PUT_FILE]: ({ commit }, fileData) => {
    commit('shared/CLEAR_ERROR', null, { root: true })
    const fileName = fileData.avatar.name
    const ext = fileName.slice(fileName.lastIndexOf('.'))
    console.log('Estoy en PUT_FILE y el file es: ' + fileData.metadata)
    // const userStorageRef = storageRef.child(fileData.userId)
    switch (fileData.metadata) {
      case 'avatar': {
        console.log('Has elegido avatar')
        // userStorageRef.child('avatar').put(fileData.file, fileData.metadata)
        storage
          .ref(fileData.userId + '/' + 'avatar/' + fileData.userId + '.' + ext)
          .put(fileData.avatar)
        break
      }
      default: {
        console.log('no se ha podido subir el archivo')
      }
    }
  }
}
