import validateColor from 'validate-color'

export function isColor(color) {
  if (typeof color !== 'string' || color.length === 0) {
    return false
  }

  try {
    validateColor(color)
    return true
  } catch(err) {
    console.log(`Error en validateColor: ${err}`)
    return false
  }
}
