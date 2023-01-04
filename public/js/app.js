console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const descriptionP = document.querySelector('#description')
const currentTempP = document.querySelector('#current-temp')
const precipitationP = document.querySelector('#precipitation')
const humidityP = document.querySelector('#humidity')
const feelslikeP = document.querySelector('#feelslike')
const locationP = document.querySelector('#location')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value
  resetText()
  descriptionP.textContent = 'Loading...'

  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        descriptionP.textContent = data.error
      } else {
        const { temperature, feelslike, weather_descriptions: descriptions, precip, humidity } = data.forecast
        descriptionP.textContent = descriptions[0] + '.'
        currentTempP.textContent = 'It is currently ' + temperature + ' degrees.'
        feelslikeP.textContent = 'It feels like ' + feelslike + ' degrees.'
        precipitationP.textContent = 'With a ' + precip + '% chance of rain.'
        humidityP.textContent = humidity + '% humidity.'
        locationP.textContent = 'In ' + data.location + '.'
      }
    })
  })
})

const resetText = () => {
  descriptionP.textContent = ''
  currentTempP.textContent = ''
  precipitationP.textContent = ''
  humidityP.textContent = ''
  feelslikeP.textContent = ''
  locationP.textContent = ''
}
