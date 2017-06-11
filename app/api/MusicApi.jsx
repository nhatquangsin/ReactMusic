var axios = require('axios');

const OPEN_MUSIC_URL = 'http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=test&api_key=5f1e1385490d8214a75edc002680f4ec&limit=10&format=json&callback=?';

module.exports = {
    // getTemp: function(location){
    //     var encodedLocation = encodeURIComponent(location);
    //     var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //     return axios.get(requestUrl).then(function(res){
    //         if (res.data.cod && res.data.message)
    //         {
    //             throw new Error(res.data.message);
    //         } else {
    //             return res.data.main.temp;
    //         }
    //     }, function(res){
    //         throw new Error(res.response.data.message);
    //     });
    // }
}