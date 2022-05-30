const request = require('request')

forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d9ba4129c433a35536c21d58b1470b6a&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        const weather = ('It is ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.'  )
        if (error) {
            callback('Unable to connect to weather service.')    
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, weather)
        }
    })
}

  module.exports = forecast