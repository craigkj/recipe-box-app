// Services for the Angular JS implementation.

// Service to provide user login functionality
// Currently VERY basic and with no authentication. (Auth to be SS)
recipeApp.factory( 'UserLoginService', [ '$http', function($http) {
  var currentUser = {};
  var isLoggedIn = false;

  return {
    login: function(username, onSuccess, onFailure) {

      $http.get('/api/getUserByUsername/' + username)
        .success(function(data) {
          currentUser = data;
          onSuccess(data);
        })
        .error(function(data) {
          console.log('Could not log in user: ' + data);
          currentUser = {};
          onFailure(data);
        });

    },
    isLoggedIn: function() {
      return isLoggedIn;
    },
    getCurrentUser: function() {
      return currentUser;
    }
  };
}]);
