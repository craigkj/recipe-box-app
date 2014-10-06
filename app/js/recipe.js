// create the app
var recipeApp = angular.module('recipeApp', ['ui.router']);

// Set up the routing for the 'single page app'
recipeApp.config(function($stateProvider, $urlRouterProvider) {

    // Set default route to homepage
    $urlRouterProvider.otherwise('/');

    $stateProvider
       // create the homepage route
       .state('home', {
            url: '/',
            templateUrl: '../views/partials/home.html'
        })

        // create the state for the recipe dynamic page (url param)
        .state('recipe', {
          url : '/recipe/{recipeName}',
          templateUrl: '../views/partials/recipe.html'
        });
});

// Retrieves recipe by ID
recipeApp.controller("recipeCtrl", ['$scope', '$http', '$stateParams', 'UserLoginService', function($scope, $http, $stateParams, UserLoginService) {

   var recipeName = $stateParams.recipeName;

   $http.get('/api/getRecipeById/' + recipeName)
     .success(function(data) {
       $scope.currentRecipe = data;
       console.log('Recipe retrieved: ' + data);
     })
     .error(function(data) {
       console.log('Error: ' + data);
       $scope.currentRecipe = {};
     });

}]);

// Retrieves the list of recipes from the api
recipeApp.controller("recipeListCtrl", ['$scope', '$http', 'UserLoginService', function($scope, $http, UserLoginService) {

  $scope.$watch(UserLoginService.currentUser, function() {
    console.log('hey, myVar has changed!');
  });

  $http.get('/api/getRecipes')
    .success(function(data) {
      $scope.recipes = data;
      console.log('Recipes Retrieved: ' + data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
      $scope.recipes = [];
    });
}]);

// Handles user login
// Note - Implementation is incomplete at present. TODO: Complete
recipeApp.controller("userLoginCtrl", ['$scope', 'UserLoginService', function($scope, UserLoginService) {

  // so we know when a user is logged in within this scope
  $scope.currentUser = {};

  $scope.login = function(username) {
    var success = function(data) {
      $scope.currentUser = data;
    }
    var failure = function(data){
      $scope.currentUser = {};
    }
    UserLoginService.login(username, success, failure);
  };

}]);
