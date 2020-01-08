import {
  connectionType,
  getConnectionType,
  startMonitoring,
  stopMonitoring
} from 'tns-core-modules/connectivity'

export function checkNetwork() {
  const type = getConnectionType()
  if (type === connectionType.none) {
    console.log('No hay conexión')
    return false
  } else {
    console.log('Hay conexión')
    return true
  }
}
