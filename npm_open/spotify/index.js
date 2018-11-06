var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: "49dca623dc3140cd9d14338de2ea5e49",
    secret: "324980afe69e435baa878192d1f8d45a"
});

spotify
    .search({
        type: 'track',
        query: 'All the Small Things'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });
