import { getRootView } from 'tns-core-modules/application'
import { Theme } from '@nativescript/theme'
import { isValid } from 'tns-core-modules/color'
import validateColor from 'validate-color'

export const isColor = color => color && validateColor(color) ? true : false
// export const isColor = color => color && isValid(color) ? true : false

export function setColor(propColor, defaultColor) {
  if (isColor(propColor)) {
    return propColor
  } else {
    return defaultColor
  }
}

// Only for production
export function getCss() {
  const mode = Theme.getMode()
  // const root = getRootView()

  console.log(mode)
  // console.log(root)
}
