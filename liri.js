var dotenv = require("dotenv").config();

var keys = require("./keys");
var Spotify = require("node-spotify-api")
var spotifyClient = new Spotify(keys.spotify);
var axios = require("axios");
var userChoice = process.argv[2];
var seachMovie = process.argv.slice(3).join(' ');
// console.log("userChoice" + userChoice)
// console.log("searchmovie" + seachMovie)
var validInput = checkUserInput()
var searchSong = process.argv.slice(3).join(' ');
// var moment = require('moment');
// moment().format();

// concert-this/spotify-this-song/movie-this/do-what-it-says   ---> commands
    

function checkUserInput() {
    if(userChoice =="movie-this" || userChoice == "spotify-this-song"
    || userChoice == "concert-this" || userChoice == "do-what-it-says"){
        return true;
    } else {
        return false;
    }
}


function movieThis() {


    if (validInput) {
         movieUrl();
     }

// Movie**

function movieUrl() {
    var url = "http://www.omdbapi.com/?apikey=2f1e40d4&t=" + seachMovie 
    // console.log(url)

    findMovieInfo(url)
}

function findMovieInfo(url) {
    axios.get(url).then(function(response){
        // console.log(data.data.Title);
        displayMovieInfo(response.data);
    })

}

function displayMovieInfo (result) {                
   
    console.log("\n")
     console.log("Title: " + result.Title);     
     console.log("Release Year: " + result.Year);
     console.log("IMDB Rating: " + result.imdbRating);                   
     console.log("Rotten Tomatoes Rating: " + result.Ratings[1].Value);
     console.log("Produced In: " + result.Country);
     console.log("Language: " + result.Language);
     console.log("Plot: " + result.Plot);                     //will need \n for for random.txt
     console.log("Actors: " + result.Actors);
     console.log("\n")
}
}

// End Movie***********


// Spotify**


function spotifyThisSong() {


if (validInput) {
    spotifyUrl();
}

function spotifyUrl() {
    spotifyClient.search({type:"track", query: searchSong}, function (err, data){
       if (err){
        console.log(err)
       } else {
        console.log("\n")
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Song Preview: " + data.tracks.items[0].external_urls.spotify)
        console.log("\n")

       }
})

}
}
// End Spotify******



// // Concert*********
// if (validInput) {
//     spotUrl();
// }

// function spotUrl() {
//     var spoturl = "" + userChoice + "" + seachSpotify +
//     "&apikey=2f1e40d4"

//     findSpotifyInfo(spoturl)
// }


// function findSpotifyInfo(spoturl) {
//     axios.get(spoturl).then(function(data){
//         console.log(data);
//         displaySpotifyInfo(data);
//     })

// }


// function displaySpotifyInfo (result) {                
//     const data = result.data

//      console.log("Artist: " +);     
//      console.log(\n"Song Name: " +);
//      console.log(\n"Preview Song" +);                   
//      console.log(\n"Album: " +);     
// }

function cases (){

if (userChoice == "movie-this") {
    movieThis();
} else {
    spotifyThisSong();
}

}

cases();

// switch (userChoice) {
//     case (userChoice == 'movie-this'):
//       movieThis()
//     break;
//     case (userChoice == 'spotify-this-song'):
//       spotifyThisSong()
//     break;
//     case (userChoice == 'concert-this'):
//       CoNcErTfUnCtIoN()
//     break;
//     case (userChoice == 'do-what-it-says'):
//       wHaTiTsAySFuNcTiOn()
//     break;



// }
