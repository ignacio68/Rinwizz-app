import {
  cloudantConfig,
  authUsers,
  authAlerts,
  authFakeAlerts
} from '@setup/cloudant'
import {
  userSample,
  alertSample,
  configSample,
  replyOptionsSample,
  changeOptionsSample,
  optionsFetchBatchDocsSample
} from '@utils/database'

// TODO: Revisar completamente

export const setDoc = docData => {
  let doc = JSON.parse(JSON.stringify(userSample))
  doc = { ...doc, ...docData }
  return doc
}

export const setAlert = docData => {
  let doc = JSON.parse(JSON.stringify(alertSample))
  doc = { ...doc, ...docData }
  return doc
}

export const setConfig = (userId, local) => {
  const config = JSON.parse(JSON.stringify(configSample))
  config._id = userId
  config.dbName = local
  config.remote = cloudantConfig.url + '/' + config.dbName
  return config
}

export const setOptions = usersIds => {
  const options = JSON.parse(JSON.stringify(replyOptionsSample))
  options.auth.username = authUsers.key
  options.auth.password = authUsers.password
  options.doc_ids.push(usersIds)
  return options
}

export const setChangeOptions = usersIds => {
  const options = JSON.parse(JSON.stringify(changeOptionsSample))
  options.doc_ids.push(usersIds)
  return options
}

export const setAlertsOptions = usersIds => {
  const options = JSON.parse(JSON.stringify(replyOptionsSample))
  options.auth.username = authAlerts.key
  options.auth.password = authAlerts.password
  options.doc_ids.push(usersIds)
  return options
}

export const setFakeAlertsOptions = usersIds => {
  const options = JSON.parse(JSON.stringify(replyOptionsSample))
  options.auth.username = authFakeAlerts.key
  options.auth.password = authFakeAlerts.password
  options.doc_ids.push(usersIds)
  return options
}

export const setFetchBatchOptions = () => {
  const options = JSON.parse(JSON.stringify(optionsFetchBatchDocsSample))
  return options
}
