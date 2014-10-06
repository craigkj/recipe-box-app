// Set up the express app
var express = require('express');
var app     = express();
var morgan = require('morgan'); 			// log requests to the console
var bodyParser = require('body-parser'); 	// pull information from HTML POST
var methodOverride = require('method-override'); // simulate DELETE and PUT

// Create recipeService to manage recipe retrieval and storage
var recipeService = require('./server/services/recipeService');
var userService = require('./server/services/userService');

var port = process.env.PORT || 8081;

  // Setup server config
	app.use(express.static(__dirname + '/app')); // Location of static (FE) files
	app.use(morgan('dev')); // Additional console logging
	app.use(bodyParser.urlencoded({'extended':'true'})); //parsing
	app.use(bodyParser.json()); // parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parsing
	app.use(methodOverride());

	// Routes ---------------------------------------------------------------------

  // API Home Page
	app.get('/api', function(req, res) {
			res.json({ message: 'Recipe Box API home' });
	});

  // Get all recipes
  app.get('/api/getRecipes', function(req, res) {
      res.json(recipeService.getRecipes());
  });

  // Search for recipe by name
  app.get('/api/getRecipeByName/*', function(req, res) {
      // need more robust way to extract parameters but for now this will do:
      var name = req.url.substring(21); // get the value after the '/'
      res.json(recipeService.getRecipeByName(name));
  });

  // Search for recipe by name
  app.get('/api/getRecipeById/*', function(req, res) {
      // need more robust way to extract parameters but for now this will do:
      var name = req.url.substring(19); // get the value after the '/'
      res.json(recipeService.getRecipeById(name));
  });

  // Create sample recipes. TODO: Remove
  app.get('/api/createSampleRecipes', function(req, res) {
    recipeService.createRecipeList();
    res.json({'status':'Ok'});
  });

  // Retrieve user overview data
  app.get('/api/getUsers', function(req, res) {
    res.json(userService.getUsers());
  });

  app.get('/api/createSampleUsers', function(req, res) {
    userService.createSampleUsers();
    res.json({'status':'Ok'})
  });

  // Retrieve user by username
  app.get('/api/getUserByUsername/*', function(req, res) {
    var username = req.url.substring(23); // get the value after the '/'
    console.log(username);
    res.json(userService.getUserByUsername(username));
  });

  app.get('/api/getUserFavourites/*', function(req, res) {
    var username = req.url.substring(23); // get the value after the '/'
    res.json(userService.getUserFavourites(username));
  });

  // FE RoutingApplication -----------------------------------------------------

  // Returns the homepage - Angular takes care of all FE routing from here
	app.get('*', function(req, res) {
		res.sendfile('./app/index.html'); // load the index file (AngularJS)
	});

 // start
//app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/app/views');
//app.set('view engine', 'html');
//app.use(express.static(path.join(__dirname, 'app')));
//app.use(app.router);

// Startup
// -----------------------------------------------------------------------------
app.listen(port);
console.log('RecipeBox running on port 8081');
exports = module.exports = app;
