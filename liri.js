require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment")
var fs = require("fs")

var input1 = process.argv[2]
var input2 = process.argv.slice(3).join(" ")

function spotifyNode(song) {
  var spotify = new Spotify(keys.spotify);
  var song = input2;
  if (song === undefined || song === "") {
    song = "The Sign"
  }
  spotify.search({ type: 'track', query: song }, function (err, music) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("The artist is: " + music.tracks.items[0].album.artists[0].name);
    console.log("Name of the song you searched: " + music.tracks.items[0].name);
    console.log("Spotify link of the song: " + music.tracks.items[0].external_urls.spotify);
    console.log("The album is: " + music.tracks.items[0].album.name);
  });
}
// spotifyNode()

function omdbNode(movieName) {
  var movieName = input2;
  if (movieName === undefined || movieName === "") {
    movieName = "Mr Nobody"
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl).then(function (concert) {
    console.log("The movie title: " + concert.data.Title)
    console.log("The year of the movie: " + concert.data.Year)
    console.log("Imdb rating: " + concert.data.imdbRating)
    console.log("Rotten Tomatoes rating: " + concert.data.Ratings[1].Value)
    console.log("Country: " + concert.data.Country)
    console.log("Language: " + concert.data.Language)
    console.log("Plot: " + concert.data.Plot)
    console.log("Actors: " + concert.data.Actors)
  })
}
// omdbNode()

function bandsInTownNode() {
  var artist = input2;
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
  axios.get(queryUrl).then(function (concert) {
    for (i = 0; i < concert.data.length; i++) {
      console.log("Concert " + (i + 1) + ": " + concert.data[i].venue.name)
      console.log("Location: " + concert.data[i].venue.city + " " + concert.data[i].venue.region + ", " + concert.data[i].venue.country)
      console.log("Date: " + moment(concert.data[i].datetime).format("MMM DD YYYY"))
      console.log("")
    }
  })
}
// bandsInTownNode()

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    // console.log(data)
    

    var dataArray = data.split(",")

    

    run(dataArray[0], dataArray[1])
  })
}

function run() {
  switch (input1) {
    case "movie-this":
      omdbNode();
      break;

    case "spotify-this-song":
      spotifyNode();
      break;

    case "concert-this":
      bandsInTownNode();
      break;

    case "do-what-it-says":
      doWhatItSays();
      break;
  }
}
run(input1, input2)