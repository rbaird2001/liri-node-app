
require("dotenv").config();
const keys = require("./keys.js");
const Axios = function () { this.axios = require("axios") };
const Spotify = require("node-spotify-api");
const fs = require("fs");
const moment = require("moment");

var liriType = process.argv[2];
var liriParam = process.argv.slice(3).join("+");


//Add search method to Axios constructor 
Axios.prototype.search = function (url) {
    this.url = url;
    //console.log("preAxios");
    //console.log(this.url);
    return this.axios
        .get(this.url)
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
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

Axios.prototype.concertResults = function (promise) {
    return promise.then(
        function (str) {
            let list = ""
            for (i = 0; i < str.length; i++) {
                list += `${moment(str[i].datetime).format("MM/DD/YYYY")} -- ${str[i].venue.name}  --  ${str[i].venue.city}  ${str[i].venue.region}, ${str[i].venue.country}\n`;
            }
            console.log(list);
            return true;
        }
    )
}

//add movie processing method to Axios constructor
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

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

spotifySearch = function (str) {
    spotify
        .search({ type: 'track', query: str, limit: 1 })
        .then(function (response) {
            let ret = response.tracks.items[0];
            //console.log(ret)
            let list =
                `
        Song: ${ret.name} 
           Artist(s): ${ret.artists[0].name}
           Album: ${ret.album.name}
           Preview: ${ret.preview_url}
        `
            console.log(list);
        })
        .catch(function (err) {
            console.log(err);
        });
}
doRandomTxt = function (liriParam) {
    fs.readFile(liriParam, "utf-8", function (err, data) {
        if (err) {
            console.log(`error: ${err}`);
        }
        let commandArray = data.replace(/"/g, "").split(",");
            if(commandArray[0]==="do-what-it-says"){
                console.log("infinite recursion")
                return false
            }
            searchEvent(commandArray[0],commandArray[1]);
    })
}

//create/call new functions based on the liri search type requested.
searchEvent = function (liriType, liriParam) {
    if (liriType === "concert-this") {
        let concertSearch = new Axios
        concertSearch.url = `https://rest.bandsintown.com/artists/${liriParam}/events?app_id=codingbootcamp`;
        return concertSearch.concertResults(concertSearch.search(concertSearch.url));
    }
    if (liriType === "movie-this") {
        let movieSearch = new Axios
        movieSearch.url = `http://www.omdbapi.com/?apikey=d373dcb1&t=${liriParam}`;
        return movieSearch.movieResults(movieSearch.search(movieSearch.url));
    }
    if (liriType === "spotify-this-song") {
        console.log(spotifySearch(liriParam))
        return true
    }
    if (liriType === "do-what-this-says") {
        doRandomTxt(liriParam);
        return true
    }
    else{
        console.log(`unknown command`);
        return false;
    }
}
searchEvent(liriType,liriParam)