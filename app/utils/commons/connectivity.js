import {
  connectionType,
  getConnectionType,
  startMonitoring,
  stopMonitoring
} from 'tns-core-modules/connectivity'

export function checkNetwork() {
  const type = getConnectionType()
  let isConnected

  switch (type) {
    case connectionType.none:
      console.log('No hay conexión')
      isConnected = false
      break
    default:
      console.log('Está conectado')
      isConnected = true
      break
  }
}
