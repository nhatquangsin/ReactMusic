var axios = require('axios');

const OPEN_MUSIC_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=5f1e1385490d8214a75edc002680f4ec&format=json';


module.exports = {
    getArtist: function(artist){
        var encodedArtist = encodeURIComponent(artist);
        var requestUrl = `${OPEN_MUSIC_URL}&artist=${encodedArtist}`;

        return axios.get(requestUrl).then(function(res){
            if (res.data.error && res.data.message)
            {
                throw new Error(res.data.message);
            } else {
                console.log(res.data);
                return res.data.artist.url;

            }
        }, function(res){
            throw new Error(res.response.data.message);
        });
    }
}