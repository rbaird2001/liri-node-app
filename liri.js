
require("dotenv").config();
let keys = require("./keys.js");
const Axios = function(){this.axios = require("axios")};
const Spotify = require("node-spotify-api");
var liriType = process.argv[2];
var liriParam = process.argv.slice(3).join("+");

// const LiriSearch = function () {
//     this.searchType = liriType;
//     this.searchParam = liriParam;
//}


 Spotify = function(id,secret){
    LiriSearch.call(this,searchParam)
    this.spotify = require("node-spotify-api");
    this.id = id;
    this.secret = secret;
}; 

Axios.prototype.search = function (axios,url) {
    this.url = url;
    console.log("preAxios");
    console.log(this.url)
    return axios
        .get(this.url)
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            //console.log("response"); //, response.data
            return response.data;
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("ERROR data", error.response.data, "ERROR status", error.response.status, "ERROR headers", error.response.headers);
                return false
            }
            if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log("ERROR no response", error.request);
                return false
            }
            if (error.config) {
                // Something happened in setting up the request that triggered an Error
                console.log("ERROR config", error.config);
                return false
            }
            else {
                console.log("ERROR request", error.message);
                return false
            }

        });
}

 Spotify.prototype.search = function () {
     //run spotify search
    console.log(this.id)
    return spotify
        .search({ 
            type: 'track', 
            query: this.liriParam, 
            limit: 1
          })
        .then(function(response) {
          console.log(response.tracks.items[0]);
        })
        .catch(function(err) {
          console.log(err);
        });
 }

Axios.prototype.concertResults = function (promise) {
    return promise.then(
        function (str) {
            let list = ""
            for (i = 0; i < str.length; i++) {
                list += `${str[i].venue.name}  --  ${str[i].venue.city}  ${str[i].venue.region}, ${str[i].venue.country}\n`;
            }
            console.log(list);
            return list;
        }
    )
}

Axios.prototype.movieResults = function (promise) {
    //process axios search on omdb
    return promise.then(
        function (str) {
            console.log(`\n
        ${str.Title} \n
           Year: ${str.Year}\n
           IMDB Rating: ${str.imdbRating}\n
           Country: ${str.Country}\n
           Language: ${str.Language}\n
           Plot: ${str.Plot}
           `
        );
    });
}

// SearchEvent = function (str) {
//     if (this.searchType === "concert-this") {
//         url = `https://rest.bandsintown.com/artists/${str}/events?app_id=codingbootcamp`;
//         return this.concertResults(this._axiosSearch(url));
//     }
//     if (this.searchType === "movie-this") {
//         url = `http://www.omdbapi.com/?apikey=d373dcb1&t=${str}`;
//         return this.movieResults(this._axiosSearch(url));
//     }
//     if (this.searchType === "spotify-this") {
//         url = ""
//         return this.spotifyResults(this._spotifySearch);
//     }
//}

const ConcertSearch = function(axios,searchParam){
    Axios.call(this,axios,searchParam)
    this.url = `https://rest.bandsintown.com/artists/${liriParam}/events?app_id=codingbootcamp`;
}
ConcertSearch.prototype = Object.create(Axios.prototype)
ConcertSearch.prototype.results =  function(){return this.concertResults(this.search(this.url))};

let concerts = new ConcertSearch()
concerts.results()

//`https://rest.bandsintown.com/artists/${liriParam}/events?app_id=codingbootcamp`;
//(`http://www.omdbapi.com/?apikey=d373dcb1&s=${liriParam}`



