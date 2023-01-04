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
      const { temperature, feelslike, weather_descriptions: descriptions, precip, humidity } = body.current
      let forecastString = 'It is ' + descriptions[0] + '.\n'
      forecastString += ' It is currently ' + temperature + ' degrees out.\n'
      forecastString += ' With a ' + precip + '% chance of rain.\n'
      forecastString += humidity + '% humidity.\n'
      forecastString += ' It feels like ' + feelslike + ' degrees.\n'
      callback(undefined, forecastString)
    }
  })
}

module.exports = forecast
