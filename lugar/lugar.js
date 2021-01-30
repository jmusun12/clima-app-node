const axios = require('axios');

const getLugarLatLng = async ( dir ) => {
    const encodeUrl = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${ encodeUrl }&day=3`,
        headers: {
            'x-rapidapi-key': '8b45f25e55mshc9743738118e7c2p11a146jsnd1fad2527d45',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    });
    
    const res = await instance.get();

    if (res.data.location.length === 0 ) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = res.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}
