require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');
var spotify = new Spotify(keys.spotify);


var request = process.argv[2];
var input = process.argv[3];


function bandsTown(){

var artist = "";
bandArg = process.argv;
if(input===undefined){
  artist = "weird Al"
} else {
  for(i=3; i<bandArg.length; i++){
    artist += bandArg[i];
    // console.log(artist);
  }
}

axios.get("https://rest.bandsintown.com/artists/" + artist +"/events?app_id=codingbootcamp").then(
  function(response) {
    quick = response.data[0];
    // console.log("You searched for: "+ artist);
    console.log("Venue: "+quick.venue.name);
    console.log("Location: "+quick.venue.city);
    
    console.log(moment(quick.datetime).format('MM-DD-YY'));

    }
  );
}

 
function SpotSearch(){
var songArg = process.argv;
input = input+"+";
if(input===undefined){
  input ="The Sign Ace of Base";
} else {
  for(var i=4; i < songArg.length; i++){
    input += songArg[i]+"+";
  }
} 
 
spotify.search({ type: 'track', query: input, limit:1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
  // console.log(JSON.stringify(data)); 
  // console.log(data.tracks);
  // // console.log(data.items.album_type);
  // console.log(data.tracks.id);
  console.log(input);
  var quick = data.tracks.items;
  console.log("Artist: "+quick[0].artists[0].name)
  console.log("Song Name: "+quick[0].name);
  console.log("Check out a Preview: "+JSON.stringify(quick[0].external_urls));
  console.log("Album: "+quick[0].album.name);
  
  
  });
}






function moviethis(){
var movieName = '';
var theArg = process.argv;

if(input===undefined){
// if no movie name is entered
  movieName = 'Mr.'+"+"+"Nobody";  
}  else {
// otherwise this captures movie names with 1 or more words
  for(i=3; i<theArg.length; i++){
      movieName += theArg[i]+"+";
  }
  
}

 
var url = "http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&apikey=trilogy";
// Then run a request with axios to the OMDB API with the movie specified
axios.get(url)
.then(
  function(response) {
    
    console.log("Title: "+response.data.Title);
    console.log("Year: "+response.data.Year);
    console.log("IMDB Rating: "+response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: "+response.data.Ratings[0].Value);
    console.log("Country of Origin: "+response.data.Country);
    console.log("Language: "+response.data.Language);
    console.log("Plot: "+response.data.Plot);
    console.log("Actors :"+response.data.Actors);
    }
  );
}

function whatItSays(){

  fs.readFile("random.txt", "utf8", function(error,data){

    if(error){
      return console.log(error);
    }

    var theCommand = data.split(',');
   

    request = theCommand[0];
    input = theCommand[1];

    

    commandCheck();

  });
}

function commandCheck(){

if(request == "spotify-this-song"){
  SpotSearch();
}else if(request === 'movie-this'){
  moviethis();
} else if(request === 'concert-this'){
  bandsTown();

}else if (request === 'do-what-it-says'){
  whatItSays();
} else {
  console.log("sorry, you used an invalid command!");
}

}

commandCheck();












