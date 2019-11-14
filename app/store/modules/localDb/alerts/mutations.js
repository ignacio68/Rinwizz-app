// TODO: revisar si es de utilidad

import {
  SET_ALERTS_LOCAL_DB,
  SET_USER_ALERT_LOCAL_DB
} from '@store/types/mutations_types'

export default {
  // Creamos en caché la base de datos de alertas
  [SET_ALERTS_LOCAL_DB]: (state, localDb) => {
    console.log('SET_ALERTS_LOCAL_DB: ' + localDb)
    state.alertsLocalDb = localDb
  },
  // Creamos en caché la base de datos de las alertas del usuario
  // TODO: revisar su utilidad
  [SET_USER_ALERT_LOCAL_DB]: (state, localDb) => {
    state.userAlertsLocalDb.push(localDb)
  }
}
