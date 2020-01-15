import validateColor from 'validate-color'

export function isColor(color) {

  return color && validateColor(color) ? true : false
}
