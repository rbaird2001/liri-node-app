

//Begin by testing search on bands in town with static value for band (21 Pilots)
//this is using the url provided in the assignmetn details only includes the band name.
let url = `https://rest.bandsintown.com/artists/21+pilots/events?app_id=codingbootcamp`;

//axio is insalled (npm install axios)
//call it into this function using require and assign it the variable name axios

let axios = require("axios"); 

axios
    .get(`http://www.omdbapi.com/?apikey=d373dcb1&t=the+dark+knight`)
    .then(function (response) {
        // If the axios was successful...
        // Then log the body from the site!
        
        console.log(`\n
        ${response.data.Title} \n
           Year: ${response.data.Year}\n
           IMDB Rating: ${response.data.imdbRating}\n
           Country: ${response.data.Country}\n
           Language: ${response.data.Language}\n
           Plot: ${response.data.Plot}
           `
        );
    });



    
   