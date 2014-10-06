recipe-box-app
==============

Recipe Box

Recipe Box is a simple web application written in AngularJS and NodeJS (Express)

Installation

As long as you have npm and bower installed this is a fairly straightforward process:

git clone the repo

cd recipes
npm install
cd app
bower install
node ../server.js

And away you go.

A pair of endpoints to populate the system with sample data have been left in place.

These can be found at:

http://localhost:8081/api/createSampleRecipes
http://localhost:8081/api/createSampleUsers

Hitting these in your browser should allow you to try out the app with and 
without data in place.

Tech Stack & Architecture

Loosely based on angular-express-seed architecture.

'Back End'

Node and express(4) are used to provide a simple http server which hosts the
app, and to provide a set of api endpoints to feed data to the FE.

These endpoints all sit under /api/ to differentiate them from the angular powered 'FE' elements below.

The back-end handles the initial routing in server.js, however if a front-end
resource is being requested, then it is handed to index.html where angular
(below) takes care of further routing via angular-ui-router.

'Front End'

Utilizes AngularJS to provide additional FE functionality. FE routing is provided
by angular-ui-router which gives the app a 'single page app' feel without page
reloads and having to run to the server in between.

Other than that its just HTML(5) and CSS(SASS). Pure.css has been used to provide some basic styling, but no FE
templating service has been implemented due to the simplicity of the app. If this was to be extended then
it would be advised to make use of a templating service (Jade or Moustache) to handle html generation. Express offers good Jade integration 'out of the box' so I would suggest starting there.

Data store

Data is currently held im memory for simplicity, however this is evidently not
suitable for a production system, so the user and recipe services in
/server/service should be replace or extends to make use of daos (in the case of
  as database) or cloud-storage client should AWS S3 or similar be used.

Small provisions have been made with a MongoDB instance in mind although any appropriate storage mechanism could be used.

Data Model
The data model is currently combined into a single json object for each recipe

Next step would be to split this into multiple to allow for possible many-many or
many-one relationships which may be more efficient (shared images or multiple images per recipe)

User Management
Some work has been carried out to provide 'user login' functionality, however this is incomplete.
The endpoints have been created (can be see: /server/services/userService.js).

The following endpoints can be hit to try this out:

http://localhost:8081/api/createSampleUsers
http://localhost:8081/api/getUsers
http://localhost:8081/api/getUserByUsername
http://localhost:8081/api/getUserFavourites/craig

Future Extensions

Implementation of user features.
Selenium for browser UI testing.
Minification (& concatenation) of CSS and JS. Probably via Grunt.
Addition of 'proper' data store (see above).

