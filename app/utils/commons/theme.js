import validateColor from 'validate-color'

export function isColor(color) {

  return color && validateColor(color) ? true : false
}

export function setColor(propColor, defaultColor) {
  if (isColor(propColor)) {
    return propColor
  } else {
    return defaultColor
  }
}
