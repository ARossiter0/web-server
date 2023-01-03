const request = require('postman-request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxyb3NzaXRlciIsImEiOiJjbGM4MTlyMDAwNXNlM29saGc2Mm41M2J3In0.aui_MYGQ8PcW-y-x3Rfpvg&limit=1'

  request({
    url,
    json: true
  }, (error, { body } = {}) => {
    if (error) {
      callback(error, undefined)
    } else if (body.features.length === 0) {
      callback(error, undefined)
    } else {
      const { center, place_name: placeName } = body.features[0]
      callback(undefined, {
        latitude: center[1],
        longitude: center[0],
        placeName
      })
    }
  })
}

module.exports = geocode
