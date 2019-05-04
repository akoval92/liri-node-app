// var dotenv = require("dotenv").config();

// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

// var moment = require('moment');
// moment().format();

var axios = require("axios");


// axios.get("http://www.artists.bandsintown.com/bandsintown-api").then(       //.get is the method ___---for concert section
//   function(response) {
    //     console.log(response.   /*......*/);
    //   }
    // );

// concert-this/spotify-this-song/movie-this/do-what-it-says commands
    




var userChoice = process.argv[2];
var seachMovie = process.argv.slice(4).join('+');
var validInput = checkUserInput()
// var searchSpotify =

  if (validInput) {
    movieUrl();
}

function checkUserInput() {
    if(userChoice =="movie-this" || userChoice == "spotify-this-song"
      || userChoice == "concert-this" || userChoice == "do-what-it-says"){
        return true;
    } else {
        return false;
    }
}

// Movie**

function movieUrl() {
    var url = "http://www.omdbapi.com/?apikey=2f1e40d4&t=" + seachMovie 
    console.log(url)

    findMovieInfo(url)
}



function findMovieInfo(url) {
    axios.get(url).then(function(response){
        // console.log(data.data.Title);
        displayMovieInfo(response.data);
    })

}

function displayMovieInfo (result) {                
   

     console.log("Title: " + result.Title);     
     console.log("\nRelease Year: " + result.Year);
     console.log("\nIMDB Rating: " + result.imdbRating);                   
     console.log("\nRotten Tomatoes Rating: " + result.Ratings[1].Value);
     console.log("\nProduced In: " + result.Country);
     console.log("\nLanguage: " + result.Language);
     console.log("\nPlot: " + result.Plot);
     console.log("\nActors: " + result.Actors);
     
}

// End Movie***********




// Spotify**


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

// // End Spotify******



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













// switch (userChoice) {
//     case (userChoice == 'movie-this'):
//       findMovieInfo()
//     break;
//     case (userChoice == 'spotify-this-song'):
//       displaySpotifyInfo()
//     break;
//     case (userChoice == 'concert-this'):
//       CoNcErTfUnCtIoN()
//     break;
//     case (userChoice == 'do-what-it-says'):
//       wHaTiTsAySFuNcTiOn()
//     break;



// }
