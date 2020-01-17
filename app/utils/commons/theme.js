import { getRootView, getCssFileName, getNativeApplication } from 'tns-core-modules/application'
import { Theme, ClassList } from '@nativescript/theme'
import { getCssVariable } from '@nativescript/core/ui/styling/style'
// import { isValid } from 'tns-core-modules/color'
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
  const cssFileName = getCssFileName()
  const nativeApp = getNativeApplication()
  const root = getRootView().className
  // const cssVariable = getCssVariable('background')


  console.log(`El modo es: ${mode}`)
  console.log(`El archivo es: ${cssFileName}`)
  console.log(`La aplicacion es: ${nativeApp}`)
  console.log(`El rootView es: ${root}`)
  // console.log(`css variable es: ${cssVariable}`)
}

