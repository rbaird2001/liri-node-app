// require("dotenv").config();
// var keys = require("./keys.js");
// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: keys.spotify.id,
//   secret: keys.spotify.secret
// });
 
// spotify
//   .search({ type: 'track', query: 'All the Small Things', limit: 1})
//   .then(function(response) {
//     console.log(response.tracks.items[0].album);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
var axios = require("axios")
axios
        .get("http://www.omdbapi.com/?apikey=d373dcb1&t=shrek")
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            console.log(response.data); //, response.data
            return response.data;
        })