import { setUser } from '@services/user'

export const firebase = require('nativescript-plugin-firebase')
export const firebaseApp = require('nativescript-plugin-firebase/app')

// - Storage reference
// export const storage = firebase.storage()
// export const storageRef = firebase.storage().ref()

// Initialize Database through Firebase Database
// export const firebaseDb = firebase.database()

// - Database authorize
// export let firebaseAuth = firebase.auth
// export let functions = firebase.functions()
// export let firebaseRef = firebaseDb().ref()

// - Firebase default
// export default firebase

// firebase collections
// const alertsCollection = db.collection('alerts')

/**
 * Init Firebase and set a listener
 */
export function firebaseInit() {
  firebase
    .init({
      onAuthStateChanged: data => {
        console.log(JSON.stringify(data))
        return data
      }
    })
    .then(
      () => console.log('firebase.init done'),
      error => console.log(`firebase.init error: ${error}`)
    )
}

/**
 *  Get current user
 * */
export const CURRENT_USER = () => {
  firebase
    .getCurrentUser()
    .then(userData => {
      const user = setUser(userData)
      console.log(`El user es ${user}`)
      return user
    })
    .catch(error => {
      console.log(`Error getCurrentUser: ${error}`)
      return error
    })
}
