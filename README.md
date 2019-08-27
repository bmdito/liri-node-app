# liri-node-app
LIRI Bot


Overview

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.


What LIRI Can do


LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.

To retrieve the data that will power this app, you'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.



Node-Spotify-API

Axios


You'll use Axios to grab data from the OMDB API and the Bands In Town API



Moment
DotEnv








Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:


# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret


This file will be used by the dotenv package to set what are known as environment variables to the global process.env object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github — keeping our API key information private.
If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to work.



