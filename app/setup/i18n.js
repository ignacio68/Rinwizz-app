/**
 * Import Dependency
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

/**
 * Import Locales
 */
import enUs from '@locales/i18n/en_US'
import esEs from '@locales/i18n/es_ES'

/**
 * Import number formats
 */
import { numberFormats } from '@locales/i18n/numberFormats'

/**
 * Import date formats
 */
import { dateTimeFormats } from '@locales/i18n/dateTimeFormats'

/**
 * Config
 */
Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context('@locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {
    en: {
      lang: enUs
    },
    es: {
      lang: esEs
    }
  }
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'es',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'es',
  messages: loadLocaleMessages(),
  dateTimeFormats,
  numberFormats
})
