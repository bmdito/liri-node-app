require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");


var spotify = new Spotify(keys.spotify);


var request = process.argv[2];
var input = process.argv[3];




 
function SpotSearch(){
 
spotify.search({ type: 'track', query: input, limit:1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
  // console.log(JSON.stringify(data)); 
  // console.log(data.tracks);
  // // console.log(data.items.album_type);
  // console.log(data.tracks.id);
  var quick = data.tracks.items;
  console.log("Artist: "+quick[0].artists[0].name)
  console.log("Song Name: "+quick[0].name);
  console.log("Check out a Preview: "+JSON.stringify(quick[0].external_urls));
  console.log("Album: "+quick[0].album.name);
  
  
  });
}



console.log(input);


function moviethis(input){
var url = "http://www.omdbapi.com/?t="+input+"&y=&plot=short&apikey=13915721";
// Then run a request with axios to the OMDB API with the movie specified
axios.get(url)
.then(
  function(response) {
    console.log(response);
    
    }
  );
}

if(request == "spotify-this"){
  SpotSearch();
} else if(request =="movie-this"){
  moviethis(input);
}







