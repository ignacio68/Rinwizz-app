const firebase = require('nativescript-plugin-firebase')

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
    .then(() => console.log('firebase.init done'))
    .catch(error => console.log(`firebase.init error: ${error}`))
}

/**
 *  Get current user
 * */
export const CURRENT_USER = () => {
  firebase
    .getCurrentUser()
    .then(user => {
      console.log(`El user es ${user}`)
      return user
    })
    .catch(error => console.log(`Error getCurrentUser: ${error}`))
}

/**
 * Signup the user
 *
 * @param {object} userData
 */
export function signUp(userData) {
  firebase.createUser({
    email: userData.email,
    password: userData.password
  })
    .then(user => {
      setUserProfile({ displayName: userData.displayName })
      return user
    })
    .catch(error => {
      console.log(error)
      return error
    })
}

/**
 * Update the user profile
 *
 * @param {object} userData
 */
export const setUserProfile = userData => {
  firebase.updateProfile({
    displayName: userData.displayName,
    photoUrl: userData.displayURL
  })
    .then(() => {
      console.log(`setUpProfile:  ${CURRENT_USER.displayName}`)
  })
  .catch(() => {return 'auth/user-empty'})
}

/**
 * Send a verification email to the user
 *
 * @param {string} actionCodeSettings
 */
export const sendEmailVerification = actionCodeSettings => {
  return new Promise((resolve, reject) => {
    const currentUser = CURRENT_USER
    if (currentUser) {
      currentUser
        .sendEmailVerification(actionCodeSettings)
        .then(() => {
          resolve()
          console.log('email enviado')
        })
        .catch(error => {
          reject(error)
        })
    } else {
      reject('auth/user-empty')
    }
  })
}

// TODO: revisar
// export const applyActionCode = code => {
//   new Promise((resolve, reject) => {
//     firebaseAuth
//       .applyActionCode(code)
//       .then(() => resolve())
//       .catch(error => reject(error))
//   })
// }

/**
 * Login the user
 *
 * @param {object} userData
 */
export function logIn(userData) {
  firebase.login(
    {
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: userData.email,
       password: userData.password
      }
    }
  )
    .then(result => {
      console.log(`logIn user: ${JSON.stringify(result)})`)
      return result
    })
    .catch(error => {
      console.log(`logIn error: ${error}`)
      return error
  })

}

/**
 * Logout the user
 *
 */
export const logOut = () => {
  firebase.logout()
    .then(() => console.log('User logout'))
  .catch((error) => console.log(`logOut error: ${error}`))
}

/**
 * User authorization changed event
 */
export const onAuthStateChange = data => {
  console.log('Estoy en onAuthStateChange')
  console.log(JSON.stringify(data))
  if (data) {
    console.log('user: ' + data)
    return data
  } else {
    console.log('No hay user')
  }
}

/**
 * TODO: añadir fetchUser para conseguir la credencial
 * the user is deleted
 *
 * @param {string} credential
 */
export async function deleteUser(providerId) {
  const currentUser = CURRENT_USER
  await fetchCredential(providerId)
    .then(async credential => {
      await currentUser.reauthenticateAndRetrieveDataWithCredential(credential)
    })
    .then(async () => {
      await currentUser.delete()
    })
}

/**
 * TODO: refactoring password use argument
 * Get the user credential
 *
 * @param {string} providerId
 */
export async function fetchCredential(password) {
  const currentUser = CURRENT_USER
  const providerId = currentUser.providerId
  await getTokenId().then(idToken => {
    // eslint-disable-next-line no-unused-vars
    let credential
    switch (providerId) {
      case 'facebook.com': {
        credential = firebaseAuth.FacebookAuthProvider.credential(idToken)
        break
      }
      case 'google.com': {
        credential = firebaseAuth.GoogleAuthProvider.credential(idToken)
        break
      }
      case 'twitter.com': {
        credential = firebaseAuth.TwitterAuthProvider.credential(idToken)
        break
      }
      case 'password': {
        const email = currentUser.email
        const userPassword = password
        credential = firebaseAuth.EmailAuthProvider.credential(
          email,
          userPassword
        )
        break
      }
      default:
        return 'auth/user-empty'
    }
  })
}

/**
 * Get the user TokenId
 */
export async function getTokenId() {
  const currentUser = CURRENT_USER
  const idToken = await currentUser
    .getIdToken()
    .then(() => Promise.resolve(idToken))
}

/**
 * TODO: pasar a firestore y repasar
 * Update firebase users name database
 *
 * @param {string} userName
 */
export async function updateUserName(userName) {
  await firebaseDb
    .ref('usersNames/')
    .update(userName)
    .then(() => console.log('Actualizada la base de datos de nombres'))
}

/**
 * reauthenticate the user
 */
export async function reauthenticateUser() {
  const currentUser = CURRENT_USER
  await fetchCredential().then(credential => {
    currentUser.reauthenticateAndRetrieveDataWithCredential(credential)
  })
}
