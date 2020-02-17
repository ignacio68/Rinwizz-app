export const firebase = require('nativescript-plugin-firebase')

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
    .then(user => {
      const newUser = {
        _id: user.uid,
        isAnonymous: user.isAnonymous,
        isEmailVerified: user.emailVerified,
        providers: user.providers,
        email: user.email,
        displayName: user.displayName, // name stored at provider
        // TODO: solo para producción
        avatar: user.photoURL,
        phone: user.phoneNumber,
        refreshToken: user.refreshToken, // iOS only
        // profile: user.additionalUserInfo.profile,
        providerId: user.providerData.providerId,
        userName: user.providerData.displayName,
        // isNewUser: user.additionalUserInfo.isNewUser,
        creationDate: user.metadata.creationTime,
        lastSignInDate: user.metadata.lastSignInTime
      }
      console.log(`El user es ${user}`)
      return newUser
    })
    .catch(error => console.log(`Error getCurrentUser: ${error}`))
}
