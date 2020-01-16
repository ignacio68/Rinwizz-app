// import { getCssFileName } from 'tns-core-modules/application'
// FIXME: fix getCssVariable bug
import * as Style from 'tns-core-modules/ui/styling/style'
import validateColor from 'validate-color'

export const isColor = color => color && validateColor(color) ? true : false

export function setColor(propColor, defaultColor) {
  if (isColor(propColor)) {
    return propColor
  } else {
    return defaultColor
  }
}

// Only for production
export function getCss() {
  const cssVariableValue = Style.getCssVariable('$accent')
  console.log(`El valor de CSS es: ${ cssVariableValue }`)
  return cssVariableValue
}

