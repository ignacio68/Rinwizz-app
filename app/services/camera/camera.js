/**
 * Capture a photo with camera device
 */
export function capturePhoto() {
  console.log('EcapturePhoto')
  // Set the camera options
  const setOptions = cameraOptions(
    50,
    0,
    1,
    true,
    0,
    200,
    200,
    0,
    true,
    true,
    1
  )

  // Take a picture
  navigator.camera.getPicture(cameraSuccess, cameraError, setOptions)
}

/**
 * Get a photo from photo library
 */
export function getPhoto() {
  console.log('getPhoto')
  // Set the camera options
  const setOptions = cameraOptions(100, 1, 0, true, 0, 200, 200, 0, true, true)

  // Take a picture
  navigator.camera.getPicture(photoAlbumSuccess, cameraError, setOptions)
}

/**
 * Set the camera options
 *
 * @param {*} quality
 * @param {*} destinationType
 * @param {*} sourceType
 * @param {*} allowEdit
 * @param {*} encodingType
 * @param {*} targetWidth
 * @param {*} targetEight
 * @param {*} mediaType
 * @param {*} correctOrientation
 * @param {*} savedToPhotoAlbum
 * @param {*} cameraDirection
 */
function cameraOptions(
  quality,
  destinationType,
  sourceType,
  allowEdit,
  encodingType,
  targetWidth,
  targetEight,
  mediaType,
  correctOrientation,
  savedToPhotoAlbum,
  cameraDirection
) {
  const options = {
    quality: this.quality,
    destinationType: this.destinationType,
    sourceType: this.sourceType,
    allowEdit: this.allowEdit,
    encodingType: this.encodingType,
    targetWidth: this.targetWidth,
    targetEight: this.targetEight,
    mediaType: this.mediaType,
    correctOrientation: this.correctOrientation,
    savedToPhotoAlbum: this.savedToPhotoAlbum,
    cameraDirection: this.cameraDirection
  }
  return options
}

function cameraSuccess(imageData) {
  const image = imageData
  return image
}

function photoAlbumSuccess(imageURI) {
  const image = imageURI
  return image
}

function cameraError(message) {
  console.log('Camera error: ' + message)
}
