const Axios = function () { this.axios = require("axios") };
const moment = require("moment");
//var liriType = process.argv[2];
//var liriParam = process.argv.slice(2).join("+");

let url = `https://rest.bandsintown.com/artists/weezer/events?app_id=codingbootcamp`;
Axios.prototype.search = function (url) {
    this.url = url;
    console.log("preAxios");
    console.log(this.url);
    return this.axios
        .get(this.url)
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            timeFormatted = moment(response.data[0].datetime).format("MM/DD/YYYY");
            console.log(timeFormatted);
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

let concert = new Axios;
concert.search(url);

/*
[
    {
      offers: [ [Object] ],
      venue: {
        name: 'Jockey Club Del Peru Telepodromo San Roque',
        country: 'Peru',
        region: '',
        city: 'Cercado De Lima',
        latitude: '-12.1479304',
        longitude: '-76.99187'
      },
      datetime: '2019-09-22T19:00:45',
      on_sale_datetime: '',
      description: '',
      lineup: [ 'Weezer' ],
      id: '101208102',
      artist_id: '140',
      url: 'https://www.bandsintown.com/e/101208102?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
    },
]
*/