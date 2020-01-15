import validateColor from 'validate-color'

export function isColor(color) {
  if (typeof color !== 'string' || color.length === 0) {
    return false
  }

  const isColor = validateColor(color) ? true : false

  return isColor
}
