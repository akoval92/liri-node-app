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
    

function movieThis(){


var userChoice = process.argv[2];
var seachMovie = process.argv.slice(3).join('+');
var validInput = checkUserInput()

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



function movieUrl() {
    var url = "http://www.omdbapi.com" + userChoice + "/?i=tt3896198" + seachMovie +
    "&apikey=2f1e40d4"

    findMovieInfo(url)
}


function findMovieInfo(url) {
    axios.get(url).then(function(data){
        // console.log(data.data[0])       1. find layers of data with console   p.s. data.data[0] going into all the layers with out having to write out full notation everytime.
        console.log(data);
        // displayShow(data);
    })

}

// function displayShow (result) {                 //displayShow(could.be.anything.grabbing data)
//     const data = result.data

    //  console.log("Title: " + data.title);      //2. comment out this while searching for data
    //  console.log(\n"Release Year: " +);
    //  console.log(\n"IMDB Rating: " +);                   //3. dot/bracket notation to find info
    //  console.log(\n"Rotten Tomatoes Rating: " +);
    //  console.log(\n"Produced In: " +);
    //  console.log(\n"Language: " +);
    //  console.log(\n"Plot: " +);
    //  console.log(\n"Actors: " +);
     
}
// }

    






















switch (userChoice) {
    case (userChoice == 'movie-this'):
      movieThis()
    break;
    case (userChoice == 'spotify-this-song'):
      SpOTiFyFuNcTiOn()
    break;
    case (userChoice == 'concert-this'):
      CoNcErTfUnCtIoN()
    break;
    case (userChoice == 'do-what-it-says'):
      wHaTiTsAySFuNcTiOn()
    break;



}
