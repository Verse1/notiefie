# Notiefi

[![CircleCI](https://circleci.com/gh/Verse1/notiefie/tree/master.svg?style=svg)](https://circleci.com/gh/Verse1/notiefie/tree/master)

## Notiefi Vision Statement

For the student who wants to be better prepared for future or current enrollment, Notiefi is an app that allows students from the same university to upload notes for other current or future students in their classes. 

The Themes for the MVP of Notiefi are as follows:
- A user to post notes
- A user to access notes
- A user to browse through classes

The Features for the MVP of Notiefi are as follows:
- A profile page for each user that contains their name, school, and bio. A user will also be able to see the notes that they have saved from other students, as well as the notes that they have posted themselves. 
- A home page with all of a users saved classes.
- A classes page, where a user will be able to search through and save any classes from their university.
- A class page, which contains the posted notes for each class organized by number of likes. 
- A Note page, which will contain attachments related to the notes and display the likes and comments on that specific posted note. 
- The ability to search through any class on the home page and classes page.
- A notifications page, for a user to see if any other users have liked or commented on their posted note. 
- The ability for a user to post their notes onto a specific class page. 

# Building and Testing The Project
## Initial setup
1. Clone the repository onto your local machine with ```git clone```
2. Go into the directory with ```cd```

## Frontend 
1. Go into the ```front-end``` directory
2. Install all front-end dependencies with ```npm install```
3. Launch the front-end with ```npm start``` after building with ```npm run build``` or start it with dev mode with ```npm run dev```
4. Access the site using a browser at ```localhost:3000```

## Backend 
1. Go into the ```back-end``` directory
2. Install back-end dependencies with ```npm install```
3. Launch the back-end with ```npm start``` or start it with dev mode with ```npm run dev```


## Docker

There exists docker branch so rather than building the project with ```npm run build``` and ```npm run dev``` you can build and run the project with docker compose. Check out the docker branch and use ```docker-compose up``` to run the project. 

**Note:** You will need to have docker and docker-compose installed on your machine and have the .env file in the root directory of the project which should contain the JWT secret and Mongo URI.