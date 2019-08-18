# liri-node-app

**Creator**: `Abdullah Bayindir`

## About the app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

#### Parameters you shold be using to get data

*concert-this*
This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal

    node liri.js concert-this <artist/band name>
<img src = "../../../concert-this.png">

*spotify-this-song*
This will show the information about the song, artist ,album name and a link to the song in your terminal/bash window
 
    node liri.js spotify-this-song <song name>
<img src="../../../spotify-this-song.png">
*movie-this*
This will show the information about the movie in your terminal/bash window

     node liri.js movie-this <movie name>
<img src= "../../../movie-this.png>

*do-what-it-says*
LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     node liri.js do-what-it-says
<img src="../../../dowhatitsays.png" >
