import { resolve } from 'path'

export const aliases = {
  '@app': resolve(__dirname, 'app'),
  '@api': resolve(__dirname, 'app/api'),
  '@assets': resolve(__dirname, 'app/assets'),
  '@components': resolve(__dirname, 'app/components'),
  '@locales': resolve(__dirname, 'app/locales'),
  '@mixins': resolve(__dirname, 'app/mixins'),
  '@services': resolve(__dirname, 'app/services'),
  '@setup': resolve(__dirname, 'app/setup'),
  '@store': resolve(__dirname, 'app/store'),
  '@modules': resolve(__dirname, 'app/store/modules'),
  '@views': resolve(__dirname, 'app/views'),
  '@utils': resolve(__dirname, 'app/utils'),
}
