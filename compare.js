if (validInput) {
    spotifyUrl();
}

function spotifyUrl() {
   spotifyClient.search({type:"track", query: searchSong}, function (err, data){
    //    if (err){
    //        console.log(err)
    //    } else {
    //     //    console.log(data.tracks.items[0].album.artists[0].name)
    //         // console.log(data.tracks.items[0].artists[0].name);
    //     }
    console.log(spotifyClient)
})

}

findSpotifyInfo(data)

function findSpotifyInfo(spotifyUrl) {
    axios.get(spotifyUrl).then(function(response){
                console.log(response.data)
        
                displaySpotifyInfo(response.data);
            })
            
        }
        

function displaySpotifyInfo (result) {                

     console.log("Artist: " + result.tracks.items[0].artists[0].name);     
    //  console.log(\n"Song Name: " +);
    //  console.log(\n"Preview Song" +);                   
    //  console.log(\n"Album: " +);     
}