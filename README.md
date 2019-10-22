# Liri-node-app  
![image](https://user-images.githubusercontent.com/52920074/67142936-3b61d800-f234-11e9-8fb9-c756eefb571f.png)

## Description:

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Liri Available functions:

* concert-this 
* spotify-this-song
* movie-this
* do-what it says

# Technologies Utilized

* [Node.js](https://nodejs.org/en/)

* [NPM packages](https://www.npmjs.com)

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

* [Spotify API](https://developer.spotify.com/dashboard/login)

* [OMDB API](http://www.omdbapi.com)

* [Bands in Town API](https://artists.bandsintown.com/support/bandsintown-api)



# Setup

1. Clone the repository

2. Run npm install, and the following packages should be installed:

```
Node-Spotify-API

Axios : This module will be used to get the IMDB and BandsInTown API data

Moment

DotEnv
```

3. Create a .env file in the same directory as the rest of the files. In the .env file should be:

```
'Spotify API keys'

'SPOTIFY_ID=your-spotify-ID-here'

'SPOTIFY_SECRET=your-spotify-secret-here'
```

# Running the following commands in your terminal will do the following:

```
node liri.js concert-this 'concert or band name'
```

This will show the following information about each event to your terminal/bash window:

* Name of the Venue

* Location of the Venue

* Date of the Event

![concert](https://user-images.githubusercontent.com/52920074/67254562-b3eeb180-f44b-11e9-8cae-d5e74feb44d7.gif)

```
node liri spotify-this-song 'song name'
```

This will show the following about the song in your terminal/bash window:

* Artist(s)

* Song Name

* Album of the Song

* Song Preview Link

![spotify](https://user-images.githubusercontent.com/52920074/67254553-ab967680-f44b-11e9-8b07-cafe56332d10.gif)

If no song is provided then the song "The Sign" will be searched instead

![nospotify](https://user-images.githubusercontent.com/52920074/67255458-2bbedb00-f450-11e9-9810-40b958a90353.gif)

```
node liri.js movie-this 'movie name'
```

This will output the following information to your terminal/bash window:

* Title of the Movie

* Year the Movie was Released

* The IMDB Rating

* The Rotten Tomatoes Rating

* Country the Movie was made in

* Language the Movie is in

* Plot of the Movie

* Actors in the Movie

![movie](https://user-images.githubusercontent.com/52920074/67254565-b6510b80-f44b-11e9-8e8f-a12d85c4b89a.gif)

If no movie is provided then the movie "Mr.Nobody" will be searched instead

![nomovie](https://user-images.githubusercontent.com/52920074/67255463-324d5280-f450-11e9-8a90-3b18d925b37e.gif)

```
node liri.js do-what-it-says
```

The program will take the text inside of random.txt and use it to call the first command with the second part as it's parameter

Currently in random.txt, the following text is there:

```
spotify-this-song,"I Want it That Way"
```

This would call the spotify-this-song function and pass in "I Want it That Way" as the song.

![do](https://user-images.githubusercontent.com/52920074/67254568-b8b36580-f44b-11e9-8e4a-847d50fb4ee2.gif)



