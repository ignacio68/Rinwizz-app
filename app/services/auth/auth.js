import { firebase, firebaseApp, CURRENT_USER } from '@services/firebase'
import * as twitter from '@setup/twitter'
/**
 * Signup the user
 *
 * @param {object} userData
 */
export async function signUp(userData) {
  console.log(`signUp user: ${JSON.stringify(userData)}`)
  const { user } = await firebaseApp
    .auth()
    .createUserWithEmailAndPassword(userData.email, userData.password)
    // console.log(`createUser: ${JSON.stringify(user)}`)
    // setUserProfile({ displayName: userData.displayName })
    console.dir(user)
    return Promise.resolve(user)
  // firebase.createUser({
  //   email: userData.email,
  //   password: userData.password
  // })
  //   .then(user => {
  //     console.dir(user)
  //     return user
  // })
  // setUserProfile({ displayName: userData.displayName })
  // return Promise.resolve(user)
  // await firebase
  //   .createUser({
  //     email: userData.email,
  //     password: userData.password
  //   })
  //   .then(user => {
  //     console.log(`createUser user: ${JSON.stringify(user)}`)
  //     // setUserProfile({ displayName: userData.displayName })
  //     return Promise.resolve(user)
  //   })
  //   .catch(error => {
  //     console.log(`signUp error: ${error}`)
  //     return error
  //   })

}

/**
 * Update the user profile
 *
 * @param {object} userData
 */
export const setUserProfile = userData => {
  console.log('setUpProfile')
  firebase
    .updateProfile({
      displayName: userData.displayName | null,
      photoUrl: userData.displayURL | null
    })
    .then(() => {
      firebase.getCurrentUser()
        .then(user => {
          console.log(`setUpProfile currentUser: ${user}`)
          return Promise.resolve(user)
      })
    })
    .catch(() => {
      return 'auth/user-empty'
    })
}

/**
 * Send a verification email to the user
 *
 * @param {string} actionCodeSettings
 */
export function sendEmailVerification(actionCodeSettings) {
  firebase.sendEmailVerification(actionCodeSettings).then(
    () => console.log('email enviado'),
    error => {
        console.log(`sendEmailVerification Error: ${error}`)
        return error
      }
  )
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
export async function logIn(userData) {
  await firebase
    .login({
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: userData.email,
        password: userData.password
      }
    })
    .then(
      user => {
        console.log(`logIn user: ${JSON.stringify(user)})`)
        return Promise.resolve(user)
      },
      error => {
        console.log(`logIn error: ${error}`)
        return Promise.reject(error)
      }
    )
}

/**
 * Login with Facebook
 *
 */
export async function facebookLogIn() {
  await firebase
    .login({
      type: firebase.LoginType.FACEBOOK,
      facebookOptions: {
        scopes:[
          'public_profile', 'email'
        ]
      }
    })
    .then(
      result => {
        console.log(`facebookLogIn: ${JSON.stringify(result)})`)
        return Promise.resolve(result)
      },
    )
    .catch(
      error => {
        console.log(`facebookLogIn error: ${error}`)
        return Promise.reject(error)
      }
    )
}

/**
 * Login with Google
 *
 */
export async function googleLogIn() {
  await firebase
    .login({
      type: firebase.LoginType.GOOGLE,
      googleOptions: {
        hostedDomain: "mygsuitedomain.com", //TODO: actualizar la página
        scopes:[
          'https://www.googleapis.com/auth/user.birthay.read' //TODO: actualizar información solicitada
        ]
      }
    })
    .then(
      result => {
        console.log(`googleLogIn: ${JSON.stringify(result)})`)
        return Promise.resolve(result)
      },
    )
    .catch(
      error => {
        console.log(`googleLogIn error: ${error}`)
        return Promise.reject(error)
      }
    )
}

/**
 * Login with Twitter
 *
 */
export async function twitterLogIn() {
  const token = twitter.token // TODO: utilizar el Twitter token
  await firebase
    .login({
      type: firebase.LoginType.CUSTOM,
      customOptions: {
        token: token,
        scopes:[
          'public_profile', 'email' // TODO: actualizar a Twitter
        ]
      }
    })
    .then(
      result => {
        console.log(`twitterLogIn: ${JSON.stringify(result)})`)
        return Promise.resolve(result)
      },
    )
    .catch(
      error => {
        console.log(`twitterLogIn error: ${error}`)
        return Promise.reject(error)
      }
    )
}

/**
 * Logout the user
 *
 */
export const logOut = () => {
  firebase
    .logout()
    .then(() => console.log('User logout'))
    // .catch(error => console.log(`logOut error: ${error}`))
}

/**
 * User authorization changed event
 */
// export const onAuthStateChange = data => {
//   console.log('Estoy en onAuthStateChange')
//   console.log(JSON.stringify(data))
//   if (data) {
//     console.log('user: ' + data)
//     return data
//   } else {
//     console.log('No hay user')
//   }
// }

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
