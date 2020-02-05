export default {
  credential: {},
  /**
   * Creamos el objeto ActionCodeSettings que proporciona instrucciones a Firebase
   * para comunicarse por email con el usuario
   */
  actionCodeSettings: {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'http://localhost:8080',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.rinwizz.ios'
    },
    android: {
      packageName: 'com.rinwizz.android',
      installApp: true,
      minimumVersion: '19'
    },
    dynamicLinkDomain: 'rinwizz.page.link'
  },
  mode: '',
  oobCode: '',
  actionCode: '',
  continueUrl: ''
}
