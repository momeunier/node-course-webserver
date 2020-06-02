const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e8de58b14961d6f18217e7b13a2d611&query=' + lat + ',' +long
    request({url, json:true}, (error, {body} = {}) => {
        if (error) {
            callback('unable to connect to weather service', undefined)
        } else if (body.success === false) {
            callback('location not found by the weather service', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees C. It feels like ' + body.current.feelslike + ' degrees C.')
        }
    })

}

module.exports = forecast