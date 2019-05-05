var dotenv = require("dotenv").config();

var keys = require("./keys");
var Spotify = require("node-spotify-api")
var spotifyClient = new Spotify(keys.spotify);
var axios = require("axios");
var userChoice = process.argv[2];
var artist = process.argv.slice(3).join(' ');
var seachMovie = process.argv.slice(3).join(' ');
var validInput = checkUserInput()
var searchSong = process.argv.slice(3).join(' ');
// var moment = require('moment');
// moment().format();
    

function checkUserInput() {
    if(userChoice =="movie-this" || userChoice == "spotify-this-song"
    || userChoice == "concert-this" || userChoice == "do-what-it-says"){
        return true;
    } else {
        return false;
    }
}

// Movie**

function movieThis() {

    if (validInput) {
         movieUrl();
     }


function movieUrl() {
    var url = "http://www.omdbapi.com/?apikey=2f1e40d4&t=" + seachMovie 
    findMovieInfo(url)
}

function findMovieInfo(url) {
    axios.get(url).then(function(response){
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





//Concert********


// function concertThis () {       //Not working :( *

// if (validInput) {
//     concertUrl();
// }


// function concertUrl() {
//     var bandUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
//     findConcertInfo(bandUrl)
//     // console.log(bandUrl)
// }

// function findConcertInfo(bandUrl) {
//     axios.get(bandUrl).then(function(response){
//         displayConcertInfo(response.data);
//         // console.log(response)
//     })
// }

// function displayConcertInfo (result) {
//     console.log(result./*cannot find correct dot notation*/ )                         
// }
// }                                        //Not Working end******

function cases (){

if (userChoice == "movie-this") {
    movieThis();
} else if (userChoice == "spotify-this-song") {
    spotifyThisSong();
} else if (userChoice == "concert-this") {
    concertThis();
}
}

cases();


