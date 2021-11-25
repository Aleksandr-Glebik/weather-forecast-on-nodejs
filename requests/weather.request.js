const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Имя города не может быть пустым')
    }

    const KEY = '3add0df8cd60074880ae83777aafe663'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'
    // console.log('City: ', city);
    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial',
        },
        json: true,
    }

    try {
        const data = await rp(options)
        // console.log(data);
        const celsius = (data.main.temp - 32) * 5/9

        return {
            weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        return {
            // console.log(error);
            weather: null,
            error: error.error.message
        }
    }


}