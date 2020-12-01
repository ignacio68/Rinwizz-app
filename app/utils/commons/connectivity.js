import {
  Connectivity
} from '@nativescript/core'

export function checkNetwork() {
  const type = Connectivity.getConnectionType()
  if (type === Connectivity.none) {
    console.log('No hay conexión')
    return false
  } else {
    console.log('Hay conexión')
    return true
  }
}
