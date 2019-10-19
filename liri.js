//add code to read and set any environment variables with the dotenv package
require("dotenv").config();

//Code is required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

//Using the Spotify api and getting the key from keys.js
var Spotify = require("node-spotify-api");

//You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);

// Load the fs package to read and write
var fs = require("fs");

//To get the information from the APIs for movie and concert-this
var axios = require("axios");

//Both required to use moment for node
var moment = require("moment");

// Take two arguments.
// The first will be the command (i.e. "concert-this", "spotify-this-song", "movie-this", "do-what-it-says")
var command = process.argv[2];
// The second will be the userinput 
var search = process.argv.splice(3).join(" ");

switch (command) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

//This will search the Bands in Town Artist Events API
function concertThis(search) {
    var artist = search;
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    // This line is just to help us debug against the actual URL.
    //console.log(queryUrl);
    // Then create a request with axios to the queryUrl
    axios.get(queryUrl).then(
        function (response) {

            // console.log(response);
            console.log("----------------ARTIST SEARCH LOG-------------------------");
            for (var i = 0; i < response.data.length; i++) {
                console.log("Name of the venue: " + response.data[i].venue.name);
                console.log("Venue Location: " + response.data[i].venue.city);
                console.log("Date of the Event: " + moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format("MM-DD-YYYY", "HH:mm:ss"));

                //adds text to log.txt
                fs.appendFileSync("log.txt", "\r\n" + "------------------------Artist Search Log -------------------------" + "\r\n", "utf8");
                fs.appendFileSync("log.txt", "\r\n" + "Name of the venue: " + response.data[i].venue.name + "\r\n", "utf8");
                fs.appendFileSync("log.txt", "\r\n" + "Venue Location: " + response.data[i].venue.city + "\r\n", "utf8");
                fs.appendFileSync("log.txt", "\r\n" + "Date of the Event: " + moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format("MM-DD-YYYY", "HH:mm:ss") + "\r\n", "utf8");
                console.log("-----------------------------------------");

            }
        }).catch(function (error) {
            console.log(error);
        });
}

//This will search the movies in OMDB API
function movieThis(search) {
    var movieName = search;
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    if (!movieName) {
        movieName = "Mr.Nobody";
    }
    // This line is just to help us debug against the actual URL.
    //console.log(queryUrl);

    console.log("------------MOVIE SEARCH LOG-----------------------------");
    // Then create a request with axios to the queryUrl
    axios.get(queryUrl).then(
        function (response) {

            //console.log(response.data)
            console.log("Title of the movie: " + response.data.Title);
            console.log("Year the movie came out: " + response.data.Year);
            console.log("IMDB Rating of the movie: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language of the movie: " + response.data.Language);
            console.log("Plot of the movie: " + response.data.Plot);
            console.log("Actors in the movie: " + response.data.Actors);

            //adds text to log.txt
            fs.appendFileSync("log.txt", "\r\n" + "Movie Search Log" + "\r\n", "utf8");
            fs.appendFileSync("log.txt", "\r\n" + "Title of the movie: " + response.data.Title + "\r\n", "utf8");
            fs.appendFileSync("log.txt", "\r\n" + "Year the movie came out: " + response.data.Year + "\r\n", "utf8");
            fs.appendFileSync("log.txt", "\r\n" + "IMDB Rating of the movie: " + response.data.imdbRating + "\r\n", "utf8");
            fs.appendFileSync("log.txt", "\r\n" + "Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value + "\r\n", "utf8");
            fs.appendFileSync("log.txt", "\r\n" + "Country where the movie was produced: " + response.data.Country + "\r\n", "utf8");
            fs.appendFileSync("log.txt", "\r\n" + "Language of the movie: " + response.data.Language + "\r\n", "utf8");
            fs.appendFileSync("log.txt", "\r\n" + "Plot of the movie: " + response.data.Plot + "\r\n", "utf8");
            fs.appendFileSync("log.txt", "\r\n" + "Actors in the movie: " + response.data.Actors + "\r\n", "utf8");


        }).catch(function (error) {
            console.log(error);
        });
}

//This will search for the song in spotify api
function spotifyThisSong() {
    var song = search;
    if (!song) {
        song = "The Sign Ace of Base"
    }
    spotify.search({ type: "track", query: song }, function (err, data) {
        if (err) {
            return console.log(err);
        }

        //console.log(data.tracks.items[0]);
        console.log("\n---------------------\nSong Name :" + data.tracks.items[0].name);
        console.log("Artist(s) Name :" + data.tracks.items[0].artists[0].name);
        console.log("Album Name :" + data.tracks.items[0].album.name);
        console.log("Preview URL :" + data.tracks.items[0].preview_url + "\n-----------------\n");

        //adds text to log.txt
        fs.appendFileSync("log.txt", "\r\n" + "Song Search Log" + "\r\n", "utf8");
        fs.appendFileSync("log.txt", "\r\n" + "Song Name :" + data.tracks.items[0].name + "\r\n", "utf8");
        fs.appendFileSync("log.txt", "\r\n" + "Artist(s) Name :" + data.tracks.items[0].artists[0].name + "\r\n", "utf8");
        fs.appendFileSync("log.txt", "\r\n" + "Album Name :" + data.tracks.items[0].album.name + "\r\n", "utf8");
        fs.appendFileSync("log.txt", "\r\n" + "Preview URL :" + data.tracks.items[0].preview_url + "\r\n", "utf8");

    }).catch(function (error) {
        console.log(error);
    });
}

