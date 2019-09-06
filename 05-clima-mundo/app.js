const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirreción de la ciudad',
        demand: true
    }
}).argv;
const { getPlaceLatLon } = require('./place/place');
const { getWeather } = require('./weather/weather');

const getInfo = async(direction) => {

    let coords = await getPlaceLatLon(direction);

    let weather = await getWeather(coords.lat, coords.lon);

    let place = coords.name;

    return {
        place,
        weather
    }


}

getInfo(argv.direction)
    .then(res => {
        console.log(`EL clima de ${res.place} es de ${res.weather} °C`);
    }).catch(err => {
        console.log(err.message);
    });