export const timeOptions = [
  { text: '10 segundos', value: 10000 },
  { text: '1 minuto', value: 60000 },
  { text: '5 minutos', value: 300000 },
  { text: '15 minutos', value: 900000 },
  { text: '30 minutos', value: 1800000 },
  { text: '45 minutos', value: 2700000 },
  { text: '1 hora', value: 3600000 },
  { text: '2 horas', value: 7200000 },
  { text: '3 horas', value: 10800000 },
  { text: '4 horas', value: 14400000 },
  { text: '5 horas', value: 18000000 },
  { text: '6 horas', value: 21600000 }
]

export const alertScriptProps = {
  userId: {
    type: String,
    required: true,
    default: ''
  },
  userName: {
    type: String,
    required: true,
    default: ''
  },
  userScreenName: {
    type: String,
    required: true,
    default: ''
  },
  userAvatar: {
    type: String,
    required: true,
    default: ''
  },
  userLocation: {
    type: String,
    default: ''
  },
  userUrl: {
    type: String,
    default: 'rinwizz.com'
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false
  },
  userDescription: {
    type: String,
    default: ''
  },
  alertPhone: {
    type: String,
    default: ''
  }
}
