const axios = require('axios');


const getPlaceLatLon = async(direction) => {

    const encodeURL = encodeURI(direction);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '5c4e778a43msh225a791e63e7cd7p11a862jsn4383d3d3e4cb'
        }
    });

    const res = await instance.get();

    if (res.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direction}`);
    }

    const data = res.data.Results[0];

    const place = (({ name, lat, lon }) => {
        return { name, lat, lon }
    })(data);

    return place;

};


module.exports = {
    getPlaceLatLon
};