const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=ff5c5352dccb5947777b917bde88d2ca&query=' + latitude + ',' + longitude + '&units=f'

  request({
    url,
    json: true
  },
  (error, { body } = {}) => {
    if (error) {
      callback(error, undefined)
    } else if (body.error) {
      callback(error, undefined)
    } else {
      callback(undefined, body.current)
    }
  })
}

module.exports = forecast
