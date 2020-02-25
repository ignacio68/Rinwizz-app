import { firebase, firebaseApp, CURRENT_USER } from '@services/firebase'
import * as twitter from '@setup/twitter'
import { phoneNumber } from '@setup/firebase'
import { setUser } from '@services/user'
/**
 * Signup the user
 *
 * @param {object} userData
 */
export async function signUp(userData) {
  console.log(`signUp user: ${JSON.stringify(userData)}`)
  await firebase
    .createUser({
      email: userData.email,
      password: userData.password
    })
    // .then(async result => {
    //   console.dir(result)
    //   setUserProfile({ displayName: result.displayName })
    //   const user = await setUser(result)
    //   console.dir(user)
    //   return user
    // })
    // .then(user => Promise.resolve(user))
    .then(
    user => console.console.dir(user),
    errorMessage => console.log(`signUp error: ${errorMessage}`)
  )
  // .catch(error => {
  //   console.log(`signUp error: ${error}`)
  //   return error
  // })
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
    .then(() => console.log('User profile updated'))
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
        scopes: ['public_profile', 'email']
      }
    })
    .then(result => {
      console.log(`facebookLogIn: ${JSON.stringify(result)}`)
      setUser(result)
    })
    .then(user => Promise.resolve(user))
    .catch(error => {
      console.log(`facebookLogIn error: ${error}`)
      return Promise.reject(error)
    })
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
        hostedDomain: 'mygsuitedomain.com', //TODO: actualizar la página
        scopes: [
          'https://www.googleapis.com/auth/user.birthay.read' //TODO: actualizar información solicitada
        ]
      }
    })
    .then(result => {
      console.log(`googleLogIn: ${JSON.stringify(result)}`)
      setUser(result)
    })
    .then(user => Promise.resolve(user))
    .catch(error => {
      console.log(`googleLogIn error: ${error}`)
      return Promise.reject(error)
    })
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
        scopes: [
          'public_profile',
          'email' // TODO: actualizar a Twitter
        ]
      }
    })
    .then(result => {
      console.log(`twitterLogIn: ${JSON.stringify(result)}`)
      setUser(result)
    })
    .then(user => Promise.resolve(user))
    .catch(error => {
      console.log(`twitterLogIn error: ${error}`)
      return Promise.reject(error)
    })
}

/**
 * Phone verification
 *
 * @param (string) userçPhoneNumber - User's phone number
 */
export async function phoneVerification(userPhoneNumber) {
  await firebase.login({
    type: firebase.LoginType.PHONE,
    phoneOptions: {
      // phoneNumber: userPhoneNumber,
      phoneNumber: phoneNumber, // Production only
      verificationPrompt: 'The received verificaction code', // TODO: refactoring
      // Optional
      android: {
        timeout: 30
      }
    }
  })
    .then(
      result => JSON.stringify(result),
      errorMessage => console.log(errorMessage)
    )
}

/**
 * Logout the user
 *
 */
export const logOut = () => {
  firebase.logout().then(() => console.log('User logout'))
  // .catch(error => console.log(`logOut error: ${error}`))
}

/**
 * TODO: revisar en la consola de Firebase el texto del email que se envía
 * Reset the user's password
 *
 * @param {string} userEmail - User`s email
 */
export async function resetPasswordEmail(userEmail) {
  await firebase
    .sendPasswordResetEmail(userEmail)
    .then(() => console.log('Password reset email sent'))
    .catch(error => console.log(`resetPasswordEmail error: ${error}`))
}

/**
 * TODO: Comprobar su utilización. Quizás es mejor utilizar el método nativo
 * Updating the user's password
 *
 * @param {sting} newPassword - New usw¡er's password
 */
export function updatePassword(newPassword) {
  firebase
    .updatePassword(newPassword)
    .then(() => console.log('Password updated'))
    .catch(error => console.log(`updatedPassword error: ${error}`))
}

/**
 * TODO: Comprobar su utilización. Quizás es mejor utilizar el método nativo
 * Updating the user's email adress
 *
 * @param {sting} newEmail - New usw¡er's password
 */
export function updateEmail(newEmail) {
  firebase
    .updateEmail(newEmail)
    .then(() => console.log('Email updated'))
    .catch(error => console.log(`updatedEmail error: ${error}`))
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

// /**
//  * TODO: refactoring password use argument
//  * Get the user credential
//  *
//  * @param {string} providerId
//  */
// export async function fetchCredential(password) {
//   const currentUser = CURRENT_USER
//   const providerId = currentUser.providerId
//   await getTokenId().then(idToken => {
//     // eslint-disable-next-line no-unused-vars
//     let credential
//     switch (providerId) {
//       case 'facebook.com': {
//         credential = firebaseAuth.FacebookAuthProvider.credential(idToken)
//         break
//       }
//       case 'google.com': {
//         credential = firebaseAuth.GoogleAuthProvider.credential(idToken)
//         break
//       }
//       case 'twitter.com': {
//         credential = firebaseAuth.TwitterAuthProvider.credential(idToken)
//         break
//       }
//       case 'password': {
//         const email = currentUser.email
//         const userPassword = password
//         credential = firebaseAuth.EmailAuthProvider.credential(
//           email,
//           userPassword
//         )
//         break
//       }
//       default:
//         return 'auth/user-empty'
//     }
//   })
// }

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
 * reauthenticate the user
 */
export async function reauthenticateUser() {
  const currentUser = CURRENT_USER
  await fetchCredential().then(credential => {
    currentUser.reauthenticateAndRetrieveDataWithCredential(credential)
  })
}
