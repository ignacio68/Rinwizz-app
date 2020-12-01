import { Application } from '@nativescript/core'
import { Theme } from '@nativescript/theme'
// import { Color } from '@nativescript/core'
import validateColor from 'validate-color'

export const isColor = color => color && validateColor(color) ? true : false
// export const isColor = color => color && Color.isValid(color) ? true : false

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
  const cssFileName = Application.getCssFileName()
  const nativeApp = Application.getNativeApplication()
  const root = Application.getRootView().className
  // const cssVariable = getCssVariable('background')


  console.log(`El modo es: ${mode}`)
  console.log(`El archivo es: ${cssFileName}`)
  console.log(`La aplicación es: ${nativeApp}`)
  console.log(`El rootView es: ${root}`)
  // console.log(`css variable es: ${cssVariable}`)
}

