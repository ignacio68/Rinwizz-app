import { firebaseAuth } from '@services/firebase'

import { DISPATCH_SIGNUP, SOCIAL_SIGNUP } from '@store/types/actions_types'

import HomePage from '@views/Main/HomePage'

export default {
  /**
   * Acciones para autenticar segun la red social elegida
   * Posibilidad de separarlo en módulos para mejorar la claridad
   * del software
   *
   * @param {*} index - Índice del array correspondiente a la red social
   */
  [DISPATCH_SIGNUP]: ({ commit, dispatch, state }, index) => {
    commit('shared/CLEAR_ERROR', null, { root: true })
    const socialButtons = state.socialButtons
    let name = socialButtons[index].name
    console.log('la red social elegida es: ' + name)
    switch (name) {
      case 'Facebook': {
        const provider = new firebaseAuth.FacebookAuthProvider()
        // provider.addScope()
        dispatch('SOCIAL_SIGNUP', provider)
        console.log('La red social elegida es : ' + provider)
        break
      }
      case 'Google': {
        const provider = new firebaseAuth.GoogleAuthProvider()
        // provider.addScope()
        dispatch('SOCIAL_SIGNUP', provider)
        console.log('La red social elegida es : ' + provider)
        break
      }
      case 'Twitter': {
        const provider = new firebaseAuth.TwitterAuthProvider()
        // provider.addScope()
        dispatch('SOCIAL_SIGNUP', provider)
        console.log('La red social elegida es : ' + provider)
        break
      }
    }
  },

  /**
   * Conecta con la red social elegida para la autenticación.
   *
   * @param {String} provider - Red Social utilizada
   */
  [SOCIAL_SIGNUP]: ({ commit, dispatch }, provider) => {
    console.log('Estoy en SOCIAL_SIGNUP')
    // provider.addScope('public_profile')
    // firebaseAuth().useDeviceLanguage
    // NOTA: desarrollar un método para según el device elegir un método de acceso
    // firebaseAuth().signInWithRedirect(provider) // Utilizamos esta forma de acceso en móviles
    firebaseAuth()
      .signInWithPopup(provider) // Utilizamos esta forma de acceso en producción en web
      // .then(() => { // Se utiliza cuando accedemos con Redirect
      //   firebaseAuth()
      //     .getRedirectResult()
      .then(result => {
        console.log('He pasado signInWithPopup')
        if (result.credential) {
          // Accedemos Access Token, ahora podemos utilizarlo para acceder a la API de la red social
          const token = result.credential.accessToken
          console.log('El token es: ' + token)
        } else {
          console.log('No hay crededential')
        }
        // Datos del nuevo usuario
        const newUser = {
          _id: result.user.uid,
          email: result.user.email,
          name: result.user.displayName,
          phone: result.user.phoneNumber,
          isVerified: true,
          isAnonymous: result.user.isAnonymous,
          avatar: result.user.photoURL,
          providerId: result.user.providerId,
          creationDate: result.user.metadata.creationTime,
          lastSignInDate: result.user.metadata.lastSignInTime
        }
        // Guardamos en Cloud Storage el avatar
        dispatch(
          'cloudStorage/PUT_FILE',
          { userId: newUser.id, file: newUser.avatar, metadata: 'image/jpeg' },
          { root: true }
        )
        // Actualizamos el perfil de firebase con el displayName
        dispatch(
          'auth/SET_USER_PROFILE',
          {
            displayName: newUser.name,
            photoURL: newUser.avatar
          },
          { root: true }
        )

        // Llamamos a 'setUser' para crear el nuevo usuario localmente
        commit('user/SET_USER', newUser, { root: true })

        // Añadimos los datos a la base de datos (Realtime Database)
        // TODO: cambiar a Cloudant
        dispatch('userDb/CREATE_USER_DB', newUser, { root: true })

        console.log('El id del usuario es: ' + newUser.id)
        console.log('El email del usuario es: ' + newUser.email)
        console.log('El nombre del usuario es: ' + newUser.displayName)

        // Accedemos a la página principal
        commit('navigator/REPLACE', HomePage, { root: true })
      })
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          const pendingCredential = error.credential
          const email = error.email
          firebaseAuth()
            .fetchSignInMethodsForEmail(email)
            .then(methods => {
              if (methods[0] === 'password') {
                // TODO: implementar promptUserforPassword
                const password = this.promptUserforPassword()
                firebaseAuth()
                  .signInWithEmailAndPassword(email, password)
                  .then(user => {
                    user.linkWithCredential(pendingCredential).then(() => {
                      console.log('Hacer algo')
                    })
                  })
              }
              // All the other cases are external providers.
              // Construct provider object for that provider.
              // TODO: implement getProviderForProviderId.
              const provider = this.getProviderForProviderId(methods[0])
              // At this point, you should let the user know that he already has an account
              // but with a different provider, and let him validate the fact he wants to
              // sign in with this provider.
              // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
              // so in real scenario you should ask the user to click on a "continue" button
              // that will trigger the signInWithPopup.
              firebaseAuth()
                .signInWithPopup(provider)
                .then(result => {
                  // Remember that the user may have signed in with an account that has a different email
                  // address than the first one. This can happen as Firebase doesn't control the provider's
                  // sign in flow and the user is free to login using whichever account he owns.
                  // Step 4b.
                  // Link to Facebook credential.
                  // As we have access to the pending credential, we can directly call the link method.
                  result.user
                    .linkAndRetrieveDataWithCredential(pendingCredential)
                    .then(userCredential => {
                      // Facebook account successfully linked to the existing Firebase user.
                      console.log(
                        'Hacer algo con la credential: ' + userCredential
                      )
                    })
                })
            })
        } else {
          commit('shared/SET_ERROR', null, { root: true })
          dispatch('errors/AUTH_ERROR', error.code, { root: true })
          console.log('SOCIAL_SIGNUP error es: ' + error.code)
        }
      })
    // })
  },

  promptUserforPassword() {},
  getProviderForProviderId() {}
}
