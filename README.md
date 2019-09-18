# liri-node-app
liri-node-app

## Description
This project is a NodeJS search tool for music and entertainment events. It includes four possible commands:

* node liri concert-this _{musical artist name}_
* node liri movie-this _{movie title}_
* node liri spotify-this-song _{song title}_
* do-what-this-says _{filename}_

Each of these commands begins with calling node followed by the module name, liri.js.  after this will be the argument that instructs the module what search to execute. The following arguments will be the musical artist name for concert-this, the movie title for movie-this, and the song-title for spotify-this-song. 

The fourth command, do-what-this-says, will take a file name as it's argument.  The contents of that file will be one of the first three commands followed by it's respective arguments. This file will be processed and perform the search using the file contents the same as if the arguments were entered at the command prompt. An example the content can be found in random.txt.

![concertsearch](https://github.com/rbaird2001/liri-node-app/blob/master/concertSearch.gif)

![moviesearch](https://github.com/rbaird2001/liri-node-app/blob/master/movieSearch.gif)

![spotifysearch](https://github.com/rbaird2001/liri-node-app/blob/master/spotifySearch.gif)

![filesearch](https://github.com/rbaird2001/liri-node-app/blob/master/fileSearch.gif)

## Requirements
This project uses a NodeJS server which will need to be installed.  It depends on four node modules which need to be installed. The package.json file holds the details for the install. You should be able to install it from your terminal with the command _npm install_ if you in the same folder as this projects package.json file. The packages used are found inside the _Built With_ section of this documentation.

## Built With
Visual Studio Code
Node Modules:
   * Axios
   * Dotenv 
   * Moment
   * Spotfy (node-spotify-api)

## Contributors
Project is a solo project.

## Acknowledgements
* Richard Baird
* Andi Carlstrom
* Katie Sexton
* Jaron Landeen
* Irv Irra
