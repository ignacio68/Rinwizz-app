/* *************** USER SAMPLE *************** */

export const userSample = {
  _id: '', // id único del usuario -> id proporcionado por Firbase Auth
  type: 'user', // topo de docuemnto
  name: '', // nombre del usuario
  screenName: '', // nombre de usuario de la cuenta de Rinwizz -> user name Firebase Auth
  location: '', // dirección del usuario
  extendLocation: {
    // proporcionado por geolocation
    id: '', // id de la localización
    lat: '', // latitud
    lng: '', // longitud
    address: {
      // dirección completa
      houseNumber: '',
      road: '',
      suburb: '',
      city: '',
      county: '',
      state: '',
      postcode: '',
      country: '',
      countryCode: ''
    },
    boundingBox: {
      coordinates: [],
      type: ''
    }
  }, // localización de la alerta
  description: '', // descripción del usuario
  protected: false, // visible?
  verified: '', // el usuario está fverificado por Rinwizz
  url: '', // dirección HTTP del usuario
  providerId: '', // nombre del provider
  creationDate: '', // fecha de creación del usuario
  lastSignInDate: '', // Ultima fecha de acceso del usuario
  isAnonymous: true, // anónimo?
  isVerified: false, // verificado por Firebase?
  followersCount: 0, // número de seguidores
  followingCount: 0, // número de usuarios a los que sigue
  alertsCount: 0, // número de alertas emitidas
  avatar: '', // imágen del usuario
  banner: '', // imágen del banner
  defaultAvatar: true, // utiliza el avatar por defecto?
  defaultBanner: true, // utiliza el bannerpor defecto?
  email: '', // email del usuario utilizado en la autorización
  phone: '', // telefono del usuario utilizado en la autorizacion
  alertPhone: '', // telefono por defecto para alertas
  personal: {
    age: '',
    gender: ''
  }, // datos personales
  preferences: {
    entertainments: [],
    foods: [],
    sports: []
  }, // preferencias de usuario
  following: [], // _id de los usuarios que se siguen
  followers: [] // _id de los usuarios que le siguen
}

/* *************** ALERT SAMPLE *************** */

export const alertSample = {
  _id: '', // creationDate + usuario._id
  type: 'alert',
  title: '', // título de la alerta
  text: '', // texto completo
  user: {
    _id: '', // _id del autor de la alerta
    name: '',
    screenName: '',
    avatar: '',
    location: '',
    url: '',
    description: '',
    verified: false
  },
  creationDate: 0, // fecha de la creación de la alerta
  endDate: 0, // caducidad de la alerta
  link: '', // link de la alerta
  phone: '', // teléfono de la alerta
  location: {
    // proporcionado por geolocation
    id: '', // id de la localización
    lat: '', // latitud
    lng: '', // longitud
    address: {
      // dirección completa
      houseNumber: '',
      road: '',
      suburb: '',
      city: '',
      county: '',
      state: '',
      postcode: '',
      country: '',
      countryCode: ''
    },
    boundingBox: {
      coordinates: [],
      type: ''
    }
  }, // localización de la alerta
  entities: {}, // hastags, fotos, etc.
  extendedEntities: {}, // videos, fotos,...
  favoriteCount: 0 // numero de veces que la alerta ha sido clicada como favorita
}

/* *************** CONFIG DATABSE SAMPLE *************** */

export const configSample = {
  _id: '',
  local: '',
  remote: ''
}

/* *************** OPTIONS DATABASE SAMPLE *************** */

export const replyOptionsSample = {
  live: true,
  retry: true,
  continuos: true,
  auth: {
    username: '',
    password: ''
  },
  doc_ids: [],
  filter: '',
  query_params: {},
  view: '',
  selector: '',
  since: null
}

/* *************** OPTIONS CHANGE DATABASE SAMPLE *************** */

export const changeOptionsSample = {
  live: true,
  include_docs: true,
  since: 'now',
  limit: null,
  filter: '',
  doc_ids: [],
  query_params: {},
  view: '',
  selector: ''
}
/* *************** OPTIONS FETCH A BATCH OF DOCUMENTS *************** */

export const optionsFetchBatchDocsSample = {
  include_docs: true,
  attachments: true,
  startkey: '',
  limits: null,
  endkey: '',
  descending: false,
  key: ''
}
