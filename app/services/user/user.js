export function setUser(userData) {
  const newUser = {
    _id: userData.uid,
    isAnonymous: userData.anonymous,
    isEmailVerified: userData.emailVerified,
    providers: userData.providers,
    email: userData.email,
    displayName: userData.displayName, // name stored at provider
    // TODO: solo para producción
    // avatar:
    // 'https://firebasestorage.googleapis.com/v0/b/rinwizz-app.appspot.com/o/pwqhMnXx8ZMN06BeobDxJOZ5kDC2%2Favatar%2FpwqhMnXx8ZMN06BeobDxJOZ5kDC2..jpg?alt=media&token=8e64b798-eb08-46ec-a794-5d658e994301',
    avatar: userData.photoURL,
    phone: userData.phoneNumber,
    refreshToken: userData.refreshToken, // iOS only
    profile: userData.additionalUserInfo.profile,
    providerId: userData.additionalUserInfo.providerId,
    userName: userData.additionalUserInfo.userName,
    isNewUser: userData.additionalUserInfo.isNewUser,
    creationDate: userData.metadata.creationTimestamp,
    lastSignInDate: userData.metadata.lastSignInTimestamp
  }
  return newUser
}
