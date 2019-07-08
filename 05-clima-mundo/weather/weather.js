const axios = require('axios');

const getWeather = async(lat, lon) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=71e00c19b8bc52c12bf4443838604006&units=metric`);

    return res.data.main.temp;

};

module.exports = {
    
}
