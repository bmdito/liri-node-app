# liri-node-app
LIRI
Language Interpretation and Recognition Interface
Node app that retrieves movie, song, and band data using Axios, as well as Bands in Town, Spotify, and OMDB API's

Usage
BEFORE BEGINNING you will have to save your own Spotify API credentials into a .env file.



This app allows you to search any movie using the OMDb API and retrieve information. for example, to find out about The Matrix you would simply enter:
node liri movie-this The Matrix

![movie-this](https://user-images.githubusercontent.com/44068902/63816524-60e5fb80-c8ed-11e9-8846-03c8b54e9679.gif)


It allows the user to use spotify's API to return information for a song. for example to find out about the 90's classic "Jump Around" one would enter:
node liri spotify-this-song

![spotify](https://user-images.githubusercontent.com/44068902/63817691-50844f80-c8f2-11e9-9601-fd7929949950.gif)

Additionally you can look up the next upcoming concert info. For example, I'm jazzed to know when Ariana grande's next show is.
just enter:
node liri concert-this Ariana Grande

![concert](https://user-images.githubusercontent.com/44068902/63817799-cbe60100-c8f2-11e9-93f6-35056b326b24.gif)


You can also access whatever data is in the random.txt file to output whatever it seeks to do by the command:
 node liri do-what-it-says

![whatitsays](https://user-images.githubusercontent.com/44068902/63817939-7f4ef580-c8f3-11e9-991b-e2bbef3cdb62.gif)

























