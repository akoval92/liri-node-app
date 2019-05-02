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
    
    
    function  MovieThis(title, year, imdb, rotten, language, plot, actors) {
        var movieInfo = $(this).text('movie-this')
        
        var queryURL = "http://www.omdbapi.com/?i=tt3896198" +
        
        movieInfo + "&apikey=2f1e40d4";


        this.title = title;
        this.year = year;
        this.imdb = imdb;
        this.rotten = rotten;
        this.language = language;
        this.plot = plot;
        this.actors = actors;

        
        axios({
            url: queryURL,
            method: 'get'
          })

          
          MovieThis.prototype.showMovie = function() {
              if ('movie-this') {
                  
                  console.log('Title: ' + this.title + '\nYear: ' + this.year + 
                  '\nIMDB Rating: ' + this.imdb + '\nRotten Tomatoes Rating: ' 
                  + this.rotten + '\nLanguage' + this.language + '\nPlot' + this.plot +
                  '\nActors' + this.actors)
                } else {
                    console.log('There was an error...idk why')
                }
            };
            
        }
    